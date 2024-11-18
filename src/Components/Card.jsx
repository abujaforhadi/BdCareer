import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Card = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 >= 0.5; 
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 

    return (
      <>
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <FaStar key={`full-${index}`} className="text-yellow-500" />
          ))}
        {hasHalfStar && <FaStarHalf className="text-yellow-500" />}
        {Array(emptyStars)
          .fill(null)
          .map((_, index) => (
            <FaRegStar key={`empty-${index}`} className="text-gray-300" />
          ))}
      </>
    );
  };

  return (
    <div data-aos="zoom-in"
      className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden sm:max-w-sm md:max-w-md"
      role="article"
      aria-labelledby={`service-title-${data.id}`}
    >
      <img
        src={data.image_url || "default-image.jpg"} 
        alt={`Image of ${data.service_name || "Service"}`}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        
        <h2 id={`service-title-${data.id}`} className="text-2xl font-bold text-gray-800">
          {data.service_name || "Unnamed Service"}
        </h2>

       
        <p className="text-gray-500 mb-2">
          Category: <span className="font-semibold">{data.category || "Unknown"}</span>
        </p>

       
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-lg">Price:</span> {data.pricing || "N/A"} BDT
        </p>

       
        <div className="flex items-center mb-4">
          <div className="flex">{renderStars(data.rating || 0)}</div>
         
        </div>

       
        <div className="flex items-center mb-4">
          <p className="text-gray-800 font-medium">{data.counselor || "Unknown Counselor"}</p>
        </div>

      
        <Link
          to={`/services/${data.id}`}
          className="btn btn-primary w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Learn More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Card;
