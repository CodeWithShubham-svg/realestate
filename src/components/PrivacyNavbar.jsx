// use in pages as navbar e.g about us anb tnc
import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])

    return (
        // for desktop
        <div className='absolute top-0 left-0  w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent '>
            <LazyLoadImage
  src={assets.logo}
  alt="Logo"
  className="cursor-pointer"
  onClick={() => window.location.href = '/'}
/>

{/* for mobile  */}
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href='/' className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href='/about-us' className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href='/#Amenities' className='cursor-pointer hover:text-gray-400'>Amenities</a>
                    <a href='/#Testimonials' className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>
                {/* call btn / direct call redirct btn */}
                <button
  className='hidden md:block bg-white px-8 py-2 rounded-full'
  onClick={() => {
    window.location.href = 'tel:+919999955555';}}> Inquire now
</button>

                <LazyLoadImage onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' />
            </div>
            {/* --Mobile Menu */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                < div className='flex justify-end p-6 cursor-pointer'>
                    <LazyLoadImage onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
                    <a onClick={() => setShowMobileMenu(false)} href='/' className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href='/About-us' className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a onClick={() => setShowMobileMenu(false)} href='/#Spaces' className='px-4 py-2 rounded-full inline-block'>Spaces</a>
                    <a onClick={() => setShowMobileMenu(false)} href='/Contact' className='px-4 py-2 rounded-full inline-block'>Contact</a>
                </ul>
            </div>
        </div >
    )
}

export default Navbar