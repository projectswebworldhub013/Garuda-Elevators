// src/pages/DesignerCabins.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTools,
  FaCogs,
  FaHome,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaRegStar,
  FaCrown,
} from "react-icons/fa";

import cabin1 from "../assets/images/cabins/c1.jpg";
import cabin2 from "../assets/images/cabins/c2.jpg";
import cabin3 from "../assets/images/cabins/c3.jpg";
import cabin4 from "../assets/images/cabins/c4.jpg";
import cabin5 from "../assets/images/cabins/c5.jpg";
import cabin6 from "../assets/images/cabins/c6.jpg";
import cabin7 from "../assets/images/cabins/c7.jpg";
import cabin8 from "../assets/images/cabins/c8.jpg";
import cabin9 from "../assets/images/cabins/c9.jpg";

const images = [
  cabin1, cabin2, cabin3,
  cabin4, cabin5, cabin6,
  cabin7, cabin8, cabin9
];

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.98,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.98,
  }),
};

export default function DesignerCabins() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const openAt = (i) => {
    setIndex(i);
    setDirection(0);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const showNext = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  }, []);
  const showPrev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, showNext, showPrev]);

  const onBackdropClick = (e) => {
    if (e.target.dataset.backdrop) closeModal();
  };

  return (
    <div className="bg-[#F7F7F5] text-[#0D0D0D] min-h-screen">
      {/* ---------- HEADER ---------- */}
      <header className="relative py-20 bg-gradient-to-br from-red-800 to-red-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Decorative Line + Icon */}
            <div className="flex items-center justify-center mb-6 gap-3">
              <div className="h-[2px] w-20 bg-white/50 rounded-full"></div>
              <FaRegStar className="text-2xl" />
              <div className="h-[2px] w-20 bg-white/50 rounded-full"></div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight uppercase">
              “Elevating Design Beyond Imagination”
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-100 max-w-2xl mx-auto">
              Where innovation meets elegance — premium designer lift cabins by Garuda Elevators.
            </p>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-24 bg-white rounded-full"></div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        {/* ---------- ENHANCED HEADING ---------- */}
<div className="relative flex flex-col items-center mb-12 text-center">
  <div className="flex items-center justify-center w-full max-w-5xl px-4">
    {/* Left Decorative Line */}
    <div className="flex-1 hidden sm:flex items-center justify-end">
      <div className="h-[2px] w-24 sm:w-32 bg-gradient-to-r from-red-500 to-red-700 rounded-full opacity-80" />
    </div>

    {/* Icon + Heading */}
    <div className="flex flex-col items-center px-4">
      <div className="flex items-center gap-3">
        <FaCrown className="text-red-800 text-3xl animate-pulse" />
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent uppercase tracking-tight">
          Designer Cabins by Garuda Elevators
        </h3>
        <FaCrown className="text-red-800 text-3xl hidden sm:block animate-pulse" />
      </div>

      <p className="mt-3 text-sm md:text-base text-gray-700 font-medium tracking-wide">
        In Association with <span className="text-red-800 font-semibold">ZIEHL ABEGG</span> — Germany
      </p>
      <p className="text-gray-600 text-sm md:text-base mt-1 max-w-xl">
        Elevating luxury and innovation — explore our premium range of designer lift cabins built for elegance and performance.
      </p>
    </div>

    {/* Right Decorative Line */}
    <div className="flex-1 hidden sm:flex items-center justify-start">
      <div className="h-[2px] w-24 sm:w-32 bg-gradient-to-l from-red-500 to-red-700 rounded-full opacity-80" />
    </div>
  </div>

  {/* Accent Line Below */}
  <div className="mt-6 h-[3px] w-20 sm:w-28 bg-gradient-to-r from-red-600 to-red-800 rounded-full opacity-90" />
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className=" overflow-hidden bg-white border border-[#E6E6E6] shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => openAt(i)}
            >
              <img
                src={src}
                alt={`Designer Cabin ${i + 1}`}
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- MODAL ---------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            data-backdrop="true"
            onClick={onBackdropClick}
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          >
            <motion.div
              className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm"
              >
                <FaTimes className="text-[#0D0D0D]" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-3 rounded-full shadow hover:bg-white"
              >
                <FaChevronLeft className="text-xl text-[#0D0D0D]" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-3 rounded-full shadow hover:bg-white"
              >
                <FaChevronRight className="text-xl text-[#0D0D0D]" />
              </button>

              {/* Sliding Image */}
              <div className="w-full h-[70vh] md:h-[80vh] bg-[#000] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={index}
                    src={images[index]}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    alt={`Designer Cabin ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </AnimatePresence>
              </div>

              {/* Caption + Enquiry */}
              <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between border-t border-[#E6E6E6]">
                <h4 className="text-lg font-semibold text-[#0D0D0D] mb-3 md:mb-0">
                  Designer Cabin {index + 1}
                </h4>
                <button
                  onClick={() => navigate("/contact")}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold hover:opacity-90 transition"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- CONTACT BADGE ---------- */}
    <section className="max-w-6xl mx-auto px-6 py-16">
  <div className="relative bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#7a0f0f] via-[#a82020] to-[#7a0f0f]" />

    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-12">
      {/* Text Section */}
      <div className="text-center md:text-left max-w-2xl">
        <h4 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] mb-3">
          Ready to Elevate Your Space?
        </h4>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Experience premium designer cabins and modular shaft solutions by{" "}
          <span className="font-semibold text-[#7a0f0f]">Garuda Elevators</span>.  
          Let’s connect and bring your dream lift design to life.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center md:justify-end gap-4">
        <a
          href="tel:9035295330"
          className="px-6 py-3 rounded-full font-semibold text-white bg-[#7a0f0f] hover:bg-[#a82020] cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
        >
          Call Now
        </a>

        <Link
          to="/contact"
          className="px-6 py-3 rounded-full font-semibold border border-[#7a0f0f] text-[#7a0f0f] hover:bg-[#7a0f0f] hover:text-white cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>

    {/* Decorative Accent Bottom */}
    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#a82020] via-[#7a0f0f] to-transparent opacity-80" />
  </div>
</section>

    </div>
  );
}





