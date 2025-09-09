'use client';
import React, { useRef } from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'motion/react';

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_REPLY_TEMPLATE_ID,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          );

          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        error => {
          alert('❌ Failed to send. Please try again.');
          console.log('EmailJS Error:', error);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="relative w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-cover "
      style={{ backgroundImage: `url(${'/footer-bg-color.png'}) dark:bg-none` }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect With Me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I'd love to hear from you! Use the form below or reach me directly 👇
      </motion.p>
      {/* Social Links */}
      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="flex justify-center gap-6 mb-10 text-3xl"
      >
        <motion.a
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          href="https://wa.me/201008359142"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <FaWhatsapp />
        </motion.a>
        <motion.a
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          href="mailto:awagih851@gmail.com"
          className="hover:text-red-500 transition"
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          href="https://www.linkedin.com/in/wagih-ahmed12/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>
      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <motion.input
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-darkHover/30 dark:border-white/90"
          required
        />
        <motion.input
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-darkHover/30 dark:border-white/90"
          required
        />
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="5"
          name="message"
          placeholder="Your Message"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-darkHover/30 dark:border-white/90"
          required
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="w-max flex items-center justify-center gap-2 text-white bg-black border border-black rounded-full py-3 px-10 mx-auto hover:bg-gray-800 duration-300 dark:bg-transparent dark:border-white dark:hover:bg-darkHover"
        >
          Send Message
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow"
            className="w-4"
          />
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
