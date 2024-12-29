"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Heart, Send, Sparkles, AlertCircle, Loader2, } from "lucide-react";

const ContactPage = () => {
  const [status, setStatus] = useState("idle");
  const [isHovered, setIsHovered] = useState(false);
  const form = useRef();

  const BUTTON_STATES = {
    loading: {
      content: (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Sending...
        </>
      ),
      styles: "bg-purple-400 cursor-wait",
    },
    success: {
      content: (
        <>
          <Heart className="w-5 h-5 text-pink-200" />
          Sent Successfully!
        </>
      ),
      styles: "bg-green-500 hover:bg-green-600",
    },
    error: {
      content: (
        <>
          <AlertCircle className="w-5 h-5" />
          Try Again
        </>
      ),
      styles: "bg-red-500 hover:bg-red-600",
    },
    idle: {
      content: (
        <>
          Send Message
          <motion.div
            animate={isHovered ? { x: [0, 4, 0] } : {}}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Send className="w-5 h-5" />
          </motion.div>
        </>
      ),
      styles: "bg-purple-500 hover:bg-purple-700",
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const message = form.current.user_message.value.trim();
    const email = form.current.user_email.value.trim();

    if (!message || !email) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 2000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 2000);
        }
      );
  };

 

  const buttonContent = BUTTON_STATES[status].content;
  const buttonStyles = `group relative text-white rounded-2xl px-8 py-4 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${BUTTON_STATES[status].styles}`;

  return (
    <motion.div
      className="h-screen bg-gradient-to-br from-zinc-800  to-black"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12">
        {/* GREETING CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center relative shadow-lg  mb-4 lg:mb-0 lg:mr-8 rounded-2xl">
          

          <motion.div className="space-y-8 text-center relative">
            <motion.div
              className="relative inline-block"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Lets Connect
              </h1>
              <motion.div
                className="absolute -right-8 -top-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-12 h-12 text-yellow-400" />
              </motion.div>
            </motion.div>

            
          </motion.div>
        </div>

        {/* FORM CONTAINER */}
        <motion.form
          onSubmit={sendEmail}
          ref={form}
          className="w-full lg:w-1/2 bg-black shadow-purple-400 rounded-3xl text-lg flex flex-col gap-6 justify-center p-8 md:p-12 shadow-lg "
        >
          <span className="text-white text-base sm:text-lg md:text-xl">Say Hi~</span>
          <textarea
            rows={6}
            className="bg-transparent border-2 border-purple-200 rounded-xl p-4 outline-none resize-none text-white"
            name="user_message"
            placeholder="Write your message here..."
          />
          <input
            name="user_email"
            type="email"
            className="w-full bg-transparent border-2 border-purple-200 rounded-xl p-4 outline-none text-white"
            placeholder="Your email address"
          />
          <button className={buttonStyles} disabled={status === "loading"}>
            {buttonContent}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
