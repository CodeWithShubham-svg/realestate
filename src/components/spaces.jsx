import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { assets, SpaceData } from '../assets/assets';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Popup Form Component
const PopupForm = ({ isOpen, closeModal, brochureUrl }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const downloadLinkRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('access_key', 'a4e27c78-eb64-42b3-977d-40c3c5af385a');
    formData.append('name', name);
    formData.append('number', number);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Success! Brochure on the way.");
        setName('');
        setNumber('');
        closeModal();

        // Trigger download
        if (downloadLinkRef.current) {
          downloadLinkRef.current.click();
        }
      } else {
        toast.error(data.message || "Oops! Something went wrong.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Couldn’t complete request. Please try again.", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-80 p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-[1.2rem] right-3 text-white bg-blue-600 py-[1px] px-[10px] rounded text-3xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Download Brochure</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2 outline-blue-600"
              placeholder="Enter your name"
              autoFocus
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Number <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              pattern="[0-9\s+-]*"
              className="w-full border rounded px-3 py-2 outline-blue-600 no-arrows"
              placeholder="Enter your number"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit & Download
          </button>
        </form>

          {brochureUrl && (
            <a
              href={brochureUrl}
              download
              className="block text-center text-blue-600 hover:underline mt-2"
            >
              Download Brouchure
            </a>
          )}

      </div>
    </div>
  );
};

const FloorPlans = () => {
  const floorPlansData = SpaceData.slice(0, 4);
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState(null);

  const openForm = (brochureUrl) => {
    setSelectedBrochure(brochureUrl);
    setFormOpen(true);
  };

  return (
  <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
      className="container mx-auto py-4 px-6 md:px-20 lg:px-32 mt-6 w-full overflow-hidden"
      id="Spaces"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Our <span className="underline underline-offset-4 decoration-1 font-light">Spaces</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      <div className="flex justify-end items-center mb-8 lg:hidden">
        <button className="p-3 bg-gray-200 rounded mr-2 swiper-button-prev">
          <img src={assets.left_arrow} alt="left" />
        </button>
        <button className="p-3 bg-gray-200 rounded swiper-button-next">
          <img src={assets.right_arrow} alt="right" />
        </button>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="slider-wrapper"
        >
          {floorPlansData.map((plan, index) => (
            <SwiperSlide key={index} className="relative transition-all duration-700 hover:scale-105">
              <img src={plan.image} alt={plan.title} loading="lazy" className="w-full h-auto mb-14 transition hover:scale-105" />

              <div className="absolute top-4 right-4 group">
                <button
                  onClick={() => openForm(plan.brochure)}
                  className="relative bg-white p-2 rounded shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 10.5L12 15m0 0l4.5-4.5M12 15V3"
                    />
                  </svg>
                  <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                    Brochure
                  </span>
                </button>
              </div>

              <div className="absolute left-0 right-0 bottom-7 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800 text-center">{plan.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popup Form */}
      <PopupForm
        isOpen={isFormOpen}
        closeModal={() => setFormOpen(false)}
        brochureUrl={selectedBrochure}
      />

      <style>{`
        .swiper-button-prev, .swiper-button-next {
          position: static;
          width: 38px;
          height: 40px;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          content: none !important;
        }
      `}</style>
    </motion.div>
  );
};

export default FloorPlans;
