import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserTie, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const testimonials = [
  {
    name: "Arjun Mehta",
    designation: "Apartment Owner, Noida",
    rating: 5,
    text: "“Garuda Elevators installed a passenger lift in our building — the design, finish, and smooth operation exceeded our expectations. Truly reliable service!”",
  },
  {
    name: "Ritika Sharma",
    designation: "Office Manager, Gurugram",
    rating: 4.5,
    text: "“Professional and punctual team. The new elevator in our corporate office has transformed accessibility — great safety features and elegant interiors.”",
  },
  {
    name: "Rahul Verma",
    designation: "Hotel Owner, Delhi",
    rating: 5,
    text: "“The capsule lift Garuda built for our hotel has become a showpiece. Guests often compliment its look and comfort. Excellent craftsmanship and service!”",
  },
  {
    name: "Nisha Chauhan",
    designation: "Homeowner, Aligarh",
    rating: 4,
    text: "“Smooth installation and excellent after-sales support. Their team guided us perfectly in choosing the right home lift for our duplex.”",
  },
  {
    name: "Sandeep Yadav",
    designation: "Builder, Ghaziabad",
    rating: 5,
    text: "“Garuda Elevators is our go-to partner for all residential projects. Top-notch quality, modern designs, and timely completion — highly recommended.”",
  },
  {
    name: "Anjali Patel",
    designation: "Hospital Administrator, Noida",
    rating: 4.5,
    text: "“We needed reliable patient elevators for our new hospital wing — Garuda delivered beyond expectations. Smooth, quiet, and extremely safe.”",
  },
  {
    name: "Vikram Singh",
    designation: "Factory Owner, Greater Noida",
    rating: 4,
    text: "“Installed a freight lift for our factory — excellent performance and durability. Garuda’s maintenance team is very responsive and skilled.”",
  },
  {
    name: "Meera Joshi",
    designation: "Architect, Delhi NCR",
    rating: 5,
    text: "“Garuda Elevators balances aesthetics and technology beautifully. Their customized designs fit perfectly with the modern spaces we create.”",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => (prev === 4 ? testimonials.length : 4));
  };

  return (
    <section className="py-16 px-4 bg-[#F7F7F5] relative overflow-hidden">
      {/* ===== Heading Section ===== */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaQuoteLeft className="text-[#FF0000] text-2xl md:text-3xl" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0D0D0D]">
              “Voices That Lift Us Higher”
            </h2>
            <FaQuoteRight className="text-[#FF0000] text-2xl md:text-3xl" />
          </div>

          <p className="text-[#666666] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from our happy clients who have experienced excellence,
            innovation, and reliability with{" "}
            <span className="font-semibold text-[#B22222]">
              Garuda Elevators
            </span>.
          </p>
        </motion.div>

        {/* Decorative Divider */}
        <div className="flex justify-center items-center mt-6">
          <div className="h-[2px] w-16 bg-[#FF0000]"></div>
          <FaStar className="text-[#FF0000] mx-3 text-lg" />
          <div className="h-[2px] w-16 bg-[#FF0000]"></div>
        </div>
      </div>

      {/* ===== Testimonial Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          {testimonials.slice(0, visibleCount).map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: false, amount: 0.2 }}
              exit={{ opacity: 0, y: 30 }}
              className="relative bg-[#FFFFFF] rounded-2xl mt-5 shadow-xl overflow-hidden border border-[#E6E6E6] hover:shadow-2xl transition-all duration-300"
            >
              {/* Header Tab */}
              <div className="absolute top-0 left-0 bg-[#eb0000] text-[#FFFFFF] px-4 py-2 rounded-br-2xl z-10">
                <div className="font-semibold text-sm sm:text-base">
                  {t.name}
                </div>
                <div className="text-xs sm:text-sm opacity-90">
                  {t.designation}
                </div>
              </div>

              {/* User Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false }}
                className="mt-10 absolute -top-8 right-4 bg-[#FFFFFF] rounded-full p-2 shadow-md z-20"
              >
                <FaUserTie className="w-8 h-8 text-[#FF0000]" />
              </motion.div>

              {/* Card Body */}
              <div className="pt-12 pb-6 px-6 flex flex-col h-full">
                {/* Star Ratings */}
                <div className="mt-10 flex items-center mb-3">
                  {Array.from({ length: 5 }).map((_, idx) =>
                    idx < Math.floor(t.rating) ? (
                      <AiFillStar key={idx} className="w-5 h-5 text-[#FF0000]" />
                    ) : t.rating % 1 !== 0 && idx === Math.floor(t.rating) ? (
                      <AiFillStar
                        key={idx}
                        className="w-5 h-5 text-[#FF0000] opacity-60"
                      />
                    ) : (
                      <AiOutlineStar key={idx} className="w-5 h-5 text-[#E6E6E6]" />
                    )
                  )}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#0D0D0D] text-sm leading-relaxed flex-grow">
                  {t.text}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ===== Load More Button ===== */}
      <div className="flex justify-center mt-10">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleLoadMore}
          className="cursor-pointer px-6 py-3 bg-[#FF0000] text-[#FFFFFF] font-semibold rounded-full shadow-md hover:bg-[#A01818] transition-all duration-300"
        >
          {visibleCount === 4 ? "Load More" : "Show Less"}
        </motion.button>
      </div>
    </section>
  );
}
