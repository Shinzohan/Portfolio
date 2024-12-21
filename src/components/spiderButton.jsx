import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaSpider } from "react-icons/fa"; // Import the spider icon

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
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="flex justify-center gap-10 md:gap-32 w-full">
      {/* First Spider Button */}
      <div className="relative z-20">
        {/* Web String */}
        <motion.div
          className="xl:h-24 w-0.5 bg-purple-400 origin-top mx-auto shadow-lg shadow-purple-500"
          variants={webStringVariants}
          initial="initial"
          animate="animate"
        />
        {/* Spider Button */}
        <Link href="/portfolio">
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <FaSpider className="w-12 h-12 text-purple-300 shadow-lg" />
            <button className="bg-gradient-to-r shadow-[0px_-3px_15px_0px_rgba(128,90,213,0.5)] hover:from-purple-600 hover:to-purple-800 text-white px-8 py-4 rounded-full font-bold shadow-purple-400">
              Projects
            </button>
          </motion.div>
        </Link>
      </div>

      {/* Second Spider Button */}
      <div className="relative z-20">
        {/* Web String */}
        <motion.div
          className=" xl:h-24 w-0.5 bg-purple-400 origin-top mx-auto shadow-lg"
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
            whileHover="hover"
          >
            <FaSpider className="w-12 h-12 text-purple-300 shadow-lg" />
            <button className="bg-gradient-to-r shadow-[0px_-3px_15px_0px_rgba(128,90,213,0.5)] hover:from-purple-600 hover:to-purple-800 text-white px-8 py-4 rounded-full font-bold shadow-purple-400">
              Contact
            </button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default SpiderWebButtons;
