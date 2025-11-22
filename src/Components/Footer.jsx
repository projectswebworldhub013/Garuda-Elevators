// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
  FaHome,
  FaPhoneAlt,
  FaImage,
  FaInfoCircle,
  FaTruckMoving,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaCertificate,
  FaCogs,
  FaBuilding,
  FaTools,
  FaUserCog,
  FaAngleDoubleUp,
  FaLayerGroup,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/footerbg2.jpg";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Services
const servicesData = [
  { name: "Passenger Elevators", path: "/services/passenger-elevators", icon: FaBuilding },
  { name: "Home Elevators", path: "/services/home-elevators", icon: FaHome },
  { name: "Hospital Elevators", path: "/services/hospital-elevators", icon: FaUserCog },
  { name: "Goods/Freight Elevators", path: "/services/goods-elevators", icon: FaTruckMoving },
  { name: "Capsule Elevators", path: "/services/capsule-elevators", icon: FaLayerGroup },
  { name: "Hydraulic Elevators", path: "/services/hydraulic-elevators", icon: FaCogs },
  { name: "Escalators", path: "/services/escalators", icon: FaAngleDoubleUp },
  { name: "Maintenance & AMC", path: "/services/maintenance", icon: FaTools },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative text-[#666666] pt-20 pb-10 px-6 md:px-16 overflow-hidden font-sans font-semibold"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-[#F7F7F5]/85 z-0"></div>

      {/* Grid Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold mb-2 text-3xl text-[#B22222] font-[italiana]">
            About Garuda Elevators
          </h4>
          <p className="leading-relaxed text-[#666666]">
            Garuda Elevators is a leading provider of vertical transportation
            solutions in India, committed to delivering{" "}
            <span className="text-[#FF0000] font-semibold">
              innovative, safe, and high-performance elevators
            </span>
            . With years of industry expertise, we specialize in customized lift
            installations, modernization, and maintenance services designed to
            meet the highest standards of{" "}
            <span className="text-[#B22222] font-semibold">quality and safety</span>.
          </p>
          <div className="mt-4 space-y-1 text-[#0D0D0D] text-xs">
            <p>GSTIN/UIN: 29BHTPS0454D1ZZ</p>
            <p>ISO Certified Company</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#B22222] font-[italiana]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-[#0D0D0D]">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Showcase", "/showcase", <FaImage />],
              ["Certificates", "/certificates", <FaCertificate />],
              ["Contact Us", "/contact", <FaPhoneAlt />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#A01818] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold text-2xl text-[#B22222] font-[italiana]">
            Email
          </h4>
          <ul className="mt-2 space-y-2 text-[#0D0D0D]">
            {["info@garudaelevators.in"].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 hover:text-[#A01818] transition duration-300"
                >
                  <FaEnvelope className="text-[#FF0000]" />
                  <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#B22222] font-[italiana]">
            Our Services
          </h4>
          <ul className="space-y-2 text-[#0D0D0D]">
            {servicesData.map(({ name, path, icon: Icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="hover:text-[#A01818] transition duration-300 flex items-center gap-2"
                >
                  <Icon className="text-[#FF0000]" /> {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#B22222] font-[italiana]">
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-[#0D0D0D]">
            <strong>Corporate Office:</strong>
            <br />
            Plot No.520, Ground Floor, 2nd Main, A Block, 2nd Stage,
            <br />
            Next to Orion Mall, Next To Vivekananda College,
            <br />
            Rajajinagar, Malleswaram West – 560055,
            <br />
            Bangalore, Karnataka, India
          </address>

          <div className="mb-4 flex">
            <Translator />
            <div className="w-42 md:w-16"></div>
          </div>

          <div className="mt-6 flex space-x-4">
            {[FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaPinterestP, FaSearchLocation].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF0000] hover:text-[#A01818] transition"
                >
                  <Icon size={20} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-4 text-center text-xs text-[#666666] border-t border-[#E6E6E6] pt-2 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Garuda Elevators. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0D0D0D] hover:text-[#A01818] transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
