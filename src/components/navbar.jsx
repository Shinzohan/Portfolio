"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import Image from 'next/image'
import NavLink from "./navLinks";
import { motion, stagger,AnimatePresence } from "framer-motion";



const links =[
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navbar =() => {
    const [open,setOpen] = useState(false)


    const topVariants={
        closed:{
         rotate:0,  
        },

        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)"
        },
    }
    
    const centerVariants={
        closed:{
         opacity:1,  
        },

        opened:{
            opacity:0,
        },
    }
    const bottomVariants={
        closed:{
         rotate:0, 
        },

        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)"
        },
    }

    const listVariants={
        closed: {
            x: "100vw",
          },
          opened: {
            rotate:360,  
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            x: 0,
            transition: {
              when: "beforeChildren",
              type: "spring",
              staggerChildren: 0.2,
              duration: 1, 
              ease:"blackInOut",
            },
  },
    

    };

    const listItemVariants={
        closed:{
            x: -10,
            opacity: 0,
        },
        opened:{
            rotate:360,  
            x: 0,
            opacity: 1,
        },

    };





    return(
        <div className='h-full flex items-center  justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px48 text-xl text-white bg-black'>
            {/* Links */}
            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map((link)=>(
                    <NavLink  link={link} key={link.title}/>
                ))}
            </div>
            {/* logo */}
            <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link href="/" className="text-sm bg-black rounded-md p-4 font-semibold flex items-center justify-center shadow-custom">
                <span className="text-white text-lg mr-1">Shinzohan</span>
        
                </Link>
            </div>
            {/* socials */}
            <div className='hidden md:flex gap-4 w-1/3 '>
            <Link href="https://github.com/Shinzohan" target="_blank">
            <div className="p-2 bg-white rounded-full">
            <Image src="/github.png" alt='' width={24} height={24} />
            </div>
            </Link>
            <Link href="https://www.linkedin.com/in/harsh-shrivastav-7640462b8/" target="_blank">
            <div className="p-2 bg-white rounded-full">
            <Image src="/linkedin.png" alt='' width={24} height={24} />
            </div>
            </Link>

            </div>
            {/* responsive menu */}
           
            <div className='md:hidden'>
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={(()=>setOpen(!open))} style={{zIndex: "60"}}>
                    
                    <motion.div variants={topVariants}  animate={open ? "opened" : "closed"} className='w-10 h-1 bg-white rounded origin-left'></motion.div>
                    <motion.div variants={centerVariants} animate={open ? "opened" : "closed"}  className='w-10 h-1 bg-white rounded'></motion.div>
                    <motion.div variants={bottomVariants}  animate={open ? "opened" : "closed"} className='w-10 h-1 bg-white rounded origin-left'></motion.div>
                </button>
                {/* menu list */}
                <AnimatePresence>
                {open && (


                <motion.div variants={listVariants} 
                initial="closed" 
                animate="opened"
                className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl ' style={{zIndex: "50"}}>
                    {links.map(link=>(
                        <motion.div 
                        variants={listItemVariants}  className="" key={link.title} >
                        <Link href={link.url}>{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                


                )}</AnimatePresence>
            </div>
        </div> 
    )
       
}

export default Navbar;