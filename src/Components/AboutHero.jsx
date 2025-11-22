import React from "react";
import { Link } from "react-router-dom";
import { FaTools, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/abouthero2.jpg"; // Ensure this image exists or update the path

const AboutHero = () => {
  return (
    <section
      className="relative h-[70vh] w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/40 to-[#0D0D0D]/40 z-0" />

      {/* Content */}
      <div className="z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-snug text-[#FFFFFF]">
          About{" "}
          <span className="bg-gradient-to-r from-[#FF0000] to-[#A01818] text-transparent bg-clip-text">
            Garuda Elevators
          </span>
        </h1>

        {/* Short Subtext */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#E6E6E6] leading-relaxed max-w-2xl mx-auto">
          Garuda Elevators is a Bangalore-based company dedicated to providing
          innovative, reliable, and safe elevator and escalator solutions for
          residential, commercial, and industrial needs across India.
        </p>

        {/* Features */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[#FFFFFF] text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-[#FF0000] text-lg sm:text-xl" />
            <span className="font-medium">Advanced Safety</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTools className="text-[#A01818] text-lg sm:text-xl" />
            <span className="font-medium">Expert Maintenance</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/gallery"
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#FF0000] to-[#A01818] text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-300 flex items-center gap-2"
          >
            Explore Our Work <FaArrowRight />
          </Link>
          <a
            href="mailto:info@garudaelevators.in"
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 border-2 border-[#FFFFFF] text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-[#FFFFFF] hover:text-[#0D0D0D] transition duration-300 flex items-center gap-2"
          >
            Contact Us <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
