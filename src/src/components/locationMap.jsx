import React, { useState } from 'react';
import { motion } from 'framer-motion'


const LocationMap = () => {
  const [isActive, setIsActive] = useState(false);

  const activateMap = () => {
    setIsActive(true);
  };

  return (
     <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                >

    <section className="w-[95%] mx-auto py-14 bg-white text-gray-800">
      <br></br>
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-8">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Our <span className='underline underline-offset-4 decoration-1 under font-light'>Prime Location</span></h1>
      <p className='text-gray-500 max-w-[15.5rem] text-center mb-8'>Find Us on map- We're closer than your think</p>

      </div>

      <div className="flex justify-center">
  <div
    className={`relative w-[90%] md:w-[85%] bg-white/70 backdrop-blur-md border-gray-200 rounded overflow-hidden shadow-lg border transition hover:shadow-xl map-container ${isActive ? 'active' : ''}`}
    onClick={activateMap}
    onTouchStart={activateMap}
  >
    <div className="w-full h-[300px]">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d708.163299552698!2d72.8528568!3d21.2411565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe74f206777%3A0x77e08fba45b4034f!2sDR%20dream%20city!5e1!3m2!1sen!2sin!4v1744286300033!5m2!1sen!2sin"
        style={{ border: 0, pointerEvents: isActive ? 'auto' : 'none' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Project Location"
      ></iframe>
    </div>


    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 text-sm text-gray-700 px-4 py-1 rounded shadow">
      Use two fingers to move the map
    </div>
  </div>
</div>


    </section>
    </motion.div>
  );
};

export default LocationMap;
