// tour content of project should be thereimport React from 'react'
import { motion } from 'framer-motion'
import React, { useRef, useEffect, useState } from 'react';


const Tour = () => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Update progress circle
  const updateProgress = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const percent = (video.currentTime / video.duration) * 100;
    if (progressRef.current) {
      progressRef.current.setAttribute('stroke-dashoffset', 100 - percent);
    }
    if (!video.paused) requestAnimationFrame(updateProgress);
  };

  // Toggle play/pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      updateProgress();
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', updateProgress);
    }
    return () => {
      if (video) {
        video.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, []);
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container mx-auto py-10 lg:px-32 mt-6 overflow-hidden' id='Tour'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Project <span class="underline underline-offset-4 decoration-1 under font-light">Walkthrough</span></h1>
            <p className='text-center text-gray-500 max-w-80 mx-auto'>Real Stories from Those Who Found Home with Us</p>
                  <div className="flex items-center justify-center mt-[20px] px-4">
      <div className="relative w-full overflow-hidden">
        {/* Video */}
        <video
          id="projectVideo"
          ref={videoRef}
          className="w-full md:h-[25em] h-[18rem] object-cover rounded shadow-sm"
          muted
          autoPlay
          loop
          playsInline
          controls
        >
          <source src="tour.mp4" type="video/mp4" className='object-contain' />
          Your browser does not support HTML5 video.
        </video>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center z-10"
        >
          <svg className="absolute top-0 left-0 w-full h-full rounded-full" viewBox="0 0 36 36">
            <circle cx="16" cy="16" r="14" stroke="#cccc" strokeWidth="2.5" fill="none" />
            <circle
              ref={progressRef}
              id="progressCircle"
              cx="16"
              cy="16"
              r="14"
              stroke="#3b82f6"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="100"
              strokeDashoffset="100"
            />
          </svg>

          {/* Play Icon */}
          {!isPlaying && (
            <svg
              id="playIcon"
              className="w-5 h-5 text-white z-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="3 3 24 24"
            >
              <path d="m9.524 4.938l10.092 6.21a1 1 0 0 1 0 1.704l-10.092 6.21A1 1 0 0 1 8 18.21V5.79a1 1 0 0 1 1.524-.852" />
            </svg>
          )}

          {/* Pause Icon */}
          {isPlaying && (
            <svg
              id="pauseIcon"
              className="w-4 h-4 text-white z-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="3 3 24 24"
            >
              <path d="M4.8 3h4.4a.8.8 0 0 1 .8.8v16.4a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8V3.8a.8.8 0 0 1 .8-.8m10 0h4.4a.8.8 0 0 1 .8.8v16.4a.8.8 0 0 1-.8.8h-4.4a.8.8 0 0 1-.8-.8V3.8a.8.8 0 0 1 .8-.8" />
            </svg>
          )}
        </button>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="absolute top-20 right-4 w-12 h-12 flex items-center justify-center z-10"
        >
          <svg className="absolute top-0 left-0 w-full h-full rounded-full" viewBox="0 0 36 36">
            <circle cx="16" cy="16" r="14" stroke="#cccc" strokeWidth="2.5" fill="none" />
            <circle
              id="muteProgress"
              cx="16"
              cy="16"
              r="14"
              stroke="#cccc"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="100"
              strokeDashoffset="0"
            />
          </svg>

          {/* Unmute Icon */}
          {isMuted ? (
            <svg
              id="unmuteIcon"
              className="w-5 h-5 text-white z-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="3 3 24 24"
            >
              <path d="M3.5 2A1 1 0 0 0 3 3.719l20 20a1 1 0 1 0 1.406-1.407L17 14.907V3.312c0-1.265-1.105-1.582-1.969-.718L9.812 7.719L4.407 2.312A1 1 0 0 0 3.594 2A1 1 0 0 0 3.5 2M5 9.063c-.551 0-1 .448-1 1v6c0 .55.449 1 1 1h3.438L15 23.468c1 1 2 .488 2-.875V20.03L6.031 9.063z" />
            </svg>
          ) : (
            <svg
              id="muteIcon"
              className="w-6 h-6 text-white z-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="3 3 24 24"
            >
              <path d="M5 9v6h4l5 5V4l-5 5H5zm11.54 2c0-.81-.25-1.56-.69-2.18l-1.43 1.43a3.001 3.001 0 0 1 0 3.5l1.43 1.43c.44-.62.69-1.37.69-2.18zm2.5 0c0 1.8-.76 3.42-1.96 4.56l1.41 1.41A8.962 8.962 0 0 0 21 12c0-2.49-1.02-4.74-2.66-6.35l-1.41 1.41A6.978 6.978 0 0 1 19.04 12z" />
            </svg>
          )}
        </button>
      </div>
    </div>
                    </motion.div>
                )
            }
            
            
    export default Tour