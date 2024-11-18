import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero3 = () => {
  return (
    <div className="hero pt-10 pb-10 ">
      <div className="hero-content flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left space-y-5">
          <h1 className="text-5xl font-extrabold leading-tight">
            Discover Your True Potential
          </h1>
          <p className="py-4 text-lg">
            Take the first step towards your dream career. Our expert guidance
            and personalized resources will help you uncover your strengths and
            navigate the path to success with confidence.
          </p>
          <Link
            to="/career"
            className="btn btn-lg bg-[#007BFF] hover:bg-blue-700 text-white flex items-center gap-2 px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Explore Our Services <FaCircleArrowRight size={20} />
          </Link>
        </div>
        <div className="flex justify-center md:justify-end w-full">
          <img
            src="https://img.freepik.com/premium-vector/business-team-discussion-illustration-scen_450176-107.jpg?w=996"
            alt="Career Guidance"
            className="w-full md:w-2/3 rounded-lg shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
