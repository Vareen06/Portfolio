import React from 'react';
import { useNavigate } from 'react-router-dom';
import photo1 from '../pic.avif';

const HomePage = ({ mode }) => {
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col md:flex-row justify-between items-center min-h-screen p-5 md:p-10 ${mode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}`}>
      
      {/* Left Section - Photo */}
      <div className="w-full md:w-2/5 h-80 md:h-96 bg-gray-300 dark:bg-gray-700 relative mb-8 md:mb-0">
        <img 
          src={photo1} 
          alt="Vareen Patel"
          className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out brightness-75 hover:brightness-100"
        />
      </div>

      {/* Right Section - About Info */}
      <div className="max-w-xl w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-5">Hi, I'm Vareen Patel</h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start mb-5 space-y-4 md:space-y-0 md:space-x-5">
          <a
            href="https://drive.google.com/file/d/10L0OUHuFN-VGF078Uq9eAbcDQGgN7LXk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition"
          >
            RESUME
          </a>
          <button
            className="border border-blue-600 text-blue-600 py-2 px-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => navigate('/projects')}
          >
            PROJECTS
          </button>
        </div>

        {/* About Text */}
        <p className={`text-gray-700 ${mode ? "dark:text-gray-300" : "text-gray-700"}`}>
          I am a passionate and dedicated software developer with a strong foundation in web technologies, including HTML, CSS, JavaScript, React, Redux Toolkit, Node.js, and MongoDB. Over the course of my education and hands-on projects, I have developed expertise in both frontend and backend development, creating dynamic, responsive web applications. With a focus on clean code, scalability, and user experience, I enjoy tackling complex problems and delivering solutions that streamline workflows and enhance user interactions.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
