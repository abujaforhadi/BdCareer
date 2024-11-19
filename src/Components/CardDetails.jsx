import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";

const CardDetails = () => {
  const data = useLoaderData();
  const {
    service_name,
    category,
    brief_description,
    pricing,
    date,
    time,
    counselor,
    rating,
    image_url,
  } = data;

  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [currentRating, setCurrentRating] = useState(rating);

  const handleAddComment = () => {
    if (commentInput.trim() === "") return;
    setComments([...comments, commentInput]);
    setCommentInput("");
  };

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };

  return (
    <div className="flex justify-center py-12 px-5">
      <Helmet>
        <title>Services details | BD Career</title>
        <meta
          name="description"
          content="Get in touch with BD Career. Contact us for inquiries or support."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="card w-full lg:w-3/4 xl:w-1/2 bg-white  rounded-lg overflow-hidden">
        <figure className="overflow-hidden">
          <img
            src={image_url}
            alt={service_name}
            className="w-full h-72 object-cover"
          />
        </figure>
        <div className="px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{service_name}</h2>
            <span className="badge badge-outline py-2 px-4 rounded-full text-sm bg-gray-200 text-gray-800">
              {category}
            </span>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {brief_description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col">
              <span className="text-gray-500 font-semibold">Counselor</span>
              <span className="text-gray-900">{counselor}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 font-semibold">Date</span>
              <span className="text-gray-900">{date}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 font-semibold">Time</span>
              <span className="text-gray-900">{time}</span>
            </div>
          </div>
          <div className="flex justify-between items-center border-t pt-6">
            <div className="flex items-center">
              <span className="text-gray-600 font-medium mr-2">Rating:</span>
              <ReactStars
                count={5}
                value={currentRating}
                onChange={handleRatingChange}
                size={24}
                activeColor="#ffd700"
                edit={true}
              />
              <span className="ml-3 text-gray-700 font-medium">
                {currentRating.toFixed(1)}
              </span>
            </div>
            <div className="text-right">
              <span className="text-gray-600 font-medium">Price:</span>
              <span className="text-xl font-bold text-gray-800 ml-2">
                {pricing} BDT
              </span>
            </div>
          </div>
          <div className="mt-8">
            <button className=" btn btn-primary btn-lg rounded-lg hover:bg-blue-600 transition-all duration-200">
              Book Now
            </button>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Comments
            </h3>
            <div className="mb-6 max-h-44 overflow-y-auto">
              {comments.length === 0 ? (
                <p className="text-gray-600">
                  No comments yet. Be the first to comment!
                </p>
              ) : (
                comments.map((comment, index) => (
                  <div
                    key={index}
                    className="p-3 mb-3 border rounded-lg bg-gray-100"
                  >
                    <p className="text-gray-700">{comment}</p>
                  </div>
                ))
              )}
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Add a comment..."
                className="input input-bordered w-full h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleAddComment}
                className="btn btn-primary rounded-lg px-6 hover:bg-blue-600 transition-all duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
