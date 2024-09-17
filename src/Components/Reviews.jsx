import React from "react";
import { REVIEW } from "../consents";
import xaiam from "../assets/girl-5972597_1280.jpg";
import customer1 from "../assets/girl-5662873_1280.jpg";
import customer2 from "../assets/girl-5972597_1280.jpg";
import customer3 from "../assets/woman-6187177_1280.jpg";
import customer4 from "../assets/girl-7078324_1280 (1).jpg";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const containerVarients = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};
const itemsVarients = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Reviews = () => {
  return (
    <section id="review" className="container mx-auto mb-8 mt-12">
      <div className="flex flex-col">
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-light text-xl pl-2 leading-normal tracking-tighter lg:mr-40 lg:text-[2rem] text-slate-500 mb-10"
        >
          {REVIEW.content}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          <img
            src={xaiam}
            alt=""
            height={80}
            width={80}
            className="rounded-[50%] border object-cover"
          />
          <div className="tracking-tighter">
            <h6 className="text-xl font-bold text-[#003049]">{REVIEW.name}</h6>
            <p className="text-sm text-slate-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </div>
      <div className="text-4xl tracking-tight font-bold text-[#c1121f] text-center mt-10">
        <motion.h2
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Heppy Customers
        </motion.h2>
      </div>
      <motion.div
        variants={containerVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-14 flex flex-col justify-center items-center gap-2 md:flex-row"
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            variants={itemsVarients}
            key={index}
            src={customer}
            alt="customers"
            className="h-[300px] w-[200px]  rounded-bl-3xl rounded-tr-3xl object-cover"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Reviews;
