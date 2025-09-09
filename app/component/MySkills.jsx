'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { assets } from '@/assets/assets';

const skillsData = [
  { name: 'HTML5', icon: assets.htmlIcon },
  { name: 'CSS3', icon: assets.cssIcon },
  { name: 'JavaScript', icon: assets.jsIcon },
  { name: 'React.js', icon: assets.reactIcon },
  { name: 'Next.js', icon: assets.nextIcon },
  { name: 'Tailwind CSS', icon: assets.tailwindIcon },
  { name: 'TypeScript', icon: assets.typescriptIcon },
  { name: 'Redux', icon: assets.reduxIcon },
  { name: 'Framer Motion', icon: assets.FramerMotion },
  { name: 'Strapi', icon: assets.strapiIcon },
  { name: 'Stripe', icon: assets.stripeIcon },
  { name: 'Clerk Auth', icon: assets.clerk }
];

const MySkills = ({ isDarkMode }) => {
  return (
    <motion.div
      id="skills"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Expertise
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Technologies and Tools I use 👇
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-14"
      >
        {skillsData.map(({ name, icon }) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            key={name}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:text-white dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
          >
            <Image
              src={icon}
              alt={name}
              className={`w-10 h-10 ${isDarkMode ? 'dark:invert' : ''}`}
            />
            <h3 className="mt-4 font-semibold text-gray-700 dark:text-white hidden sm:block">
              {name}
            </h3>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MySkills;
