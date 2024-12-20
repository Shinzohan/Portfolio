import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SpiderWebButtons = () => {
  // Animation variants for the web string
  const webStringVariants = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1,
      transition: { duration: 2, ease: "easeOut" }
    }
  };

  // Animation variants for the spider/button
  const spiderVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.2,
        ease: "easeOut",
        delay: 0.2
      }
    },
    hover: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Infinity
      }
    }
  };

  return (
    <div className="flex justify-center gap-10 md:gap-32 w-full">
      
      {/* First Spider Button */}
      <div className="relative z-20">
        <motion.div 
          className="h-24 w-0.5 bg-pink-300 origin-top mx-auto"
          variants={webStringVariants}
          initial="initial"
          animate="animate"
        />
        <Link href="/portfolio">
          <motion.button
            className="relative bg-pink-300 hover:bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg transform"
            variants={spiderVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-pink-300 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full" />
                </div>
              </div>
            </div>
            Projects
          </motion.button>
        </Link>
      </div>

      {/* Second Spider Button */}
      <div className="relative z-20">
        <motion.div 
          className="h-24 w-0.5 bg-pink-300 origin-top mx-auto"
          variants={webStringVariants}
          initial="initial"
          animate="animate"
        />
        <Link href="/contact">
          <motion.button
            className="relative bg-pink-300 hover:bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg transform"
            variants={spiderVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-pink-300 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full" />
                </div>
              </div>
            </div>
            Contact
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default SpiderWebButtons;
