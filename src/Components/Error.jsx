import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegFrown } from "react-icons/fa"; // Import React Icons
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing effect
    });
  }, []);

  // Function to navigate back to home page
  const goHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center"
        data-aos="fade-up" // AOS fade-up animation
      >
        <div className="text-6xl text-red-500 mb-6">
          <FaRegFrown />
        </div>
        <h1 className="text-3xl font-semibold text-gray-700 mb-4">
          Oops! Something Went Wrong
        </h1>
        <p className="text-lg text-gray-500 mb-6">
          The page you're looking for does not exist or an error has occurred.
        </p>

        <button
          onClick={goHome}
          className="btn btn-primary w-full py-3 rounded-lg text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          data-aos="zoom-in" // AOS zoom-in animation
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
