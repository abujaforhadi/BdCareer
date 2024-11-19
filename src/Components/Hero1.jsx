import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import hero from "../assets/hero.webp";


const Hero1 = () => {
  return (
    <div className="hero pt-5">
      <div className="hero-content flex-col-reverse md:flex-row-reverse items-center justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold">
            Shape Your Future, Achieve Your Dreams
          </h1>
          <p className="py-6">
            Discover the right path with personalized career counseling,
            expert advice, and tailored resources designed to help you succeed
            in your professional journey.
          </p>
          <Link
            to="/services"
            className="btn btn-outline bg-[#007BFF] text-white"
          >
            Explore Our Services <FaCircleArrowRight />
          </Link>
        </div>
        <img src="https://media.istockphoto.com/id/1338737959/photo/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-school-building-for.jpg?s=1024x1024&w=is&k=20&c=h6FSgmubB2NYOzf83gBBH9t-f6sIrMuHXTDqvIEsFK8=" alt="Hero" className="md:w-1/2" />
      </div>
      

    </div>
  );
};

export default Hero1;
