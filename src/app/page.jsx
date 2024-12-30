"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { myLoader } from "../../imageLoader";
import "./globals.css";
import SpiderWebButtons from "@/components/spiderButton";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiGreensock, SiFramer } from "react-icons/si";

const BubbleComponent = ({ position, size, icon, delay = 0 }) => {
  return (
    <motion.div
      className={`absolute ${position} transform hidden sm:block`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 15, 0],
      }}
      transition={{
        duration: 3,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <div
        className={`flex items-center justify-center ${size} rounded-full bg-white/10 shadow-lg`}
      >
        {icon}
      </div>
    </motion.div>
  );
};

const Homepage = () => {
  return (
    <motion.div
      className="h-screen w-screen bg-gradient-to-br from-zinc-800 to-black flex flex-col items-center justify-center relative overflow-visible"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Top row bubbles */}
      <BubbleComponent
        position="top-24 left-1/4"
        size="h-16 w-16 lg:h-20 lg:w-20"
        icon={<FaReact className="text-blue-400 text-2xl lg:text-3xl" />}
      />
      <BubbleComponent
        position="top-24 right-1/4"
        size="h-16 w-16 lg:h-20 lg:w-20"
        icon={<SiNextdotjs className="text-gray-300 text-2xl lg:text-3xl" />}
      />

      {/* Middle row bubbles */}
      <BubbleComponent
        position="top-1/2 left-48"
        size="h-14 w-14 lg:h-16 lg:w-16"
        icon={<SiTailwindcss className="text-teal-400 text-xl lg:text-2xl" />}
        delay={0.5}
      />
      <BubbleComponent
        position="top-1/2 right-48"
        size="h-14 w-14 lg:h-16 lg:w-16"
        icon={<SiGreensock className="text-green-400 text-xl lg:text-2xl" />}
        delay={0.5}
      />

      {/* Bottom row bubbles */}
      <BubbleComponent
        position="bottom-32 left-1/3"
        size="h-16 w-16 lg:h-20 lg:w-20"
        icon={<SiFramer className="text-purple-400 text-2xl lg:text-3xl" />}
        delay={1}
      />
      <BubbleComponent
        position="bottom-32 right-1/3"
        size="h-16 w-16 lg:h-20 lg:w-20"
        icon={<FaNodeJs className="text-green-500 text-2xl lg:text-3xl" />}
        delay={1}
      />

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
        <div className="w-full mb-10 lg:w-1/2 flex flex-col items-center gap-8 flex-grow">
          {/* TITLE */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-cursive">
              Yun Desu
            </h1>
            <h2 className="text-2xl md:text-3xl text-white font-bold font-cursive">
              Front-end Developer🕹️
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="relative border-2 border-solid border-purple-300 bg-pink-100 p-6 rounded-[2rem] shadow-lg">
            <div className="absolute left-0 top-4 bottom-3 -z-10 w-[102%] h-[96%] rounded-[2rem] bg-purple-200" />
            <p className="md:text-xl text-center text-gray-700">
              Looking for a front-end developer? Well, look no further! Im
              Shinzhan, skilled in front-end but also knowledgeable in
              back-end development. I bring clear communication and leverage
              the latest technologies. Rest assured, I wont leave your
              project mid-way!
            </p>
          </div>

          {/* Spider Web Buttons */}
          <div className="flex justify-center w-full">
            <SpiderWebButtons />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;