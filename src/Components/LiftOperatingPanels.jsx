import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegStar, FaTimes, FaStar, FaGem, FaCouch } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import panel1 from "../assets/images/buttons/b11.jpg";
import panel2 from "../assets/images/buttons/b2.jpg";
import panel3 from "../assets/images/buttons/b3.jpg";
import panel4 from "../assets/images/buttons/b4.jpg";
import panel5 from "../assets/images/buttons/b5.jpg";
import panel6 from "../assets/images/buttons/b6.jpg";

// ===================== PANEL DATA =====================
const panels = [
  {
    id: 1,
    name: "Modern Button COP",
    image: panel1,
    description:
      "A stylish stainless steel COP with high-quality tactile buttons and long-lasting durability.",
    tags: ["Button Type", "Stainless Steel", "Durable"],
  },
  {
    id: 2,
    name: "Premium Touch COP",
    image: panel2,
    description:
      "A futuristic digital touch-based COP with smooth LED indicators and premium controls.",
    tags: ["Touch Panel", "Digital", "Premium"],
  },
  {
    id: 3,
    name: "Glass Touch Interface",
    image: panel3,
    description:
      "A luxury tempered-glass interface offering advanced sensitivity and modern aesthetics.",
    tags: ["Glass Touch", "Luxury", "Modern"],
  },
  {
    id: 4,
    name: "Classic Button COP",
    image: panel4,
    description:
      "Traditional illuminated button COP designed for durability and daily commercial use.",
    tags: ["Button Type", "Reliable", "Long Life"],
  },
  {
    id: 5,
    name: "Hybrid Smart COP",
    image: panel5,
    description:
      "A hybrid panel with tactile buttons plus a smart digital display offering a refined experience.",
    tags: ["Hybrid", "Smart", "Display"],
  },
  {
    id: 6,
    name: "Elite Touch Display COP",
    image: panel6,
    description:
      "A full-screen touch display with ultra-responsive controls and high-end visual appeal.",
    tags: ["Full Touch", "High-End", "Elegant"],
  },
];

export default function LiftOperatingPanels() {
  const [selectedPanel, setSelectedPanel] = useState(null);

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
            “Lift Car Operating Panels”
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-100 max-w-2xl mx-auto">
            Explore state-of-the-art COP systems — including both button and advanced touch models.
          </p>

          <div className="mt-8 h-1 w-24 bg-white rounded-full"></div>
        </div>
      </header>

      {/* ===================== CONTENT ===================== */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20">

        <div className="relative flex flex-col items-center mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-center">
            Our Premium COP Collection
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-700 font-medium tracking-wide text-center">
            Designed for performance, aesthetics, and user comfort.
          </p>
          <div className="mt-4 h-1 w-20 bg-red-800 rounded-full"></div>
        </div>

        {/* ===================== GRID ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {panels.map((panel) => (
            <motion.div
              key={panel.id}
              whileHover={{
                scale: 1.04,
                rotateX: 6,
                rotateY: -6,
                transition: { duration: 0.3 },
              }}
              onClick={() => setSelectedPanel(panel)}
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer 
              bg-white/40 backdrop-blur-xl border border-white/60"
            >
              {/* Image Section */}
              <div className="relative h-[330px] overflow-hidden group">
                <img
                  src={panel.image}
                  alt={panel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Floating Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {panel.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full text-white bg-black/40 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
              </div>

              {/* Content */}
              <div className="p-5 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-xl">
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{panel.name}</h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {panel.description}
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
        {selectedPanel && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPanel(null)}
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
                  src={selectedPanel.image}
                  alt={selectedPanel.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full p-5 md:p-7 flex flex-col justify-center space-y-4 text-center md:text-left overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {selectedPanel.name}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {selectedPanel.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {selectedPanel.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 bg-gray-100 text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {(tag === "Button Type" || tag === "Durable" || tag === "Reliable") && (
                        <FaStar size={12} />
                      )}
                      {(tag === "Touch Panel" || tag === "Digital" || tag === "Full Touch") && (
                        <FaGem size={12} />
                      )}
                      {(tag === "Luxury" || tag === "Elegant" || tag === "Premium") && (
                        <FaCouch size={12} />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enquiry Button */}
                <Link
                  to="/contact"
                  className="inline-block mt-4 bg-red-800 hover:bg-red-900 text-white font-medium text-sm px-6 py-2 rounded-full transition"
                >
                  Get Enquiry
                </Link>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedPanel(null)}
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
