import React from "react";

// theme
import themeStore from "../../store/themeStore";

// icons
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const isDark = themeStore((state) => state.isDark);

  return (
    <div
      className={`px-10 py-3 flex justify-between ${
        isDark ? "bg-black text-white border-t" : "bg-white text-black border-t"
      }`}
    >
      <span className="block text-xs sm:text-xl font-semibold">
        2025 - Rhogenn Saingga, &copy; All rights reserved
      </span>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/ManaChanCoder"
          target="_blank"
          className="no-underline"
        >
          <FaGithub
            size={20}
            className="cursor-pointer hover:scale-95 duration-150"
          />
        </a>
        <a
          href="https://www.facebook.com/Rhogenn/"
          target="_blank"
          className="no-underline"
        >
          <FaFacebook
            size={20}
            className="cursor-pointer hover:scale-95 duration-150"
          />
        </a>
        <a href="" className="no-underline">
          <FaLinkedin
            size={20}
            className="cursor-pointer hover:scale-95 duration-150"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
