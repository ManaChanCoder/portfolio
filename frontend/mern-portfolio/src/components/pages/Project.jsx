import React, { useEffect, useRef } from "react";

// store
import scrollStore from "../../store/scrollStore";
import themeStore from "../../store/themeStore";

// icons
import { FiActivity } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";

import BlogPreviewCard from "../../assets/projects/blog-preview-card.png";
import ExtensionList from "../../assets/projects/extension-list.png";

const Project = () => {
  const setProjectRef = scrollStore((state) => state.setProjectsRef);
  const projectsRef = useRef(null);
  const isDark = themeStore((state) => state.isDark);
  const webProjects = [
    {
      title: "Bible Note",
      description:
        "My Bible note is a simple yet practical task management application designed to help users stay organized and productive. It allows users to add, edit, and delete tasks with ease while keeping track of their progress in real-time. The app supports a clean and responsive UI, making it accessible across devices. It also includes features like search and filtering to quickly find tasks, along with a theme toggle for a personalized experience. Built with React, Zustand, and Tailwind, this project showcases my growing skills in modern frontend development.",
      image: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg",
      url: "https://todo-app-rose-omega.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/todo-app",
    },
    {
      title: "Phantom Template",
      description:
        "My Phantom Template is a sleek and modern starter project built using React and Bootstrap, designed to provide developers with a flexible foundation for creating responsive websites. It features clean layouts, reusable components, and a mobile-first design approach to ensure seamless viewing across devices. The template includes sections for showcasing content, navigation menus, and interactive elements, making it adaptable for portfolios, landing pages, or business websites. With its integration of Bootstrap’s utility classes and React’s component-based architecture, this project highlights my ability to blend design frameworks with modern frontend development practices.",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
      url: "https://phantom-template.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/phantom-template",
    },
    {
      title: "Petsville",
      description:
        "Petsville is a user-friendly e-commerce web application and our Capstone Project, designed for pet owners to conveniently browse and purchase pet products. It allows users to explore categories like food, toys, and accessories, add items to the cart, and track orders in real-time. The app features a clean and responsive interface, ensuring seamless navigation across devices. Additional functionalities include search, profile management, and dynamic cart and order tracking for a personalized shopping experience. Built with React, Firebase, and Tailwind CSS, this project highlights my ability to integrate modern frontend technologies with cloud-based backend services.",
      image:
        "https://images.pexels.com/photos/16395151/pexels-photo-16395151.jpeg",
      url: "https://capstone-project-ecru-eight.vercel.app",
      codeUrl: "https://github.com/ManaChanCoder/Capstone-Project",
    },
    {
      title: "Multi Step Form",
      description:
        "A responsive and user-friendly multi-step form application built with React and Zustand, designed to guide users through a smooth, structured process. The form allows users to enter details step by step, select a subscription plan with options for monthly or yearly pricing, and choose from multiple add-ons to customize their experience. It features a clear progress indicator to track steps, built-in validation for accuracy, and a dynamic live summary that calculates totals before final submission. Zustand provides efficient global state management, ensuring consistent data flow and easy step-to-step navigation, while conditional rendering displays only relevant fields. This project is ideal for onboarding workflows, checkout wizards, subscription management systems, or any modern application requiring clean and intuitive multi-stage input handling.",
      image:
        "https://cdn.pixabay.com/photo/2017/03/21/02/00/list-2160914_1280.png",
      url: "https://multi-step-form-one-ruby.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/multi-step-form",
    },
    {
      title: "QR Code Component",
      description:
        "This project is a simple yet responsive QR Code component built using modern frontend tools. It is designed to display a QR code inside a clean, card-style layout with a title and supporting text, making it both visually appealing and user-friendly. The goal of the project is to practice fundamental skills in structuring components, applying consistent styling, and ensuring responsiveness across different screen sizes. Though minimal in functionality, it demonstrates attention to layout, design, and accessibility.",
      image:
        "https://cdn.pixabay.com/photo/2021/11/30/00/43/qr-6834147_1280.png",
      url: "https://qr-code-component-sigma-lime.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/qr-code-component",
    },
    {
      title: "Social Link Profile",
      description:
        "This project is a simple social link profile page created using only HTML and CSS. It presents a clean and minimal card-style layout that highlights a profile image, username, short bio, and a list of social media links styled as interactive buttons. The design focuses on simplicity and responsiveness, ensuring the layout adapts well across different screen sizes. This project demonstrates essential frontend skills such as semantic HTML structure, CSS styling, hover effects, and responsive design techniques. It serves as a beginner-friendly exercise in creating practical UI components.",
      image:
        "https://cdn.pixabay.com/photo/2013/10/25/17/26/tree-200795_1280.jpg",
      url: "https://html-css-challenges-orpin.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/html-css-challenges",
    },
    {
      title: "Weather App",
      description:
        "The Weather App is a modern web application built using React with TypeScript and Bootstrap for styling. It allows users to search for any city worldwide and view real-time weather data powered by the OpenWeather API. The app fetches current weather conditions including temperature, humidity, wind speed, and weather icons, and displays them in a responsive and visually appealing interface. TypeScript ensures type safety across components and API responses, reducing runtime errors. The app uses Zustand for state management, keeping data like the selected city, weather details, and search results in a central store. Users can type in a city name, see suggestions in a dropdown, and select a city to update the main display. Bootstrap ensures mobile-friendly layouts with grids and cards. The app also handles API errors gracefully and provides a default location (like Manila) if the user hasn’t searched yet. Overall, it’s an interactive, type-safe, and user-friendly project demonstrating modern frontend best practices.",
      image:
        "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg",
      url: "http://weather-app-three-rho-93.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/weather-app",
    },
    {
      title: "Generate Password",
      description:
        "The React Password Generator is a modern web application built using React, TypeScript, Vite, and Bootstrap 5 that allows users to quickly generate strong, secure passwords for their accounts and applications. The app provides an interactive range slider to select the desired password length and Bootstrap switch buttons to include or exclude numbers, symbols, and uppercase letters, giving users full control over password complexity. With the integration of TypeScript, the project benefits from type safety and more reliable code. Users can easily copy the generated password to their clipboard with a single click, improving convenience. The responsive design, powered by Bootstrap, ensures a clean and user-friendly interface across all devices. This app is lightweight, fast, and ideal for anyone looking to enhance their online security by generating unique, random passwords quickly and efficiently.",
      image:
        "https://images.pexels.com/photos/17485678/pexels-photo-17485678.png",
      url: "https://generate-password-three-rho.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/generate-password",
    },
    {
      title: "Blog Preview Card",
      description:
        "A simple and elegant Blog Preview Card built using HTML and CSS only. This project demonstrates how to create a responsive, visually appealing blog card that displays a title, author, date, short description, and a “Read More” button—all without any JavaScript. It’s perfect for learning CSS layout, typography, and hover/focus effects for UI design.",
      image: BlogPreviewCard,
      url: "https://blog-preview-card-six-beta.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/blog-preview-card",
    },
    {
      title: "Browser extension manager UI",
      description:
        "A simple and elegant Blog Preview Card built using HTML and CSS only. This project demonstrates how to create a responsive, visually appealing blog card that displays a title, author, date, short description, and a “Read More” button—all without any JavaScript. It’s perfect for learning CSS layout, typography, and hover/focus effects for UI design.",
      image: ExtensionList,
      url: "https://browser-extension-manager-ui-rho-one.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/browser-extension-manager-ui",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {webProjects.map((proj, index) => (
          <div
            key={index}
            className={`shadow-2xl rounded-xl ${
              isDark ? "bg-white  text-black" : ""
            }`}
          >
            <div
              className={`flex flex-col h-full justify-between gap-3 bg-transparent pb-5 `}
              key={index}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-tl-xl rounded-tr-xl w-full h-[350px] object-cover"
              />
              <section className="flex-1">
                <h3 className="text-lg font-semibold tracking-wider px-3">
                  {proj.title}
                </h3>
                <span className="block text-sm tracking-wide mt-1 px-3">
                  {proj.description}
                </span>
              </section>

              <div className="flex justify-end gap-5 pr-5">
                <div className="relative group">
                  <a href={proj.url}>
                    <FiActivity
                      size={20}
                      className="duration-75 ease-in hover:scale-110 cursor-pointer hover:text-blue-300"
                    />
                  </a>
                  <span
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                     px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Demo
                  </span>
                </div>

                <div className="relative group">
                  <a href={proj.codeUrl}>
                    <FaLaptopCode
                      size={20}
                      className="duration-75 ease-in hover:scale-110 cursor-pointer hover:text-fuchsia-800"
                    />
                  </a>
                  <span
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                     px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Source Code
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
