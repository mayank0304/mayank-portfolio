"use client";
import React from "react";
import { Calendar, Cpu, GraduationCap, MapPin } from "lucide-react";
import TechSkill from "../resumeTab/techSkill";
import { motion } from "framer-motion";

const ResumeTab = () => {
  return (
    <div className="p-8 text-white">
      {/* Header */}
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
          Resume
        </motion.h1>
        <motion.div 
          className="w-20 h-1 bg-[#E0FA51] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
      </motion.div>

      <motion.h2 
        className="font-semibold mb-6 text-white flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.a
          href="/mayank_resume.pdf"
          download
          className=" text-[#E0FA51] text-center py-2 px-8 border border-white/40 rounded-xl hover:border-[#E0FA51] font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.h2>


      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.h2 
          className="text-2xl font-semibold mb-4 text-white flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div 
            className="w-10 h-10 bg-[#1a1f29] rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Calendar size={24} className="text-[#E0FA51]" />
          </motion.div>
          Experience
        </motion.h2>

        <motion.div 
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="relative px-4">
            <div className="p-1">
              <motion.div 
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-white">
                  Software Engineer Intern
                </h3>
                <span className="text-[#E0FA51] text-sm font-medium">
                  JAN 2025 - JULY 2025
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 mb-3 text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <MapPin size={16} />
                <span className="text-sm">
                  Auribises Technologies Private Limited
                </span>
              </motion.div>
              <motion.ul 
                className="text-gray-300 space-y-2 md:text-[16px] text-sm px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  whileHover={{ x: 5 }}
                >
                  • Developed a cross-platform mobile application using Flutter
                  with modular architecture and Material Design, meeting client
                  requirements and improving development efficiency by 30%
                  through reusable components
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  whileHover={{ x: 5 }}
                >
                  • Engineered RESTful API integrations using the HTTP package,
                  reducing backend latency by 60% and enhancing data transfer
                  efficiency
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                  whileHover={{ x: 5 }}
                >
                  • Facilitated client communications through weekly meetings,
                  gathering requirements, incorporating feedback, and driving
                  iterative improvements aligned with business goals
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  whileHover={{ x: 5 }}
                >
                  • Optimized front-end functionality in React Native and
                  implemented admin panel components using Next.js
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.h2 
          className="text-2xl font-semibold mb-6 text-white flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <motion.div 
            className="w-10 h-10 bg-[#1a1f29] rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.7 }}
          >
            <GraduationCap size={28} className="text-[#E0FA51]" />
          </motion.div>
          Education
        </motion.h2>

          <motion.div 
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            {/* <div className="absolute w-4 h-4 bg-[#E0FA51] rounded-full -left-2 top-0"></div> */}
            <div className="px-6">
              <motion.div 
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.9 }}
              >
                <h3 className="text-xl font-semibold text-white">
                  B.Tech In Information Technology
                </h3>
                <span className="text-[#E0FA51] text-sm font-medium">
                  2022 - Present
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-gray-400 mb-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 2.0 }}
              >
                <MapPin size={14} />
                <span className="text-sm">
                  Guru Nanak Dev Engineering College, Ludhiana
                </span>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.1 }}
              >
                <h3 className="text-xl font-semibold text-white">
                  High School In C.B.S.E.
                </h3>
                <span className="text-[#E0FA51] text-sm font-medium">
                  2011 - 2022
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 2.2 }}
              >
                <MapPin size={14} />
                <span className="text-sm">
                  Guru Nanak Model Sr. Sec. School, Doraha
                </span>
              </motion.div>
            </div>
          </motion.div>
      </motion.div>

      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.3 }}
      >
        <motion.h2 
          className="text-2xl font-semibold mb-6 text-white flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          <motion.div 
            className="w-10 h-10 bg-[#1a1f29] rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 2.5 }}
          >
            <Cpu size={28} className="text-[#E0FA51]" />
          </motion.div>
          Technical Skills
        </motion.h2>

       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.6, delay: 2.6 }}
       >
         <TechSkill/>
       </motion.div>
      </motion.div>
    </div>
  );
};

export default ResumeTab;
