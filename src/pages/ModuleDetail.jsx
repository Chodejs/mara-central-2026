/*
 * MODULE DETAIL PAGE
 * ------------------
 * This is the "Classroom" template.
 * It reads the URL (e.g., /lessons/html) to figure out which module to show.
 * Then it looks up the data and displays the header + a list of lessons.
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { learningModules } from '../data/learningPath';

const ModuleDetail = () => {
  // 1. Grab the 'slug' from the URL (e.g., if url is /lessons/html, slug is 'html')
  const { slug } = useParams();

  // 2. Find the matching module in our data
  // We look for a module whose link includes this slug
  const module = learningModules.find((mod) => mod.link.endsWith(`/${slug}`));

  // 3. Fallback if someone types a nonsense URL like /lessons/bananas
  if (!module) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Module Not Found</h2>
        <p className="text-gray-600 mb-8">We haven't written that course yet, darling.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb / Back Button */}
        <div className="mb-8">
            <Link to="/" className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Dashboard
            </Link>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 flex flex-col md:flex-row gap-8 items-center">
             <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden">
                <img 
                    src={module.image} 
                    alt={module.title} 
                    className="w-full h-full object-cover"
                />
             </div>
             <div className="w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-4xl font-extrabold text-gray-900">{module.title}</h1>
                    <span className={`px-3 py-1 text-sm font-bold uppercase tracking-wider text-white rounded-full ${
                        module.status === 'Completed' ? 'bg-green-500' :
                        module.status === 'In Progress' ? 'bg-yellow-500' :
                        'bg-gray-400'
                    }`}>
                        {module.status}
                    </span>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">{module.description}</p>
                
                {/* Progress Bar (Visual Mockup for now) */}
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: module.status === 'Completed' ? '100%' : '10%' }}
                    ></div>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-right">Progress Tracker (Coming Soon)</p>
             </div>
        </div>

        {/* Lessons List Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800">Curriculum</h2>
            </div>
            
            <div className="divide-y divide-gray-100">
                {/* PLACEHOLDER LIST 
                   Eventually, we will pull this from a 'lessons' array inside the data file.
                */}
                {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                {num}
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {module.title} Lesson {num}
                                </h3>
                                <p className="text-sm text-gray-500">Duration: 15 mins • Topic: Basics</p>
                            </div>
                        </div>
                        <button className="text-gray-400 group-hover:text-blue-600">
                             Start &rarr;
                        </button>
                    </div>
                ))}
            </div>
            
             <div className="p-8 text-center bg-gray-50 border-t border-gray-100">
                <p className="text-gray-500 italic">More lessons coming soon!</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ModuleDetail;