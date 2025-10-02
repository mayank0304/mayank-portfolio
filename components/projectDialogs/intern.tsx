import React from "react";
import { motion } from "framer-motion";

const Intern = () => {
  const projects = [
    {
      id: 1,
      title: "Instructo",
      desc: "Instructo is an AI-first platform that teaches coding through interactive challenges, personalized learning paths, and real-time guidance.",
      link: "https://github.com/mayank0304/instructo",
      stack: ["Spring-Boot", "React", "JWT"],
    },
    {
      id: 2,
      title: "Keva Kaipo APP",
      desc: "It serves as a platform for users to explore Keva's product portfolio, access company updates, and engage with their network in a seamless digital experience.",
      link: "https://play.google.com/store/apps/details?id=com.auribises.keva&hl=en_IN",
      stack: ["Flutter", "Dart"],
    },
    {
      id: 3,
      title: "E-Presence",
      desc: "E-Presence is an IoT-based attendance system using RFID to automate and securely log student check-ins in real time, with Arduino hardware and a backend for streamlined tracking.",
      link: "https://github.com/mayank0304/epresence",
      stack: ["Next.Js", "C++", "IoT"],
    },
    {
      id: 4,
      title: "Flutter Catalog App",
      desc: "A simple catalog app built with Flutter for practice and learning purposes.",
      link: "https://github.com/mayank0304/FlutterCatalogApp",
      stack: ["Flutter", "Dart"],
    },
  ];
  return (
    <div className="mt-4">
      <h2 className="text-2xl text-center font-bold mb-1.5 text-[#E0FA51]">
        Other Projects
      </h2>
      <h5 className="text-center mb-10">
        A selection of projects I contributed to during internships and college,
        showcasing hands-on experience and practical skills.
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Internship Card */}
        {projects.map((p, index) => (
          <div key={index}>
            {/* Add h-full to this div to make the cards equal height */}
            <motion.div
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.01, y: -5 }}
              whileTap={{ y: -5 }}
              className="bg-[#0a0f0d]/70 border border-[#E0FA51]/30 rounded-xl p-5 hover:border-[#E0FA51] transition group h-full"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#E0FA51]">
                  {p.title}
                </h3>
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.link.includes("github.com") ? (
                    // GitHub Icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400 hover:text-white transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.385 7.863 10.91.575.106.785-.25.785-.556 0-.275-.01-1.004-.015-1.97-3.197.694-3.872-1.542-3.872-1.542-.523-1.33-1.278-1.684-1.278-1.684-1.045-.715.08-.7.08-.7 1.157.082 1.767 1.188 1.767 1.188 1.028 1.76 2.696 1.252 3.354.958.105-.745.402-1.252.73-1.54-2.552-.29-5.235-1.276-5.235-5.68 0-1.256.448-2.283 1.183-3.09-.12-.29-.513-1.46.112-3.043 0 0 .965-.31 3.165 1.18.916-.255 1.9-.383 2.878-.388.978.005 1.962.133 2.878.388 2.2-1.49 3.163-1.18 3.163-1.18.626 1.583.233 2.753.114 3.043.737.807 1.182 1.834 1.182 3.09 0 4.415-2.687 5.387-5.248 5.672.413.355.781 1.053.781 2.126 0 1.534-.014 2.772-.014 3.15 0 .308.207.666.79.554C20.21 21.383 23.5 17.086 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-google-play"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                    </svg>
                  )}
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-2 text-justify">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.stack.map((s, index) => (
                  <div key={index}>
                    <span className="text-[#E0FA51] border border-white/40 px-2 py-1 text-xs rounded-md">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intern;
