"use client";

import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll/modules";
import { NavContext } from "./NavContext";
import { navLinks } from "../constants/data";

const NavMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);
  return (
    <nav
      className={`${
        isOpen ? "right-0" : "-right-full"
      } md:hidden fixed bg-white w-full top-0 z-20 bottom-0 transition-all duration-500`}
    >
      <div className="absolute right-0 left-0 mx-auto container mt-8 px-4">
        <div
          onClick={() => setIsOpen(false)}
          className="flex justify-end cursor-pointer"
        >
          <AiOutlineClose className="text-[24px]" />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-8">
          <ul className="flex gap-8 justify-center items-center flex-col font-bold text-[1.5rem]">
            {navLinks.map((items) => (
              <li
                className="cursor-pointer hover:text-gray-500 transition-colors"
                key={items.id}
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  to={items.id}
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-100}
                >
                  {items.title}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/Kent_Gesoro_Intern_Cloud_Engineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
