import { assets, workData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const Project = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Title Section */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        A selection of projects I’ve built using modern web technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-col gap-10"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row border border-gray-400 dark:border-gray-400 bg-white dark:bg-black shadow-xl rounded-xl
            px-5 py-5 overflow-hidden cursor-pointer hover:-translate-y-1 duration-500"
          >
            <motion.div
              className="md:w-1/3 w-full h-52 md:h-auto overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={project.bgImage}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </motion.div>

            <div className="md:w-2/3 w-full p-6 flex flex-col gap-4">
              <h2 className="font-bold text-xl text-gray-800 dark:text-gray-100">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools?.map((tool, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 text-xs border border-gray-200 dark:border-gray-600 rounded-full bg-gray-100 dark:bg-gray-700"
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={16}
                      height={16}
                      className="dark:invert"
                    />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-4 flex-wrap">
                {project.domain && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    href={project.domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white bg-black border border-black rounded-full py-2 px-6 sm:py-1 sm:px-4 hover:bg-gray-800 duration-300 dark:bg-transparent dark:border-white dark:hover:bg-darkHover"
                  >
                    Live Demo
                    <Image
                      src={assets.right_arrow_white}
                      alt="Right arrow"
                      className="w-4 sm:w-3"
                    />
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white bg-black border border-black rounded-full py-2 px-6 sm:py-1 sm:px-4 hover:bg-gray-800 duration-300 dark:bg-transparent dark:border-white dark:hover:bg-darkHover"
                  >
                    GitHub
                    <Image
                      src={assets.right_arrow_white}
                      alt="Right arrow"
                      className="w-4 sm:w-3"
                    />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Project;
