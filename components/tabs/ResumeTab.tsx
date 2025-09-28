import React from "react";
import { Calendar, Cpu, FileDown, GraduationCap, MapPin } from "lucide-react";
import TechSkill from "../resumeTab/techSkill";

const ResumeTab = () => {
  return (
    <div className="p-8 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#E0FA51]">Resume</h1>
        <div className="w-20 h-1 bg-[#E0FA51] rounded-full"></div>
      </div>

      <h2 className="font-semibold mb-6 text-white flex items-center gap-2">
        <div className="w-10 h-10 bg-[#1a1f29] rounded-lg flex items-center justify-center">
          <FileDown size={24} className="text-[#E0FA51]" />
        </div>
        <a
          href="/mayank_resume.pdf"
          download
          className=" text-[#E0FA51] text-center py-2 px-8 border border-white/40 rounded-xl hover:border-[#E0FA51] font-medium"
        >
          Download Resume
        </a>
      </h2>


      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1a1f29] rounded-lg flex items-center justify-center">
            <Calendar size={24} className="text-[#E0FA51]" />
          </div>
          Experience
        </h2>

        <div className="">
          <div className="relative px-4">
            {/* <div className="absolute w-4 h-4 bg-[#E0FA51] rounded-full -left-2 top-0"></div> */}
            <div className="p-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">
                  Software Engineer Intern
                </h3>
                <span className="text-[#E0FA51] text-sm font-medium">
                  JAN 2025 - Present
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3 text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">
                  Auribises Technologies Private Limited
                </span>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm px-2">
                <li>
                  • Developed a cross-platform mobile application using Flutter
                  with modular architecture and Material Design, meeting client
                  requirements and improving development efficiency by 30%
                  through reusable components
                </li>
                <li>
                  • Engineered RESTful API integrations using the HTTP package,
                  reducing backend latency by 60% and enhancing data transfer
                  efficiency
                </li>
                <li>
                  • Facilitated client communications through weekly meetings,
                  gathering requirements, incorporating feedback, and driving
                  iterative improvements aligned with business goals
                </li>
                <li>
                  • Optimized front-end functionality in React Native and
                  implemented admin panel components using Next.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1a1f29] rounded-lg flex items-center justify-center">
            <GraduationCap size={28} className="text-[#E0FA51]" />
          </div>
          Education
        </h2>

          <div className="">
            {/* <div className="absolute w-4 h-4 bg-[#E0FA51] rounded-full -left-2 top-0"></div> */}
            <div className="px-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">
                  B.Tech In Information Technology
                </h3>
                <span className="text-[#E0FA51] text-sm font-medium">
                  2022 - Present
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-5">
                <MapPin size={14} />
                <span className="text-sm">
                  Guru Nanak Dev Engineering College, Ludhiana
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">
                  High School In C.B.S.E.
                </h3>
                <span className="text-[#E0FA51] text-sm font-medium">
                  2011 - 2022
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} />
                <span className="text-sm">
                  Guru Nanak Model Sr. Sec. School, Doraha
                </span>
              </div>
            </div>
          </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1a1f29] rounded-lg flex items-center justify-center">
            <Cpu size={28} className="text-[#E0FA51]" />
          </div>
          Technical Skills
        </h2>

       <TechSkill/>
      </div>
    </div>
  );
};

export default ResumeTab;
