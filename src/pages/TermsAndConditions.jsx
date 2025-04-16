import React from 'react';
import PrivacyNavbar from '../components/PrivacyNavbar'; // ✅ Your existing navbar

const PrivacyPolicy = () => {
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
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Terms &amp; Condition</h1>
  <p className="mt-3 text-sm sm:text-base text-blue-100">Last updated: April 5, 2025</p>
</div>

      </div>

      {/* ✅ Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 px-2 ">
        Visual Representation Disclaimer
        </h2>
        <p className="mb-4 text-base text-gray-700 leading-relaxed px-2">
        The images presented on this website are computer-generated or sourced from various illustrations, provided for general informational purposes only. The actual building design, layout, materials, and finishes may differ from those shown.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 px-2">Lorem Subsection Title</h3>
        <p className="mb-4 text-base text-gray-700 leading-relaxed px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Mauris nec ipsum at velit feugiat
          fermentum. Duis ac justo eget nulla iaculis vestibulum in non magna.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 px-2">Lorem Another Section</h3>
        <p className="mb-4 text-base text-gray-700 leading-relaxed px-2">
          Pellentesque vel erat eget nibh suscipit iaculis. Sed ac eros id odio tincidunt
          hendrerit. Vestibulum at ligula lacus. Sed efficitur lectus non tellus ultricies, ac
          volutpat nulla tempus. Vivamus congue ex sed massa efficitur rhoncus.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 px-2">Data Usage</h3>
        <p className="mb-4 text-base text-gray-700 leading-relaxed px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Mauris nec ipsum at velit feugiat
          fermentum. Duis ac justo eget nulla iaculis vestibulum in non magna.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 px-2">Lorem Subsection Title</h3>
        <p className="mb-6 text-base text-gray-700 leading-relaxed px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in nisi vel nisi
          commodo convallis. Duis dignissim viverra semper. Proin ut imperdiet ligula. Nulla quis
          feugiat velit. Praesent id mi neque. Morbi accumsan lorem et pulvinar vehicula.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 px-2">Lorem Another Section</h3>
        <p className="mb-6 text-base text-gray-700 leading-relaxed px-2">
          Pellentesque vel erat eget nibh suscipit iaculis. Sed ac eros id odio tincidunt
          hendrerit. Vestibulum at ligula lacus. Sed efficitur lectus non tellus ultricies, ac
          volutpat nulla tempus. Vivamus congue ex sed massa efficitur rhoncus.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
