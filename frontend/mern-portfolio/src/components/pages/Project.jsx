import React, { useEffect, useRef, useState } from "react";

// store
import scrollStore from "../../store/scrollStore";
import themeStore from "../../store/themeStore";

// icons
import { FiActivity } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";

// assets
import BlogPreviewCard from "../../assets/projects/blog-preview-card.png";
import ExtensionList from "../../assets/projects/extension-list.png";
import TicketGenerator from "../../assets/projects/ticket-generator.png";
import Loading from "../../assets/loading.svg";
import ProductListCart from "../../assets/projects/product-list-with-cart.png";
import SpaceTour from "../../assets/projects/space-tour.png";

const Project = () => {
  const setProjectRef = scrollStore((state) => state.setProjectsRef);
  const projectsRef = useRef(null);
  const isDark = themeStore((state) => state.isDark);

  const [webProjects, setWebProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const projectsData = [
    {
      title: "Browser extension manager UI",
      description:
        "A simple and elegant Blog Preview Card built using HTML and CSS only. This project demonstrates how to create a responsive, visually appealing blog card that displays a title, author, date, short description, and a “Read More” button—all without any JavaScript. It’s perfect for learning CSS layout, typography, and hover/focus effects for UI design.",
      image: ExtensionList,
      url: "https://browser-extension-manager-ui-rho-one.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/browser-extension-manager-ui",
    },
    {
      title: "Bible Note",
      description:
        "My Bible note is a simple yet practical task management application designed to help users stay organized and productive. It allows users to add, edit, and delete tasks with ease while keeping track of their progress in real-time. The app supports a clean and responsive UI, making it accessible across devices. It also includes features like search and filtering to quickly find tasks, along with a theme toggle for a personalized experience. Built with React, Zustand, and Tailwind, this project showcases my growing skills in modern frontend development.",
      image: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg",
      url: "https://todo-app-rose-omega.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/todo-app",
    },
    {
      title: "Product List & Cart",
      description:
        "Product List with Cart is a responsive frontend-only project built using React, TypeScript, Bootstrap, and Zustand for state management. The app allows users to browse a list of products, add or remove items from the cart, and view the total cost in real time. Zustand provides a lightweight and scalable way to manage cart state efficiently, while Bootstrap ensures a clean and mobile-friendly layout. TypeScript adds strong typing for better maintainability and fewer bugs. This project is ideal for practicing component-based architecture, reusable UI, and global state management in modern frontend development workflows.",
      image: ProductListCart,
      url: "https://product-list-with-cart-silk-three.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/product-list-with-cart",
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
      title: "Ticket Generator",
      description:
        "The Ticket Generator is a React + TypeScript application designed to create simple, customizable digital tickets. With an intuitive form interface, users can easily enter their name, email, and GitHub profile link, then upload a profile or avatar image. Once submitted, the app automatically generates a visually clean and responsive ticket layout styled with Bootstrap 5. This project demonstrates the practical use of  React components, TypeScript props, and Bootstrap styling to build a functional UI tool. It can be extended with additional features such as Ticket download (PNG/PDF), QR code integration, or event-based customization. Whether you’re showcasing your frontend skills or experimenting with TypeScript + Bootstrap, this project serves as a great starting point for learning and portfolio building.",
      image: TicketGenerator,
      url: "http://ticket-generator-ecru.vercel.app/",
      codeUrl: "https://github.com/ManaChanCoder/ticket-generator",
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
      title: "Space Tourism",
      description:
        "A responsive multi-page website built with React, TypeScript, React Router DOM, and Bootstrap. Space Tourism is an interactive web experience that showcases destinations, crew members, and technologies for space exploration. The site is designed to adapt across desktop, tablet, and mobile screens with dynamic content and smooth page transitions.",
      image: SpaceTour,
      url: "https://moonlit-meerkat-9cfe47.netlify.app/",
      codeUrl: "https://github.com/ManaChanCoder/space-tour",
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
  ];

  useEffect(() => {
    setProjectRef(projectsRef);
    const timer = setTimeout(() => {
      setWebProjects(projectsData);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={projectsRef} className="mt-20 px-10">
      <span className="text-2xl sm:text-4xl font-semibold text-center block sm:mb-10">
        Projects
      </span>

      {loading ? (
        <div className="flex justify-center">
          <img src={Loading} alt="loading..." className="w-20" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {webProjects.map((proj, index) => (
            <div
              key={index}
              className={`shadow-2xl rounded-xl ${
                isDark ? "bg-white text-black" : ""
              }`}
            >
              <div className="flex flex-col h-full justify-between gap-3 pb-5">
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
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Source Code
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
