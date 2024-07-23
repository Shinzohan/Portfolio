"use client";
import { motion, useInView } from "framer-motion";
import { useRef,Suspense} from "react";
import StarField from "@/components/starry";
import "../globals.css"



const AboutPage = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px", once: true });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px", once: true });

  return (
    <motion.div
      className="h-full bg-black"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    
      
    >
  
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex justify-center font-idk relative z-10">
        {/* LEFT DIV */}
        

        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-4xl flex text-white">ABOUT</h1>
            {/* BIOGRAPHY DESC */}
            <div className="border-2 relative border-solid border-black bg-light p-10 bg-white ">
           <div className="absolute left-4 top-4 bottom-3 -z-10 w-[99%] h-[96%]  bg-[#C73659]" />
          {/* Content for the left div */}
          <p className="text-black text-lg flex justify-center">Hi my name is harsh and im a full-stack web developer in designing, implementing, testing, and maintaining robust and scalable server-side applications. Proficient in multiple programming languages, I am seeking an entry-level job.</p>
           </div>
            <div className="border-2 relative border-solid border-black bg-light p-10 bg-white ">
              <div className="absolute left-4 top-5 bottom-3 -z-10 w-[99%] h-[96.4%]  bg-[#C73659]" />
              <p className="text-lg">
              Im always ready to learn new methods as a programmer besides that im also a gamer.
              </p>
            </div>
            
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Ready to learn
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
             
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
             initial={{ y: 0 }}
             animate={{ opacity: 1, y: "20px" }}
             transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut"}}
             viewBox="0 0 48 48"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             width={100}
             height={100}
>
            {/* First arrow */}
           <path
            d="M24 18 L30 6 L24 12 L18 6 L24 18"
            stroke="#000000"
             strokeWidth="1"
            fill="yellow"
                            />
  
            {/* Second arrow */}
             <path
             d="M24 42 L30 30 L24 36 L18 30 L24 42"
             stroke="#000000"
             strokeWidth="1"
             fill="yellow"
                        />
             </motion.svg>

          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
             initial={{ x: "-300px", rotate: 0, opacity: 0 }}
             animate={isSkillRefInView ? { x: 0, rotate: 360, opacity: 1 } : {}}
             transition={{ delay: 0.2 }}
              className="font-bold text-4xl text-white"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LISblack*/}
            <motion.div
             initial={{ x: "-300px", rotate: 0, opacity: 0 }}
             animate={isSkillRefInView ? { x: 0, rotate: 360, opacity: 1 } : {}}
              className="flex gap-4 flex-wrap z-40"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                RestApi
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
             
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                Jquery
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                Framer Motion
              </div>
            
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                TypeScript
              </div>
            
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                Docker
              </div>
            
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                Version Control
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-[#C73659] text-black hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
             initial={{ y: 0 }}
             animate={{ opacity: 1, y: "20px" }}
             transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
             viewBox="0 0 48 48"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             width={100}
             height={100}
>
            {/* First arrow */}
           <path
            d="M24 18 L30 6 L24 12 L18 6 L24 18"
            stroke="#000000"
             strokeWidth="1"
            fill="yellow"
                            />
  
            {/* Second arrow */}
             <path
             d="M24 42 L30 30 L24 36 L18 30 L24 42"
             stroke="#000000"
             strokeWidth="1"
             fill="yellow"
                        />
             </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-4xl text-white"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-[1rem] relative">
                  <div className='absolute left-0 top-2 bottom-2 -z-10 w-[102%] h-[96%] rounded-[1rem] bg-[#C73659]'/>
                    Full-Stack Web Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-1xl text-white">
                    I created a static website for a indie studio as a freelancer.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded-[1rem] bg-white text-sm font-semibold w-fit relative">
                  <div className='absolute left-0 top-1 bottom-2 -z-10 w-[102%] h-[96%] rounded-[1rem] bg-[#C73659]'/>
                    Aniflowinteractive
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-[1rem] relative">
                  <div className='absolute left-0 top-2 bottom-2 -z-10 w-[102%] h-[96%] rounded-[0.8rem] bg-[#C73659]'/>
                    Unreal Engine Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-1xl text-white">
                    i did some backend work in the unreal engine for the game studio.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - 2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded-[1rem] bg-white text-sm font-semibold w-fit relative">
                  <div className='absolute left-0 top-1 bottom-2 -z-10 w-[102%] h-[96%] rounded-[0.8rem] bg-[#C73659]'/>
                    FreeLancer
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-[1rem] relative">
                  <div className='absolute left-0 top-2 bottom-2 -z-10 w-[102%] h-[96%] rounded-[0.8rem] bg-[#C73659]'/>
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-1xl text-white">
                    I Provided IT solutions as a freelancer for various clients.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - 2022{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
    


      </div>
      <Suspense fallback={<div>Loading...</div>}>
      <StarField />
    </Suspense>
    </motion.div>
  );
};

export default AboutPage;