// src/components/WhyChooseUs.jsx
import React from "react";
import { FaCogs, FaCheckCircle, FaBolt, FaShieldAlt } from "react-icons/fa";
import { MdArchitecture, MdOutlineDesignServices } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import why1 from "../assets/images/liftservice2.jpg"; // Replace with Garuda interior image
import why2 from "../assets/images/g5.jpg"; // Replace with Garuda tech image

const colors = {
  primaryRed: "#FF0000",
  deepCrimson: "#A01818",
  pureBlack: "#0D0D0D",
  pureWhite: "#FFFFFF",
  offWhite: "#F7F7F5",
  lightGray: "#E6E6E6",
  garnetRed: "#B22222",
  darkCharcoal: "#1A1A1A",
  warmGray: "#666666",
};

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full py-16 px-6 md:px-16"
      style={{ backgroundColor: colors.offWhite }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-center text-4xl sm:text-5xl md:text-6xl font-semibold mb-16"
          style={{ color: colors.pureBlack }}
        >
          WHY{" "}
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${colors.primaryRed}, ${colors.deepCrimson})`,
            }}
          >
            GARUDA ELEVATORS?
          </span>
        </h2>

        {/* Row 1 */}
        <div
          className="grid md:grid-cols-2 gap-10 items-center border-t border-b py-12"
          style={{ borderColor: colors.lightGray }}
        >
          {/* Image Left */}
          <div>
            <img
              src={why1}
              alt="Elegant Elevator Interiors"
              className="w-full h-[300px] md:h-[380px] object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Text Right */}
          <div className="leading-relaxed" style={{ color: colors.warmGray }}>
            {/* Row Heading */}
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2"
              style={{ color: colors.primaryRed }}
            >
              <MdOutlineDesignServices
                className="text-[#FF0000]"
                size={28}
              />
              Elegant Elevator Interiors
            </h3>

            <p className="text-base md:text-lg font-light mb-6">
              At{" "}
              <span
                className="font-semibold"
                style={{ color: colors.primaryRed }}
              >
                Garuda Elevators
              </span>
              , we blend{" "}
              <b style={{ color: colors.pureBlack }}>engineering precision</b>{" "}
              with <b style={{ color: colors.pureBlack }}>aesthetic design</b>{" "}
              to create elevators that elevate both functionality and luxury.
              Our lifts are crafted for seamless performance in{" "}
              <span
                className="font-semibold"
                style={{ color: colors.garnetRed }}
              >
                residential, commercial, and industrial spaces
              </span>
              .
            </p>

            {/* Icon Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#B22222]" />
                <span>Modern Design</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCogs className="text-[#FF0000]" />
                <span>Precision Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <MdArchitecture className="text-[#A01818]" />
                <span>Custom-Built Cabins</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-[#B22222]" />
                <span>Advanced Safety</span>
              </div>
            </div>

            {/* Button */}
            <Link to="/contact">
              <button
                className="cursor-pointer px-6 py-3 font-semibold rounded-lg shadow-md transition flex items-center gap-2"
                style={{
                  background: `linear-gradient(90deg, ${colors.primaryRed}, ${colors.deepCrimson})`,
                  color: colors.pureWhite,
                }}
              >
                Contact Us <HiOutlineArrowNarrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Row 2 */}
        <div
          className="grid md:grid-cols-2 gap-10 items-center border-b py-12 mt-12"
          style={{ borderColor: colors.lightGray }}
        >
          {/* Text Left */}
          <div className="leading-relaxed" style={{ color: colors.warmGray }}>
            {/* Row Heading */}
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2"
              style={{ color: colors.garnetRed }}
            >
              <FaBolt className="text-[#FF0000]" size={26} />
              Smart Elevator Technology
            </h3>

            <p className="text-base md:text-lg font-light mb-6">
              Combining innovation and reliability,{" "}
              <span
                className="font-semibold"
                style={{ color: colors.primaryRed }}
              >
                Garuda Elevators
              </span>{" "}
              integrates{" "}
              <b style={{ color: colors.pureBlack }}>
                intelligent control systems and energy-efficient solutions
              </b>{" "}
              to ensure smooth, safe, and high-performance elevator experiences.
              From touchless controls to advanced monitoring, our technology is{" "}
              <span
                className="font-semibold"
                style={{ color: colors.deepCrimson }}
              >
                future-ready
              </span>
              .
            </p>

            {/* Icon Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <FaBolt className="text-[#FF0000]" />
                <span>Energy Efficient</span>
              </div>
              <div className="flex items-center gap-2">
                <IoMdTrendingUp className="text-[#A01818]" />
                <span>Next-Gen Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#B22222]" />
                <span>Smart Controls</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-[#FF0000]" />
                <span>Maximum Safety</span>
              </div>
            </div>

            {/* Button */}
            <Link to="/showcase">
              <button
                className="cursor-pointer px-6 py-3 font-semibold rounded-lg shadow-md transition flex items-center gap-2"
                style={{
                  background: `linear-gradient(90deg, ${colors.garnetRed}, ${colors.deepCrimson})`,
                  color: colors.pureWhite,
                }}
              >
                Explore Our Work <HiOutlineArrowNarrowRight />
              </button>
            </Link>
          </div>

          {/* Image Right */}
          <div>
            <img
              src={why2}
              alt="Smart Elevator Technology"
              className="w-full h-[300px] md:h-[380px] object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
