// src/components/PartnersMarquee.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ✅ Import only 7 partner logos
import axis from "../assets/images/logos/anglo.jpeg";
import bajaj from "../assets/images/logos/jones.png";
import godrej from "../assets/images/logos/kapoor.jpeg";
import whirlpool from "../assets/images/logos/navachethana.jpeg";
import sbi from "../assets/images/logos/ncc.jpeg";
import wipro from "../assets/images/logos/sduar.png";
import bpcl from "../assets/images/logos/veer.jpeg";

const logos = [axis, bajaj, godrej, whirlpool, sbi, wipro, bpcl];

export default function PartnersMarquee() {
  const [duration, setDuration] = useState(45);

  // ✅ Adjust animation speed for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration(25); // faster on mobile
      } else {
        setDuration(45); // smooth on desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-8 bg-[#F7F7F5] overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0D0D0D]">
          Trusted by Leading Partners
        </h2>
        <p className="text-[#666666] mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Garuda Elevators proudly collaborates with
          <span className="text-[#B22222] font-semibold">
            {" "}
            7 trusted brands{" "}
          </span>
          that value our quality and commitment to excellence.
        </p>
      </div>

      
<div className="relative w-full overflow-hidden">
  <div className="flex whitespace-nowrap">
    {/* Original track */}
    <motion.div
      className="flex gap-14 items-center"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: duration,
      }}
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-36 md:w-44 h-24 md:h-28 bg-[#FFFFFF] rounded-2xl border border-[#E6E6E6] shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300"
        >
          <img
            src={logo}
            alt={`Partner Logo ${index + 1}`}
            className="max-h-16 md:max-h-20 object-contain px-2"
          />
        </div>
      ))}

      {/* ✅ Add an invisible spacer for gap */}
      <div className="w-14 md:w-20"></div>
    </motion.div>

    {/* Duplicate for seamless continuation */}
    <motion.div
      className="flex gap-14 items-center"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: duration,
      }}
    >
      {logos.map((logo, index) => (
        <div
          key={`dup-${index}`}
          className="flex-shrink-0 w-36 md:w-44 h-24 md:h-28 bg-[#FFFFFF] rounded-2xl border border-[#E6E6E6] shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300"
        >
          <img
            src={logo}
            alt={`Partner Logo Duplicate ${index + 1}`}
            className="max-h-16 md:max-h-20 object-contain px-2"
          />
        </div>
      ))}

      {/* ✅ Add another invisible spacer here too */}
      <div className="w-24 md:w-40"></div>
    </motion.div>
  </div>
</div>


      {/* ✅ Highlight Bar */}
      <div className="mt-12 h-1 w-24 bg-[#FF0000] mx-auto rounded-full"></div>
    </section>
  );
}
