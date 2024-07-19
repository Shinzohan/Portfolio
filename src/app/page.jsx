"use client";
import Image from "next/image";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { myLoader } from "../../imageLoader";
import StarField from "@/components/starry";
import "./globals.css"


const Homepage = () => {
  return  (

    
    
    <motion.div
    className="h-full bg-black"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
  >
    <div className="h-full w-full flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-scroll font-idk">
      {/* IMAGE CONTAINER */}
      <div className="relative w-full flex justify-center items-center mb-8">
        <div className="relative w-[300px] h-[300px] xl:w-[300px] xl:h-[400px]">
        <Image
         loader={myLoader}
         src="/hero.gif"
         alt="Hero"
         fill
         sizes ="true"
         className="object-contain z-10"
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
    <h1 className="text-4xl md:text-5xl font-bold">Harsh Shrivastav</h1>
    <h2 className="text-2xl md:text-3xl font-bold">Full-stack Developer</h2>
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
      <motion.div className="relative inline-block">
      <motion.button className="rounded-2xl border-2 border-dashed border-[#C73659] bg-black px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#C73659] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">

      My Work

      </motion.button>
      </motion.div>
    </Link>
     <Link href="/contact" passHref>
     <motion.div className="relative inline-block">
     <motion.button className="rounded-2xl border-2 border-dashed border-[#C73659] bg-black px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#C73659] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">

     Contact

    </motion.button>
      </motion.div></Link>

</div>

      </div>
  
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <StarField />
    </Suspense>
   
  </motion.div>
 
  

  );
};

export default Homepage;
