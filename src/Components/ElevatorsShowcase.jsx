// src/components/ElevatorsShowcase.jsx
import React from "react";
import { Link } from "react-router-dom";

import aboutImgWide from "../assets/images/new-lift.jpg";
import aboutImgSmall1 from "../assets/images/a1.jpg";
import aboutImgSmall2 from "../assets/images/a4.jpg";
import { FaBuilding, FaSmileBeam } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

export default function ElevatorsShowcase() {
  const colors = {
    maroonRed: "#800000",
    deepCrimson: "#A01818",
    pureBlack: "#0D0D0D",
    pureWhite: "#FFFFFF",
    offWhite: "#F7F7F5",
    lightGray: "#E6E6E6",
    garnetRed: "#B22222",
    warmGray: "#666666",
  };

  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 py-16"
      style={{ backgroundColor: colors.offWhite }}
    >
      <div className="space-y-16">
        {/* Row 1: Image + Text */}
<div className="grid lg:grid-cols-2 gap-10 items-center">
  {/* Left Image */}
  <img
    src={aboutImgWide}
    alt="Garuda Elevators showcase"
    className="hidden md:flex w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-md border border-[#E6E6E6]"
  />

  {/* Right Content */}
  <div>
    <h2
      className="text-2xl md:text-3xl font-semibold mb-6"
      style={{ color: colors.pureBlack }}
    >
      About Garuda Elevators
    </h2>

    <p
      className="leading-relaxed mb-4 text-[15px]"
      style={{ color: colors.warmGray }}
    >
      <span className="font-semibold" style={{ color: colors.maroonRed }}>
        Garuda Elevators
      </span>{" "}
      established in{" "}
      <span className="font-semibold" style={{ color: colors.garnetRed }}>
        2010
      </span>
      , pioneers in home lifts and commercial elevators, now powered by{" "}
      <span className="font-semibold" style={{ color: colors.maroonRed }}>
        Ziehl Abegg Germany
      </span>
      , brings next-generation home lifts integrated with modern IoT solutions.
    </p>

    <p
      className="leading-relaxed text-[15px]"
      style={{ color: colors.warmGray }}
    >
      Garuda introduces India’s first{" "}
      <span className="font-semibold" style={{ color: colors.maroonRed }}>
        “Pit-less” and “Overhead-less”
      </span>{" "}
      technology — perfectly suited for your home décor. Our R&D team, in
      collaboration with global leaders, ensures adherence to EN 81 norms and
      world-class safety standards.
    </p>

    {/* Stats Section */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {[
        {
          icon: <FaBuilding className="text-4xl text-[#8B0000]" />,
          title: "Years of Expertise",
          value: "15+",
        },
        {
          icon: <IoRocketSharp className="text-4xl text-[#8B0000]" />,
          title: "Projects Completed",
          value: "1000+",
        },
        {
          icon: <FaSmileBeam className="text-4xl text-[#8B0000]" />,
          title: "Happy Clients",
          value: "500+",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 rounded-lg border border-[#E6E6E6] shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 bg-[#FFFFFF] cursor-pointer"
        >
          <div className="mb-2">{item.icon}</div>
          <p className="text-xl font-bold" style={{ color: colors.maroonRed }}>
            {item.value}
          </p>
          <p
            className="text-sm font-medium"
            style={{ color: colors.warmGray }}
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>


        {/* Row 2: Text + Button + Two Small Images */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: colors.pureBlack }}
            >
              Our Scope of Work
            </h3>
            <p className="leading-relaxed mb-4 text-[15px]" style={{ color: colors.warmGray }}>
              Quality gets a new definition with Garuda Elevators — offering
              comprehensive solutions from{" "}
              <span className="font-semibold" style={{ color: colors.maroonRed }}>
                G+1 to G+25
              </span>{" "}
              including turnkey installations, AMC services, and modernization
              contracts that extend the lifespan of elevators.
            </p>
            <p className="leading-relaxed mb-6 text-[15px]" style={{ color: colors.warmGray }}>
              From home lifts without pits, senior citizen lifts, wheelchair lifts,
              hospital and heavy-duty lifts to dumbwaiters — we deliver
              custom-engineered solutions with unmatched after-sales support across
              India.
            </p>
            <Link to="/showcase">
              <button
                className="cursor-pointer px-6 py-3 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: colors.maroonRed,
                  color: colors.pureWhite,
                }}
              >
                Explore Full Range →
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={aboutImgSmall1}
              alt="Elevator design"
              className="rounded-xl shadow-md h-48 object-cover border border-[#E6E6E6]"
            />
            <img
              src={aboutImgSmall2}
              alt="Lift installation"
              className="rounded-xl shadow-md h-48 object-cover border border-[#E6E6E6]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
