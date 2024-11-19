import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const navigate = useNavigate();
  const { createNewUser, ProfileUpdate, loginWithGoogle } =
    useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle().then(() => {
      navigate(location.state?.from?.pathname || "/");
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, photo, email, password } = formData;

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
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              value={formData.photo}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {passwordError && (
            <p className="text-sm text-red-500 mb-4">{passwordError}</p>
          )}

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

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <span className="text-gray-600">SignUp with</span>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn rounded-lg flex items-center space-x-2 px-4 py-2 border border-gray-300 shadow-sm hover:bg-gray-100"
            aria-label="Sign in with Google"
          >
            <FcGoogle className="w-6 h-6" />
            <span className="text-gray-700 font-medium">Google</span>
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-500">
          Have An Account?{" "}
          <Link
            to="/login"
            className="text-green-500 font-medium hover:underline"
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
