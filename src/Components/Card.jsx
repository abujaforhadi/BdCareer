import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Card = ({ data }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Service Image */}
      <img
        src={data.image_url}
        alt={data.service_name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        {/* Service Name */}
        <h2 className="text-2xl font-bold text-gray-800">{data.service_name}</h2>
        
        {/* Category */}
        <p className="text-gray-500 mb-2">Category: <span className="font-semibold">{data.category}</span></p>

        {/* Pricing */}
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-lg">Price:</span> ${data.pricing}
        </p>

        {/* Counselor Info */}
        <div className="flex items-center mb-4">
          <img
            src={data.counselor_photo}
            alt={data.counselor}
            className="w-10 h-10 rounded-full border-2 border-gray-300 mr-3"
          />
          <p className="text-gray-800 font-medium">{data.counselor}</p>
        </div>

        {/* Learn More Button */}
        <Link
          to={`/service/${data.id}`}
          className="btn btn-primary w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Learn More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Card;
