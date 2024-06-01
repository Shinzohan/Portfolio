"use client"


import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    // Get the values of message and email fields
    const message = form.current.user_message.value.trim();
    const email = form.current.user_email.value.trim();

    // Check if message and email are not empty
    if (!message || !email) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl text-white">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            🕹️
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full lg:w-1/2 bg-red-50 rounded-xl text-lg flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center p-4 sm:p-8 md:p-12 lg:p-16 shadow-lg"
        >
          <span className="text-base sm:text-lg md:text-xl">Dear Shinzo,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none text-base sm:text-lg md:text-xl"
            name="user_message"
          />
          <span className="text-base sm:text-lg md:text-xl">My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none text-base sm:text-lg md:text-xl"
          />
          <span className="text-base sm:text-lg md:text-xl">Regards</span>
          <button className="bg-blue-200 rounded font-semibold text-black p-2 sm:p-4 text-base sm:text-lg md:text-xl">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully👻!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold😭">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
