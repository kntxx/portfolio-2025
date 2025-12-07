"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { projects } from "../constants/data";

const Projects = () => {
  return (
    <section className="py-20 flex items-center" id="projects">
      <div className="mx-auto container px-4">
        <div className="flex flex-col justify-center items-center gap-y-16">
          {/* Header */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="text-center"
          >
            <h1 className="text-[1.9rem] md:text-[2.5rem] lg:text-[3rem] font-bold">
              Projects
            </h1>
          </motion.div>

          {/* Projects */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="relative w-full lg:w-[90%] overflow-hidden  p-10 rounded-md "
            >
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col gap-8 lg:gap-16`}
              >
                {/* Image */}
                <div className="group relative w-full lg:w-[55%] overflow-hidden rounded-xl border">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
                  <Image
                    src={project.image}
                    width={600}
                    height={400}
                    alt={project.title}
                    quality={100}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div className={`w-full lg:w-[45%] lg:text-left text-center`}>
                  <h2 className="text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-semibold mb-1">
                    {project.title}
                  </h2>
                  <p className="text-sm text-lightgray mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-lightgray leading-relaxed mb-6 text-[0.95rem] md:text-[1rem] lg:text-[1.1rem]">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div
                    className={`flex flex-wrap gap-2 mb-6 justify-center lg:justify-start `}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-xs font-semibold border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className={`flex gap-4 justify-center lg:justify-start`}>
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium hover:text-gray-500 transition-colors"
                    >
                      <FiGithub className="text-lg" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium hover:text-gray-500 transition-colors"
                    >
                      <HiOutlineExternalLink className="text-lg" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
