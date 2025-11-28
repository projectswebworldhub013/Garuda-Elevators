import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaHome,
  FaImages,
  FaPhoneAlt,
  FaTruckMoving,
  FaInfoCircle,
  FaEnvelope,
  FaBuilding,
  FaUserCog,
  FaLayerGroup,
  FaCogs,
  FaTools,
  FaAngleDown,
  FaPaintRoller,
  FaRegObjectGroup,
  FaDoorClosed,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/garuda-logo.png"; // ✅ Replace this with your actual logo path

import { MdOutlineTouchApp } from "react-icons/md";
import { PiCloudLight } from "react-icons/pi";
import { FaHouseFloodWater } from "react-icons/fa6";
// import { GiSteps } from "react-icons/gi";
// ✅ Services Data
const servicesData = [
  { name: "Passenger Elevators", path: "/services/passenger-elevators", icon: FaBuilding },
  { name: "Home Elevators", path: "/services/home-elevators", icon: FaHome },
  { name: "Hospital Elevators", path: "/services/hospital-elevators", icon: FaUserCog },
  { name: "Goods/Freight Elevators", path: "/services/goods-elevators", icon: FaTruckMoving },
  { name: "Capsule Elevators", path: "/services/capsule-elevators", icon: FaLayerGroup },
  { name: "Hydraulic Elevators", path: "/services/hydraulic-elevators", icon: FaCogs },
  { name: "Pitless Elevators", path: "/services/pitless-elevators", icon: FaCogs },
  { name: "Maintenance & AMC", path: "/services/maintenance", icon: FaTools },
];

// ✅ Lift Interiors Data
const interiorsData = [
  {
    name: "Premium Cabins",
    path: "/cabins",
    icon: FaRegObjectGroup,
  },
  {
    name: "Modern Lift Doors",
    path: "/doors",
    icon: FaDoorClosed,
  },
  {
    name: "Lift Operating Panels",
    path: "/panels",
    icon: MdOutlineTouchApp,
  },
  {
    name: "Designer False Ceiling",
    path: "/false-ceiling",
    icon: PiCloudLight,
  },
  {
    name: "Elegant Flooring",
    path: "/floor",
    icon: FaHouseFloodWater,
  },
];
// ✅ Nav Items
const leftNavItems = [
  { name: "Home", path: "/", icon: <FaHome className="inline mr-1" /> },
  { name: "About Us", path: "/about", icon: <FaInfoCircle className="inline mr-1" /> },
  {
    name: "Services",
    icon: <FaTruckMoving className="inline mr-1" />,
    dropdown: "services",
  },
  {
    name: "Lift Interiors",
    icon: <FaRegObjectGroup className="inline mr-1" />,
    dropdown: "interiors",
  },
];

const rightNavItems = [
  { name: "Showcase", path: "/showcase", icon: <FaImages className="inline mr-1" /> },
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt className="inline mr-1" /> },
];

const COMPANY_INFO = {
  gst: "29BHTPS0454D1ZZ",
  email: "info@garudaelevators.in",
  mobile: "+91 9035295330",
};

const socialLinks = {
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  twitter: "https://www.twitter.com",
  linkedin: "https://www.linkedin.com",
};

