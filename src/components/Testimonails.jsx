import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Testimonails = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container mx-auto py-10 lg:px-32 w-full mt-6 overflow-hidden' id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span class="underline underline-offset-4 decoration-1 under font-light">Testimonails</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those Who Found Home with Us</p>

            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='w-[90%] md:max-w-[308px] md:w-[90%] border shadow-lg rounded px-8 py-12 text-center hover:scale-105 transition-all duration-700'>
                        <LazyLoadImage className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} />
                        <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 test-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <LazyLoadImage key={index} src={assets.star_icon} />
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonails