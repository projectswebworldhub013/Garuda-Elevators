// src/data/servicesData.js
import s1 from "../images/services/s1.jpg";
import s2 from "../images/services/s2.jpg";
import s3 from "../images/services/s3.jpg";
import s4 from "../images/services/s4.jpg";
import s5 from "../images/services/s5.jpg";
import s6 from "../images/services/s6.jpg";
import s7 from "../images/services/s7.jpg";
import s8 from "../images/services/s8.jpg";

const servicesData = [
  {
    id: 1,
    path: "/services/passenger-elevators",
    image: s1,
    title: "Passenger Elevators",
    shortDesc:
      "Garuda Elevators offers passenger elevators that combine safety, speed, and sophisticated design — ensuring seamless travel for residential and commercial spaces.",
    longDesc:
      "Passenger elevators are designed to provide reliable and comfortable vertical transportation for people in residential, commercial, and corporate buildings. At Garuda Elevators, we engineer elevators that emphasize advanced safety, smooth motion, and premium finishes. From small-scale apartments to large office towers, our elevators are built to meet architectural aesthetics and functionality. With energy-efficient motors, noiseless drive systems, and customizable interiors, our passenger elevators ensure efficiency, durability, and style in every journey.",
    quickPoints: [
      "High load-bearing capacity with smooth, vibration-free operation",
      "Energy-efficient and environment-friendly drive systems",
      "Modern interiors with customizable cabin designs and panels",
      "Advanced safety features like ARD, alarm, and overload sensors",
      "Fast travel speed with optimized waiting time",
      "Durable, low-maintenance construction with long life span",
    ],
    faqs: [
      {
        q: "What is the maximum capacity of a passenger elevator?",
        a: "Garuda passenger elevators range from 4 to 20 persons capacity, depending on building requirements.",
      },
      {
        q: "Can the interiors be customized?",
        a: "Yes, cabin finishes, flooring, and lighting can be customized according to your preferences.",
      },
      {
        q: "Are passenger elevators energy efficient?",
        a: "Yes, our elevators use regenerative drive systems and power-saving motors for efficiency.",
      },
      {
        q: "What safety features are included?",
        a: "We include ARD (Automatic Rescue Device), emergency alarms, intercoms, and overload indicators for total safety.",
      },
    ],
  },
  {
    id: 2,
    path: "/services/home-elevators",
    image: s2,
    title: "Home Elevators",
    shortDesc:
      "Luxury and comfort meet performance — Garuda home elevators are compact, stylish, and built for modern living spaces.",
    longDesc:
      "Home elevators from Garuda Elevators enhance accessibility and bring elegance to every residence. Designed for smooth and quiet operation, they fit seamlessly within your home’s architecture without requiring extensive civil modifications. Perfect for villas, duplexes, and bungalows, our home lifts offer reliability, luxury, and safety. Featuring silent motors, customizable interiors, and compact machine-room-less configurations, these elevators elevate daily convenience and living standards effortlessly.",
    quickPoints: [
      "Compact and space-saving design for small homes",
      "Whisper-quiet, smooth performance",
      "Minimal civil work required for installation",
      "Customizable interiors, doors, and lighting",
      "User-friendly digital control system",
      "Enhanced safety with ARD and child-lock features",
    ],
    faqs: [
      {
        q: "Do home elevators need a machine room?",
        a: "No, our home elevators are machine-room-less, which saves both space and cost.",
      },
      {
        q: "How much power does a home elevator consume?",
        a: "Garuda home elevators are energy-efficient, consuming power comparable to a household appliance.",
      },
      {
        q: "Are home elevators safe for children?",
        a: "Yes, our lifts feature child-lock, emergency stop, and door sensors to ensure complete safety.",
      },
      {
        q: "What is the typical installation time?",
        a: "Installation usually takes 3–6 weeks, depending on the site and custom requirements.",
      },
    ],
  },
  {
    id: 3,
    path: "/services/hospital-elevators",
    image: s3,
    title: "Hospital Elevators",
    shortDesc:
      "Reliable and spacious elevators designed for hospitals — ensuring smooth, quick, and safe transportation of patients and staff.",
    longDesc:
      "Garuda’s hospital elevators are specially designed to meet the stringent demands of healthcare environments. Spacious, hygienic, and efficient, these elevators are ideal for patient transport with stretchers, wheelchairs, and medical teams. Built for reliability during emergencies, our hospital lifts ensure seamless performance even under continuous operation. Each cabin features antibacterial finishes, silent drive systems, and superior ride comfort to ensure patient safety and staff efficiency.",
    quickPoints: [
      "Spacious cabins for stretchers and wheelchairs",
      "Antibacterial and easy-to-clean stainless interiors",
      "Heavy-duty load capacity with stable performance",
      "Emergency backup systems and ARD included",
      "Smooth, jerk-free travel for patient comfort",
      "Durable construction for 24/7 operation",
    ],
    faqs: [
      {
        q: "What size elevators are used in hospitals?",
        a: "Our hospital elevators feature wider doors and larger cabins suitable for stretchers and wheelchairs.",
      },
      {
        q: "Are hospital elevators safe during emergencies?",
        a: "Yes, all hospital lifts come with ARD, intercoms, and backup power for emergency operation.",
      },
      {
        q: "Can hospital elevators handle heavy loads?",
        a: "Yes, they are engineered for high weight capacities suitable for medical equipment and staff transport.",
      },
      {
        q: "Are these elevators easy to clean?",
        a: "Yes, we use antibacterial stainless steel and smooth finishes for hygiene and easy maintenance.",
      },
    ],
  },
  {
    id: 4,
    path: "/services/goods-elevators",
    image: s4,
    title: "Goods & Freight Elevators",
    shortDesc:
      "Heavy-duty freight elevators built for strength, safety, and efficiency — designed for industrial and commercial needs.",
    longDesc:
      "Garuda’s goods and freight elevators are engineered for robust industrial performance. Capable of lifting several tons with ease, they provide stable and reliable operation in factories, warehouses, and commercial hubs. These elevators ensure safety through overload sensors, interlocked doors, and emergency brakes. Despite their rugged build, they maintain smooth travel, low vibration, and minimal maintenance requirements. Designed to improve efficiency and reduce manpower, Garuda freight elevators are an essential part of modern industrial logistics.",
    quickPoints: [
      "High load-bearing capacity up to multiple tons",
      "Strong and durable design for industrial use",
      "Minimal maintenance and superior durability",
      "Safety systems including interlocks and overload sensors",
      "Smooth and stable lifting performance",
      "Customizable cabin size and material finish",
    ],
    faqs: [
      {
        q: "What is the maximum load a goods elevator can handle?",
        a: "Garuda freight elevators can handle 500 kg to 5000 kg or more, depending on model and design.",
      },
      {
        q: "Can these elevators be customized for cabin size?",
        a: "Yes, we design cabins according to industrial and logistic requirements.",
      },
      {
        q: "Do goods elevators require frequent maintenance?",
        a: "No, Garuda elevators are designed for low-maintenance and continuous heavy-duty use.",
      },
      {
        q: "Are safety features included in goods elevators?",
        a: "Yes, overload sensors, interlocks, and emergency brakes are standard inclusions.",
      },
    ],
  },
  {
    id: 5,
    path: "/services/capsule-elevators",
    image: s5,
    title: "Capsule Elevators",
    shortDesc:
      "Modern luxury glass capsule elevators offering style, elegance, and panoramic comfort — a symbol of architectural brilliance.",
    longDesc:
      "Capsule elevators from Garuda Elevators redefine vertical mobility with luxury and technology. Featuring panoramic glass panels, smooth performance, and aesthetic designs, they are ideal for premium malls, hotels, and corporate buildings. These elevators blend architectural beauty with functional excellence, equipped with silent drives and advanced control systems. Each model is customizable to fit the look and character of the property, offering a statement of class and innovation.",
    quickPoints: [
      "Panoramic glass design for a luxurious view",
      "Ideal for high-end hotels, malls, and offices",
      "Stylish interiors with modern lighting systems",
      "Smooth, noiseless operation with precision engineering",
      "Customizable shapes and finishes to match building design",
      "Enhances visual appeal and property value",
    ],
    faqs: [
      {
        q: "Where are capsule elevators most commonly used?",
        a: "They are used in hotels, shopping malls, and corporate buildings for premium aesthetics.",
      },
      {
        q: "Can the capsule design be customized?",
        a: "Yes, we offer round, oval, or semi-capsule designs with custom finishes.",
      },
      {
        q: "Do capsule elevators require special maintenance?",
        a: "No, they require standard maintenance with regular servicing checks.",
      },
      {
        q: "Are capsule elevators energy efficient?",
        a: "Yes, they use advanced motor systems that ensure power savings and high performance.",
      },
    ],
  },
  {
    id: 6,
    path: "/services/hydraulic-elevators",
    image: s6,
    title: "Hydraulic Elevators",
    shortDesc:
      "Smooth and powerful elevators designed for low-rise buildings — Garuda hydraulic lifts ensure safety, comfort, and reliability.",
    longDesc:
      "Garuda’s hydraulic elevators are built for performance and dependability in low-rise residential and commercial structures. Using advanced piston-based lifting mechanisms, they offer smooth and jerk-free motion. With energy-efficient systems and minimal maintenance requirements, they are ideal for compact buildings and machine-room-less configurations. These elevators come equipped with overload protection, emergency lowering, and intelligent control systems to ensure safe and effortless travel every time.",
    quickPoints: [
      "Ideal for low-rise buildings up to 6–7 floors",
      "Silent and smooth hydraulic operation",
      "No machine room required in most configurations",
      "Emergency lowering during power failure",
      "Low maintenance and energy efficient",
      "Reliable piston-driven lifting mechanism",
    ],
    faqs: [
      {
        q: "Where are hydraulic elevators commonly installed?",
        a: "They are used in low-rise residential, commercial, and small office buildings.",
      },
      {
        q: "Do hydraulic elevators consume more energy?",
        a: "No, our hydraulic lifts are designed to optimize power usage efficiently.",
      },
      {
        q: "Are hydraulic elevators safe?",
        a: "Yes, with overload and emergency lowering systems, they ensure top-notch safety.",
      },
      {
        q: "What is the travel limit of hydraulic elevators?",
        a: "Hydraulic elevators are suitable for structures up to 6–7 floors in height.",
      },
    ],
  },
  {
    id: 7,
    path: "/services/escalators",
    image: s7,
    title: "Escalators",
    shortDesc:
      "Durable, energy-efficient escalators ensuring smooth and safe passenger movement in commercial and public spaces.",
    longDesc:
      "Garuda escalators are designed to handle continuous heavy traffic in malls, airports, and metro stations. Built for strength, durability, and energy efficiency, they offer smooth operation with minimal noise. Safety features like anti-slip steps, emergency stop buttons, and handrail lighting ensure passenger safety. Engineered for performance and reliability, Garuda escalators are the perfect solution for busy commercial environments requiring style and function together.",
    quickPoints: [
      "Ideal for malls, airports, and public buildings",
      "Durable and efficient design for 24/7 use",
      "Emergency stop and safety sensors included",
      "Energy-saving smart operation system",
      "Non-slip steps and ergonomic handrails",
      "Silent and modern aesthetic design",
    ],
    faqs: [
      {
        q: "Where are escalators most commonly used?",
        a: "They are widely used in malls, metro stations, airports, and large commercial complexes.",
      },
      {
        q: "Do escalators consume a lot of power?",
        a: "No, Garuda escalators feature smart sensors that reduce energy use when idle.",
      },
      {
        q: "Are escalators safe for children and elderly?",
        a: "Yes, our models include safety brushes, handrails, and emergency stops for added safety.",
      },
      {
        q: "What is the lifespan of an escalator?",
        a: "With regular maintenance, Garuda escalators can last over 25 years efficiently.",
      },
    ],
  },
  {
    id: 8,
    path: "/services/maintenance",
    image: s8,
    title: "Maintenance & AMC",
    shortDesc:
      "Reliable maintenance and AMC services to ensure your elevators and escalators operate safely and efficiently all year long.",
    longDesc:
      "Garuda Elevators offers comprehensive maintenance and AMC (Annual Maintenance Contract) services that ensure your lifts and escalators remain in peak condition. Our preventive maintenance approach includes regular inspections, emergency support, and original spare parts replacement. With a professional team of engineers and technicians, we ensure maximum uptime, smooth operation, and compliance with safety standards. Partnering with Garuda means long-term reliability and worry-free performance for your equipment.",
    quickPoints: [
      "Scheduled maintenance and safety inspections",
      "Round-the-clock emergency support team",
      "Use of 100% genuine spare parts",
      "Flexible AMC packages tailored to client needs",
      "Enhanced performance and long equipment lifespan",
      "Prevents breakdowns with proactive maintenance",
    ],
    faqs: [
      {
        q: "Why is regular elevator maintenance important?",
        a: "Regular maintenance improves safety, reduces downtime, and extends service life.",
      },
      {
        q: "What is included in AMC packages?",
        a: "Garuda AMC includes preventive inspections, emergency service, and spare parts replacement.",
      },
      {
        q: "Do you offer 24/7 emergency support?",
        a: "Yes, our maintenance team provides 24/7 on-call technical support across service regions.",
      },
      {
        q: "How often should elevators be serviced?",
        a: "We recommend monthly inspections under AMC to ensure consistent safety and reliability.",
      },
    ],
  },
];

export default servicesData;
