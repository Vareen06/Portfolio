import React from "react";
import HTML from "../HTML.png";
import CSS from "../CSS.png";
import JS from "../JS.png";
import Reactlogo from "../React.jpg";
import reduxlogo from "../reduxlogo.png";
import Nodelogo from "../Node.png";
import MongoDBlogo from "../MongoDB.png";
import Pythonlogo from "../Python.png";
import logo from "../pdeulogo.png"; // PDEU logo
import iihlogo from "../iih-global-logo-2.webp"; // IIH Global logo

// URLs for each technology image (replace with actual paths or URLs)
const techSkills = [
  { name: "HTML", img: HTML },
  { name: "CSS", img: CSS },
  { name: "JavaScript", img: JS },
  { name: "React", img: Reactlogo },
  { name: "Redux Toolkit", img: reduxlogo },
  { name: "Node.js", img: Nodelogo },
  { name: "MongoDB", img: MongoDBlogo },
  { name: "Python", img: Pythonlogo },
];

const About = ({ mode }) => {
  return (
    <div className={`p-10 min-h-screen ${mode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10 mt-10">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Education */}
        <div className="bg-blue-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="PDEU Logo" className="mx-auto mb-5 w-24 h-24" />
          <h2 className="text-2xl font-bold text-center text-blue-800 dark:text-white mb-5">
            PDEU (Pandit Deendayal Energy University)
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300">
            I am a B.Tech student at Pandit Deendayal Energy University,
            pursuing Information and Communication Technology. Throughout my
            academic career, I have gained solid foundations in software
            development, focusing on full-stack web development and modern
            technologies like React, Node.js, and MongoDB.
          </p>
        </div>

        {/* Right Section - Skills */}
        <div className="bg-blue-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-bold text-center text-blue-800 dark:text-white mb-5">
            My Technical Skills
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {techSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-12 h-12 mb-3"
                />
                <p className="text-sm font-semibold text-blue-800 dark:text-gray-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Experience */}
        <div className="md:col-span-2 bg-blue-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center mb-5">
            <h2 className="text-2xl font-bold text-center text-blue-800 dark:text-white mr-3">
              Internship Experience at IIH Global
            </h2>
            <img src={iihlogo} alt="IIH Global Logo" className="w-16 h-16" />
          </div>
          <p className="text-justify text-gray-700 dark:text-gray-300">
            During my internship at IIH Global, I had the opportunity to work as
            a Web Development Intern, focusing on both frontend and backend
            development. I worked with React.js to build user interfaces and
            implemented state management using Redux Toolkit. Additionally, I
            gained experience with Node.js and Express for creating APIs and
            worked on connecting the application to MongoDB databases. I
            collaborated with a team of developers to create full-stack
            features for various client projects, improving both my technical
            and communication skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
