"use client";

import Image from "next/image";
import React from "react";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <>
      <div className="hidden xl:block">
        <motion.div 
          className="bg-[#0D1117]/80 text-white max-w-sm mx-auto rounded-3xl shadow-lg backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 flex flex-col justify-center items-center">
            <motion.div 
              className="relative bg-tabbarMobile/90  rounded-3xl mb-6"
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.03, rotate: -3 }}
            >
              <Image src="/avatar.png" alt="Profile" width={170} height={120} />
            </motion.div>

            <motion.div 
              className="mb-2 text-2xl font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale : 1.02}}
            >
              Mayank
            </motion.div>

            <motion.div 
              className="bg-[#1a1f29] py-2 px-5 rounded-xl text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Software Developer
            </motion.div>

            <motion.div 
              className="w-full h-px bg-gray-700 mb-6"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>

            <motion.div 
              className="w-full flex flex-col gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-[#1a1f29] p-3 rounded-xl">
                  <Mail size={18} color="#E0FA51" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">EMAIL</p>
                  <p className="text-sm">mayank771768@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-[#1a1f29] p-3 rounded-xl">
                  <MapPin size={18} color="#E0FA51" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">LOCATION</p>
                  <p className="text-sm">Ludhiana, Punjab, India</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="w-full h-px bg-gray-700 my-6"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            ></motion.div>

            <motion.div 
              className="flex gap-6 text-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/mayank-sharma-62b47a24a/"
                className="hover:text-blue-400"
                target='blank'
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/mayank0304"
                className="hover:text-gray-300"
                target='blank'
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/_mayank0304/" 
                className="hover:text-blue-500" 
                target='blank'
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
