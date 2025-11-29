import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/images/hero/h1.jpeg";
import img2 from "../assets/images/hero/h4.jpg";
import img3 from "../assets/images/hero/h3.jpg";
import brochurePDF from "../assets/images/cat.pdf"; // <-- IMPORT PDF

const colors = {
  maroonRed: "#800000",
  deepCrimson: "#A01818",
  pureWhite: "#FFFFFF",
};

const HeroSection = () => {
  const slides = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  // Preload images
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-slide every 5 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // PDF Handler
  const openBrochure = () => {
    window.open(brochurePDF, "_blank");
  };

  return (
    <section
      className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden text-white flex items-center select-none"
      style={{
        backgroundImage: `url(${slides[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl m-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
            Elevating Excellence Since{" "}
            <span className="text-[#FFD7D7]">2010</span>
            <br />
            with <span className="text-[#FFBBBB]">Garuda Elevators</span>
          </h1>

          <p className="max-w-lg mb-6 md:mb-10 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            Garuda Elevators in Malleswaram West, Bangalore, has been redefining
            vertical transportation since 2010 — providing safe and efficient elevator
            systems from capsule to hydraulic lifts.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">

            {/* NEW BROCHURE BUTTON */}
            <button
              onClick={openBrochure}
              className="px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
              transition-transform duration-300 hover:scale-105 shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${colors.maroonRed}, ${colors.deepCrimson})`,
              }}
            >
              Get Brochure
            </button>

            <button
              onClick={() => (window.location.href = "/about")}
              className="px-5 py-2 sm:px-6 sm:py-3 rounded-full border text-sm sm:text-base font-semibold 
              hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: colors.pureWhite }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-end text-right space-y-6 mt-10 md:mt-0">

          <p className="max-w-xs sm:max-w-sm leading-relaxed text-xs sm:text-sm md:text-base italic text-white/80">
            “We don’t just lift people — we lift experiences. Reliability, safety,
            and innovation drive every rise with Garuda Elevators.”
          </p>

          {/* SOCIAL ICONS */}
          <div className="hidden md:flex flex-col gap-3">
            {[
              { icon: <FaFacebookF size={16} />, href: "https://facebook.com" },
              { icon: <FaInstagram size={16} />, href: "https://instagram.com" },
              { icon: <FaLinkedinIn size={16} />, href: "https://linkedin.com" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full border border-white/50 hover:bg-white/20 transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
