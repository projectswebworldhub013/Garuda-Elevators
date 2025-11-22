import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function VisionMissionSection() {
  return (
    <section className="relative bg-[#F7F7F5] py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0D0D0D] mb-4">
            Our <span className="text-[#FF0000]">Vision</span> &{" "}
            <span className="text-[#A01818]">Mission</span>
          </h2>
          <p className="text-[#666666] text-base md:text-lg max-w-3xl mx-auto">
            Driving innovation and elevating standards through world-class elevator
            solutions that redefine safety, comfort, and design excellence.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] rounded-2xl shadow-lg border border-[#E6E6E6] p-10 relative overflow-hidden group"
          >
            {/* Hover Gradient Border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#FF0000]/10 to-[#A01818]/10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#FF0000]/10 rounded-full">
                  <FaEye className="text-[#B22222] text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D0D0D]">Our Vision</h3>
              </div>
              <p className="text-[#666666] leading-relaxed text-base">
                To be India’s most trusted elevator brand by blending innovation, safety,
                and sustainability. Garuda Elevators envisions a future where every
                building moves smarter — powered by cutting-edge technology and
                impeccable craftsmanship.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] rounded-2xl shadow-lg border border-[#E6E6E6] p-10 relative overflow-hidden group"
          >
            {/* Hover Gradient Border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#A01818]/10 to-[#FF0000]/10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#A01818]/10 rounded-full">
                  <FaBullseye className="text-[#FF0000] text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D0D0D]">Our Mission</h3>
              </div>
              <p className="text-[#666666] leading-relaxed text-base">
                Our mission is to design, install, and maintain elevators that embody
                precision, safety, and reliability. We aim to create value through
                customer satisfaction, sustainable innovation, and consistent quality
                that elevates every experience.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to='/contact'>
           <button className="cursor-pointer px-8 py-3 font-semibold rounded-full text-[#FFFFFF] bg-[#FF0000] hover:bg-[#A01818] transition-all duration-300 shadow-md hover:shadow-xl">
              Learn More About Us
           </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
