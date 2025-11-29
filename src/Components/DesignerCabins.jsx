import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegStar, FaTimes, FaStar, FaGem, FaCouch } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import cabin1 from "../assets/images/cabins/c1.jpg";
import cabin2 from "../assets/images/cabins/c2.jpg";
import cabin5 from "../assets/images/cabins/c5.jpg";
import cabin6 from "../assets/images/cabins/c6.jpg";
import cabin8 from "../assets/images/cabins/c8.jpg";
import cabin10 from "../assets/images/cabins/c10.jpg";

// Cabin Data with expanded descriptions (unchanged as requested)
const cabins = [
  {
    id: 1,
    name: "Crystal Elegance",
    image: cabin1,
    description:
      "Glass transparency with a sleek modern design, creating an airy and elegant feel. Perfect for contemporary buildings, it blends light, space, and minimalism while ensuring durability and premium finishing.",
    tags: ["Modern", "Transparent", "Sleek"],
  },
  {
    id: 2,
    name: "Golden Prestige",
    image: cabin2,
    description:
      "Golden metallic touch with elegant design and superior quality finishes. A luxurious lift cabin ideal for commercial and premium residential projects, highlighting sophistication and craftsmanship in every detail.",
    tags: ["Luxury", "Metallic", "Elegant"],
  },
  {
    id: 3,
    name: "Regal Aura",
    image: cabin5,
    description:
      "Luxurious golden metallic finish with high-end detailing for a royal feel. This cabin embodies opulence and grandeur, making every lift ride a premium experience with premium materials and lighting.",
    tags: ["Royal", "Opulent", "Premium"],
  },
  {
    id: 4,
    name: "Wooden Harmony",
    image: cabin6,
    description:
      "Wooden body with golden light effect, blending classic elegance with modernity. Perfect for those who prefer warm tones and a traditional aesthetic with contemporary functionality.",
    tags: ["Wooden", "Warm", "Elegant"],
  },
  {
    id: 5,
    name: "Opulent Radiance",
    image: cabin8,
    description:
      "Golden designer walls and body, offering a royal and opulent experience. Ideal for luxury spaces where aesthetics and class define the environment, featuring intricate designs and premium lighting.",
    tags: ["Designer", "Golden", "Luxurious"],
  },
  {
    id: 6,
    name: "Metallic Class",
    image: cabin10,
    description:
      "Classy metallic body with sophisticated style, perfect for premium usage. This cabin merges industrial charm with high-end finishes, providing a sleek, professional look for modern buildings.",
    tags: ["Metallic", "Professional", "Classy"],
  },
];

export default function DesignerCabins() {
  const [selectedCabin, setSelectedCabin] = useState(null);

  return (
    <div className="bg-[#F7F7F5] text-[#0D0D0D] min-h-screen">
      {/* ===================== HEADER ===================== */}
      <header className="relative py-20 bg-gradient-to-br from-red-800 to-red-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <div className="flex items-center justify-center mb-6 gap-3">
            <div className="h-[2px] w-20 bg-white/50 rounded-full" />
            <FaRegStar className="text-2xl" />
            <div className="h-[2px] w-20 bg-white/50 rounded-full" />
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight uppercase">
            “Premium Designer Lift Cabins”
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-100 max-w-2xl mx-auto">
            Experience luxury, elegance, and innovation in every lift cabin we create.
          </p>

          <div className="mt-8 h-1 w-24 bg-white rounded-full" />
        </div>
      </header>

      {/* ===================== CONTENT SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="relative flex flex-col items-center mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-center">
            Explore Our Exclusive Collection
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-700 font-medium tracking-wide text-center">
            Crafted with precision — blending luxury, safety, and modern engineering.
          </p>

          <div className="mt-4 h-1 w-20 bg-red-800 rounded-full" />
        </div>

        {/* ===================== CABIN GRID ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabins.map((cabin) => (
            <motion.article
              key={cabin.id}
              whileHover={{
                scale: 1.04,
                rotateX: 6,
                rotateY: -6,
                transition: { duration: 0.3 },
              }}
              onClick={() => setSelectedCabin(cabin)}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer
                         bg-white/40 backdrop-blur-lg border border-white/60 hover:border-white/70
                         transition-all duration-300"
            >
              {/* image area */}
              <div className="relative h-[420px] md:h-[380px] lg:h-[420px] w-full overflow-hidden">
                <img
                  src={cabin.image}
                  alt={cabin.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* floating badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                  <FaStar className="text-yellow-300" />
                  <span className="font-medium">Featured</span>
                </div>

                {/* subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
              </div>

              {/* content area */}
              <div className="p-5 bg-gradient-to-b from-white/80 to-white/40">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 line-clamp-1">
                      {cabin.name}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-sm line-clamp-2">
                      {cabin.description}
                    </p>
                  </div>

                  {/* arrow CTA */}
                  <div className="ml-3 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center
                                    shadow-sm hover:bg-red-800 hover:text-white transition-colors duration-300">
                      <FiArrowRight className="text-black" />
                    </div>
                  </div>
                </div>

                {/* tags row */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cabin.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 bg-gray-100 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag === "Modern" && <FaStar size={12} />}
                      {tag === "Luxury" && <FaGem size={12} />}
                      {tag === "Elegant" && <FaCouch size={12} />}
                      {tag === "Transparent" && <FaRegStar size={12} />}
                      {tag === "Royal" && <FaGem size={12} />}
                      {tag === "Opulent" && <FaGem size={12} />}
                      {tag === "Premium" && <FaStar size={12} />}
                      {tag === "Wooden" && <FaCouch size={12} />}
                      {tag === "Warm" && <FaCouch size={12} />}
                      {tag === "Designer" && <FaGem size={12} />}
                      {tag === "Golden" && <FaGem size={12} />}
                      {tag === "Professional" && <FaStar size={12} />}
                      {tag === "Classy" && <FaStar size={12} />}
                      <span className="whitespace-nowrap">{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ===================== MODAL ===================== */}
      <AnimatePresence>
        {selectedCabin && (
          <>
            {/* overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCabin(null)}
            />

            {/* modal */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-[95%] max-w-4xl -translate-x-1/2 -translate-y-1/2
                         bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row
                         max-h-[90vh] md:max-h-[75vh]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.28 }}
            >
              {/* image side */}
              <div className="md:w-1/2 w-full h-64 md:h-auto bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedCabin.image}
                  alt={selectedCabin.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* content side (centered vertically) */}
              <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col justify-center text-center md:text-left overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  {selectedCabin.name}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {selectedCabin.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  {selectedCabin.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 bg-gray-100 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {(tag === "Modern" || tag === "Premium" || tag === "Professional") && (
                        <FaStar size={12} />
                      )}
                      {(tag === "Luxury" || tag === "Opulent" || tag === "Golden") && (
                        <FaGem size={12} />
                      )}
                      {(tag === "Elegant" || tag === "Wooden" || tag === "Warm") && (
                        <FaCouch size={12} />
                      )}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-block mt-6 bg-red-800 hover:bg-red-900 text-white font-medium text-sm px-6 py-2 rounded-full transition self-center md:self-start"
                >
                  Get Enquiry
                </Link>
              </div>

              {/* close */}
              <button
                onClick={() => setSelectedCabin(null)}
                className="cursor-pointer absolute top-3 right-3 bg-white p-1 rounded-full shadow hover:bg-gray-100"
                aria-label="Close"
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
