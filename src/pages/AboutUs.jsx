import React from 'react';
import PrivacyNavbar from '../components/PrivacyNavbar'; // ✅ Your existing navbar
import CallUsButton from '../components/Callbtn';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* ✅ Navbar with image and heading below it */}
      <div className="relative">
        <PrivacyNavbar />

        {/* ✅ Header image section with gap from navbar */}
        <div
  className="w-full h-72 bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
  style={{ backgroundImage: "url('/header_img.png')", paddingTop: '3rem' }}
>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About <span className='underline underline-offset-4 decoration-1 font-light'>Us</span></h1>
</div>

      </div>

      {/* ✅ Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 px-2 underline underline-offset-4 decoration-1">Our Project</h3>

            <p className="mb-6 text-base text-gray-700 leading-relaxed px-2">
          Pellentesque vel erat eget nibh suscipit iaculis. Sed ac eros id odio tincidunt
          hendrerit. Vestibulum at ligula lacus. Sed efficitur lectus non tellus ultricies, ac
          volutpat nulla tempus. Vivamus congue ex sed massa efficitur rhoncus.
        </p>

{/* about company */}
<hr className="bg-slate-600 h-[1px] border-0 my-4" />

          <br></br>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 px-2 underline underline-offset-4 decoration-1">Our Company</h3>
        <p className="mb-6 text-base text-gray-700 leading-relaxed px-2">
          Pellentesque vel erat eget nibh suscipit iaculis. Sed ac eros id odio tincidunt
          hendrerit. Vestibulum at ligula lacus. Sed efficitur lectus non tellus ultricies, ac
          volutpat nulla tempus. Vivamus congue ex sed massa efficitur rhoncus.
        </p>


        {/* project documents */}
        <hr className="bg-slate-600 h-[1px] border-0 my-4" />

          <br></br>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 px-2 underline underline-offset-4 decoration-1">Our Document</h3>
        <p className="mb-6 text-base text-gray-700 leading-relaxed px-2">
          Pellentesque vel erat eget nibh suscipit iaculis. Sed ac eros id odio tincidunt
          hendrerit. Vestibulum at ligula lacus. Sed efficitur lectus non tellus ultricies, ac
          volutpat nulla tempus. Vivamus congue ex sed massa efficitur rhoncus.
        </p>

<hr className="bg-slate-600 h-[1px] border-0 my-4" />

          <br></br>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 px-2 underline underline-offset-4 decoration-1">Our Past Projects</h3>
        <p className="mb-6 text-base text-gray-700 leading-relaxed px-2">
          Pellentesque vel erat eget nibh suscipit iaculis. Sed ac eros id odio tincidunt
          hendrerit. Vestibulum at ligula lacus. Sed efficitur lectus non tellus ultricies, ac
          volutpat nulla tempus. Vivamus congue ex sed massa efficitur rhoncus.
        </p>

<hr className="bg-slate-600 h-[1px] border-0 my-4" />

          <br></br>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 px-2 underline underline-offset-4 decoration-1">Why Choose Us</h3>
        <p className="mb-6 text-base text-gray-700 leading-relaxed px-2">
          Pellentesque vel erat eget nibh suscipit iaculis. Sed ac eros id odio tincidunt
          hendrerit. Vestibulum at ligula lacus. Sed efficitur lectus non tellus ultricies, ac
          volutpat nulla tempus. Vivamus congue ex sed massa efficitur rhoncus.
        </p>

        <hr className="bg-slate-600 h-[1px] border-0 my-4" />

          <br></br>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 px-2 underline underline-offset-4 decoration-1">Our Partners</h3>
        <p className="mb-6 text-base text-gray-700 leading-relaxed px-2">
          Pellentesque vel erat eget nibh suscipit iaculis. Sed ac eros id odio tincidunt
          hendrerit. Vestibulum at ligula lacus. Sed efficitur lectus non tellus ultricies, ac
          volutpat nulla tempus. Vivamus congue ex sed massa efficitur rhoncus.
        </p>

      </div>
      <CallUsButton />
    </div>
  );
};

export default AboutUs