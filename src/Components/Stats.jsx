import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaSchool, FaUniversity } from 'react-icons/fa';

const Stats = () => {
  return (
    <div className="bg-blue-100 py-8">
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="stat w-52 shadow-lg bg-white rounded-lg p-4 text-center">
          <div className="stat-figure text-blue-600 mb-2">
            <FaUserGraduate className="text-4xl" />
          </div>
          <div className="stat-value text-2xl font-semibold text-gray-800">2.5 Million</div>
          <div className="stat-title text-gray-600">Students Impacted</div>
        </div>

        {/* Card 2 */}
        <div className="stat w-52 shadow-lg bg-white rounded-lg p-4 text-center">
          <div className="stat-figure text-blue-600 mb-2">
            <FaChalkboardTeacher className="text-4xl" />
          </div>
          <div className="stat-value text-2xl font-semibold text-gray-800">51,000</div>
          <div className="stat-title text-gray-600">Educators Certified</div>
        </div>

        {/* Card 3 */}
        <div className="stat w-52 shadow-lg bg-white rounded-lg p-4 text-center">
          <div className="stat-figure text-blue-600 mb-2 ml-8">
            <FaSchool className="text-4xl" />
          </div>
          <div className="stat-value text-2xl font-semibold text-gray-800">250+</div>
          <div className="stat-title text-gray-600">Partner Schools</div>
        </div>

        {/* Card 4 */}
        <div className="stat w-52 shadow-lg bg-white rounded-lg p-4 text-center">
          <div className="stat-figure text-blue-600 mb-2 ml-2">
            <FaUniversity className="text-4xl" />
          </div>
          <div className="stat-value text-2xl font-semibold text-gray-800">50+</div>
          <div className="stat-title text-gray-600">University Partners</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
