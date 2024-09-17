import React from "react";
import AboutImg from "../assets/studying-5831644_1920.jpg";
import { ABOUT } from "../consents";
import { motion } from "framer-motion";

const About = () => {
  const varients = {
    initial: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="container py-10 mx-auto mb-8 ">
      <motion.h2
        variants={varients}
        initial={{ opacity: 0, y: 50 }}
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-6 font-bold text-[#1d3557] text-center tracking-tighter text-3xl lg:text-4xl"
      >
        What We Offers
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <motion.img
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={AboutImg}
            alt="We"
            className="rounded-lg lg:-rotate-3 "
          />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            variants={varients}
            initial="initial"
            whileInView="visible"
            transition={{ duration: 1, delay: 1 }}
            className="text-3xl tracking-tight lg:text-5xl text-[#c1121f]"
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div className="mb-8 mt-1 h-1 w-36 bg-slate-700 rounded-lg lg:-rotate-3 overflow-hidden"></motion.div>
          <motion.p
            variants={varients}
            initial="initial"
            whileInView="visible"
            transition={{ duration: 1.2, delay: 1 }}
            className="text-sm text-[#1d3557]/80 lg:max-w-xl tracking-tight leading-relaxed "
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
