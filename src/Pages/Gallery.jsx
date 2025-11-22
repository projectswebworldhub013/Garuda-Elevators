// src/components/Showcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img1 from "../assets/images/services/s1.jpg";
import img2 from "../assets/images/services/s2.jpg";
import img3 from "../assets/images/services/s3.jpg";
import img4 from "../assets/images/services/s4.jpg";
import img5 from "../assets/images/services/s5.jpg";
import img6 from "../assets/images/services/s6.jpg";
import img7 from "../assets/images/services/s7.jpg";
import img8 from "../assets/images/services/s8.jpg";
import img9 from "../assets/images/hero/h1.jpeg";
import img10 from "../assets/images/hero/h2.avif";
import img11 from "../assets/images/hero/h3.jpg";
import img12 from "../assets/images/hero/h4.jpg";

import HeroGallery from "../Components/HeroGallery";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  return (
    <>
      <HeroGallery />

      <section id="gallery" className="bg-[#F7F7F5] px-4 md:px-12 lg:px-20 py-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="font-semibold tracking-wide uppercase text-[#B22222]">
            Trusted & Innovative
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] leading-snug mt-2">
            Elevating Standards with <span className="text-[#FF0000]">Precision</span> & Design
          </h2>
          <div className="w-20 h-1 bg-[#FF0000] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-[#666666] text-base sm:text-lg">
            Discover how{" "}
            <span className="font-semibold text-[#A01818]">
              Garuda Elevators
            </span>{" "}
            blends modern engineering, safety, and elegance in every project —
            delivering high-quality elevator installations and upgrades that
            define excellence.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden cursor-pointer shadow-md rounded-lg group bg-[#FFFFFF] border border-[#E6E6E6]"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => openImage(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-[250px] sm:h-[220px] md:h-[240px] lg:h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-[#1A1A1A]/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                key={selectedImage}
                className="relative w-full max-w-6xl mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged"
                  className="w-full max-h-[85vh] object-contain rounded-xl bg-[#FFFFFF] p-2 border border-[#E6E6E6]"
                />

                {/* Close */}
                <button
                  className="absolute top-3 right-3 text-white text-lg bg-[#B22222] p-3 rounded-full hover:bg-[#A01818] transition"
                  onClick={closeModal}
                  aria-label="Close gallery modal"
                >
                  <FaTimes />
                </button>

                {/* Prev */}
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-lg bg-[#FF0000] p-3 rounded-full hover:bg-[#A01818] transition"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <FaArrowLeft />
                </button>

                {/* Next */}
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg bg-[#FF0000] p-3 rounded-full hover:bg-[#A01818] transition"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <FaArrowRight />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Gallery;
