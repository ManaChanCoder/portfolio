import React from "react";
import { Link } from "react-router-dom";

// icons
import { FaRegLightbulb } from "react-icons/fa6";
import { TfiBag } from "react-icons/tfi";
import { IoArrowBackCircle } from "react-icons/io5";

// theme
import themeStore from "../../store/themeStore";

// component
import Footer from "../shared/Footer";

const Resume = () => {
  const educationData = [
    {
      level: "Elementary",
      university: "Marick Elementary School",
      year: "2014 - 2015",
    },
    {
      level: "Highschool",
      university: "Francisco P. Felix Memorial National Highschool",
      year: "2018 - 2019",
    },
    { level: "K-12", university: "Gardner College", year: "2020 - 2021" },
    {
      level: "College",
      university: "Colegio De Montalban (CDM)",
      year: "2024 - 2025",
    },
  ];

  const skills = [
    { language: "Html & Css", description: "layouts, forms, simple designs" },
    { language: "Javascript", description: "Simple function, event handling" },
    { language: "React.js", description: "Component, useState, useEffect" },
    {
      language: "Bootstrap & Tailwindcss",
      description: "Basic layout/styling",
    },
    { language: "MongoDB", description: "Basic database setup and structure" },
  ];

  const tools = [
    { toolName: "Git & Github", description: "Basic version control" },
    { toolName: "VS Code", description: "Code. Edit. Build." },
    { toolName: "MongoDB Atlas", description: "Beginner level" },
  ];

  const isDark = themeStore((state) => state.isDark);

  return (
    <div className={isDark ? "bg-black text-white" : "bg-white text-black"}>
      <div className="flex justify-center pt-3">
        <Link to="/">
          <IoArrowBackCircle
            size={40}
            className="cursor-pointer text-blue-500 hover:text-blue-600 hover:scale-105 duration-75"
          />
        </Link>
      </div>

      <div className="flex justify-center mb-5 mt-2 border-t">
        <div className="w-full sm:w-4/5 flex flex-col-reverse gap-5 sm:flex-row sm:justify-between mt-5">
          <div className="w-full sm:w-2/5 px-10">
            <span className="text-lg font-semibold block uppercase mb-3">
              language
            </span>
            <ul>
              <li className="list-none">Filipino (Native)</li>
              <li className="list-none">English (Basic/Conversational)</li>
            </ul>

            <span className="text-lg font-semibold uppercase block my-3">
              contact
            </span>
            <ul>
              <li className="">sainggarhogenn@gmail.com</li>
              <li className="">09923358395</li>
            </ul>

            <div className="flex gap-1 my-3 font-semibold">
              <TfiBag size={20} />
              <span className="uppercase ">intership experience</span>
            </div>

            <span className="block">Web Content Assistant - Ollopa Corp.</span>
            <span className="block">March 2025 - June 2025</span>

            <h3 className=" font-semibold uppercase my-3">tools used:</h3>
            <ul>
              {tools.map((data, index) => (
                <li
                  className="list-disc"
                  key={index}
                >{`${data.toolName} | ${data.description}`}</li>
              ))}
            </ul>

            <h3 className="font-semibold uppercase my-3">skills</h3>
            <ul>
              {skills.map((data, index) => (
                <li className="list-disc" key={index}>
                  <span className="font-semibold">{data.language} |</span> (
                  {data.description})
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/ManaChanCoder"
              className="mt-5 block text-blue-500"
              target="_blank"
            >
              <span className={isDark ? "text-white" : "text-black"}>
                Github:
              </span>{" "}
              https://github.com/ManaChanCoder
            </a>
            <a
              href="https://portfolio-rouge-kappa-51psbs5zyi.vercel.app"
              className="mb-5 block text-blue-500"
              target="_blank"
            >
              <span className={isDark ? "text-white" : "text-black"}>
                Portfolio:
              </span>{" "}
              https://portfolio-rouge-kappa-51psbs5zyi.vercel.app
            </a>

            <h3 className="font-semibold uppercase text-center">address</h3>
            <span className="text-center">
              Calavinti st, srs corner kasiglahan rd, Brgy San Jose Rodriguez
              Montalban Rizal
            </span>
          </div>

          <div className="w-full sm:w-3/5 px-10">
            <span className="text-4xl sm:text-5xl font-semibold block mb-2">
              Rhogenn G. Saingga
            </span>
            <span className="text-sm sm:text-lg font-semibold uppercase block mb-5">
              aspiring frontend developer
            </span>

            <p className="mb-5 tracking-wide">
              A BSIT graduate from Colegio de Montalban with basic knowledge of
              HTML, CSS, JavaScript, and React.js. I am passionate about web
              development and eager to join a company where I can grow as a
              frontend developer. I aim to apply my skills, gain hands-on
              experience, and improve through real-world projects. I'm committed
              to learning, collaborating with teams, and contributing to
              building responsive and user-friendly web applications using
              modern tools and practices.
            </p>

            <div
              className={`w-full h-0.5 mb-3 ${
                isDark ? "bg-white" : "bg-black"
              }`}
            ></div>

            <span className="text-lg font-semibold block uppercase mb-3">
              education
            </span>

            {educationData.map((data, index) => (
              <div className="mb-3" key={index}>
                <span className="block">{data.level}</span>
                <span className="block">{data.university}</span>
                <span className="block">{data.year}</span>
              </div>
            ))}

            <div
              className={`w-3/5 h-0.5 mb-3 ${isDark ? "bg-white" : "bg-black"}`}
            ></div>

            <div className="flex gap-1 mt-5 mb-3 font-semibold">
              <FaRegLightbulb size={20} />
              <span className="uppercase">learning experience</span>
            </div>

            <ul>
              <li className="list-disc">
                Practicing building small web apps using React and plain
                JavaScript
              </li>
              <li className="list-disc">
                Created simple UI designs using Bootstrap and Tailwind CSS
              </li>
              <li className="list-disc">
                Learning how to connect frontend to backend using the MERN stack
              </li>
              <li className="list-disc">
                Gaining knowledge through self-paced coding and basic CRUD
                operations with MongoDB
              </li>
            </ul>
            <div
              className={`w-3/5 h-0.5 mt-3 sm:mb-3 ${
                isDark ? "bg-white" : "bg-black"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
