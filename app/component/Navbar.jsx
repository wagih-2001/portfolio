'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

import { Squares2X2Icon } from '@heroicons/react/24/outline';
import {
  IconHome,
  IconUser,
  IconTools,
  IconBriefcase,
  IconMail
} from '@tabler/icons-react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      href: '#top',
      label: 'Home',
      tabler: <IconHome className="w-5 h-5" />
    },
    {
      href: '#about',
      label: 'About Me',
      tabler: <IconUser className="w-5 h-5" />
    },
    {
      href: '#skills',
      label: 'Skills',
      tabler: <IconTools className="w-5 h-5" />
    },
    {
      href: '#service',
      label: 'Services',
      tabler: <IconBriefcase className="w-5 h-5" />
    },
    {
      href: '#projects',
      label: 'Projects',
      hero: <Squares2X2Icon className="w-5 h-5" />
    },
    {
      href: '#contact',
      label: 'Contact',
      tabler: <IconMail className="w-5 h-5" />
    }
  ];

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20'
            : ''
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ''
              : ' bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent '
          }`}
        >
          {navLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="flex items-center gap-2 font-Ovo">
                {link.tabler}
                {link.hero}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
            href="#contact"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow icon"
              className="w-3"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col justify-between py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
             bg-white  transition duration-500  dark:bg-black  dark:text-white shadow-lg border-l border-gray-400 rounded-xl "
        >
          <div>
            <div className="absolute right-6 top-6 my-5" onClick={closeMenu}>
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="close"
                className="w-5 cursor-pointer"
              />
            </div>

            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  onClick={closeMenu}
                  href={link.href}
                  className="flex items-center gap-3 font-Ovo transition-transform duration-300 hover:translate-x-2 my-5"
                >
                  {link.tabler}
                  {link.hero}
                  {link.label}
                </a>
              </li>
            ))}
          </div>

          <div className="mt-10 text-center border-t border-gray-400 dark:border-gray-700 pt-4">
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} Wagih Ahmed
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              FrontEnd Developer
            </p>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
