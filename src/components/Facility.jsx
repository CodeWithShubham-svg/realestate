import React, { useState } from 'react';
import { motion } from 'framer-motion'

const allFacilities = [
  {
    name: 'Free Wi-Fi',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M5 13a10 10 0 0114 0M8.5 16.5a5 5 0 017 0M12 20h.01" />
      </svg>
    ),
  },
  {
    name: 'Swimming Pool',
    icon: (
      <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2v2H2z" />
      </svg>
    ),
  },
  {
    name: 'Parking',
    icon: (
      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 3H6a1 1 0 00-1 1v16a1 1 0 001 1h4m6-8a3 3 0 00-3-3H9v6h3a3 3 0 003-3z" />
      </svg>
    ),
  },
  {
    name: 'Fitness Center',
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 9V6h-2v3h-2V6h-2v3H10V6H8v3H6V6H4v3H2v6h2v3h2v-3h2v3h2v-3h4v3h2v-3h2v3h2v-3h2V9z" />
      </svg>
    ),
  },
  {
    name: 'Restaurant',
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 3h16v2H4V3zm2 4h2v14H6V7zm4 0h2v14h-2V7zm4 0h2v14h-2V7zm4 0h2v14h-2V7z" />
      </svg>
    ),
  },
  {
    name: 'Lounge Area',
    icon: (
      <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 12h20v2H2zM4 16h16v4H4zM8 4h8v6H8z" />
      </svg>
    ),
  },
];

const Facility = () => {
  const [showAll, setShowAll] = useState(false);
  const facilitiesToShow = showAll ? allFacilities : allFacilities.slice(0, 3);

  return (
               <motion.div
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>


    <div className="max-w-[70rem] mx-auto px-6 py-10 text-gray-800">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Our <span className="underline underline-offset-4 decoration-1 font-light">Facilities</span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center">
          See the space That Fits your story
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facilitiesToShow.map((facility, index) => (
          <div
            key={index}
            className="bg-white border shadow-sm rounded p-4 flex items-center gap-3 hover:scale-105 transition"
          >
            {facility.icon}
            <span className="text-lg font-medium">{facility.name}</span>
          </div>
        ))}
      </div>
  

      <button
      
        onClick={() => setShowAll(!showAll)}
        className="flex items-center gap-1 mt-8 text-blue-600 font-semibold"
      >
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
        {showAll ? 'View Less' : 'View More'}
        
      </button>
    </div>
    </motion.div>
  );
};

export default Facility;
