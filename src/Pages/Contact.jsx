// src/pages/ContactPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import bgContact from "../assets/images/contactbg.jpg"; // ✅ Ensure the image exists
// import MapSection from "../Components/MapSection";
import HeroContact from "../Components/HeroContact";

const ContactPage = () => {
  return (
    <>
      <HeroContact />

      <section className="w-full min-h-screen flex flex-col lg:flex-row text-[#0D0D0D] font-sans bg-[#F7F7F5]">
        {/* Left Side */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 bg-[#FFFFFF] px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between shadow-md"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6 border-b-4 border-[#FF0000] inline-block pb-2 text-[#0D0D0D]">
                Let’s Get in Touch
              </h1>
              <p className="text-lg font-medium text-[#666666] mb-10">
                We’re here to answer your queries and assist you with all your elevator
                requirements — from installations to maintenance.
              </p>

              <div id="contact" className="space-y-6 text-sm sm:text-base text-[#0D0D0D]">
                <div>
                  <h4 className="font-bold text-[#0D0D0D]">Phone</h4>
                  <p>+91 9035295330</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0D0D0D]">Email</h4>
                  <p>info@garudaelevators.in</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0D0D0D]">Corporate Office</h4>
                  <p>
                    Plot No.520, Ground Floor, 2nd Main, A Block, 2nd Stage, <br />
                    Next to Orion Mall, Next To Vivekananda College, <br />
                    Rajajinagar, Malleswaram West – 560055, <br />
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-4 text-lg text-[#666666]">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000] transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000] transition"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center shadow-md"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgContact})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000b4] opacity-70"></div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/info@garudaelevators.in"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-16 text-[#FFFFFF]"
          >
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-[#FF0000] pb-1 inline-block">
              Contact Form
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-[#E6E6E6] p-2 focus:outline-none text-white placeholder-[#E6E6E6]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-[#E6E6E6] p-2 focus:outline-none text-white placeholder-[#E6E6E6]"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-[#E6E6E6] p-2 focus:outline-none text-white placeholder-[#E6E6E6]"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-[#E6E6E6] p-2 focus:outline-none text-white placeholder-[#E6E6E6]"
              />
              <textarea
                name="message"
                placeholder="Tell us what you're interested in"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-[#E6E6E6] p-2 focus:outline-none resize-none h-24 text-white placeholder-[#E6E6E6]"
              ></textarea>

              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 bg-linear-to-r from-[#FF0000] to-[#A01818] text-white font-semibold py-3 mt-4 rounded-md hover:from-[#B22222] hover:to-[#FF0000] transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>

            {/* Hidden Inputs for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://garudaelevators.in/"
            />
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      {/* <MapSection /> */}
    </>
  );
};

export default ContactPage;
