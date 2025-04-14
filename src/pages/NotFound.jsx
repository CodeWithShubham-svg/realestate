import React from "react";
import { Link } from 'react-router-dom';
import PrivacyNavbar from '../components/PrivacyNavbar'; 


const NotFound = () => {
    return (


        <div className="bg-gray-50 min-h-screen text-gray-800 w-full bg-cover bg-repeat bg-center"  style={{ backgroundImage: "url('/header_img.png')"}}>
        {/* ✅ Navbar with image and heading below it */}
        <div className="relative">
          <PrivacyNavbar />
  
          <div
    className="flex flex-col items-center justify-center text-white text-center px-4 pt-12"
  >
    <div className="mt-10 md:mt-20">
     <h1 className="md:text-9xl text-8xl pt-12 font-extrabold text-white flex justify-center items-center">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-grey-800 mt-4">Oops! <span className="underline underline-offset-4 decoration-1">Page not found</span></h2>
            <p className="text-grey-600 mt-2 text-center md:max-w-md max-w-80">The page you're looking for doesn't exist or has been moved. Don't worry, you can click below to go back to homepage.</p>
        <br></br>
        <Link to="/" className="bg-blue-600 mt-8 text-white py-2 px-6 mb-10 rounded">GO 
        HOME</Link> 
       </div>
     </div>
   </div>
 </div>
    );
};
export default NotFound;

