import React, { useState, createContext, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider, // Import this
} from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error during registration:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const UpdateProfile = async (displayName, photoURL) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, { displayName, photoURL });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      console.error("Error resetting password:", error.message);
      alert(`Failed to send password reset email: ${error.message}`);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log(userCredential);
    } catch (error) {
      console.error("Error during login:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Google Login Function
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();  // Create Google provider instance
    try {
      const result = await signInWithPopup(auth, provider); // Sign in with popup
      const user = result.user; // The signed-in user
      setUser(user);
      console.log("Google login successful:", user);
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      alert("Sign-out successful.");
    } catch (error) {
      console.error("Error during sign-out:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    login,
    logout,
    loading,
    resetPassword,
    UpdateProfile,
    loginWithGoogle, // Add the google login function to context
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