const NavbarGaruda = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkClasses = (path) =>
    `cursor-pointer transition flex items-center gap-1 ${
      pathname === path
        ? "text-[#800000] font-semibold"
        : "text-[#0D0D0D] hover:text-[#B22222]"
    }`;

  const getDropdownData = (type) => {
    if (type === "services") return servicesData;
    if (type === "interiors") return interiorsData;
    return [];
  };

  return (
    <>
      {/* ===================== TOP INFO BAR ===================== */}
      <div className="bg-[#1A1A1A] text-[#FFFFFF] text-xs md:text-sm py-2 px-4 md:px-12 font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden md:flex justify-between w-full">
            <div className="flex space-x-6">
              <p className="flex items-center gap-1">
                <span className="font-semibold">GSTIN:</span> {COMPANY_INFO.gst}
              </p>
            </div>
            <div className="flex space-x-6">
              <p className="flex items-center gap-1">
                <FaEnvelope className="text-[#FFFFFF]" />
                {COMPANY_INFO.email}
              </p>
              <p className="flex items-center gap-1">
                <FaPhoneAlt className="text-[#FFFFFF]" />
                {COMPANY_INFO.mobile}
              </p>
            </div>
          </div>

          {/* Mobile Info */}
          <div className="md:hidden text-center w-full flex justify-center">
            <p className="flex items-center justify-center gap-1">
              <FaEnvelope className="text-[#FFFFFF]" />
              {COMPANY_INFO.email}
            </p>
          </div>
        </div>
      </div>

      {/* ===================== MAIN NAVBAR ===================== */}
      <nav className="w-full px-4 md:px-12 py-2 bg-[#F7F7F5] shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* ===================== MOBILE HEADER ===================== */}
          <div className="flex w-full items-center justify-between md:hidden">
            <FaBars
              onClick={toggleMenu}
              className="cursor-pointer text-2xl text-[#800000]" /* slightly larger icon for mobile */
            />
            <Link to="/" className="ml-auto flex items-center gap-2">
              <img src={logo} alt="Garuda Elevators Logo" className="h-16 w-16 object-contain" />
            </Link>
          </div>

          {/* ===================== DESKTOP MENU (UNCHANGED) ===================== */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left Nav */}
            <ul className="flex gap-6 text-sm font-medium uppercase relative">
              {leftNavItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.dropdown)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                >
                  <div className="flex items-center gap-1">
                    <Link to={item.path || "#"} className={navLinkClasses(item.path)}>
                      {item.icon}
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <motion.span
                        animate={{ rotate: openDropdown === item.dropdown ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-1 text-[#666666]"
                      >
                        <FaAngleDown size={12} />
                      </motion.span>
                    )}
                  </div>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {openDropdown === item.dropdown && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-[#FFFFFF] shadow-lg rounded-lg overflow-hidden z-50 border border-[#E6E6E6]"
                        >
                          {getDropdownData(item.dropdown).map((sub) => (
                            <li key={sub.path}>
                              <Link
                                to={sub.path}
                                className="flex items-center gap-3 px-4 py-3 text-sm text-[#0D0D0D] hover:bg-[#F7F7F5] hover:text-[#B22222] transition"
                              >
                                {React.createElement(sub.icon, { size: 16 })}
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* Center Logo + Text */}
            <Link to="/" className="mx-6 flex items-center gap-3 select-none">
              <img src={logo} alt="Garuda Elevators Logo" className="h-16 w-16 object-contain" />
              <h1 className="font-bold text-2xl text-[#800000] tracking-wide">
                Garuda <span className="text-[#B22222] ">Elevators</span>
              </h1>
            </Link>

            {/* Right Nav */}
            <div className="flex items-center gap-6">
              <ul className="flex gap-6 text-sm font-medium uppercase">
                {rightNavItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className={navLinkClasses(item.path)}>
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 ml-6 text-[#0D0D0D]">
                {Object.entries(socialLinks).map(([k, url]) => (
                  <a
                    key={k}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B22222] transition"
                  >
                    {React.createElement(
                      {
                        facebook: FaFacebookF,
                        instagram: FaInstagram,
                        twitter: FaTwitter,
                        linkedin: FaLinkedinIn,
                      }[k],
                      { size: 16 }
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===================== MOBILE MENU (SMOOTH HEIGHT ANIMATION) ===================== */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex"
            >
              <motion.div
                ref={panelRef}
                layout
                className="w-72 h-full bg-white shadow-lg px-6 py-5 flex flex-col"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="Garuda Elevators Logo" className="h-16 w-16 object-contain" />
                    <h2 className="text-xl font-extrabold text-[#800000] tracking-wide">
                      Garuda <span className="text-[#B22222]">Elevators</span>
                    </h2>
                  </div>
                  <FaTimes
                    className="text-3xl text-[#800000] cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>

                <hr className="mb-4 border-[#E6E6E6]" />

                {/* Mobile nav list larger & touch friendly */}
                <nav className="flex flex-col gap-4 text-[#0D0D0D]">
                  {[...leftNavItems, ...rightNavItems].map((item) => (
                    <motion.div key={item.name} layout>
                      <div className="flex items-center justify-between">
                        {item.dropdown ? (
                          // Render a button-like element for dropdown items so clicks don't navigate
                          <button
                            type="button"
                            onClick={() =>
                              setOpenDropdown((prev) => (prev === item.dropdown ? null : item.dropdown))
                            }
                            className={`w-full text-left flex items-center gap-3 text-lg ${
                              pathname === item.path ? "font-semibold text-[#800000]" : "text-[#0D0D0D]"
                            } hover:text-[#B22222] py-2`}
                          >
                            <span className="text-2xl">{item.icon}</span>
                            {item.name}
                          </button>
                        ) : (
                          // Non-dropdown items => navigate & close menu
                          <Link
                            to={item.path}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                            className={`flex items-center gap-3 text-lg ${
                              pathname === item.path ? "font-semibold text-[#800000]" : "text-[#0D0D0D]"
                            } hover:text-[#B22222] py-2`}
                          >
                            <span className="text-2xl">{item.icon}</span>
                            {item.name}
                          </Link>
                        )}

                        {/* Arrow icon (also toggles dropdown) */}
                        {item.dropdown && (
                          <motion.button
                            type="button"
                            aria-expanded={openDropdown === item.dropdown}
                            onClick={() =>
                              setOpenDropdown((prev) => (prev === item.dropdown ? null : item.dropdown))
                            }
                            className="ml-2 text-2xl text-[#666666] p-1"
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.span
                              animate={{ rotate: openDropdown === item.dropdown ? 180 : 0 }}
                              transition={{ duration: 0.35 }}
                            >
                              <FaAngleDown />
                            </motion.span>
                          </motion.button>
                        )}
                      </div>

                      {/* Smooth height accordion for mobile dropdown (Option A) */}
                <AnimatePresence initial={false}>
  {item.dropdown && openDropdown === item.dropdown && (
    <motion.ul
      key={`${item.dropdown}-mobile`}
      initial={{ maxHeight: 0, opacity: 0 }}
      animate={{ maxHeight: 500, opacity: 1 }}   // you can increase height for bigger dropdowns
      exit={{ maxHeight: 0, opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="ml-6 mt-3 flex flex-col gap-3 overflow-hidden"
    >
      {getDropdownData(item.dropdown).map((sub) => (
        <li key={sub.path}>
          <Link
            to={sub.path}
            className="flex items-center gap-3 text-lg py-3 px-2 rounded-md hover:bg-[#F7F7F5] hover:text-[#B22222] transition"
            onClick={() => {
              setIsMenuOpen(false);
              setOpenDropdown(null);
            }}
          >
            <span className="text-2xl">
              {React.createElement(sub.icon, { size: 24 })}
            </span>
            {sub.name}
          </Link>
        </li>
      ))}
    </motion.ul>
  )}
</AnimatePresence>


                    </motion.div>
                  ))}
                </nav>

                {/* Bottom contact + socials */}
                <div className="mt-auto pt-5 border-t border-[#E6E6E6] text-sm">
                  <p className="py-1">
                    <strong>GSTIN:</strong> {COMPANY_INFO.gst}
                  </p>
                  <p className="py-1 flex items-center gap-2">
                    <FaPhoneAlt /> {COMPANY_INFO.mobile}
                  </p>

                  <div className="flex gap-4 mt-4 text-2xl text-[#0D0D0D]">
                    {Object.entries(socialLinks).map(([k, url]) => (
                      <a
                        key={k}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#B22222]"
                      >
                        {React.createElement(
                          {
                            facebook: FaFacebookF,
                            instagram: FaInstagram,
                            twitter: FaTwitter,
                            linkedin: FaLinkedinIn,
                          }[k],
                          { size: 26 }
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Overlay area */}
              <div
                className="flex-1 backdrop-blur-sm bg-black/40"
                onClick={() => {
                  setIsMenuOpen(false);
                  setOpenDropdown(null);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavbarGaruda;
