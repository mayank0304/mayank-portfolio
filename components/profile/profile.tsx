"use client";

import Image from "next/image";
import React from "react";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Profile = () => {
  return (
    <>
      <div className="hidden xl:block">
        <div className="bg-[#0D1117]/80 text-white max-w-sm mx-auto rounded-3xl shadow-lg backdrop-blur-md border border-white/10">
          <div className="p-8 flex flex-col justify-center items-center">
            <div className="relative bg-tabbarMobile/90  rounded-3xl mb-6">
              <Image src="/avatar.png" alt="Profile" width={170} height={120} />
            </div>

            <div className="mb-2 text-2xl font-semibold">Mayank</div>

            <div className="bg-[#1a1f29] py-2 px-5 rounded-xl text-sm mb-6">
              Software Developer
            </div>

            <div className="w-full h-px bg-gray-700 mb-6"></div>

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

            <div className="flex gap-6 text-xl">
              <a
                href="https://www.linkedin.com/in/mayank-sharma-62b47a24a/"
                className="hover:text-blue-400"
                target='blank'
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mayank0304"
                className="hover:text-gray-300"
                target='blank'
              >
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/_mayank0304/" className="hover:text-blue-500" target='blank'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
