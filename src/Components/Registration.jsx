import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  const navigate = useNavigate();
  const { createNewUser, ProfileUpdate } = useContext(AuthContext);

  // State to manage form data and errors
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, photo, email, password } = formData;

    // Password validation
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 6 characters, contain an uppercase letter, and a lowercase letter."
      );
      return;
    }

    setPasswordError("");

    try {
      await createNewUser(email, password);
      await ProfileUpdate(name, photo);

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  // Validate password strength
  const validatePassword = (password) => {
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const lengthRegex = /.{6,}/;

    return (
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password) &&
      lengthRegex.test(password)
    );
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 pt-10">
      <Helmet>
        <title>Registration | BD Career</title>
        <meta
          name="description"
          content="Get in touch with BD Career. Contact us for inquiries or support."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Register your account
        </h2>
        <form onSubmit={handleSignUp}>
          {["name", "photo", "email", "password"].map((field, index) => (
            <div className="mb-4" key={index}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "password" && showPassword ? "text" : field}
                name={field}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {field === "password" && (
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-9 text-gray-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              )}
            </div>
          ))}

          {/* Display password error if exists */}
          {passwordError && (
            <p className="text-sm text-red-500 mb-4">{passwordError}</p>
          )}

          {/* Terms and conditions checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              required
              name="terms"
              className="w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="terms"
              className="ml-2 text-sm text-gray-600 cursor-pointer"
            >
              Accept{" "}
              <span className="font-medium text-gray-800">
                Terms & Conditions
              </span>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
