import React, { useState } from "react";
import { Link } from "react-router-dom";

// theme
import themeStore from "../../store/themeStore";
import scrollStore from "../../store/scrollStore";

// icons
import {
  MdOutlineLightMode,
  MdDarkMode,
  MdMenu,
  MdClose,
} from "react-icons/md";

const Navbar = () => {
  const isDark = themeStore((state) => state.isDark);
  const toggleTheme = themeStore((state) => state.toggleTheme);
  const [isOpen, setisOpen] = useState(false);
  const { homeRef, aboutRef, projectsRef, contactRef } = scrollStore();

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-full fixed top-0 z-3 ${
        isDark ? "bg-black text-white border-b" : "bg-white text-black"
      }`}
    >
      <div
        className={`hidden sm:flex justify-between items-center px-10 py-3 select-none `}
      >
        <span className="text-2xl uppercase font-mono">My Portfolio</span>
        <ul className="hidden sm:flex gap-1.5 items-center">
          <li
            className={`list-none px-2 py-1 cursor-pointer ${
              isDark
                ? "relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                : "relative inline-block after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            }`}
            onClick={() => scrollTo(homeRef)}
          >
            Home
          </li>
          <li
            className={`list-none px-2 py-1 cursor-pointer ${
              isDark
                ? "relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                : "relative inline-block after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            }`}
            onClick={() => scrollTo(aboutRef)}
          >
            About
          </li>
          <li
            className={`list-none px-2 py-1 cursor-pointer ${
              isDark
                ? "relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                : "relative inline-block after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            }`}
            onClick={() => scrollTo(projectsRef)}
          >
            Projects
          </li>
          <Link to="/resume">
            <li
              className={`list-none px-2 py-1 cursor-pointer ${
                isDark
                  ? "relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                  : "relative inline-block after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              }`}
            >
              Resume
            </li>
          </Link>
          <li
            className={`list-none px-2 py-1 cursor-pointer ${
              isDark
                ? "relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                : "relative inline-block after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            }`}
            onClick={() => scrollTo(contactRef)}
          >
            Contact
          </li>
          <li className="ml-5">
            {isDark ? (
              <MdOutlineLightMode
                size={30}
                className="cursor-pointer hover:scale-110 duration-150"
                onClick={toggleTheme}
              />
            ) : (
              <MdDarkMode
                size={30}
                className="cursor-pointer hover:scale-110 duration-150"
                onClick={toggleTheme}
              />
            )}
          </li>
        </ul>
      </div>

      {/* phone size menu and light mode btn */}
      <div className="sm:hidden flex justify-between items-center px-10 py-3">
        <span className="text-lg uppercase">My Portfolio</span>
        <div className="flex gap-7">
          <MdMenu
            size={30}
            className="cursor-pointer hover:scale-110 duration-150"
            onClick={toggleMenu}
          />

          {isDark ? (
            <MdOutlineLightMode
              size={30}
              className="sm:hidden block cursor-pointer hover:scale-110 duration-150"
              onClick={toggleTheme}
            />
          ) : (
            <MdDarkMode
              size={30}
              className="sm:hidden cursor-pointer hover:scale-110 duration-150"
              onClick={toggleTheme}
            />
          )}
        </div>
      </div>

      {/* phone size */}
      {isOpen ? (
        <div
          className={`absolute sm:hidden w-full px-5 py-22 ${
            isDark ? "bg-gray-900" : "bg-teal-50"
          }`}
        >
          <ul className="flex flex-col items-center gap-5 py-3 text-lg tracking-widest">
            <li
              className={`list-none px-2 py-1 cursor-pointer ${
                isDark
                  ? "relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                  : "relative inline-block after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              }`}
              onClick={() => {
                scrollTo(homeRef);
                toggleMenu();
              }}
            >
              Home
            </li>
            <li
              className={`list-none px-2 py-1 cursor-pointer ${
                isDark
                  ? "relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                  : "relative inline-block after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              }`}
              onClick={() => {
                scrollTo(aboutRef);
                toggleMenu();
              }}
            >
              About
            </li>
            <li
              className={`list-none px-2 py-1 cursor-pointer ${
                isDark
                  ? "relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                  : "relative inline-block after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              }`}
              onClick={() => {
                scrollTo(projectsRef);
                toggleMenu();
              }}
            >
              Projects
            </li>
            <Link to="/resume">
              <li
                className={`list-none px-2 py-1 cursor-pointer ${
                  isDark
                    ? "relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                    : "relative inline-block after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                }`}
              >
                Resume
              </li>
            </Link>
            <li
              className={`list-none px-2 py-1 cursor-pointer ${
                isDark
                  ? "relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                  : "relative inline-block after:block after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              }`}
              onClick={() => {
                scrollTo(contactRef);
                toggleMenu();
              }}
            >
              Contact
            </li>
            <li className="absolute top-5 right-5">
              <MdClose
                size={30}
                className="cursor-pointer hover:scale-110 duration-150"
                onClick={toggleMenu}
              />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
