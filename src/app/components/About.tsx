"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Image from "next/image";
import { HiOutlineMail, HiOutlineAcademicCap } from "react-icons/hi";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { SiMicrosoftazure } from "react-icons/si";

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="text-center mb-16"
        >
          <h1 className="text-[1.9rem] md:text-[2.5rem] lg:text-[3rem] font-bold">
            About Me
          </h1>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column - Image & Quick Info */}
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            >
              <div className="relative">
                <Image
                  src="/aboutme-picture.png"
                  width={300}
                  height={350}
                  quality={100}
                  priority={true}
                  alt="Kent Gesoro"
                  className="rounded-xl object-cover"
                />
              </div>

              {/* Quick Info */}
              <div className="w-full space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <HiOutlineAcademicCap className="text-xl" />
                  <div>
                    <p className="text-xs text-lightgray">Education</p>
                    <p className="text-sm font-medium">
                      BSIT Cebu Technological University - Argao Campus{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FiMapPin className="text-xl" />
                  <div>
                    <p className="text-xs text-lightgray">Location</p>
                    <p className="text-sm font-medium">Cebu, Philippines</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <HiOutlineMail className="text-xl" />
                  <div>
                    <p className="text-xs text-lightgray">Email</p>
                    <p className="text-sm font-medium">
                      gesorokent@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Story */}
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="lg:col-span-8 flex flex-col justify-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Kent Joseph Gesoro
              </h2>
              <p className="text-lightgray text-sm uppercase tracking-widest mb-4">
                Cloud Engineer
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-8 w-fit">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-700">
                  Open to Cloud Engineering Internships
                </span>
              </div>

              {/* Story Cards */}
              <div className="space-y-6">
                <div className="p-6 border border-black bg-black text-white rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <FiArrowRight className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Now</h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        Over the last year, I have focused on self-studying
                        Microsoft Azure, mastering Infrastructure as Code
                        (Terraform), and building automated CI/CD pipelines. I
                        thrive in the space between code and operations—ensuring
                        software is delivered reliably and securely. I am now
                        actively seeking a Cloud Engineering internship to apply
                        these skills in a real-world production environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <FiArrowRight className="text-xl text-lightgray -rotate-90" />
                </div>

                <div className="p-6 border border-gray-200 rounded-xl hover:border-black transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <SiMicrosoftazure className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">The Pivot</h3>
                      <p className="text-lightgray leading-relaxed text-sm md:text-base">
                        While working on academic projects, I realized my
                        strengths lay in infrastructure rather than application
                        logic. I found myself more interested in how to host,
                        scale, and secure the application than in writing the
                        code itself. This realization led me to pivot towards
                        Cloud Engineering and DevOps.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <FiArrowRight className="text-xl text-lightgray -rotate-90" />
                </div>

                <div className="p-6 border border-gray-200 rounded-xl hover:border-black transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <HiOutlineAcademicCap className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">The Beginning</h3>
                      <p className="text-lightgray leading-relaxed text-sm md:text-base">
                        I am a final-year BSIT student at Cebu Technological
                        University. My journey began with full-stack
                        development, building applications with the MERN stack.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
