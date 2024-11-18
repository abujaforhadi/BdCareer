import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import hero from "../assets/hero.webp";

const Hero = () => {
  return (
    <div className="hero pt-5">
      <div className="hero-content flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold">
            Unlock Your Potential with Expert Guidance
          </h1>
          <p className="py-6">
            Gain insights from top industry professionals to help you navigate
            your career path and unlock your true potential
          </p>
          <Link
            to="/career"
            className="btn btn-outline bg-[#007BFF] text-white"
          >
            Explore Our Services <FaCircleArrowRight />
          </Link>
        </div>
        <img src={hero} alt="Hero" className="md:w-1/2" />
      </div>
    </div>
  );
};

export default Hero;
