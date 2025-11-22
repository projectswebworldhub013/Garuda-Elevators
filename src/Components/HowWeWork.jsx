// src/components/HowWeWork.jsx
import React from "react";

export default function HowWeWork() {
  const steps = [
    {
      title: "SITE INSPECTION",
      desc: "Our engineers conduct a detailed assessment of your site to determine the ideal elevator type and technical specifications.",
    },
    {
      title: "DESIGN & PLANNING",
      desc: "We craft a customized elevator design focused on safety, efficiency, and aesthetics, ensuring it fits your building perfectly.",
    },
    {
      title: "INSTALLATION",
      desc: "Our expert team installs the elevator with precision, adhering to strict quality and safety standards at every stage.",
    },
    {
      title: "TESTING & MAINTENANCE",
      desc: "We rigorously test performance and provide regular maintenance to ensure long-term reliability and smooth operation.",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f2] py-20 px-6 md:px-12 lg:px-20">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] tracking-wide relative inline-block uppercase">
          How We Work
          <span className="block w-20 h-[3px] bg-gradient-to-r from-[#D32F2F] to-[#B22222] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="text-[#666666] mt-4 text-base md:text-lg max-w-2xl mx-auto">
          At Garuda Elevators, every project is executed with precision and care — 
          from initial inspection to ongoing maintenance — ensuring excellence at every step.
        </p>
      </div>

      {/* Steps Section */}
      <div className="relative">
        {/* Horizontal Line for large screens */}
        <div className="hidden lg:block absolute top-2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D32F2F] to-[#B22222]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Icon (Dot) */}
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#D32F2F] to-[#B22222] mx-auto mb-8 shadow-md"></div>

              {/* Step Title */}
              <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D] mb-4 group-hover:text-[#B22222] transition-colors duration-300 tracking-wide uppercase">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[#666666] leading-relaxed text-sm md:text-base max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
