import React from "react";
import { CUSINES } from "../consents";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Expertise = () => {
  const containerVarients = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const itemsVarients = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  };

  const varients = {
    hidden: { opacity: 0, x: -0 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="expertise" className="pt-10">
      <motion.h2
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 1 }}
        className="text-3xl lg:text-4xl pb-8 text-center tracking-tighter font-bold text-[#c1121f]"
      >
        Our Expertise
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVarients}
        viewport={{ once: false, amount: 0.2 }} // Only trigger once when 20% in view
        className="container mx-auto px-4"
      >
        {CUSINES.map((data, index) => (
          <motion.div
            key={index}
            variants={itemsVarients}
            className="flex items-center border-b-2 border-dotted py-2 border-neutral-700"
          >
            <div className="pr-4 flex-shrink-0 text-2xl text-[#003049]">
              {data.number}
            </div>
            <div className="w-1/3 flex-shrink-0">
              <Link
                to={{
                  pathname: "/order", // Path to your order page
                }}
                state={{ image: data.image, title: data.title }} // Pass the image and title via state
              >
                <motion.img
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  src={data.image} // Use the correct image from the `data`
                  alt={data.title}
                  className="h-[300px] w-full object-cover cursor-pointer rounded-3xl"
                />
              </Link>
            </div>
            <div className="pl-8 ">
              <motion.h3
                variants={varients}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1.2, delay: 1.2 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold tracking-tight text-[#003049]"
              >
                {data.title}
              </motion.h3>
              <motion.p
                variants={varients}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="text-xl pt-2 text-sky-800/60 tracking-tight"
              >
                {data.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;
