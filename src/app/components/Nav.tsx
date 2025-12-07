"use client";

import React, { useState, useContext, useEffect } from "react";
import { navLinks } from "../constants/data";
import { Link } from "react-scroll/modules";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import { NavContext } from "./NavContext";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const Nav = () => {
  const { setIsOpen } = useContext(NavContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="nav"
      className={`py-2   bg-bgcol ${
        isScrolled &&
        "fixed z-20  top-0 left-0 right-0 shadow-sm transition-all  "
      }`}
    >
      <div className="container   mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
          >
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              to="home"
            >
              <h1 className="font-neue font-semibold text-[40px] md:text-[1rem]  lg:text-[2.5rem] cursor-pointer">
                KG.
              </h1>
            </Link>
          </motion.div>
          <div className="hidden md:flex">
            <motion.ul
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              className="flex gap-10 font-neue font-bold md:text-[1rem]  lg:text-[1rem] "
            >
              {navLinks.map((items) => (
                <li
                  className="cursor-pointer hover:text-black hover:border-b hover:border-black transition-all duration-300 ease-in-out"
                  key={items.id}
                >
                  <Link
                    to={items.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    {items.title}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Kent_Gesoro_Intern_Cloud_Engineer_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  Resume
                </a>
              </li>
            </motion.ul>
          </div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="md:hidden "
            onClick={() => setIsOpen(true)}
          >
            <CiMenuBurger className="text-[1.3rem]" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
