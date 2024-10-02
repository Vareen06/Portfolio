import React from 'react';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-5 bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-md w-full">
      {/* Each contact item wrapped in a flex container for better responsiveness */}
      {[
        { icon: <Email />, text: 'patelvareen23@gmail.com', href: 'mailto:patelvareen23@gmail.com' },
        { icon: <Phone />, text: '+91-9825221775' },
        { icon: <LinkedIn />, text: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/patelvareen/' },
        { icon: <GitHub />, text: 'GitHub', href: 'https://github.com/Vareen06' },
        { icon: <InstagramIcon />, text: 'Instagram', href: 'https://www.instagram.com/vareen_06/' },
      ].map(({ icon, text, href }, index) => (
        <div key={index} className="flex items-center mb-3 md:mb-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-yellow-300 transition duration-300"
          >
            {icon}
          <p className="ml-2 hover:text-yellow-300 transition duration-300 text-sm md:text-base">
            {text}
          </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Footer;
