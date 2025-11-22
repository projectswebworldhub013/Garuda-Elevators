import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  FaBuilding,
  FaTools,
  FaUserShield,
  FaUsers,
  FaIndustry,
  FaCogs,
  FaClock,
  FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Background image
import bgImage from "../assets/images/statsbg.jpg"; // 🔧 Replace with your Garuda background

// ✅ Animated Counter Hook
function Counter({ from = 0, to, inView }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    if (to >= 1000000) return `${(latest / 1000000).toFixed(1)}M+`;
    if (to >= 1000) return `${Math.floor(latest / 1000)}K+`;
    return Math.floor(latest);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, parseInt(to), {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [to, inView]);

  return <motion.span>{rounded}</motion.span>;
}

// 📊 Garuda Elevators Stats
const stats = [
  {
    label: "Elevators Installed",
    value: 4500,
    change: "+98%",
    icon: <FaBuilding className="text-maroon text-lg" />,
  },
  {
    label: "Satisfied Clients",
    value: 3000,
    change: "+95%",
    icon: <FaUsers className="text-offwhite text-lg" />,
  },
  {
    label: "Years of Excellence",
    value: 15,
    change: "+100%",
    icon: <FaClock className="text-maroon text-lg" />,
  },
  {
    label: "Cities Served",
    value: 40,
    change: "+60%",
    icon: <FaIndustry className="text-offwhite text-lg" />,
  },
  {
    label: "Safety Certifications",
    value: 25,
    change: "+100%",
    icon: <FaUserShield className="text-maroon text-lg" />,
  },
  {
    label: "Types of Elevators",
    value: 5,
    change: "Hydraulic, Capsule, Goods, Home, Pitless",
    icon: <FaCogs className="text-offwhite text-lg" />,
  },
  {
    label: "24/7 Maintenance Support",
    value: 1,
    change: "Always On",
    icon: <FaTools className="text-maroon text-lg" />,
  },
  {
    label: "Trusted Partnerships",
    value: 200,
    change: "+70%",
    icon: <FaHandshake className="text-offwhite text-lg" />,
  },
];

export default function GarudaStats() {
  return (
    <section className="relative text-white py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-maroon/10 blur-[180px]" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                <Counter to={stat.value} inView={true} />
              </h3>
              <p className="font-sans tracking-wider text-gray-300 text-sm">
                {stat.label}
              </p>
              <span className="font-sans tracking-wider text-maroon text-xs mt-1">
                {stat.change}
              </span>
            </motion.div>
          ))}
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="text-maroon">Garuda Elevators</span> — Elevating
            Standards, Enhancing Safety
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6 font-light tracking-wider">
            Since 2010, Garuda Elevators has been a trusted name in elevator
            innovation, delivering top-quality hydraulic, capsule, and goods
            lifts across India. With a focus on safety, efficiency, and design
            excellence, we elevate both performance and satisfaction.
          </p>
          <Link to="/contact">
            <button className="cursor-pointer px-6 py-3 bg-maroon hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition">
              Get a Free Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
