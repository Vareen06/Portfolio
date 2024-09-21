import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DarkMode, LightMode } from '@mui/icons-material';

const Navbar = ({ mode, toggleMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 py-4 transition-all duration-300 ease-in-out ${
          mode ? "bg-gray-800" : "bg-white"
        } border-b-2 border-gray-200 shadow-none`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
          {/* Logo/Name */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-4 h-4 bg-indigo-600 rounded-full mr-3"></div>
            <h1
              className={`font-bold text-lg tracking-wider ${
                mode ? "text-white" : "text-black"
              }`}
            >
              Vareen Patel
            </h1>
            <span
              className={`text-sm ml-2 ${
                mode ? "text-white" : "text-gray-500"
              }`}
            >
              / STUDENT
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'About Me', 'Projects'].map((text) => (
              <button
                key={text}
                className={`font-bold text-lg transition-all duration-300 ${
                  mode ? "text-purple-400" : "text-indigo-800"
                } hover:${
                  mode ? "text-indigo-400" : "text-purple-400"
                } hover:scale-105`}
                onClick={() => navigate(text === 'Home' ? "/" : `/${text.toLowerCase().replace(' ', '')}`)}
              >
                {text}
              </button>
            ))}
          </div>

          {/* Dark Mode Icon */}
          <div className="flex items-center">
            <button onClick={toggleMode} className="mr-4">
              {mode ? (
                <DarkMode className="h-6 w-6 text-white" />
              ) : (
                <LightMode className="h-6 w-6 text-yellow-500" />
              )}
            </button>

            {/* Mobile Menu Icon */}
            <button
              className="md:hidden"
              onClick={handleDrawerToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handleDrawerToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-6 p-4">
          {['Home', 'About Me', 'Projects'].map((text) => (
            <button
              key={text}
              className="text-lg font-bold text-gray-800 hover:text-indigo-600"
              onClick={() => {
                navigate(text === 'Home' ? "/" : `/${text.toLowerCase().replace(' ', '')}`);
                handleDrawerToggle();
              }}
            >
              {text}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
