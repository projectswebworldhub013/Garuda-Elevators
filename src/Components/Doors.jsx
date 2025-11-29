import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRegStar,
  FaDoorOpen,
  FaStar,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import door1 from "../assets/images/doors/d1.jpg";
import door2 from "../assets/images/doors/d2.jpg";
import door3 from "../assets/images/doors/d3.jpg";
import door4 from "../assets/images/doors/d4.jpg";
import door5 from "../assets/images/doors/d5.jpg";
import door6 from "../assets/images/doors/d6.jpg";

// ===================== DOOR DATA =====================
const doors = [
  {
    id: 1,
    name: "Golden Luxe Glass Door",
    image: door1,
    description:
      "An ultra-premium glass door framed with a luxurious golden metallic structure, crafted for high-end residences, boutique hotels, and elite commercial elevators.",
    tags: ["Golden Finish", "Luxury", "Premium Glass"],
  },
  {
    id: 2,
    name: "Steel-Structured Glass Vision Door",
    image: door2,
    description:
      "A contemporary elevator door featuring a robust stainless-steel frame combined with a crystal-clear glass panel, perfect for modern architecture.",
    tags: ["Steel Body", "Glass Panel", "Modern"],
  },
  {
    id: 3,
    name: "Ultra-Sleek Modern Glass Door",
    image: door3,
    description:
      "A cutting-edge full-glass elevator door with a minimalistic, sleek profile. Ideal for premium corporate buildings and futuristic spaces.",
    tags: ["Sleek", "Modern", "Full Glass"],
  },
  {
    id: 4,
    name: "Classic Metal Frame Door with Glass Center",
    image: door4,
    description:
      "A sophisticated blend of classic elevator styling and modern transparency, featuring a metallic body with a refined glass center panel.",
    tags: ["Classic", "Metallic", "Glass Center"],
  },
  {
    id: 5,
    name: "Panoramic Full-Glass Sleek Door",
    image: door5,
    description:
      "A panoramic full-glass door with a slim structural frame, offering maximum visibility and an ultra-modern aesthetic.",
    tags: ["Full Glass", "Panoramic", "Sleek Design"],
  },
  {
    id: 6,
    name: "Premium Heavy-Duty Metallic Door",
    image: door6,
    description:
      "A fully metallic, heavy-duty elevator door engineered for strength and long-term performance, ideal for commercial environments.",
    tags: ["Heavy-Duty", "Metallic", "Strong Build"],
  },
];

export default function Doors() {
  const [selectedDoor, setSelectedDoor] = useState(null);

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
            “Premium Lift Doors Collection”
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-100 max-w-2xl mx-auto">
            Explore modern, durable, and stylish lift door solutions crafted for safety and elegance.
          </p>

          <div className="mt-8 h-1 w-24 bg-white rounded-full"></div>
        </div>
      </header>

      {/* ===================== CONTENT ===================== */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="relative flex flex-col items-center mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-center">
            Choose from Our Door Collection
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-700 font-medium tracking-wide text-center">
            Safe, stylish, and engineered with precision for modern lift systems.
          </p>

          <div className="mt-4 h-1 w-20 bg-red-800 rounded-full"></div>
        </div>

        {/* ===================== GRID ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {doors.map((door) => (
            <motion.div
              key={door.id}
              onClick={() => setSelectedDoor(door)}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer 
              bg-white/60 backdrop-blur-lg border border-white/40 hover:border-white/60 
              transition-all duration-300 group"
            >
              {/* Background Image */}
              <div className="h-[360px] w-full overflow-hidden relative">
                <img
                  src={door.image}
                  alt={door.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                />

                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Floating Title */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold drop-shadow-lg">
                    {door.name}
                  </h3>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              </div>

              {/* Description + Arrow */}
              <div className="p-4 flex justify-between items-center">
                <p className="text-xs text-gray-600 max-w-[80%] line-clamp-2">
                  {door.description}
                </p>
                <div className="w-9 h-9 rounded-full bg-gray-100 hover:bg-red-800 hover:text-white 
                flex items-center justify-center transition">
                  <FiArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== MODAL ===================== */}
      <AnimatePresence>
        {selectedDoor && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoor(null)}
            />

            {/* Modal */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-[95%] max-w-4xl 
                -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl 
                overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[75vh]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedDoor(null)}
                className="cursor-pointer absolute top-3 right-3 text-gray-700 hover:text-red-700 
                  text-xl z-50 transition"
              >
                ✕
              </button>

              {/* Image */}
              <div className="md:w-1/2 w-full h-64 md:h-auto bg-gray-100">
                <img
                  src={selectedDoor.image}
                  alt={selectedDoor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full p-5 md:p-7 overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {selectedDoor.name}
                </h3>

                <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
                  {selectedDoor.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mt-4">
                  {selectedDoor.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-gray-100 px-2 py-1 
                        rounded-full text-xs font-medium"
                    >
                      {tag === "Golden Finish" && <FaStar size={12} />}
                      {tag === "Steel Body" && <FaShieldAlt size={12} />}
                      {tag === "Modern" && <FaCogs size={12} />}
                      {tag === "Classic" && <FaDoorOpen size={12} />}
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enquiry Button */}
                <a
                  href="/contact"
                  className="inline-block mt-5 bg-red-800 text-white 
                    px-5 py-2 rounded-full hover:bg-red-900 transition"
                >
                  Get Enquiry
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
