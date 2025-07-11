import React from "react";
import { Link } from 'react-router-dom';
import PrivacyNavbar from '../components/PrivacyNavbar'; 

const NotFound = () => {
  return (
    <div className="bg-gray-50 min-h-screen w-full bg-cover bg-repeat bg-center" style={{ backgroundImage: "url('/header_img.png')" }}>
      <div className="relative">
        <PrivacyNavbar />
        <div className="flex flex-col items-center justify-center text-white text-center min-h-screen">
          <div className="flex flex-col items-center justify-center pt-36">
            <h1 className="text-8xl md:text-9xl font-extrabold text-white">404</h1>
            <hr className="w-52 md:w-60 my-4" />
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Oops! Page not found</h2>
            <p className="text-white mt-2 text-center md:max-w-md max-w-sm px-4">The page you're looking for doesn't exist or has been moved. Don't worry, you can click below to go back to the homepage.</p>
            <div className="mt-8">
              <Link to="/" className="bg-blue-600 text-white py-2 px-6 mb-10 rounded">GO HOME</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
