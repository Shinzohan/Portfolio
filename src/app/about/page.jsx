"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import spiderAnimation from "/SpiderAnimation.json";

const AboutPage = () => {
  return (
    <motion.div
      className="h-screen bg-gradient-to-br from-zinc-800 to-black overflow-y-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <Lottie 
        animationData={spiderAnimation} 
        style={{ width: 280, height: 280, position: "absolute", top: 0, left: "90%", transform: "translateX(-50%)", zIndex: 50 }} 
      />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8 items-center mb-16">
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-4xl text-pink-300">About Me</h1>
            </div>

            <div className="relative bg-white rounded-3xl shadow-lg shadow-purple-400 p-6 border-2 border-pink-200">
              <div className="bg-pink-50 absolute inset-0 rounded-3xl -z-10 transform rotate-1" />
              <p className="text-gray-700 text-xl text-center leading-relaxed">
                Hi! I am Shinzo, a full-stack web developer who loves creating cute and functional websites! ✨
              </p>
            </div>

            <div className="relative bg-white rounded-3xl p-6 shadow-lg shadow-purple-400 border-2 border-pink-200">
              <div className="bg-pink-50 absolute inset-0 rounded-3xl -z-10 transform -rotate-1" />
              <p className="text-gray-700 text-xl text-center leading-relaxed">
                When I am not coding, I am gaming and learning new programming tricks! 🎮
              </p>
            </div>

            <div className="w-full mt-16">
              <div className="flex items-center justify-center gap-2 mb-8">
                <h2 className="font-bold text-3xl text-pink-300">My Skills</h2>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {['JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Auth', 'Framer-Motion'].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white px-4 py-2 shadow-purple-400 rounded-full shadow-md border-2 border-pink-200"
                  >
                    <span className="text-black font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full mt-16">
              <div className="flex items-center justify-center gap-2 mb-8">
                <h2 className="font-bold text-3xl text-pink-300">Experience</h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "Full-Stack Web Developer",
                    company: "Aniflowinteractive",
                    period: "2024 - Present",
                    description: "Created a static website for an indie studio ✨"
                  },
                  {
                    title: "Unreal Engine Developer",
                    company: "Freelancer",
                    period: "2023 - 2024",
                    description: "Worked on backend systems in Unreal Engine 🎮"
                  },
                  {
                    title: "IT Solutions Freelancer",
                    company: "Self-employed",
                    period: "2020 - 2022",
                    description: "Provided various IT solutions for clients 💻"
                  }
                ].map((exp) => (
                  <div
                    key={exp.title}
                    className="bg-white rounded-2xl p-6 shadow-lg shadow-purple-400 border-2 border-pink-200 relative"
                  >
                    <div className="bg-pink-50 absolute inset-0 rounded-2xl -z-10 transform rotate-1" />
                    <h3 className="text-xl font-bold text-black mb-2">{exp.title}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;