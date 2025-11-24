import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/images/hero/h1.jpeg";
import img2 from "../assets/images/hero/h4.jpg";
import img3 from "../assets/images/hero/h3.jpg";

const colors = {
  maroonRed: "#800000",
  deepCrimson: "#A01818",
  pureBlack: "#0D0D0D",
  pureWhite: "#FFFFFF",
  offWhite: "#F7F7F5",
  darkCharcoal: "#1A1A1A",
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

  // Auto-slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden text-white select-none">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Garuda Elevators"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-8 md:px-16 lg:px-24">
        
        {/* Left Content */}
        <div className="max-w-2xl text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 transition-all duration-700 ease-in-out">
            Elevating Excellence Since{" "}
            <span className="text-[#FFD7D7]">2010</span>
            <br />
            with <span className="text-[#FFBBBB]">Garuda Elevators</span>
          </h1>

          <p
            className="max-w-lg mb-10 text-base md:text-lg text-[#f3f3f3]/90"
            style={{ lineHeight: "1.6" }}
          >
            Garuda Elevators in Malleswaram West, Bangalore, has been redefining
            vertical transportation since 2010 — providing advanced, safe, and
            efficient elevator solutions, from capsule to hydraulic systems,
            crafted with precision and trust.
          </p>

          <div className="flex gap-5">
            <Link to="/services">
              <button
                className="px-7 py-3 rounded-full text-sm md:text-base font-semibold cursor-pointer transition-transform duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(90deg, ${colors.maroonRed}, ${colors.deepCrimson})`,
                  color: colors.pureWhite,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                }}
              >
                Explore Services
              </button>
            </Link>

            <button
              onClick={() => (window.location.href = "/about")}
              className="px-7 py-3 rounded-full border text-sm md:text-base font-semibold cursor-pointer hover:bg-white/10 transition-all duration-300"
              style={{
                borderColor: colors.pureWhite,
                color: colors.pureWhite,
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section - Quote + Icons */}
        <div className="flex flex-col items-end justify-center text-right space-y-8 mt-12 md:mt-0">
          <p className="max-w-sm leading-relaxed text-sm md:text-base italic text-[#F0F0F0]/80">
            “We don’t just lift people — we lift experiences. Reliability,
            safety, and innovation drive every rise with Garuda Elevators.”
          </p>

          {/* Social Icons */}
          <div className="flex flex-col gap-4 items-center">
            {[
              { icon: <FaFacebookF size={18} />, href: "https://facebook.com" },
              { icon: <FaInstagram size={18} />, href: "https://instagram.com" },
              { icon: <FaLinkedinIn size={18} />, href: "https://linkedin.com" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/50 hover:bg-white/20 transition-all duration-300"
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
