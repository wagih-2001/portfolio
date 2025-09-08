import { assets, serviceData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="service"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Title Section */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I am Frontend developer
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ opacity: 1.05, y: -5 }}
            key={index}
            className="flex flex-col justify-between border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover duration-500 dark:hover:bg-darkHover dark:hover:shadow-white min-h-[280px]"
          >
            <div>
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white/80">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {description}
              </p>
            </div>
            {link && (
              <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read More
                <Image alt="" src={assets.right_arrow} className="w-4" />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
