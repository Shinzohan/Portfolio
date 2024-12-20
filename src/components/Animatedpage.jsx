"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const AnimatedPage = ({ children }) => {
    const pathName = usePathname();

    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 1.2,
            y: -2000, // Start from the thrown position
            rotate: 45, // Start tilted
            transition: {
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0, // Reset rotation
            transition: {
                duration: 0.8,
                ease: [0.9, -0.05, 0.01, 0.99],
            },
        },
        exit: {
            opacity: 0,
            scale: 1.2,
            y: -2000, // Throw upwards
            rotate: 45, // Tilt on exit
            transition: {
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathName}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                className="w-screen h-screen bg-black overflow-hidden relative"
            >
                <Navbar />
                <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"></div>
                <div className="relative z-10">{children}</div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedPage;
