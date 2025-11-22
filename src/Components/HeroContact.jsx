// src/components/HeroContact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaArrowRight, FaHeadset } from "react-icons/fa";
import bg from "../assets/images/contactbg.jpg";

const HeroContact = () => {
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
          Get in <span className="text-[#FF0000]">Touch</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-sm sm:text-lg text-[#E6E6E6] leading-relaxed max-w-2xl mx-auto">
          Have questions or need professional elevator services? Our expert team
          is just a call or email away — ready to assist you with quick support,
          consultation, and project guidance.
        </p>

        {/* Features */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <FaHeadset className="text-[#FF0000] text-xl" />
            <span className="text-sm font-medium text-[#FFFFFF]">
              24/7 Customer Support
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#FF0000] text-xl" />
            <span className="text-sm font-medium text-[#FFFFFF]">
              Quick Response Team
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
          <a
            href="tel:9035295330"
            className="px-6 py-3 bg-gradient-to-r from-[#FF0000] to-[#A01818] text-white font-semibold rounded-lg shadow-md hover:from-[#B22222] hover:to-[#FF0000] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <FaPhoneAlt /> Call Now
          </a>
          <a
            href="mailto:info@garudaelevators.in"
            className="px-6 py-3 border-2 border-[#FFFFFF] text-[#FFFFFF] font-semibold rounded-lg shadow-md hover:bg-[#FFFFFF] hover:text-[#0D0D0D] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <FaEnvelope /> Email Us
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Gradient for Depth */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
    </section>
  );
};

export default HeroContact;
