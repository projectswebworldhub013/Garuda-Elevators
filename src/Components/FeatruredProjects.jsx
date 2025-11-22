// src/components/FeaturedProjects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/capsule.jpg";
import img2 from "../assets/images/hydraulic.jpg";
import img3 from "../assets/images/goods.jpg";
import img4 from "../assets/images/home.jpg";
import img5 from "../assets/images/commercial.jpg";
import img6 from "../assets/images/office.jpg";

const projects = [
  {
    title: "Capsule Elevator Installation at Orion Mall, Bangalore",
    image: img1,
    description:
      "A premium glass capsule elevator designed for smooth vertical travel and a panoramic experience.",
  },
  {
    title: "Hydraulic Lift for Royal Residency Apartments, Rajajinagar",
    image: img2,
    description:
      "Efficient and silent hydraulic lift system offering superior performance and safety standards.",
  },
  {
    title: "Goods Elevator for Industrial Complex, Peenya",
    image: img3,
    description:
      "Heavy-duty goods elevator built to handle industrial logistics with maximum reliability.",
  },
  {
    title: "Home Elevator for Prestige Villa, Malleswaram",
    image: img4,
    description:
      "Compact and elegant home lift combining luxury aesthetics with advanced safety features.",
  },
  {
    title: "Commercial Elevator Setup at Garuda Towers, Bangalore",
    image: img5,
    description:
      "Smart and energy-efficient commercial elevators ensuring high traffic management and comfort.",
  },
  {
    title: "Pitless Elevator for Modern Office Complex, Yeshwanthpur",
    image: img6,
    description:
      "Space-saving pitless lift designed for modern architecture and seamless user experience.",
  },
];

const FeaturedProjects = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#F7F7F5] px-4 lg:px-16 py-20 overflow-hidden">
      {/* ===== Heading Section ===== */}
      <div className="text-center mb-20 relative z-10">
        {/* Decorative Lines */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#0D0D0D] to-[#FF0000] rounded-full"></div>
          <span className="mx-3 text-[#B22222] text-2xl font-bold tracking-wide uppercase">
            Our Pride
          </span>
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#FF0000] to-[#0D0D0D] rounded-full"></div>
        </div>

        {/* Main Title */}
        <h2
          className="text-5xl lg:text-6xl font-semibold tracking-tight text-[#0D0D0D] uppercase relative inline-block 
          after:content-[''] after:w-24 after:h-[3px] after:bg-gradient-to-r from-[#FF0000] to-[#B22222] 
          after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 
          hover:text-[#FFFFFF] hover:bg-[#FF0000] hover:px-6 hover:py-2 rounded-xl transition-all duration-500"
        >
          Featured Projects
        </h2>

        {/* Subheading / Quote */}
        <p className="text-[#666666] max-w-2xl mx-auto mt-6 text-xl italic [font-family:'Dancing_Script',cursive]">
          “Every lift we build is a step toward excellence — elevating safety, comfort, and innovation.”
        </p>
      </div>

      {/* ===== Project Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate("/gallery")}
            className={`relative h-[60vh] w-full overflow-hidden shadow-lg group transition-all duration-500 cursor-pointer 
              ${index % 3 === 1 ? "md:mt-14" : index % 3 === 2 ? "md:mt-20" : "md:mt-0"}
              bg-[#FFFFFF] rounded-xl`}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-6 
              opacity-100 md:opacity-0 md:group-hover:opacity-100 
              bg-[#1A1A1Acc] transition-all duration-500"
            >
              <h3
                className="text-xl md:text-2xl font-semibold text-[#FFFFFF] drop-shadow-md mb-2 
                group-hover:text-[#ffffff] transition-colors duration-300"
              >
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
