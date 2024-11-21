import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const { login,  loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then(() => {
        setIsLoading(false);
        navigate(location.state?.from?.pathname || "/");
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Login failed. Please check your credentials.");
      });
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    loginWithGoogle()
      .then(() => {
        setIsLoading(false);
        navigate(location.state?.from?.pathname || "/");
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Google login failed. Try again later.");
      });
  };

  return (
    <div className="hero py-10 ">
      <Helmet>
        <title>Login | BD Career</title>
        <meta
          name="description"
          content="Login to access your BD Career account and explore opportunities."
        />
        <meta property="og:title" content="Login | BD Career" />
        <meta
          property="og:description"
          content="Login to access your BD Career account."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse gap-4">
        <div className="flex-1">
          <div className="grid text-center  md:px-8">
            <h1 className="text-5xl text-center font-bold">
              Welcome Back to <span className="text-red-600">Bd</span>
              <span className="text-green-500">Career</span>
            </h1>
            <p className="py-6">
              Sign in to access personalized career guidance and take the next
              step toward your dream job.
            </p>
          </div>
        </div>
        <div className=" flex-1">
          <div className="">
            <div className=" p-4 rounded-lg  w-full ">
              <h2 className=" hidden md:block text-2xl font-bold text-gray-800 text-center mb-6">
                Sign in
              </h2>

              <form onSubmit={handleSignIn}>
                {/* Email Field */}
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
                    required
                    placeholder="Enter your email address"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Password Field */}
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
                    required
                    placeholder="Enter your password"
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

                {/* Forgot Password */}
                <div className="mb-4 text-center">
                  <Link to="/forget"
                    type="button"
                    
                    className="text-sm font-medium text-indigo-500 hover:underline focus:outline-none"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </form>

              {/* Google Login */}
              <div className="mt-4 flex justify-center items-center space-x-4">
                <span className="text-gray-600">Login with</span>
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className={`btn rounded-lg flex items-center space-x-2 px-4 py-2 border border-gray-300 shadow-sm ${
                    isLoading ? "cursor-wait" : "hover:bg-gray-100"
                  }`}
                  aria-label="Sign in with Google"
                  disabled={isLoading}
                >
                  <FcGoogle className="w-6 h-6" />
                  <span className="text-gray-700 font-medium">Google</span>
                </button>
              </div>

              {/* Register Link */}
              <p className="mt-4 text-sm text-center text-gray-500">
                Don’t Have An Account?{" "}
                <Link
                  to="/registration"
                  className="text-red-500 font-medium hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
