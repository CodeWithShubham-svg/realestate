import React from 'react';

const CallUsButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <div className="relative group">
        {/* Pulse Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-70 animate-[pulse-ring_1.5s_ease-out_infinite]"></span>

        {/* Button */}
        <a
          href="tel:+1234567890"
          className="relative flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 group-hover:shadow-blue-400/50"
        >
          {/* Phone Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
          </svg>
        </a>
      </div>

      {/* Custom animation style */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CallUsButton;