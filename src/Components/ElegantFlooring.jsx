import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegStar, FaTimes, FaStar, FaGem, FaCouch } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import f1 from "../assets/images/flooring/f1.png";
import f2 from "../assets/images/flooring/f2.png";
import f3 from "../assets/images/flooring/f3.png";
import f4 from "../assets/images/flooring/f4.png";
import f5 from "../assets/images/flooring/f5.png";
import f6 from "../assets/images/flooring/f6.png";

// Flooring Data
const floors = [
  {
    id: 1,
    name: "Basic Marble Finish",
    image: f1,
    description:
      "A simple marble-finish floor with a clean and smooth surface. It offers a practical, easy-to-maintain look commonly seen in household elevators and compact commercial lift cabins.",
    tags: ["Marble", "Clean", "Simple"],
  },
  {
    id: 2,
    name: "Standard Granite Surface",
    image: f2,
    description:
      "A regular granite surface known for its durability and scratch-resistant nature. This flooring is ideal for lifts that experience continuous use throughout the day.",
    tags: ["Granite", "Durable", "Regular"],
  },
  {
    id: 3,
    name: "Pebble Texture Floor",
    image: f3,
    description:
      "A natural pebble-texture floor offering a grounded and earthy appearance. A great choice for customers who prefer subtle, simple, and nature-inspired lift interiors.",
    tags: ["Pebble", "Natural", "Simple"],
  },
  {
    id: 4,
    name: "Wood Finish Laminate",
    image: f4,
    description:
      "A basic wood-finish laminate that provides a warm and welcoming feel inside the cabin. This flooring is popular for residential and low-traffic commercial elevators.",
    tags: ["Wood", "Warm", "Natural"],
  },
  {
    id: 5,
    name: "Plain White Vinyl Sheet",
    image: f5,
    description:
      "A plain white vinyl floor sheet that keeps the cabin bright and easy to clean. It blends well with any interior and is suitable for simple, budget-friendly elevator setups.",
    tags: ["Vinyl", "Bright", "Minimal"],
  },
  {
    id: 6,
    name: "Basic Rubber Mat Flooring",
    image: f6,
    description:
      "A sturdy rubber-mat flooring designed for slip resistance and long-term use. Commonly used in service elevators, goods lifts, and areas requiring high functional reliability.",
    tags: ["Rubber", "Functional", "Strong"],
  },
];

export default function ElegantFlooring() {
  const [selectedFloor, setSelectedFloor] = useState(null);

  return (
    <div className="bg-[#F7F7F5] text-[#0D0D0D] min-h-screen">

      {/* ===================== HEADER ===================== */}
      <header className="relative py-20 bg-gradient-to-br from-red-800 to-red-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <div className="flex items-center justify-center mb-6 gap-3">
            <div className="h-[2px] w-20 bg-white/50 rounded-full"></div>
            <FaRegStar className="text-2xl" />
            <div className="h-[2px] w-20 bg-white/50 rounded-full"></div>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight uppercase">
            “Elegant Elevator Flooring”
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-100 max-w-2xl mx-auto">
            Bringing strength, style, and sophistication to every lift cabin.
          </p>

          <div className="mt-8 h-1 w-24 bg-white rounded-full"></div>
        </div>
      </header>

      {/* ===================== CONTENT ===================== */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="relative flex flex-col items-center mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-center">
            Explore Premium Flooring Options
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-700 font-medium tracking-wide text-center">
            Designed for durability — built for luxury & long-lasting performance.
          </p>
          <div className="mt-4 h-1 w-20 bg-red-800 rounded-full"></div>
        </div>

        {/* ===================== FLOOR GRID ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {floors.map((floor) => (
            <motion.div
              key={floor.id}
              whileHover={{
                scale: 1.04,
                rotateX: 6,
                rotateY: -6,
                transition: { duration: 0.3 },
              }}
              onClick={() => setSelectedFloor(floor)}
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer 
              bg-white/40 backdrop-blur-xl border border-white/60"
            >
              {/* Image Section */}
              <div className="relative h-[330px] overflow-hidden group">
                <img
                  src={floor.image}
                  alt={floor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Floating Name Badge */}
                <div className="absolute top-3 left-3 bg-zinc-800 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-lg z-10">
                  {floor.name}
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
              </div>

              {/* Content */}
              <div className="p-5 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-xl">
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {floor.description}
                </p>

                <div className="w-9 h-9 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition ml-auto">
                  <FiArrowRight size={18} className="text-red-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== MODAL ===================== */}
      <AnimatePresence>
        {selectedFloor && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFloor(null)}
            />

            {/* Modal */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-[95%] max-w-4xl -translate-x-1/2 -translate-y-1/2 
              bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row 
              max-h-[90vh] md:max-h-[70vh]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full h-64 md:h-auto bg-gray-100">
                <img
                  src={selectedFloor.image}
                  alt={selectedFloor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full p-5 md:p-7 flex flex-col justify-center space-y-4 text-center md:text-left overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {selectedFloor.name}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {selectedFloor.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {selectedFloor.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 bg-gray-100 text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {(tag === "Premium" || tag === "Glossy" || tag === "Strong") && <FaStar size={12} />}
                      {(tag === "Luxury" || tag === "Luxurious") && <FaGem size={12} />}
                      {(tag === "Wooden" || tag === "Warm") && <FaCouch size={12} />}
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enquiry Button */}
                <Link
                  to="/contact"
                  className="inline-block mt-4 bg-red-800 hover:bg-red-900 text-white font-medium text-sm px-6 py-2 rounded-full transition self-center md:self-start"
                >
                  Get Enquiry
                </Link>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedFloor(null)}
                className="cursor-pointer absolute top-3 right-3 bg-white p-1 rounded-full shadow hover:bg-gray-100"
              >
                <FaTimes size={18} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
