import React, { useState } from 'react';
import employee_signup from '../employee_signup.png';
import employee_login from '../employee_login.png';
import employee_dashboard from '../employee_dashboard.png';
import employee_details from '../employee_details.png';
import todo1 from '../todo_1.png';
import todo2 from '../todo_2.png';
import cart_home from '../cart_home.png';
import cart_cart from '../cart_cart.png';
import textutils1 from '../textutils_1.png';
import textutils2 from '../textutils_2.png';

export default function Projects({ mode }) {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Employee App (Backend)',
      description:
        'A full-stack employee management application with signup, login, dashboard, and employee details functionality.',
      images: [employee_signup, employee_login, employee_dashboard, employee_details],
    },
    {
      title: 'To-Do App (Redux Toolkit)',
      description: 'A to-do application built with Redux Toolkit to manage tasks efficiently.',
      images: [todo1, todo2],
    },
    {
      title: 'E-Commerce Cart',
      description:
        'A cart feature implementation in an e-commerce platform, featuring add-to-cart and checkout functionality.',
      images: [cart_home, cart_cart],
    },
    {
      title: 'Text Utilities',
      description:
        'A text utilities app providing various tools for manipulating text, such as counting words and converting cases.',
      images: [textutils1, textutils2],
    },
  ];

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={`min-h-screen ${mode ? 'bg-gray-800' : 'bg-gray-200'} py-16 flex flex-col items-center`}>
      <h2 className={`text-4xl font-bold mb-8 mt-5 ${mode ? 'text-gray-200' : 'text-gray-900'}`}>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-lg transition-transform duration-300 transform hover:scale-105 rounded-lg"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={() => handleClickOpen(project)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{selectedProject?.title}</h3>
              <p className="text-gray-700 mb-6">{selectedProject?.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject?.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`project ${idx}`}
                    className="w-full h-auto rounded-md"
                  />
                ))}
              </div>
            </div>
            <div className="p-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
