import React from "react";
import {
  Calendar,
  MapPin,
} from "lucide-react";

const ResumeTab = () => {
  return (
    <div className="p-8 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#E0FA51]">Resume</h1>
        <div className="w-20 h-1 bg-[#E0FA51] rounded-full"></div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-[#E0FA51]/20 rounded-lg flex items-center justify-center">
            <Calendar size={16} className="text-[#E0FA51]" />
          </div>
          Experience
        </h2>

        <div className="space-y-8">
          <div className="relative pl-8 pb-8">
            {/* <div className="absolute w-4 h-4 bg-[#E0FA51] rounded-full -left-2 top-0"></div> */}
            <div className="bg-[#1a1f29]/50 p-6 rounded-xl border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">
                  Software Engineer Intern
                </h3>
                <span className="text-[#E0FA51] text-sm font-medium">
                  JAN 2025 - Present
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3 text-gray-400">
                <MapPin size={14} />
                <span className="text-sm">
                  Auribises Technologies Private Limited
                </span>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
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
      

    
    </div>
  );
};

export default ResumeTab;
