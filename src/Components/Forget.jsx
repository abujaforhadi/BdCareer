import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
const Forget = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    try {
      await resetPassword(email); 
      setTimeout(() => {
        window.location.href = "https://mail.google.com"; 
      }, 500);
    } catch (error) {
      toast.error("Failed to send reset email. Please try again.");
    }
  };

  return (
    <div className="py-5">
      <div className="p-4 rounded-lg w-1/3 mx-auto">
        <h2 className="hidden md:block text-2xl font-bold text-gray-800 text-center mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forget;
