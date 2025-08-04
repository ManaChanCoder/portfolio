import React, { useEffect, useRef } from "react";

// store
import scrollStore from "../../store/scrollStore";
import themeStore from "../../store/themeStore";

// icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const About = () => {
  const setAboutRef = scrollStore((state) => state.setAboutRef);
  const isDark = themeStore((state) => state.isDark);
  const aboutRef = useRef(null);

  useEffect(() => {
    setAboutRef(aboutRef);
  }, []);

  return (
    <div className="" ref={aboutRef}>
      <div className="mt-20 flex justify-center">
        <div className="w-4/5 sm:w-2/3">
          <h1 className="text-center text-2xl sm:text-5xl mb-5 font-semibold tracking-wide">
            About
          </h1>
          <span className="text-center block text-sm tracking-wide">
            I have basic knowledge of HTML, CSS, and JavaScript, which I use to
            build simple and responsive user interfaces. I work with React.js to
            create reusable components and handle basic interactivity, and I use
            Tailwind CSS for styling layouts efficiently. I also use Zustand for
            basic state management and push my projects to GitHub for version
            control practice. I'm still learning the MERN stack slowly to
            understand how frontend connects with backend logic. Most of my
            hands-on experience comes from projects like task trackers, profile
            cards, and modal-based forms. I can also use Figma at a basic level
            to interpret and create simple UI designs, especially for personal
            projects. Although my skills are still growing, I try to understand
            how everything works under the hood. I rely on research and
            consistent practice to improve. My goal is to write cleaner code,
            understand problem-solving better, and keep progressing at my own
            pace.
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 mt-5">
        <div className="flex justify-center gap-2">
          <FaHtml5 size={40} className="text-red-500" />
          <FaCss3Alt size={40} className="text-blue-500" />
          <FaJsSquare size={40} className="text-yellow-500" />
          <FaReact size={40} className="text-blue-300" />
          <SiMongodb size={40} className="text-emerald-500" />
        </div>
        <div className="flex justify-center gap-2">
          <FaBootstrap size={40} className="text-indigo-500" />
          <SiTailwindcss size={40} className="text-blue-400" />
          <FaFigma
            size={40}
            className={`rounded-full ${isDark ? "bg-gray-700 p-1" : ""}`}
          />
          <FaNode size={40} />
        </div>
      </div>
    </div>
  );
};

export default About;
