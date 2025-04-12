import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState({ text: '', type: '', visible: false });

    // Replace this URL with your actual Google Apps Script Web App URL
    const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbywngXyxmtZtBHV5k97KAnPQ9HjWA_K1hF0u2wJcawAT0B3CqyijtV1WWHjtV8MggswZg/exec';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = async () => {
        if (email.trim() === '') {
            setMessage({ text: 'Email is required.', type: 'error', visible: true });
        } else if (!emailRegex.test(email)) {
            setMessage({ text: 'Please enter a valid email.', type: 'error', visible: true });
        } else {
            try {
                const response = await fetch(SHEET_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `email=${encodeURIComponent(email)}`
                });

                const text = await response.text();
                if (text.toLowerCase().includes('success')) {
                    setMessage({ text: 'Thanks for subscribing!', type: 'success', visible: true });
                    setEmail('');
                } else {
                    throw new Error(text);
                }
            } catch (error) {
                setMessage({ text: 'Something went wrong. Please try again later.', type: 'error', visible: true });
            }
        }

        setTimeout(() => {
            setMessage(prev => ({ ...prev, visible: false }));
        }, 2500);
    };

    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>

                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt="Logo" />
                    <p className='text-gray-400 mt-4'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nesciunt autem voluptatum suscipit expedita in facere quae asperiores modi veritatis, quis eum harum iure officia veniam nihil inventore.
                    </p>
                </div>

                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <Link to="/#Header" className="hover:text-white">Home</Link>
                        <a href='/About-us' className='hover:text-white'>About Us</a>
                        <a href='/#Contact' className='hover:text-white'>Contact Us</a>
                        <Link to="/Tnc" className="hover:text-white">Terms & Condition</Link>
                    </ul>
                </div>

                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>
                        The latest news, articles and resources, sent to your inbox weekly.
                    </p>

                    <div className='flex gap-2'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'
                        />
                        <button
                            onClick={handleSubmit}
                            className='py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600'
                        >
                            Subscribe
                        </button>
                    </div>

                    <div className="h-3 mt-2">
                        {message.visible && (
                            <span className={`text-sm block transition-opacity duration-300 font-thin ${
                                message.type === 'success' ? 'text-green-400' : 'text-red-500'
                            }`}>
                                {message.text}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className='border-t border-gray-700 py-4 md:mt-10 text-center text-gray-500'>
                <p>
                    Copyright 2025 &copy; <b><a href="#">D.R Developer</a></b>. 
                    All Rights Reserved | Website developed and managed by <b>Hypersoft Innovation</b>
                </p>
            </div>
        </div>
    );
};

export default Footer;
