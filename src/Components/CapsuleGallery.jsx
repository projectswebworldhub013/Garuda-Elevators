import React, { useEffect, useState } from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaRegDotCircle } from "react-icons/fa";

// === IMAGE IMPORTS ===
import img1a from "../assets/images/3-side/one.jpg";
import img1b from "../assets/images/3-side/two.jpg";

import img2a from "../assets/images/3-side/three.jpg";
import img2b from "../assets/images/3-side/four.jpg";

import img3a from "../assets/images/3-side/five.jpg";
import img3b from "../assets/images/3-side/six.jpg";

const CapsuleGallery = () => {
  const cards = [
    {
      id: 1,
      title: "Premium 3-Side Capsule Elevator",
      subtitle: "Crafted for luxury hospitality environments.",
      images: [img1a, img1b],
    },
    {
      id: 2,
      title: "Architectural Glass Capsule Lift",
      subtitle: "Designed for seamless panoramic visibility.",
      images: [img2a, img2b],
    },
    {
      id: 3,
      title: "Modern Curved Capsule Elevator",
      subtitle: "Built with advanced aesthetics and structure.",
      images: [img3a, img3b],
    },
  ];

  const [activeImages, setActiveImages] = useState(cards.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImages((prev) =>
        prev.map((current, idx) => (current + 1) % cards[idx].images.length)
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-[#F7F7F5]">

      {/* HEADER */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-14 h-[2px] bg-[#E6E6E6]" />
          <HiOutlineBuildingOffice2 className="text-3xl text-[#0D0D0D]" />
          <div className="w-14 h-[2px] bg-[#E6E6E6]" />
        </div>

        <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-[#0D0D0D] mb-3">
          Premium 3-Side Capsule Elevators
        </h2>

        <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
          A refined series of glass capsule elevators designed for luxury hotels,
          commercial spaces, and modern architecture.
        </p>

        <div className="flex justify-center gap-2 mt-4">
          <FaRegDotCircle className="text-[#A01818]/60" />
          <FaRegDotCircle className="text-[#FF0000]" />
          <FaRegDotCircle className="text-[#A01818]/60" />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="relative group  overflow-hidden bg-white
                       border border-[#E6E6E6] shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                       hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]
                       transition-all duration-500 ease-out hover:-translate-y-2"
          >
            {/* IMAGE AREA - NOW FULL WIDTH + MORE HEIGHT */}
            <div className="relative w-full h-96 md:h-[420px] bg-[#F7F7F5] flex items-center justify-center overflow-hidden ">

              {card.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Capsule Elevator"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[1300ms]
                    ${activeImages[index] === i ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))}

              {/* Hover Black Overlay */}
              <div className="absolute inset-0  group-hover:bg-black/50 transition-all duration-500"></div>

              {/* Hover Text */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 
                  text-center px-6 py-5 
                  opacity-0 translate-y-5
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500
                  text-white"
              >
                <h3 className="text-xl md:text-2xl font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm md:text-base opacity-90">{card.subtitle}</p>

                <div className="mt-3 w-16 h-[3px] bg-red-500 mx-auto rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapsuleGallery;
