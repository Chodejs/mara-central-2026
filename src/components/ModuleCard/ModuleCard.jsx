/*
 * MODULE CARD COMPONENT
 * ---------------------
 * A reusable component to display a single learning module.
 * It takes a 'module' object as a prop and renders the image, title, and description.
 *
 * Usage: <ModuleCard module={moduleData} />
 */

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation

const ModuleCard = ({ module }) => {
  // Destructure the properties from the module object
  const { title, description, image, link, status } = module;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full border border-gray-100">
      {/* Image Section */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={`${title} Module`}
          className="w-full h-full object-cover"
        />
        {/* Status Badge */}
        <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-md ${
                status === 'Completed' ? 'bg-green-500' :
                status === 'In Progress' ? 'bg-yellow-500' :
                'bg-gray-400'
            }`}>
                {status}
            </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        {/* Action Button */}
        <Link
          to={link}
          className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
};

export default ModuleCard;