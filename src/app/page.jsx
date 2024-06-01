"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Notification from "@/components/Notification";
import Downloading from "@/components/downloading";
import Link from "next/link";
import "./globals.css"


const Homepage = () => {
  return  (

    
    
    <motion.div
    className="h-full bg-black"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
  >
    <div className="h-full w-full flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-hidden font-sans">
      {/* IMAGE CONTAINER */}
      <div className="relative w-full flex justify-center items-center mb-8">
        <div className="relative w-[300px] h-[300px] xl:w-[300px] xl:h-[400px]">
        <Image
         src="/hero.gif"
         alt="Hero"
         fill
         sizes ="true"
         className="object-contain"
         />
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 506 506"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="270"
              stroke="#C73659"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </div>
      {/* TEXT CONTAINER */}
      <div className="w-full lg:w-1/2 flex flex-col items-center gap-8">
        {/* TITLE */}
        <div className="text-center text-white">
    <h1 className="text-4xl md:text-4xl font-bold">Shinzohan</h1>
    <h2 className="text-2xl md:text-4xl font-bold">Web Developer</h2>
</div>

        {/* DESC */}
        <div className="border-2 relative border-solid border-black bg-light p-8 bg-white rounded-[2rem]">
        <div className='absolute left-0 top-4 bottom-3 -z-10 w-[102%] h-[96%] rounded-[2rem] bg-[#C73659]'/>
        <p className="md:text-xl text-center">
        Skilled Web Developer | Proficient in Next.js, Node.js & Express | RESTful API Development | PostgreSQL Knowledge | Three.js | Framer Motion | Docker | TypeScript | Gaming Enthusiast
        </p></div>
        {/* BUTTONS */}
        <div className="w-full flex gap-4 justify-center lg:mb-6 pt-5 relative z-10">
        <Link href="/portfolio" passHref>
        <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 255, 153, 1)" }}
        whileTap={{ scale: 0.95 }}
         transition={{ duration: 0.2, ease: "easeInOut" }}
          className="p-4 rounded-lg ring-1 ring-[#C73659] bg-black text-white shadow-custom"
>
    View My Work
     </motion.button></Link>
     <Link href="/contact" passHref>
     <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 255, 153, 1)" }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
    className="p-4 rounded-lg ring-1 ring-[#C73659] bg-black text-white shadow-custom"
>
    Contact Me
</motion.button></Link>

</div>

      </div>
      <Notification
                    className="hidden absolute left-[500px] bottom-[19rem] w-[18rem] xl:flex text-white"
                    title="Worked for"
                  />
    </div>
   <Downloading />
  </motion.div>
 
  

  );
};

export default Homepage;
