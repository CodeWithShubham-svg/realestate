import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our  Project</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <LazyLoadImage src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg  hover:scale-105 transition-all duration-700' />
                <div className='flex flex-col items-center lg:items-start mt-10 text-gray-600 w-full'>
    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
        <div>
            <p className='text-4xl font-medium text-gray-800'>47+</p>
            <p>Years of Experience</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>800+</p>
            <p>Luxurious flats</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>2<span class="font-extralight text-gray-500">|</span>3</p>
            <p>BHK luxurious flat</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>25+</p>
            <p>Happy Clients</p>
        </div>
    </div>

    <div className='mt-5'>
        <h1 className='text-xl sm:text-3xl font-bold mb-2'>Ultra <span className='underline underline-offset-4 decoration-1 under font-light'>Luxourious flat</span> at prime location still affordable</h1>
    <p className='mb-8 mt-3 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>

    <Link
  to="/about-us"
  className="bg-blue-600 text-white px-8 py-2 rounded self-center lg:self-start"
>
  Learn more
</Link>
</div>

            </div>
        </motion.div>
    )
}

export default About