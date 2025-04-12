import React from "react";
import { assets } from '../assets/assets';

const FloorPlans = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Heading Section - Centered */}
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">
            Our <span className="underline underline-offset-4 decoration-1 font-light">Floor plans</span>
          </h1>
          <p className="text-gray-500 max-w-80 text-center">
            See the space That Fits your story
          </p>
        </div>

        {/* Floor Plan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Floor Plan Card 1 */}
          <div className="relative bg-white rounded overflow-visible transition-transform hover:scale-[1.02] hover:shadow-xl p-5 pb-16 border shadow-lg">
            <img
              src={assets.Floorplan}
              alt="Floor Plan 1"
              className="w-full h-auto object-cover rounded"
            />
            <div
              className="h-[55px] absolute left-1/2 transform -translate-x-1/2 bottom-[-24px] w-3/4 bg-white px-4 py-2 rounded"
              style={{
                boxShadow:
                  '0 -4px 12px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              <p className="text-center text-gray-800 font-semibold text-2xl"><b className="font-bold">2 </b> BHK <span className="underline underline-offset-4 decoration-1 font-light">Plan</span></p>
            </div>
          </div>

          {/* Floor Plan Card 2 */}
          <div className="relative bg-white rounded overflow-visible transition-transform hover:scale-[1.02] hover:shadow-xl p-4 pb-16 border shadow-lg">
            <img
              src={assets.Floorplan}
              alt="Floor Plan 2"
              className="w-full h-auto object-cover rounded"
            />
            <div
              className="h-[55px] absolute left-1/2 transform -translate-x-1/2 bottom-[-24px] w-3/4 bg-white px-4 py-2 rounded"
              style={{
                boxShadow:
                  '0 -4px 12px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              <p className="text-center text-gray-800 font-semibold text-2xl"><b className="font-bold">3 </b> BHK <span className="underline underline-offset-4 decoration-1 font-light">Plan</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
