import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
            id='Amenities'
        >
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
                Our <span className='underline underline-offset-4 decoration-1 font-light'>Amenities</span>
            </h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
                Crafting Spaces, Building Legacies - Explore Our Portfolio
            </p>

            {/* Buttons top-right like before */}
            <div className='flex justify-end items-center mb-8'>
                <button className='p-3 bg-gray-200 rounded mr-2 swiper-button-prev'>
                    <img src={assets.left_arrow} alt="left" />
                </button>
                <button className='p-3 bg-gray-200 rounded swiper-button-next'>
                    <img src={assets.right_arrow} alt="right" />
                </button>
            </div>

            {/* Swiper Carousel */}
            <div className='overflow-hidden'>
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
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className='flex gap-8 ml-3 flex-nowrap slider-wrapper'
                >
                    {projectsData.map((project, index) => (
                        <SwiperSlide
                            key={index}
                            className='relative md:flex-shrink-0 flex-shrink-1 transition-all duration-700 hover:scale-105'
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                loading='lazy'
                                className='w-full h-auto mb-14'
                            />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800 justify-center flex'>
                                        {project.title}
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
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

export default Projects;
