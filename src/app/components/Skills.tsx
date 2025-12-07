"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { skillCategories, certifications } from "../constants/data";

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="text-center mb-16"
        >
          <h1 className="text-[1.9rem] md:text-[2.5rem] lg:text-[3rem] font-bold">
            Skills & Certifications
          </h1>
          <p className="text-lightgray text-sm md:text-base mt-2">
            Technologies I work with and credentials I've earned
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="p-6"
            >
              <h3 className="text-lg font-semibold mb-6 text-center lg:text-left">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <skill.icon className="text-lg" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-semibold mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <a
                href={cert.link}
                target="_blank"
                key={cert.code}
                className="group flex items-start gap-4 p-6 border border-gray-200 rounded-xl hover:border-black transition-all duration-300 cursor-pointer"
              >
                <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <cert.icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-lightgray mb-1">
                    {cert.issuer} • {cert.code}
                  </p>
                  <h4 className="font-semibold text-sm leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-lightgray mt-1">{cert.date}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
