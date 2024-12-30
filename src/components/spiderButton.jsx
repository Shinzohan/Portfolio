import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaSpider } from "react-icons/fa"; // Import the spider icon
import "../app/globals.css";

const SpiderWebButtons = () => {
  // Animation variants for the web string
  const webStringVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  // Animation variants for the button
  const buttonVariants = {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 1.5,
      },
    },


  };

  return (
    <div className="flex justify-center gap-10 md:gap-32 w-full">
      {/* First Spider Button */}
      <div className="relative z-20">
        {/* Web String */}
        <motion.div
          className="xl:h-10 w-0.5 bg-purple-400 origin-top mx-auto shadow-lg shadow-purple-500"
          variants={webStringVariants}
          initial="initial"
          animate="animate"
        />
        {/* Spider Button */}
        <Link href="/portfolio">
          <motion.div
            className="flex flex-col items-center gap-2 no-tap-highlight"
            variants={buttonVariants}
            initial="initial"
            animate="animate"

          >
            <FaSpider className="w-12 h-12 text-purple-300 shadow-lg  hover:scale-110 hover:text-purple-400 transition-all duration-300" />
            <button className="group relative overflow-hidden bg-black hover:from-purple-600 hover:to-purple-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0px_-3px_15px_0px_rgba(128,90,213,0.5)] hover:shadow-[0px_-3px_25px_5px_rgba(128,90,213,0.7)]">
              {/* Shine effect */}
              <div className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
              {/* Pulsing border */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-300 opacity-0 group-hover:opacity-100 animate-pulse" />
              Projects
            </button>
          </motion.div>
        </Link>
      </div>

      {/* Second Spider Button */}
      <div className="relative z-20">
        {/* Web String */}
        <motion.div
          className=" xl:h-10 w-0.5 bg-purple-400 origin-top mx-auto shadow-lg no-tap-highlight"
          variants={webStringVariants}
          initial="initial"
          animate="animate"
        />
        {/* Spider Button */}
        <Link href="/contact">
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={buttonVariants}
            initial="initial"
            animate="animate"

          >
            <FaSpider className="w-12 h-12 text-purple-300 shadow-lg  hover:scale-110 hover:text-purple-400 transition-all duration-300" />
            <button className="group relative overflow-hidden bg-black hover:from-purple-600 hover:to-purple-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0px_-3px_15px_0px_rgba(128,90,213,0.5)] hover:shadow-[0px_-3px_25px_5px_rgba(128,90,213,0.7)]">
              {/* Shine effect */}
              <div className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
              {/* Pulsing border */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-300 opacity-0 group-hover:opacity-100 animate-pulse" />
              Contact
            </button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default SpiderWebButtons;
