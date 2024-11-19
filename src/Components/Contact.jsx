import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; 
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Helmet } from "react-helmet-async"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-24">
     
      <Helmet>
        <title>Contact Us | BD Career</title>
        <meta name="description" content="Get in touch with BD Career. Contact us for inquiries or support." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className="bg-white p-10 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            {isSubmitted && (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                <p>Thank you for contacting us! We'll get back to you shortly.</p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full py-3 rounded-lg text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className="bg-white p-10 rounded-lg shadow-lg flex flex-col space-y-6"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-indigo-500 text-3xl" />
              <p className="text-lg text-gray-700">
                123 Career Avenue, Dhaka, Bangladesh
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-indigo-500 text-3xl" />
              <p className="text-lg text-gray-700">+880 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-indigo-500 text-3xl" />
              <p className="text-lg text-gray-700">support@bdcareer.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
