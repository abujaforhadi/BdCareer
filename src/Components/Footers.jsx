import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 md:pt-10">
      {/* Top Section */}
      <div className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700">
        {/* About Section */}
        <div>
          <Link
            to="/"
            className="text-2xl font-medium text-red-600 inline-flex"
          >
            Bd<span className="text-green-500">Career</span>
          </Link>
          <p className="text-sm leading-6">
            Bd Career provides personalized career counseling services to guide
            individuals toward their ideal professions. With our expert advice,
            unlock your potential and secure a bright future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="text-sm space-y-3">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-primary">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Social Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <ul className="text-sm space-y-3">
            <li>
              <strong>Email:</strong> support@bdcareer.com
            </li>
            <li>
              <strong>Phone:</strong> +880 (555) 123-4567
            </li>
            <li>
              <strong>Address:</strong> 123 Career Avenue, Dhaka, Bangladesh
            </li>
          </ul>
          <div className="mt-4 flex items-center space-x-4">
            <a
              href="https://github.com/abujaforhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abujaforhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-4 text-center text-sm bg-gray-800">
        <p>© 2024 Bd Career. All Rights Reserved.</p>
        <p>
          Designed with ❤️ by{" "}
          <a
            href="https://github.com/abujaforhadi"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abu Jafor
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
