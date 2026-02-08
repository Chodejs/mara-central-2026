/*
 * HOME PAGE
 * ---------
 * The main landing page for Mara Central.
 * Displays the grid of learning modules by mapping through the data file.
 */

import React from 'react';
import ModuleCard from '../components/ModuleCard/ModuleCard';
import { learningModules } from '../data/learningPath'; // Importing the data

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Welcome to <span className="text-blue-600">Mara Central</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Your daily hub for web development mastery. From HTML basics to complex
            databases, let's build something brilliant together.
          </p>
        </div>

        {/* Grid Layout for Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*
            map over the learningModules array.
            For each 'module' in the array, we render a ModuleCard.
          */}
          {learningModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;