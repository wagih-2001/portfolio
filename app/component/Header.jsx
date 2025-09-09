import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion, scale } from 'motion/react';

const Header = () => {
  const name = 'Wagih Ahmed ';
  const letters = name.split('');

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
      {/* Profile Image */}
      <div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image
            src={assets.profile_img}
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover"
          />
        </motion.div>
      </div>

      <motion.h3
        className="flex items-center gap-2 text-xl md:text-2xl font-Ovo justify-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {' '}
        {letters.map((char, idx) => (
          <motion.span key={idx} variants={letterAnimation}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}{' '}
        <Image src={assets.hand_icon} alt="Hand" className="w-6 h-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Front-End Developer <br /> React <span className="font-mono">&</span> Next.js
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        "I'm a Front-End Web Developer specialized in React.js{' '}
        <span className="font-mono">&</span> Next.js, passionate about building
        modern, responsive, and interactive web applications.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-8 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image src={assets.hand_icon} alt="Hand" className="w-5 h-5" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Wagih Ahmed Zaki.pdf"
          download
          className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download"
            className="w-5 h-5"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
