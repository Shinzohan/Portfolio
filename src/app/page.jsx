"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { myLoader } from "../../imageLoader";
import "./globals.css";
import SpiderWebButtons from "@/components/spiderButton";

const Homepage = () => {
  return (
    <motion.div
      className="h-screen w-screen bg-gradient-to-br from-zinc-800  to-black flex flex-col items-center justify-center relative overflow-visible"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      
      <div className="flex flex-col items-center justify-center px-8 md:px-12 lg:px-20 xl:px-48 mt-0 xl:mt-20 font-idk h-full w-full z-20">
        {/* IMAGE CONTAINER */}
        <div className="relative mt-10 lg:mt-5 w-full flex justify-center items-center mb-4 lg:mb-6">
          <div className="relative w-[150px] h-[120px] md:w-[100px] md:h-[100px] xl:w-[170px] xl:h-[170px]">
            <Image
              loader={myLoader}
              src="/Hero-2.webp"
              alt="Hero"
              fill
              sizes="true"
              className="object-contain z-10"
            />
          
          </div>
        </div>
        
        {/* TEXT CONTAINER */}
        <div className="w-full mb-10 lg:w-1/2 flex  flex-col items-center gap-8 flex-grow">
          {/* TITLE */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-cursive">Yun Desu</h1>
            <h2 className="text-2xl md:text-3xl text-white font-bold font-cursive">Front-end Developer🕹️</h2>
          </div>

          {/* DESCRIPTION */}
          <div className="relative border-2 border-solid border-purple-300 bg-pink-100 p-6 rounded-[2rem] shadow-lg">
            <div className="absolute left-0 top-4 bottom-3 -z-10 w-[102%] h-[96%] rounded-[2rem] bg-purple-200" />
            <p className="md:text-xl text-center text-gray-700">
            Looking for a front-end developer? well look no further im Shinzhan Skilled in front-end but i also know back-end development, I bring clear communication and will use all the new tech i wont leave your project mid-way 
            </p>
          </div>
          <div className="flex justify-center w-full"> 
         
          <SpiderWebButtons />
          </div>
        
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
