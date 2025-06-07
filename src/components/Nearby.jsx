import React, { useState } from "react";
import { motion } from 'framer-motion';


const NearbyLandmarks = () => {
  const [showAll, setShowAll] = useState(false);
  const toggle = () => setShowAll(!showAll);

  const landmarks = [
    {
      name: "Sunrise Public School",
      description: "Well-known CBSE school with great faculty.",
      distance: "1.0 km away",
      url: "https://www.google.com/maps?q=Sunrise+Public+School",
      icon: (
        <svg className="w-6 h-6 mt-1 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9.5 5.5-9.5 5.5L2.5 8.5 12 3zM12 13v8" />
        </svg>
      )
    },
    {
      name: "City Bus Stand",
      description: "Main hub for local/BRTS and intercity buses.",
      distance: "0.8 km away",
      url: "https://www.google.com/maps?q=City+Bus+Stand",
      icon: (
        <svg className="w-6 h-6 mt-1 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
    {
      name: "Central Railway Station",
      description: "Well-connected station with frequent trains.",
      distance: "2.5 km away",
      url: "https://www.google.com/maps?q=Central+Railway+Station",
      icon: (
        <svg className="w-6 h-6 mt-1 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M9 21h6m-6 0l-3-4m3 4l3-4m-6-5V5a1 1 0 011-1h6a1 1 0 011 1v7" />
        </svg>
      )
    },
    {
      name: "GreenLife Hospital",
      description: "24/7 multi-specialty hospital with emergency services.",
      distance: "1.0 km away",
      url: "https://www.google.com/maps?q=GreenLife+Hospital",
      icon: (
        <svg className="w-6 h-6 mt-1 text-red-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m7-11H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      name: "City Square Mall",
      description: "Modern shopping destination with food court and cinema.",
      distance: "1.8 km away",
      url: "https://www.google.com/maps?q=City+Square+Mall",
      icon: (
        <svg className="w-6 h-6 mt-1 text-yellow-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M5 7v12a2 2 0 002 2h10a2 2 0 002-2V7M9 11h6M9 15h6" />
        </svg>
      )
    },
    {
      name: "Lotus Park",
      description: "Green space with walking tracks and kids play area.",
      distance: "0.6 km away",
      url: "https://www.google.com/maps?q=Lotus+Park",
      icon: (
        <svg className="w-6 h-6 mt-1 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.09 6.26L21 9l-5 4.91L17.91 21 12 17.27 6.09 21 8 13.91 3 9l6.91-1.74L12 2z" />
        </svg>
      )
    }
  ];

  const Card = ({ name, description, distance, url, icon }) => (
    <div className="border rounded p-4 shadow hover:scale-105 transition flex items-start gap-3 bg-white">
      {icon}
      <div>
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-gray-600 mb-1">{description}</p>
        <p className="text-sm text-gray-500 mb-2">{distance}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 text-sm"
        >
          Open in Maps
        </a>
      </div>
    </div>
  );

  return (
        <motion.div
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>

        
    <div className="p-6 max-w-[70rem] mx-auto mt-6">
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Nearby <span className="underline underline-offset-4 decoration-1 font-light">Landmark</span>
        </h1>
        <p className="text-gray-500 max-w-[15.5rem] text-center mb-8">
          Find Us on map - We're closer than you think
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {(showAll ? landmarks : landmarks.slice(0, 3)).map((landmark, index) => (
          <Card key={index} {...landmark} />
        ))}
      </div>

      <div className="flex items-center justify-start mt-6">
        <button onClick={toggle} className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <svg
            className={`w-5 h-5 mr-2 transform transition-transform ${showAll ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <span>{showAll ? "View Less" : "View More"}</span>
        </button>
      </div>
    </div>
          </motion.div>
  );
};

export default NearbyLandmarks;
