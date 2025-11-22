// src/components/HeroGallery.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCameraRetro, FaImages, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/gallerybg.jpg"; // Replace with your actual hero background

const HeroGallery = () => {
  return (
    <section
      className="relative h-[65vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-[#00000060]" />

      {/* Animated Content */}
      <motion.div
        className="z-10 text-center px-4 sm:px-8 max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-snug text-white drop-shadow-lg">
          Our <span className="text-[#FF0000]">Gallery</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-sm sm:text-lg text-[#E6E6E6] leading-relaxed max-w-2xl mx-auto">
          Explore our latest elevator installations, modern lift designs, and
          maintenance projects — each crafted with precision, safety, and a
          commitment to excellence.
        </p>

        {/* Features */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <FaCameraRetro className="text-[#FF0000] text-xl" />
            <span className="text-sm font-medium text-[#FFFFFF]">
              High-Resolution Projects
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaImages className="text-[#FF0000] text-xl" />
            <span className="text-sm font-medium text-[#FFFFFF]">
              Modern Installations
            </span>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-[#FF0000] to-[#A01818] text-white font-semibold rounded-lg shadow-md hover:from-[#B22222] hover:to-[#FF0000] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Book a Consultation <FaArrowRight />
          </Link>
          <Link
            to="/gallery"
            className="px-6 py-3 border-2 border-[#FFFFFF] text-[#FFFFFF] font-semibold rounded-lg shadow-md hover:bg-[#FFFFFF] hover:text-[#0D0D0D] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Explore Gallery <FaArrowRight />
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Gradient for Depth */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
    </section>
  );
};

export default HeroGallery;
