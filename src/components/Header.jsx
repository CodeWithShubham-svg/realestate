import React from 'react'
import Navbar from './Navbar'
import CallUsButton from './Callbtn'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div
            className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative'
            style={{ backgroundImage: "url('/header_img.png')" }}
            id='Header'
        >
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
            >
                <h2 className='text-5xl sm:text-5xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-[40px]'>
                    Designing Spaces, Building Your Future
                </h2>
                <div className='space-x-6 mt-16'>
                    <a href='#Amenities' className='border border-white px-8 py-3 rounded'>
                        Amenities
                    </a>
                    <a href='#Contact' className='bg-blue-500 px-8 py-3 rounded'>
                        Contact Us
                    </a>
                </div>

                <a
                    href='tel:+918238812121'
                    className='text-2xl sm:text-3xl md:text-[25px] inline-block max-w-3xl font-bold pt-10'
                >
                    <span className='underline underline-offset-4 decoration-1 font-light'>Call us at</span>: 8238812121
                </a>
            </motion.div>
         <CallUsButton />
            </div>
    )
}

export default Header
