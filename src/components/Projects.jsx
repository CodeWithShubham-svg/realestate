import React, { useEffect, useRef, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';


const Projects = () => {
    const [cardsToShow, setCardsToShow] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const updateCardsToShow = () => {
        if (window.innerWidth >= 1024) {
            setCardsToShow(4);
        } else {
            setCardsToShow(1);
        }
    };

    useEffect(() => {
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    // Generate cloned data
    const getExtendedProjects = () => {
        const cloneStart = projectsData.slice(-cardsToShow);
        const cloneEnd = projectsData.slice(0, cardsToShow);
        return [...cloneStart, ...projectsData, ...cloneEnd];
    };

    const extendedProjects = getExtendedProjects();

    useEffect(() => {
        const preloadImages = () => {
            projectsData.forEach(project => {
                const img = new Image();
                img.src = project.image;
            });
        };
        preloadImages();
    }, []);

    const handleTransitionEnd = () => {
        let resetIndex = null;
    
        if (currentIndex >= projectsData.length + cardsToShow) {
            resetIndex = cardsToShow;
        } else if (currentIndex < cardsToShow) {
            resetIndex = projectsData.length + cardsToShow - 1;
        }
    
        if (resetIndex !== null) {
            setIsTransitioning(false);
    
            // Wait till the DOM applies "transition: none"
            requestAnimationFrame(() => {
                setCurrentIndex(resetIndex);
                requestAnimationFrame(() => {
                    setIsTransitioning(true); // restore transition
                });
            });
        }
    };
    

    const nextProject = () => {
        setCurrentIndex(prev => prev + 1);
    };

    const prevProject = () => {
        setCurrentIndex(prev => prev - 1);
    };

    const totalItems = extendedProjects.length;
    const slideWidth = 100 / totalItems;
    const transformX = -slideWidth * currentIndex;

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

            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2'>
                    <img src={assets.left_arrow} alt="left" />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded'>
                    <img src={assets.right_arrow} alt="right" />
                </button>
            </div>

            <div className='overflow-hidden'>
                <div
                    ref={sliderRef}
                    onTransitionEnd={handleTransitionEnd}
                    className='flex gap-8 ml-3 flex-nowrap'
                    style={{
                        width: `${(extendedProjects.length * 100) / cardsToShow}%`,
                        transform: `translateX(${transformX}%)`,
                        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                    }}
                >
                    {extendedProjects.map((project, index) => (
                        <div
                            key={index}
                            className='relative md:flex-shrink-0 flex-shrink-1 transition-all duration-700 hover:scale-105'
                            style={{
                                width: `${100 / extendedProjects.length}%`,
                            }}
                        >
  <img
  src={project.image}
  alt={project.title}
  loading={(index >= currentIndex - 2 && index <= currentIndex + 2) ? 'eager' : 'lazy'}
  className='w-full h-auto mb-14'
/>

                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800 justify-center flex'>
                                        {project.title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
