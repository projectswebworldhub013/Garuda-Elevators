import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  FaGlobe,
  FaHandshake,
  FaCogs,
  FaChevronDown,
  FaBuilding,
} from 'react-icons/fa';
import aboutImg from '../assets/images/cabins/c7.jpg';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F7F7F5] to-[#FFFFFF]"
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#FFFFFF]/40"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-[#666666] mb-1 uppercase tracking-widest">
            Company Profile
          </p>
          <h2 className="text-4xl font-extrabold leading-snug font-serif bg-gradient-to-r from-[#d80000] to-[#A01818] text-transparent bg-clip-text">
            Redefining Vertical Mobility for Over 50 Years
          </h2>
          <p className="text-[#666666] text-lg max-w-md mt-4">
            At <span className="font-semibold text-[#7a0f0f]">Garuda Elevators</span>, 
            we combine five decades of hands-on expertise with advanced engineering to deliver
            precision, safety, and innovation in every project.  
            {/* Our experience—spanning both India and international markets—empowers us to craft 
            reliable, efficient, and future-ready elevator solutions. */}
          </p>

          <p className="text-[#666666] text-lg max-w-md mt-4">
            With collaborations alongside world-class companies like{" "}
            <span className="font-semibold text-[#7a0f0f]">Ziehl Abegg (Germany)</span>, 
            we bring global standards of quality, technology, and design to your doorstep.  
            Our team’s integrated approach—from concept to installation—ensures seamless execution,
            aesthetics, and client satisfaction.
          </p>

          <Link to="/gallery">
            <button className="cursor-pointer mt-6 bg-[#7a0f0f] hover:bg-[#a82020] transition px-6 py-3 rounded-full text-white text-sm font-semibold shadow-md">
              Explore Our Work
            </button>
          </Link>

          {/* Highlights Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                title: 'Global Expertise',
                icon: <FaGlobe />,
                desc: 'Experience in India & abroad',
              },
              {
                title: 'Trusted Partnerships',
                icon: <FaHandshake />,
                desc: 'With global elevator leaders',
              },
              {
                title: 'Smart Solutions',
                icon: <FaCogs />,
                desc: 'Space-saving & efficient design',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2"
              >
                <div className="text-3xl text-[#A01818] transition-transform duration-300 hover:scale-110 hover:-rotate-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[#0D0D0D]">{item.title}</h4>
                <p className="text-sm text-[#666666] text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Tilt Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center items-center"
        >
          {/* Decorative Overlay */}
          <div className="absolute w-24 h-24 -top-6 -left-4 z-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <pattern
                id="dots"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="1"
                  cy="1"
                  r="1"
                  className="text-[#E6E6E6]"
                  fill="currentColor"
                />
              </pattern>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>

          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareColor="#fff"
            glareMaxOpacity={0.1}
          >
            <div className="relative z-10 w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-xl border border-[#E6E6E6]">
              <img
                src={aboutImg}
                alt="Garuda Elevators"
                className="object-cover w-full h-auto"
              />
            </div>
          </Tilt>

          {/* Floating Stats */}
          <div className="absolute -top-6 -left-6 bg-[#FFFFFF]/70 backdrop-blur-md border border-[#E6E6E6] rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20">
            <FaBuilding className="text-[#A01818]" />
            <p className="font-semibold text-[#0D0D0D]">Serving Since 1975</p>
          </div>

          <div className="absolute top-4 right-0 bg-[#FFFFFF]/70 backdrop-blur-md border border-[#E6E6E6] rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20">
            <FaGlobe className="text-[#A01818]" />
            <p className="font-semibold text-[#0D0D0D]">India & Overseas</p>
          </div>

          <div className="absolute bottom-0 left-4 bg-[#FFFFFF]/70 backdrop-blur-md border border-[#E6E6E6] rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20">
            <FaHandshake className="text-[#A01818]" />
            <div>
              <p className="font-semibold text-[#0D0D0D]">Ziehl Abegg Partner</p>
              <p className="text-[#666666] text-xs">German Collaboration</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-10 flex justify-center relative z-10"
      >
        <FaChevronDown className="text-[#A01818] text-xl" />
      </motion.div>
    </section>
  );
};

export default AboutSection;
