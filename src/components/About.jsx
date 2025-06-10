import React from 'react'
import { Link } from 'react-router-dom';
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
            <p className='text-4xl font-medium text-gray-800'>2<span class="font-extralight text-gray-500">|</span>3</p>
            <p>BHK luxurious flat</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>25+</p>
            <p>Happy Clients</p>
        </div>
    </div>

    <div className='mt-5'>
        <div className='flex gap-2'>
   <p className='mb-2 text-[15px] md:font-3xl text-black text-start bg-blue-300 px-3 py-2 w-2/3 border-blue-600 border rounded-full font-semibold address sm:w-1/2'><b>📍</b> <span>Amroli, Surat, Gujarat</span> </p>
    <p className='mb-2 text-[15px] md:font-3xl text-white text-start bg-blue-300 px-3 py-2 w-2/3 border-blue-600 border rounded-full font-semibold contact sm:w-1/6 flex'><span><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
          </svg></span> </p>
</div>
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