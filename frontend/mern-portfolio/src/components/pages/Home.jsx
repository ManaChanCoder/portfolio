import React, { useEffect, useRef } from "react";

// store
// import themeStore from "../store/themeStore";
import scrollStore from "../../store/scrollStore";

// img
import GradImg from "../../assets/grad-img.png";

const Home = () => {
  const setHomeRef = scrollStore((state) => state.setHomeRef);
  const homeRef = useRef(null);

  useEffect(() => {
    setHomeRef(homeRef);
  }, []);

  return (
    <div ref={homeRef} className={`px-10 h-autos`}>
      <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-10 sm:gap-52">
        <div className="w-auto sm:w-96 mt-10">
          <h1 className="font-bold text-4xl sm:text-5xl">Hi, I'm Rhogenn</h1>
          <h2 className="font-semibold text-sm sm:text-2xl my-1 sm:my-2">
            Aspiring Frontend Developer.
          </h2>
          <span className="block text-sm tracking-normal sm:tracking-tighter">
            I'm a passionate and detail-oriented junior frontend developer with
            hands-on experience using HTML, CSS, JavaScript, and React.js. I
            enjoy building clean, responsive web interfaces and continuously
            improving my skills through real-world projects. I'm also exploring
            the MERN stack and using tools like Zustand for state management and
            Tailwind CSS for efficient styling. I thrive in problem-solving
            environments and love turning ideas into interactive, functional
            websites. I'm eager to contribute to collaborative teams and grow as
            a developer in the tech industry.
          </span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white tracking-normal sm:tracking-wide cursor-pointer px-2 py-1 sm:px-3 sm:py-1.5 mt-3 rounded-md">
            Contact
          </button>
        </div>

        <img
          src={GradImg}
          alt="Post Picture"
          className="rounded-full w-80 h-80 sm:w-auto sm:h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
