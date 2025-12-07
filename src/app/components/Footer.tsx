"use client";
import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiMicrosoftazure } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Copyright */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="text-center md:text-left md:flex-1"
          >
            <p className="text-sm text-lightgray">
              © 2025 Kent Gesoro. All Rights Reserved.
            </p>
          </motion.div>

          {/* Center - Deployed on Azure */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="flex items-center justify-center gap-2 text-sm text-lightgray"
          >
            <span>Deployed on</span>
            <SiMicrosoftazure className="text-lg" />
            <span className="font-medium text-black">Azure</span>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="flex items-center justify-end gap-4 md:flex-1"
          >
            <a
              href="https://github.com/kntxx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-200 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/kent-joseph-gesoro-69b399259/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-200 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <FiLinkedin className="text-lg" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
