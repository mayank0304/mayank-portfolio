"use client";

import React from "react";

const ContactTab = () => {
  return (
    <div className="p-8 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#E0FA51]">Get In Touch</h1>
        <div className="w-20 h-1 bg-[#E0FA51] rounded-full"></div>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="text-gray-300 leading-relaxed text-lg">
          Coming Soon...
        </p>
      </div>

      {/* Introduction */}
      {/* <div className="mb-8">
        <div className="flex flex-row">
          <div className="mx-5">
            <Image
              src="/mayank2.png"
              alt="Profile"
              width={200}
              height={100}
              className="rounded-full"
            />
          </div>
          <span className="text-center flex justify-center items-center w-[90%]">
            <p>
              He’s passionate about building and creating. Want to connect? Let him rest for now, just leave your message below, and he’ll get back to you once he’s awake.
            </p>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default ContactTab;
