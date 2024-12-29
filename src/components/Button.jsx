import { motion } from "framer-motion";
import React, { useState } from "react";
import "../app/globals.css";

const HoverButton = ({ buttonText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className="relative mt-4 mx-auto w-max no-tap-highlight">
      <motion.div
        className="absolute top-3 left-0 w-full h-full bg-pink-300 transform -translate-y-1.5 translate-x-1.5 rounded"
        initial={{ opacity: isHovered ? 0 : 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.button
        whileHover={{
          scale: 1.1,
          rotateX: 10,
          rotateY: 10,
        }}
        whileTap={{
          scale: 0.95,
          rotate: "2deg",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="relative bg-black text-white px-4 py-2 rounded transform-gpu"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};

export default HoverButton;
