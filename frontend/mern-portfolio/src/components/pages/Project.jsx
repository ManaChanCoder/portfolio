import React, { useEffect, useRef } from "react";

// store
import scrollStore from "../../store/scrollStore";

// image
import Mcgi from "../../assets/projects/mcgi.png";
import PetsvilleHome from "../../assets/projects/petsville-home.png";
import CrashCourse from "../../assets/projects/ecommerce.png";

const Project = () => {
  const setProjectRef = scrollStore((state) => state.setProjectsRef);
  const projectsRef = useRef(null);
  const webProjects = [
    {
      title: "MCGI Biometric Attendance",
      description:
        "The MCGI Biometric Attendance project is a web-based system designed to streamline attendance tracking using biometric data. It allows users to securely log in, record attendance in real time, and view logs through a user-friendly interface. An admin dashboard enables efficient user and attendance management. The system ensures accuracy and automation in attendance reporting. Built using a full-stack approach with tools like MERN, Zustand for state management, and Tailwind CSS for clean, responsive styling, the platform offers a smooth and modern user experience.",
      image: Mcgi,
    },
    {
      title: "Petsville",
      description:
        "Petsville is an e-commerce web application focused on selling pet products such as food, accessories, and essentials. It features a user-friendly interface for browsing and managing items, with smooth UI built using Tailwind CSS. The app uses Firebase for real-time database and authentication, providing seamless product management and a responsive shopping experience for pet lovers.",
      image: PetsvilleHome,
    },
    {
      title: "MERN Crash Course",
      description:
        "This eCommerce web application provides a complete shopping experience with features like product browsing, user registration, cart management, and secure checkout. Built with the MERN stack, it handles both user and admin functionalities. The interface is styled with Chakra UI for a clean, responsive layout and smooth user interactions.",
      image: CrashCourse,
    },
  ];

  useEffect(() => {
    setProjectRef(projectsRef);
  }, []);
  return (
    <div ref={projectsRef} className="mt-20 px-10">
      <span className="text-2xl sm:text-4xl font-semibold text-center block sm:mb-10">
        Projects
      </span>
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col gap-5 items-center">
          {webProjects.map((proj, index) => (
            <div
              className={`flex flex-col sm:flex-row sm:items-center gap-5 bg-transparent ${
                index === 1 ? "sm:flex-row-reverse" : ""
              }`}
              key={index}
            >
              <section>
                <h3 className="text-lg font-semibold tracking-wider text-center sm:text-left">
                  {proj.title}
                </h3>
                <span className="block text-sm tracking-wide mt-2">
                  {proj.description}
                </span>
              </section>
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-xl w-fit sm:w-2/4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
