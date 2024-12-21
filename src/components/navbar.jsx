"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import "../app/globals.css";

const links = [
    { url: "/", icon: <FaHome /> },
    { url: "/about", icon: <FaUser /> },
    { url: "/portfolio", icon: <FaFolderOpen /> },
    { url: "/contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const sidebarVariants = {
        closed: {
            x: "100%",
        },
        opened: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
    };

    const linkVariants = {
        closed: {
            x: -20,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 300,
            },
        },
    };

    return (
        <div className="relative">
            {/* Sidebar Toggle Button */}
            <button
                className="fixed top-5 left-5 w-12 h-12 flex flex-col items-center justify-center gap-1.5 z-50  bg-gradient-to-br from-zinc-800  to-black rounded-full shadow-lg transition-colors duration-300"
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
            >
                <motion.div
                    className="w-6 h-1 bg-white rounded-full"
                    animate={open ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="w-6 h-1 bg-white rounded-full"
                    animate={open ? { scale: 0 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="w-6 h-1 bg-white rounded-full"
                    animate={open ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </button>

            {/* Sidebar Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={sidebarVariants}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        className="fixed top-0 right-0 w-44 h-screen  bg-black justify-center text-white flex flex-col items-start p-6 space-y-8"
                        style={{ zIndex: 40 }}
                    >
                        {links.map((link) => (
                            <motion.div
                                key={link.url}
                                variants={linkVariants}
                                className="flex items-center gap-4 text-xl hover:bg-white hover:bg-opacity-40 p-2 rounded-lg"
                            >
                                {link.icon}
                                <Link href={link.url}>{link.url.slice(1) || "Home"}</Link>
                            </motion.div>
                        ))}
                        {/* Social Links */}
                        <div className="absolute bottom-0 flex gap-2">
                            <Link href="https://github.com/Shinzohan" target="_blank">
                                <motion.button
                                    className="p-2 rounded-full bg- text-white text-2xl"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <FaGithub />
                                </motion.button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/harsh-shrivastav-7640462b8/" target="_blank">
                                <motion.button
                                    className="p-2 rounded-full  text-white text-2xl"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <FaLinkedin />
                                </motion.button>
                            </Link>
                            <Link href="https://dribbble.com/Shinzohan" target="_blank">
                                <motion.button
                                    className="p-2 rounded-full  text-white text-2xl"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <FaDribbble />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
