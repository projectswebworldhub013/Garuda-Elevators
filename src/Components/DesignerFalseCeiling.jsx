import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegStar, FaTimes, FaStar, FaGem, FaCloud } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// === Import Ceiling Images ===
import fc1 from "../assets/images/ceiling/c1.jpg";
import fc2 from "../assets/images/ceiling/c2.png";
import fc3 from "../assets/images/ceiling/c3.png";
import fc4 from "../assets/images/ceiling/c4.png";
import fc5 from "../assets/images/ceiling/c5.png";
import fc6 from "../assets/images/ceiling/c6.png";

// === False Ceiling Data ===
const ceilings = [
  {
    id: 1,
    name: "Linear Panel Ceiling",
    image: fc1,
    description:
      "A clean linear-panel ceiling featuring subtle metallic accents and gently diffused lighting. Its straight-line pattern offers a neat, balanced look that complements both commercial and residential elevator cabins without overpowering the interior, ensuring a modern appearance with long-lasting visual consistency.",
    tags: ["Linear", "Warm", "Simple"],
  },
  {
    id: 2,
    name: "Classic Frosted Glass Ceiling",
    image: fc2,
    description:
      "A frosted glass ceiling designed to provide soft, uniform illumination across the cabin. Its clean, understated appearance enhances visibility while creating a pleasant and calm ambiance, ideal for elevators used throughout the day and suitable for maintaining a bright, soothing travel experience.",
    tags: ["Glass", "Soft Light", "Clean"],
  },
  {
    id: 3,
    name: "Standard Golden Panel Ceiling",
    image: fc3,
    description:
      "A traditional golden-finish ceiling paired with mellow, warm lighting. The subtle shine of the panels adds a gentle touch of richness while maintaining a practical and familiar look commonly preferred in commercial lift interiors, offering timeless elegance with dependable everyday usability.",
    tags: ["Golden", "Warm", "Standard"],
  },
  {
    id: 4,
    name: "Basic Wooden Panel Ceiling",
    image: fc4,
    description:
      "A simple wooden-textured ceiling that blends natural tones with soft illumination. Its warm and steady appearance creates a welcoming feel, making it well-suited for elevators in offices, apartments, and small commercial spaces, adding comforting aesthetics with a touch of earthy sophistication.",
    tags: ["Wood", "Warm", "Simple"],
  },
  {
    id: 5,
    name: "Soft White Panel Ceiling",
    image: fc5,
    description:
      "A plain white ceiling with evenly distributed lighting that brightens the entire lift cabin. Its neutral design offers excellent visibility and a clean, clutter-free aesthetic suitable for any type of elevator environment, promoting clarity, simplicity, and a universally appealing modern atmosphere.",
    tags: ["White", "Bright", "Plain"],
  },
  {
    id: 6,
    name: "Standard Metallic Ceiling",
    image: fc6,
    description:
      "A basic metallic ceiling equipped with simple light panels that deliver reliable illumination. Durable, practical, and easy to maintain, it is a popular choice for elevators requiring a straightforward and long-lasting design, ensuring dependable performance even in high-usage commercial installations.",
    tags: ["Metal", "Simple", "Neutral"],
  }
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
