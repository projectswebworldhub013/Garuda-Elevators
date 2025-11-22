// src/pages/SingleService.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaTimes,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaClipboardList,
  FaCogs,
  FaRegQuestionCircle,
  FaBuilding,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleService = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* Service Details Section */}
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12 items-stretch bg-linear-to-br from-white via-[#F7F7F5] to-[#E6E6E6]">
        {/* Left - Image */}
        <motion.div
          className="flex-1 flex justify-center items-stretch"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-auto object-cover rounded-2xl shadow-2xl border border-[#E6E6E6]"
          />
        </motion.div>

        {/* Right - Details */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Back link */}
          <button
            onClick={() => navigate("/services")}
            className="mb-4 flex items-center gap-2 text-[#666666] hover:text-[#FF0000] transition font-medium"
          >
            <FaArrowLeft /> Back to Services
          </button>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0D0D0D] flex items-center gap-3">
            <FaBuilding className="text-[#FF0000]" />
            {service.title}
          </h1>
          <p className="text-[#666666] mb-4">{service.shortDesc}</p>
          <p className="text-[#0D0D0D] leading-relaxed mb-6">
            {service.longDesc}
          </p>

          {/* Quick Points */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#0D0D0D] mb-4 flex items-center gap-2">
              <FaClipboardList className="text-[#FF0000]" />
              Key Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.quickPoints.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-[#666666] p-2 rounded-lg hover:bg-[#F7F7F5] transition"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <FaCheckCircle className="text-[#FF0000] mt-1" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate("/contact")}
              className="cursor-pointer border border-[#FF0000] text-[#FF0000] px-6 py-2 rounded-lg hover:bg-[#FF0000] hover:text-white transition transform hover:scale-105 flex items-center gap-2"
            >
              Enquiry <FaArrowRight />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer bg-linear-to-r from-[#FF0000] to-[#A01818] text-white font-semibold px-6 py-2 rounded-lg hover:shadow-lg hover:from-[#B22222] hover:to-[#FF0000] transition transform hover:scale-105 flex items-center gap-2"
            >
              <FaCogs /> Book Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* FAQs */}
      <div className="px-6 md:px-12 py-10 bg-[#F7F7F5]">
        <h2 className="text-2xl font-bold text-[#FF0000] mb-6 flex items-center gap-2">
          <FaRegQuestionCircle /> FAQs
        </h2>
        <div className="space-y-4">
          {service.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="border border-[#E6E6E6] rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="cursor-pointer w-full flex justify-between items-center px-4 py-4 text-left font-medium text-[#0D0D0D]"
                >
                  {faq.q}
                  {isOpen ? (
                    <FaChevronUp className="text-[#FF0000]" />
                  ) : (
                    <FaChevronDown className="text-[#FF0000]" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.8, 0.25, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 text-[#666666]">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-[#1A1A1A]/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm modal-overlay"
            onClick={handleOutsideClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-linear-to-br from-white to-[#F7F7F5] border border-[#E6E6E6]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer absolute top-4 right-4 text-[#666666] hover:text-[#FF0000] transition"
              >
                <FaTimes size={22} />
              </button>

              {/* Modal Title */}
              <h2 className="text-2xl font-bold mb-6 text-center text-[#FF0000] tracking-wide flex items-center justify-center gap-2">
                <FaCogs /> Book {service.title}
              </h2>

              {/* Booking Form */}
              <form
                className="space-y-5"
                action="mailto:Info@garudaelevators.in"
                method="POST"
                encType="text/plain"
              >
                {/* Name */}
                <div className="flex items-center border border-[#E6E6E6] rounded-lg px-4 py-3 bg-white focus-within:border-[#FF0000] transition">
                  <FaUser className="text-[#666666] mr-3" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full bg-transparent outline-none placeholder-[#666666]"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex items-center border border-[#E6E6E6] rounded-lg px-4 py-3 bg-white focus-within:border-[#FF0000] transition">
                  <FaPhone className="text-[#666666] mr-3" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full bg-transparent outline-none placeholder-[#666666]"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex items-center border border-[#E6E6E6] rounded-lg px-4 py-3 bg-white focus-within:border-[#FF0000] transition">
                  <FaEnvelope className="text-[#666666] mr-3" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent outline-none placeholder-[#666666]"
                    required
                  />
                </div>

                {/* Additional Details */}
                <textarea
                  name="message"
                  placeholder="Additional Details"
                  className="w-full border border-[#E6E6E6] rounded-lg px-4 py-3 bg-white outline-none placeholder-[#666666] resize-none focus:border-[#FF0000] transition"
                  rows="3"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="cursor-pointer w-full bg-linear-to-r from-[#FF0000] to-[#A01818] hover:from-[#B22222] hover:to-[#FF0000] text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <FaCheckCircle /> Confirm Booking
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SingleService;
