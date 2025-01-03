"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MyButton from "@/components/Button";
import { myLoader } from "../../../imageLoader";
import "../globals.css"

const Portfoliopage = () => {
  return (
    <motion.div
      className="h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container to remove white space */}
      <div className="h-full overflow-scroll justify-center font-idk relative z-10 bg-gradient-to-br from-zinc-800  to-black ">
        {/* Title */}
        <div className="flex justify-center mt-10">
          <div className="border-2 relative border-solid border-black bg-light p-10 bg-white max-w-lg w-full flex justify-center text-4xl">
            <div className="absolute left-3 top-3 bottom-3 -z-10 w-[100%] h-[97.8%]  bg-purple-400" />
            <span className="text-center">Show Case Of My Work!</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 justify-center pt-20">
          {/* PROJECT CARD 1 */}
          <div className="border-2 relative border-solid border-black bg-light p-10 bg-white max-w-lg w-full">
            {/* Background Accent */}
            <div className="absolute left-3 top-6 bottom-3 -z-10 w-[100%] h-[97.8%]  bg-purple-400" />

            {/* Image */}
            <Image
              loader={myLoader}
              src="/ONIBI.webp"
              alt="Project Image 1"
              width={500}
              height={400}
              className="rounded-t-[2rem] rounded-[1rem] object-cover"
            />

            {/* Header */}
            <h2 className="font-bold text-3xl text-center text-black mt-4">ONIBI</h2>

            {/* Text */}
            <p className="text-black text-lg text-center mt-2">This is a Static website that I have created for Aniflow interactive studios. You can check them out on Steam. Click the button to check-out the website</p>

            {/* Button */}
            <Link href="https://aniflowinteractive.com/" target="_blank">
              <MyButton buttonText="Learn More" />
            </Link>

          </div>
          {/* PROJECT CARD 2 */}
          <div className="border-2 relative border-solid border-black bg-light p-10 bg-white max-w-lg w-full">
            {/* Background Accent */}
            <div className="absolute left-3 top-6 bottom-3 -z-10 w-[100%] h-[97.8%]  bg-purple-400" />

            {/* Image */}
            <Image
              loader={myLoader}
              src="/Port.webp"
              alt="Project Image 2"
              width={500}
              height={400}
              className="rounded-t-[2rem] rounded-[1rem] object-cover "
            />

            {/* Header */}
            <h2 className="font-bold text-3xl text-center text-black mt-4">Portfolio</h2>

            {/* Text */}
            <p className="text-black text-lg text-center mt-2">This is my portfolio that I have created with love. that your currently viewing</p>

            {/* Button */}
            <Link href="https://portfolio-shinzohans-projects.vercel.app/" target="_blank">
              <MyButton buttonText="Learn More" />
            </Link>
          </div>
          <div className="border-2 relative border-solid border-black bg-light p-10 bg-white max-w-lg w-full">
            {/* Background Accent */}
            <div className="absolute left-3 top-6 bottom-3 -z-10 w-[100%] h-[97.8%]  bg-purple-400" />

            {/* Image */}
            <Image
              loader={myLoader}
              src="/Kitartstop2.webp"
              alt="Project Image 3"
              width={500}
              height={400}
              className="rounded-t-[2rem] rounded-[1rem] object-cover "
            />

            {/* Header */}
            <h2 className="font-bold text-3xl text-center text-black mt-4">KitArtStop</h2>

            {/* Text */}
            <p className="text-black text-lg text-center mt-2">This is a Static website that I have created for a freelancer artist/Streamer. You can check them out on on twitch. Click the button to check-out the website</p>

            {/* Button */}
            <Link href="https://kit-art-studio.vercel.app/" target="_blank">
              <MyButton buttonText="Learn More" />
            </Link>
          </div>

          {/* PROJECT CARD 3 */}
          <div className="border-2 relative border-solid border-black bg-light p-10 bg-white max-w-lg w-full">
            {/* Background Accent */}
            <div className="absolute left-3 top-6 bottom-3 -z-10 w-[100%] h-[97.8%]  bg-purple-400" />

            {/* Image */}
            <Image
              loader={myLoader}
              src="/Piano.webp"
              alt="Project Image 4"
              width={500}
              height={400}
              className="rounded-t-[2rem] rounded-[1rem] object-cover"
            />

            {/* Header */}
            <h2 className="font-bold text-3xl text-center text-black mt-4">Aniflow Testing</h2>

            {/* Text */}
            <p className="text-black text-lg text-center mt-2">This is the studio website we are currently working on, which is in the testing phase. Feel free to explore it and provide your feedback.</p>

            {/* Button */}
            <Link href="https://testing-two-ashy.vercel.app/" target="_blank">
              <div className="mt-7">
                <MyButton buttonText="Learn More" />
              </div>
            </Link>
          </div>
        </div>

        {/* svg */}


        {/* Project Section */}

      </div>
    </motion.div>
  );
};

export default Portfoliopage;
