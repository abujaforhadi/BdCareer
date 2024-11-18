import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    const handleUpdateProfile = async () => {
        if (!user) return;

        try {
            await updateProfile(user, {
                displayName: displayName.trim(),
                photoURL: photoURL.trim(),
            });
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile.');
        }
    };

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    return (
        <div className="flex justify-center py-10 px-5">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
                {user?.photoURL && (
                    <div className="flex justify-center mb-4">
                        <img
                            src={user.photoURL}
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full border-2 border-gray-300"
                        />
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="text"
                        value={user?.email || ''}
                        disabled
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                    <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        placeholder="Enter photo URL"
                        className="input input-bordered w-full"
                    />
                </div>
                <button
                    onClick={handleUpdateProfile}
                    className="btn btn-primary w-full mt-4"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Profile;
