import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <footer className="py-3 px-[12%] flex flex-col md:flex-row justify-between items-center border-t text-black transition-colors duration-300">
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-24 md:w-28 mb-1 md:mb-0"
        />
        <p className="text-xs text-gray-500 mt-1 dark:text-white">
          © {new Date().getFullYear()} Wagih Ahmed. All rights reserved.
        </p>
      </div>

      <ul className="flex gap-4 mt-3 md:mt-0 text-xl">
        <li>
          <a
            href="https://wa.me/201008359142"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition dark:text-white dark:hover:text-green-500"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/2wagihAhmed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition dark:text-white dark:hover:text-blue-500"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/wagih-ahmed12/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition dark:text-white dark:hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/wagih-2001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition dark:text-white dark:hover:text-gray-600"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
