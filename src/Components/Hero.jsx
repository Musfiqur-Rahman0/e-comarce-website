import React from "react";
import video from "../assets/herovideo3.mp4";
import logo from "../assets/Screenshot 2024-09-13 150114.png";
import dhakaiLogo from "../assets/Dhakai (13).png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <video
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            src={video}
            playsInline
            poster={logo}
          ></video>
        </div>
      </div>
      <div className="absolute z-10 inset-0 rounded-lg bg-gradient-to-b from-transparent to-slate-600 to-99%"></div>
      <div className="relative z-20 flex h-screen flex-col justify-end pb-16 ">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={dhakaiLogo}
          alt="Dhakai fabrics"
          className="w-full " // Adjust sizes for responsive design
        />
        <p className="tracking-tighter text-[#003049]/60 font-light text-xl lg:pl-10 pl-7">
          Mirpur1,Dhaka Bangladesh
        </p>
      </div>
    </section>
  );
};

export default Hero;
