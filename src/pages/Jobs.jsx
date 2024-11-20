import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Jobs = () => {
  const jobData = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null); // For displaying job details in the modal
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // Initialize AOS with desired options
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);

    // Redirect to home page after 2 seconds
    setTimeout(() => {
      setIsModalOpen(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="py-5">
      <Helmet>
        <title>Jobs | BD Career</title>
        <meta
          name="description"
          content="Get in touch with BD Career. Contact us for inquiries or support."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <p className="text-center text-3xl font-medium pt-5">
        Explore Opportunities and Apply Now
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 px-4"
        data-aos="fade-up" // Add AOS animation to container
      >
        {jobData.map((job) => (
          <div
            key={job.id}
            className="card bg-gray-50 rounded-lg my-10"
            data-aos="zoom-in" // Add AOS animation to each card
          >
            <div className="absolute top-0 left-0 bg-black text-yellow-500 text-sm font-medium px-4 py-1 rounded-br-lg">
              Recommendation
            </div>

            <div className="p-6 flex gap-2 items-center text-center">
              <img
                src={job.companyLogo}
                alt={job.companyName}
                className="w-16 h-16 mb-4"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {job.companyName}
                </h2>
                <p className="text-gray-500">{job.location}</p>
              </div>
            </div>

            <div className="px-6 text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {job.jobTitle}
              </h3>
              <div className="flex justify-end space-x-2 mb-4">
                <FaFacebookF className="text-gray-500 hover:text-black cursor-pointer" />
                <FaTwitter className="text-gray-500 hover:text-black cursor-pointer" />
                <FaYoutube className="text-gray-500 hover:text-black cursor-pointer" />
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {job.description}
              </p>
              <ul className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                {job.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span>✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6">
              <button
                onClick={() => handleApplyClick(job)}
                className={`btn btn-info w-full text-white rounded-lg hover:opacity-90 ${job.buttonColor}`}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Application Submitted!
            </h2>
            <p className="text-gray-600 mb-4">
              Thank you for applying to {selectedJob?.companyName} for the{" "}
              <span className="font-semibold">{selectedJob?.jobTitle}</span>{" "}
              role. Redirecting to homepage...
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="btn btn-primary bg-black text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
