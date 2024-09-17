import React from "react";
import { CONTACT } from "../consents";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVarients = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const itemsVarients = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section id="contact" className="container mx-auto py-16">
      <h2 className="text-4xl lg:text-5xl tracking-tight font-bold text-[#c1121f] text-center">
        Contact Us
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVarients}
        className="text-slate-500 "
      >
        {CONTACT.map((data, index) => (
          <motion.p
            variants={itemsVarients}
            className="my-10 border-b-2 border-dotted border-neutral-700 pb-10 text-center text-2xl tracking-tight lg:text-3xl"
            key={index}
          >
            {data.value}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
