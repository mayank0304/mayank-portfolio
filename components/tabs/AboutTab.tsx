"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutTab = () => {
  return (
    <div className="p-8 text-white">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-3xl font-bold mb-4 text-[#E0FA51]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About Me
        </motion.h1>
        <motion.div 
          className="w-20 h-1 bg-[#E0FA51] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
      </motion.div>

      <motion.div 
        className="mb-8 text-gray-300 leading-relaxed md:text-lg text-justify space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          My journey in technology started with curiosity. What began as small
          experiments with code turned into a passion for building applications
          that people can actually use. Over time, I&apos;ve grown into someone who
          enjoys mobile and web development, solving problems, and creating
          digital experiences that add value.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Alongside my academics, I have gained hands-on experience through
          internships and projects that pushed me to think beyond just writing
          code. I have also had the chance to take on leadership roles,
          coordinate large-scale events, and work with diverse teams, all of
          which taught me the importance of collaboration, persistence, and
          adaptability.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I see myself as a lifelong learner, always exploring new ideas and
          improving on what I build. For me, technology is not only about
          development but also about impact. It is about finding ways to connect
          people, simplify challenges, and make everyday experiences more
          meaningful.
        </motion.p>
      </motion.div>

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.h2 
          className="text-2xl font-semibold mb-4 text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          What I Do
        </motion.h2>
        <motion.ul 
          className="space-y-3 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.li 
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 1.0 }}
            whileHover={{ x: 5 }}
          >
            <span className="text-[#E0FA51] mt-0.5">•</span>
            <span>Build mobile apps with Flutter and React Native.</span>
          </motion.li>
          <motion.li 
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 1.1 }}
            whileHover={{ x: 5 }}
          >
            <span className="text-[#E0FA51] mt-0.5">•</span>
            <span>Create modern web apps with Next.js.</span>
          </motion.li>
          <motion.li 
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 1.2 }}
            whileHover={{ x: 5 }}
          >
            <span className="text-[#E0FA51] mt-0.5">•</span>
            <span>Work with APIs, Firebase, and SQL/NoSQL databases.</span>
          </motion.li>
        </motion.ul>
      </motion.div>

      <motion.div 
        className="rounded-lg border text-justify font-semibold text-lg border-white/10 bg-[#1a1f29]/40 p-4 text-gray-300"
        initial={{ opacity: 0, scaleY: 0.90, width: 0 }}
        animate={{ opacity: 1, scaleY: 1, width: "auto" }}
        transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.8 }}
        >
          I&apos;m open to tech opportunities and internships in mobile and web
          development.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutTab;
