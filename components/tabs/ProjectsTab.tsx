import React from 'react';
import { ExternalLink, Github, Calendar, Code, Globe } from 'lucide-react';

const ProjectsTab = () => {
  const projects = [
    {
      id: 1,
      title: "Skillstack AI",
      description: "An AI-powered ed-tech platform built with React Native, featuring an intelligent study assistant, quiz generator, and smooth infinite scroll. Integrated with a Next.js backend and RESTful APIs for real-time data sync, the app was tested with students and achieved an 87% satisfaction rate for its intuitive design and seamless navigation.",
      techStack: ["React Native", "Expo", "Zustand", "Next.Js", "Restful APIs", "Better Auth"],
      image: "🛒",
      demoUrl: "https://github.com/mayank0304/skillstack-ai-apk/releases/tag/v1.0.0-Skillstack-AI",
      githubUrl: "#",
      status: "In Progress",
      date: "Jan 2025 - Present"
    },
    {
      id: 2,
      title: "Inventory",
      description: "An AI-powered ed-tech platform built with React Native, featuring an intelligent study assistant, quiz generator, and smooth infinite scroll. Integrated with a Next.js backend and RESTful APIs for real-time data sync, the app was tested with students and achieved an 87% satisfaction rate for its intuitive design and seamless navigation.",
      techStack: ["Next.Js", "Drizzle ORM", "Typescript", "Shadcn"],
      image: "🛒",
      demoUrl: "https://inventory-gndec.vercel.app/",
      githubUrl: "#",
      status: "In Progress",
      date: "May 2025 - Present"
    },
    {
      id: 3,
      title: "Spoco",
      description: "A sports venue booking app built with Flutter and Firebase, enabling users to discover facilities and make real-time reservations. Optimized with Provider state management for faster data updates, the app also includes club and event modules with member management, group chat, secure authentication, and live data synchronization.",
      techStack: ["Flutter", "Firebase", "Dart"],
      image: "🛒",
      demoUrl: "https://play.google.com/store/apps/details?id=com.auribises.spoco",
      githubUrl: "#",
      status: "Completed",
      date: "August 2024 - November 2024"
    },
    {
      id: 4,
      title: "Achieve IT",
      description: "AchieveIt is a modern, intuitive task and project management application built with React Native and Expo. The app helps users organize their tasks and projects efficiently while providing a sleek, user-friendly interface with a beautiful dark theme design.",
      techStack: ["React Native", "Expo", "Expo-Notification"],
      image: "🛒",
      demoUrl: "https://github.com/mayank0304/AchieveIt/releases/tag/v1.0.0-AchieveIt",
      githubUrl: "https://github.com/mayank0304/AchieveIt",
      status: "Completed",
      date: "July 2025"
    }
  ];

  return (
    <div className="p-8 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#E0FA51]">Projects</h1>
        <div className="w-20 h-1 bg-[#E0FA51] rounded-full"></div>
      </div>


      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button className="bg-[#E0FA51] text-black px-4 py-2 rounded-lg text-sm font-medium">
          All Projects
        </button>
        <button className="bg-[#1a1f29] text-white px-4 py-2 rounded-lg text-sm font-medium border border-white/10 hover:border-[#E0FA51]/30 transition-colors">
          Web Apps
        </button>
        <button className="bg-[#1a1f29] text-white px-4 py-2 rounded-lg text-sm font-medium border border-white/10 hover:border-[#E0FA51]/30 transition-colors">
          Mobile Apps
        </button>
        <button className="bg-[#1a1f29] text-white px-4 py-2 rounded-lg text-sm font-medium border border-white/10 hover:border-[#E0FA51]/30 transition-colors">
          Full Stack
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1f29]/50 rounded-xl border border-white/10 overflow-hidden hover:border-[#E0FA51]/30 transition-all duration-300 group"
          >
            {/* Project Image/Icon */}
            <div className="bg-gradient-to-br from-[#E0FA51]/20 to-[#E0FA51]/5 p-8 flex items-center justify-center">
              <div className="text-6xl">{project.image}</div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#E0FA51] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-orange-500/20 text-orange-400'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Date */}
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <Calendar size={14} />
                <span className="text-sm">{project.date}</span>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code size={14} className="text-[#E0FA51]" />
                  <span className="text-sm font-medium text-white">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#0D1117] px-2 py-1 rounded-md text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <a
                  href={project.demoUrl}
                  className="flex items-center gap-2 bg-[#E0FA51] text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#E0FA51]/80 transition-colors flex-1 justify-center"
                >
                  <Globe size={14} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 bg-[#0D1117] text-white px-4 py-2 rounded-lg text-sm font-medium border border-white/10 hover:border-[#E0FA51]/30 transition-colors flex-1 justify-center"
                >
                  <Github size={14} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-[#1a1f29]/50 p-8 rounded-xl border border-white/10">
          <h3 className="text-2xl font-semibold mb-4 text-white">Interested in collaborating?</h3>
          <p className="text-gray-300 mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <button className="bg-[#E0FA51] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#E0FA51]/80 transition-colors inline-flex items-center gap-2">
            <ExternalLink size={18} />
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;
