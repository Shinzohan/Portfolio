"use client";

import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import React from 'react';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';

const AnimatedPage = ({ children }) => {
    const pathName = usePathname();

    const blockVariants = {
        initial: { scaleY: 1, },
        animate: { scaleY: 0, height: "140vh" },
        exit: { scaleY: 1,  }
    };

    const blockTransition = { duration: 0.6, ease: "easeInOut" };

    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="w-screen h-screen bg-black overflow-hidden relative">
                
                {/* Animated Blocks */}
                <div className="absolute inset-0 flex flex-wrap z-40 pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className=" w-[10%] h-full bg-[#C73659]" 
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={blockVariants}
                            transition={{ ...blockTransition, delay: i * 0.05 }}
                        />
                    ))}
                </div>

                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-black text-8xl cursor-default z-40 pointer-events-none w-fit h-fit"
                    initial={{ opacity: 1, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {pathName.substring(1)}
                </motion.div>

                <div className="relative z-30">
                    <div className="h-24">
                        <Navbar />
                    </div>

                    <motion.div
                        className="h-[calc(100vh-6rem)] z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default AnimatedPage;