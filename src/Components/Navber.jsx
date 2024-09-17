import React, { useState } from "react";
import logo from "../assets/Dhakai (2).png";
import { LINKS } from "../consents";
import { FaTimes, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navber = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden"; // Prevent scrolling
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  return (
    <nav className="fixed z-50 w-full flex flex-col top-0 items-center justify-center">
      {/* Background Blur Effect */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-40" />
      )}

      <div className="flex w-full items-center justify-between overflow-y-hidden px-4 py-2 backdrop-blur-lg lg:m-2 lg:w-[50rem] z-50 lg:rounded-full lg:shadow-lg">
        <Link to="/" onClick={() => handleScroll(e)}>
          <img src={logo} alt="logo" width={60} height={60} className="p-2" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((data, index) => (
            <a
              key={index}
              href={`#${data.targetId}`}
              className={`text-sm font-bold text-[#c1121f] ${
                index !== 0 ? "border-l-2 border-neutral-600/40 pl-2 " : ""
              }hover:opacity-50`}
              onClick={(e) => handleScroll(e, data.targetId)} // Passing targetId correctly
            >
              {data.text}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <button onClick={() => handleMobileMenu()}>
            {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div className="flex justify-end w-full">
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#f1faee] border border-[#669bbc] py-4 text-center backdrop-blur-lg w-[300px] rounded-lg text-[#003049] z-50 relative">
            {LINKS.map((data, i) => (
              <motion.a
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                className="tracking-tighter text-sm uppercase block p-4 font-bold border-transparent hover:border-[#669bbc] rounded-md"
                key={i}
                href={`#${data.targetId}`}
                onClick={(e) => handleScroll(e, data.targetId)} // Pass the targetId here
              >
                {data.text}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navber;
