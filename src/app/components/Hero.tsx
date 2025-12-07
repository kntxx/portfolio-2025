"use client";

import Image from "next/image";
import { myDetails } from "../constants/data";
import { TypeAnimation } from "react-type-animation";
import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const Hero = () => {
  return (
    <section
      className="section min-h-[75vh] lg:min-h-screen flex items-center "
      id="home"
    >
      <div className="container mx-auto ">
        <div className="flex  justify-between items-center flex-col lg:flex-row gap-y-11">
          {/* left */}
          <div className="flex  justify-center items-center text-center lg:justify-start lg:text-left lg:w-[50%]">
            <div className="flex flex-col justify-center ">
              <motion.h1
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className="text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tighter font-bold leading-[0.9]"
              >
                Hello, I'm <br /> Kent Gesoro
              </motion.h1>
            </div>
          </div>

          {/* right */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="flex item  s-end justify-end text-center lg:text-left w-[90%] lg:w-[46%] "
          >
            {/* <Image
              src="/avatar.png"
              width={400}
              height={1}
              quality={100}
              priority={true}
              alt="Profile Picture"
              className="w-[250px] md:w-[350px]   lg:w-[450px] lg:h-full hover:rotate-12 transition duration-300"
            /> */}
            <h2 className="font-normal w-full text-lightgray tracking-normal text-[22px] md:text-[24px] lg:text-[32px] leading-tight mt-4">
              Aspiring Cloud Engineer seeking internship opportunities.
            </h2>
          </motion.div>
        </div>
        {/* Scroll down arrow */}
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center lg:justify-center mt-20 lg:w-[25%]"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
