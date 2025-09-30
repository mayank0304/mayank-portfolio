"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Mail, MapPin, ChevronDown, ChevronUp} from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProfileMobile = () => {
      const [open, setOpen] = useState<boolean>(false);
  return (
     <div className="block xl:hidden">
        <motion.div 
          className="bg-[#0D1117]/80 text-white w-full rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="relative flex items-center justify-between px-6 py-4">
            {/* Left: Avatar + Info */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Image
                  src="/avatar.png"
                  alt="Profile"
                  width={90}
                  height={70}
                  className="rounded-2xl"
                />
              </motion.div>
              <div className="flex flex-col space-y-4">
                <motion.div 
                  className="text-lg font-semibold sm:text-3xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Mayank
                </motion.div>
                <motion.div 
                  className="bg-[#1a1f29] py-1 px-3 rounded-lg text-xs mt-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  Software Developer
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Button */}
            <motion.button
              onClick={() => setOpen(!open)}
              className="absolute top-0 right-0 px-4 py-1.5 bg-[#1a1f29] rounded-tr-xl rounded-bl-xl text-[#E0FA51] border border-white/20 hidden sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {open ? "Hide Contacts" : "Show Contacts"}
            </motion.button>
            <motion.button
              onClick={() => setOpen(!open)}
              className="absolute top-0 right-0 px-3 py-1 bg-[#1a1f29] rounded-tr-xl rounded-bl-xl text-[#E0FA51] border border-[#E0FA51] block sm:hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? <ChevronUp /> : <ChevronDown />}
              </motion.div>
            </motion.button>
          </div>

          {/* Expanded Contacts */}
          <AnimatePresence>
            {open && (
              <motion.div 
                className="px-6 pb-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ ease: "easeOut" }}
              >
                {/* Divider */}
                <motion.div 
                  className="w-full h-px bg-white/10 my-4"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                ></motion.div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-[#1a1f29]/80 p-3 rounded-xl">
                      <Mail size={18} color="#E0FA51" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">EMAIL</p>
                      <p className="text-sm">mayank771768@gmail.com</p>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div 
                    className="flex items-center gap-3 sm:col-span-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-[#1a1f29]/80 p-3 rounded-xl">
                      <MapPin size={18} color="#E0FA51" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">LOCATION</p>
                      <p className="text-sm">Ludhiana, Punjab, India</p>
                    </div>
                  </motion.div>
                </div>

                {/* Divider */}
                <motion.div 
                  className="w-full h-px bg-white/10 my-6"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                ></motion.div>

                {/* Social Icons */}
                <motion.div 
                  className="flex gap-6 text-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
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
                    className="hover:text-pink-500" 
                    target='blank'
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaInstagram />
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
  )
}

export default ProfileMobile