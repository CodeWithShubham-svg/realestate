import React, { useState } from 'react';
import PrivacyNavbar from '../components/PrivacyNavbar'; 
import CallUsButton from '../components/Callbtn';
import { toast } from 'react-toastify';

const Ct = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // public key of web3form
        formData.append("access_key", "a4e27c78-eb64-42b3-977d-40c3c5af385a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };


  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      {/* ✅ Navbar */}
      <PrivacyNavbar />

      {/* ✅ Header Section */}
      <div
        className="w-full h-72 bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/header_img.png')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Contact <span className="underline underline-offset-4 decoration-2 font-light">Us</span>
        </h1>
      </div>

      {/* ✅ Content Section with Padding */}
      <div className="px-3.5 sm:px-6 lg:px-8 py-6">
        <div className="bg-white px-4 sm:px-6 py-10 max-w-7xl mx-auto border-b border-b-gray-500">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* ✅ LHS: Info Section */}
            <div className="lg:w-1/2 ">
              <div className="space-y-3 text-lg leading-relaxed">
          
              <li>We're here to assist you with all your queries and project needs.</li>
              <li>Expect a prompt response — typically within 24 working hours.</li>
              <li>Reach us anytime via call, email, or the contact form.</li>
              <li>Every message is important to us, and handled with care.</li>
              <li>Let's build something great together</li>
             
</div>
<br>

</br>
              {/* ✅ Contact Info - Responsive */}
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="bg-white p-6 border hover:scale-105 hover:border-blue-600 transition flex-1">
                    <p className="text-xl font-semibold mb-2 flex items-center gap-2">📞 Mobile</p>
                    <a href="tel:+918238812121" className="text-blue-600 block">+918238812121</a>
                    <a href="tel:+918238812121" className="text-blue-600 block">+918238812121</a>
                  </div>

                  <div className="bg-white p-6 border hover:scale-105 transition flex-1 hover:border-blue-600">
                    <p className="text-xl font-semibold mb-2 flex items-center gap-2">✉️ Email</p>
                    <a href="mailto:contact@yourcompany.com" className="text-blue-600 block">contact@yourcompany.com</a>
                    <a href="mailto:contact@yourcompany.com" className="text-blue-600 block">contact@yourcompany.com</a>
                  </div>
                </div>

                <div className="bg-white p-6 border hover:scale-105 transition hover:border-blue-600">
                  <p className="text-xl font-semibold mb-2 flex items-center gap-2">📍 Address</p>
                  <a
          href="https://www.google.com/maps?q=Lotus+Park"
          target="_blank"
          rel="noopener noreferrer"
        >
                  <p className="text-blue-600">Dream City, Near Mahavir Heights, New Kosad Road, Amroli, Surat.</p>
                  </a>
                </div>
              </div>
            </div>


           {/* ✅ RHS: Contact Form */}
<div className="lg:w-1/2 bg-white shadow border rounded
    py-[7px] px-[22px]
   text-black">
  <h2 className="text-[1.5rem] font-bold text-blue-600 border-b-2 border-blue-600 inline-block pb-1 pt-3.5">
      Get in touch
  </h2>

  <form onSubmit={onSubmit} className="space-y-6 animate-fadeIn mt-6">
    <div className="flex flex-wrap md:flex-nowrap gap-6">
      <div className="w-full md:w-1/2">
        <label className="block mb-2">Your Name</label>
        <input
          className="w-full border border-gray-300 rounded py-2 px-3 outline-blue-600 transition  text-black"
          type="text"
          name="Name"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="w-full md:w-1/2">
        <label className="block mb-2">Your Number</label>
        <input
          className="w-full border border-gray-300 rounded py-2 px-3 outline-blue-600 transition text-black"
          type="tel"
          name="Number"
          placeholder="Your Number"
          required
        />
      </div>
    </div>

    <div>
      <label className="block mb-2">Message</label>
      <textarea
        className=" text-black w-full border border-gray-300 rounded py-3 px-4 h-44 resize-none outline-blue-600 transition"
        name="Message"
        placeholder="Write your message..."
        required
      ></textarea>
    </div>

    <button
      type="submit"
      className="bg-black text-white font-semibold py-2 mb-3 sm:mb-0 md:mb-0 px-8 rounded shadow transition duration-700 hover:scale-110"
    >
      {result ? result : "Submit"}
    </button>
  </form>
</div>

          </div>
        </div>

        {/* ✅ Google Map Section */}
        <div className="mt-10 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Find Us on Google Maps</h2>
          
          <div className="w-full h-72 bg-gray-300 rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d708.163299552698!2d72.8528568!3d21.2411565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe74f206777%3A0x77e08fba45b4034f!2sDR%20dream%20city!5e1!3m2!1sen!2sin!4v1744286300033!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ✅ Floating Call Button */}
      <CallUsButton />
    </div>
  );
};

export default Ct;
