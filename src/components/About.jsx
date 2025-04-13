import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

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
                <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg  hover:scale-105 transition-all duration-700' />
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
            <p className='text-4xl font-medium text-gray-800'>2<span class="font-thin text-gray-500">|</span>3</p>
            <p>BHK luxurious flat</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>25+</p>
            <p>Ongoing Projects</p>
        </div>
    </div>
    <br></br>
   <p className='mb-2 font-3xl text-black text-start mr-12 underline'><b>Rera no: GJ/2025/Residential/001234</b></p>
    <p className='mb-10 mt-2 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
             
    <Link to="/About-us" className="bg-blue-600 text-white px-8 py-2 rounded self-center lg:self-start">Learn more</link>
</div>

            </div>
        </motion.div>
    )
}

export default About
