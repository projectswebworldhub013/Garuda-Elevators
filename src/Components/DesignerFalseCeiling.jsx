import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegStar, FaTimes, FaStar, FaGem, FaCloud } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// === Import Ceiling Images ===
import fc1 from "../assets/images/false-ceiling/fc1.jpg";
import fc2 from "../assets/images/false-ceiling/fc2.jpg";
import fc3 from "../assets/images/false-ceiling/fc3.jpg";
import fc4 from "../assets/images/false-ceiling/fc4.jpg";
import fc5 from "../assets/images/false-ceiling/fc5.jpg";
import fc6 from "../assets/images/false-ceiling/fc6.jpg";

// === False Ceiling Data ===
const ceilings = [
  {
    id: 1,
    name: "Luxora Linear Ceiling",
    image: fc1,
    description:
      "A modern linear false ceiling crafted with elegant metallic accents and warm lighting. Perfect for residential and commercial elevator interiors, adding style and depth with contemporary detailing.",
    tags: ["Modern", "Elegant", "Premium"],
  },
  {
    id: 2,
    name: "Crystal Glow Ceiling",
    image: fc2,
    description:
      "Frosted crystal-inspired lighting with soft illumination that enhances the lift interior. A perfect combination of clarity, elegance, and balanced brightness.",
    tags: ["Crystal", "Bright", "Sleek"],
  },
  {
    id: 3,
    name: "Golden Aura Ceiling",
    image: fc3,
    description:
      "A designer golden-themed false ceiling with backlit patterns that reflect luxury and sophistication. Ideal for premium elevators with royal ambiance.",
    tags: ["Golden", "Royal", "Luxurious"],
  },
  {
    id: 4,
    name: "Wooden Harmony Ceiling",
    image: fc4,
    description:
      "Natural wood-inspired design blended with warm lighting effects. Gives a cozy and inviting feel while maintaining a modern architectural elegance.",
    tags: ["Wooden", "Warm", "Elegant"],
  },
  {
    id: 5,
    name: "Opulent Diamond Ceiling",
    image: fc5,
    description:
      "Geometric diamond pattern with soft golden illumination that creates a unique visual impact. A perfect choice for designer and high-end elevators.",
    tags: ["Designer", "Opulent", "Premium"],
  },
  {
    id: 6,
    name: "Metallic Star Ceiling",
    image: fc6,
    description:
      "Metallic false ceiling with star-dot light effects providing a futuristic and brilliant atmosphere for modern elevators.",
    tags: ["Metallic", "Futuristic", "Bright"],
  },
];

export default function DesignerFalseCeiling() {
  const [selectedItem, setSelectedItem] = useState(null);

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
            “Designer Elevator False Ceilings”
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-100 max-w-2xl mx-auto">
            Elevate the ambiance of every ride with luxury ceilings crafted for elegance.
          </p>

          <div className="mt-8 h-1 w-24 bg-white rounded-full"></div>
        </div>
      </header>

      {/* ===================== CONTENT SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="relative flex flex-col items-center mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-center">
            Explore Premium False Ceiling Designs
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-700 font-medium tracking-wide text-center">
            Luxury lighting, modern craftsmanship, and aesthetic perfection.
          </p>

          <div className="mt-4 h-1 w-20 bg-red-800 rounded-full"></div>
        </div>

        {/* ===================== GRID ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ceilings.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl cursor-pointer overflow-hidden"
            >
              <div className="relative h-[350px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3 flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                  {item.name}
                </h3>
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
                  <FiArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== MODAL ===================== */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            />

            {/* Modal */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-[95%] max-w-4xl 
              -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl 
              overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[70vh]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Side */}
              <div className="md:w-1/2 w-full h-64 md:h-auto bg-gray-100">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full p-4 md:p-6 space-y-4 overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {selectedItem.name}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedItem.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-gray-100 text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {tag === "Modern" && <FaStar size={12} />}
                      {tag === "Elegant" && <FaCloud size={12} />}
                      {tag === "Premium" && <FaGem size={12} />}
                      {tag === "Crystal" && <FaRegStar size={12} />}
                      {tag === "Bright" && <FaStar size={12} />}
                      {tag === "Sleek" && <FaCloud size={12} />}
                      {tag === "Golden" && <FaGem size={12} />}
                      {tag === "Royal" && <FaGem size={12} />}
                      {tag === "Luxurious" && <FaGem size={12} />}
                      {tag === "Wooden" && <FaCloud size={12} />}
                      {tag === "Warm" && <FaCloud size={12} />}
                      {tag === "Designer" && <FaGem size={12} />}
                      {tag === "Opulent" && <FaGem size={12} />}
                      {tag === "Metallic" && <FaStar size={12} />}
                      {tag === "Futuristic" && <FaStar size={12} />}
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-block bg-red-800 hover:bg-red-900 text-white 
                  font-medium text-sm px-6 py-2 rounded-full transition"
                >
                  Get Enquiry
                </Link>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 bg-white p-1 rounded-full shadow hover:bg-gray-100"
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
