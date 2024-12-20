"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { myLoader } from "../../imageLoader";
import "./globals.css";
import SpiderWebButtons from "@/components/spiderButton";

const Homepage = () => {
  return (
    <motion.div
      className="h-screen w-screen bg-black flex flex-col items-center justify-center relative overflow-visible"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

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
                stroke="#FFCFEF"
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
        <div className="w-full mb-10 lg:w-1/2 flex  flex-col items-center gap-8 flex-grow">
          {/* TITLE */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-cursive">Shinzohan</h1>
            <h2 className="text-2xl md:text-3xl text-white font-bold font-cursive">Front-end Developer</h2>
          </div>

          {/* DESCRIPTION */}
          <div className="relative border-2 border-solid border-pink-300 bg-pink-100 p-6 rounded-[2rem] shadow-lg">
            <div className="absolute left-0 top-4 bottom-3 -z-10 w-[102%] h-[96%] rounded-[2rem] bg-pink-200" />
            <p className="md:text-xl text-center text-gray-700">
            Looking for a front-end developer? well look no further im Shinzhan Skilled in front-end but i also know back-end development, I bring clear communication and will use all the new tech i wont leave your project mid-way 🕹️
            </p>
          </div>
         
          <SpiderWebButtons />
        
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
