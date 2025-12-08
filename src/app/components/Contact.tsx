"use client";

import React, { useRef, FormEvent, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { enqueueSnackbar } from "notistack";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showMessage]);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_v6gvsyu",
          "template_qkvek19",
          form.current,
          "Bykfim08ZlZ2XXd_C"
        )
        .then(
          (result) => {
            console.log(result.text);
            enqueueSnackbar("Email sent successfully!", { variant: "success" });
            setShowMessage(true);
            setIsSending(false);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            enqueueSnackbar("Failed to send email. Please try again.", {
              variant: "error",
            });
            setIsSending(false);
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="text-center mb-16"
        >
          <h1 className="text-[1.9rem] md:text-[2.5rem] lg:text-[3rem] font-bold">
            Get In Touch
          </h1>
          <p className="text-lightgray text-sm md:text-base mt-2">
            Have a question or want to work together?
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Let's connect
              </h2>
              <p className="text-lightgray leading-relaxed mb-8">
                I'm currently looking for Cloud Engineering internship
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>

              {/* Contact Links */}
              <div className="space-y-4">
                <a
                  href="mailto:gesorokent@gmail.com"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-black transition-colors group"
                >
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-lightgray">Email</p>
                    <p className="font-medium">gesorokent@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/kent-joseph-gesoro-69b399259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-black transition-colors group"
                >
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                    <FiLinkedin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-lightgray">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/kentgesoro</p>
                  </div>
                </a>

                <a
                  href="https://github.com/kntxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-black transition-colors group"
                >
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                    <FiGithub className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-lightgray">GitHub</p>
                    <p className="font-medium">github.com/kentgesoro</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="p-8 border border-gray-200 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="text-sm text-lightgray mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="to_name"
                    required
                    className="bg-transparent border border-gray-200 rounded-lg px-4 py-3 outline-none w-full placeholder:text-lightgray focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-lightgray mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_name"
                    placeholder="Your Email"
                    required
                    className="bg-transparent border border-gray-200 rounded-lg px-4 py-3 outline-none w-full placeholder:text-lightgray focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-lightgray mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="bg-transparent border border-gray-200 rounded-lg px-4 py-3 resize-none outline-none w-full placeholder:text-lightgray focus:border-black transition-colors"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  value="Send"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="text-lg" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
