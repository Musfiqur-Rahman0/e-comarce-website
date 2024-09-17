import React from "react";
import { MISSION } from "../consents";
import { motion } from "framer-motion";
import heroVideo from "../assets/heroVideo2.mp4";

const Mission = () => {
  return (
    <section id="mission" className="">
      <div className="container mx-auto text-center border-b border-red-800 pb-10">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl mb-4 font-bold text-[#c1121f] tracking-tight lg:text-4xl"
        >
          Our Mission
        </motion.h2>
        {/* video  */}
        <div className="relative flex items-center justify-center">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            className="w-full rounded-3xl"
          ></video>
          <div className="absolute w-full h-full rounded-3xl bg-black/40"></div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
