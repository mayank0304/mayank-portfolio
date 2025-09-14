"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Mail, Phone, MapPin, ChevronUp, ChevronDown } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="hidden xl:block">
        <div className="bg-gradient-to-br from-[#0D1117] to-[#1a1f29] text-white max-w-sm mx-auto rounded-3xl shadow-lg backdrop-blur-md border border-white/10">
          {/* Profile Section */}
          <div className="p-8 flex flex-col justify-center items-center">
            {/* Avatar */}
            <div className="relative mb-6">
              <Image
                src="/mjonir.jpg"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-2xl"
              />
            </div>

            {/* Name */}
            <div className="mb-2 text-2xl font-semibold">Mayank</div>

            {/* Role */}
            <div className="bg-[#1a1f29] py-2 px-5 rounded-xl text-sm mb-6">
              Software Developer
            </div>

            <div className="w-full h-px bg-gray-700 mb-6"></div>

            {/* Contact Info */}
            <div className="w-full flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="bg-[#1a1f29] p-3 rounded-xl">
                  <Mail size={18} color="#E0FA51" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">EMAIL</p>
                  <p className="text-sm">mayank771768@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="bg-[#1a1f29] p-3 rounded-xl">
                  <Phone size={18} color="#E0FA51" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">PHONE</p>
                  <p className="text-sm">+91 7696071903</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="bg-[#1a1f29] p-3 rounded-xl">
                  <MapPin size={18} color="#E0FA51" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">LOCATION</p>
                  <p className="text-sm">Ludhiana, Punjab, India</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-700 my-6"></div>

            {/* Social Icons */}
            <div className="flex gap-6 text-xl">
              <a
                href="https://www.linkedin.com/in/mayank-sharma-62b47a24a/"
                className="hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mayank0304"
                className="hover:text-gray-300"
              >
                <FaGithub />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaX />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        <div className="bg-gradient-to-r from-[#0D1117]/80 to-[#1a1f29]/80 text-white w-full rounded-2xl shadow-lg backdrop-blur-md border border-white/10">
          {/* Header Section */}
          <div className="relative flex items-center justify-between px-6 py-4">
            {/* Left: Avatar + Info */}
            <div className="flex items-center gap-5">
              <Image
                src="/mjonir.jpg"
                alt="Profile"
                width={70}
                height={70}
                className="rounded-2xl"
              />
              <div className="flex flex-col">
                <div className="text-lg font-semibold">Mayank</div>
                <div className="bg-[#1a1f29] py-1 px-3 rounded-lg text-xs mt-2">
                  Software Developer
                </div>
              </div>
            </div>

            {/* Right: Button */}
            <button
              onClick={() => setOpen(!open)}
              className="absolute top-0 right-0 px-4 py-1.5 bg-[#1a1f29] rounded-tr-xl rounded-bl-xl text-[#E0FA51] border border-[#E0FA51] hidden sm:block"
            >
              {open ? "Hide Contacts" : "Show Contacts"}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="absolute top-0 right-0 px-3 py-1 bg-[#1a1f29] rounded-tr-xl rounded-bl-xl text-[#E0FA51] border border-[#E0FA51] block sm:hidden"
            >
              {open ? <ChevronDown /> : <ChevronUp />}
            </button>
          </div>

          {/* Expanded Contacts */}
          {open && (
            <div className="px-6 pb-6">
              {/* Divider */}
              <div className="w-full h-px bg-white/10 my-4"></div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#1a1f29]/80 p-3 rounded-xl">
                    <Mail size={18} color="#E0FA51" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">EMAIL</p>
                    <p className="text-sm">mayank771768@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="bg-[#1a1f29]/80 p-3 rounded-xl">
                    <Phone size={18} color="#E0FA51" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">PHONE</p>
                    <p className="text-sm">+91 7696071903</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 sm:col-span-2">
                  <div className="bg-[#1a1f29]/80 p-3 rounded-xl">
                    <MapPin size={18} color="#E0FA51" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">LOCATION</p>
                    <p className="text-sm">Ludhiana, Punjab, India</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 my-6"></div>

              {/* Social Icons */}
              <div className="flex gap-6 text-xl">
                <a
                  href="https://www.linkedin.com/in/mayank-sharma-62b47a24a/"
                  className="hover:text-blue-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/mayank0304"
                  className="hover:text-gray-300"
                >
                  <FaGithub />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <FaX />
                </a>
                <a href="#" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
