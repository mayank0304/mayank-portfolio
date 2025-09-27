import React from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { SkillstackProject } from "../projectDialogs/skillstack";
import { SpocoProject } from "../projectDialogs/spoco";
import { AchieveProject } from "../projectDialogs/achieve";

const ProjectsTab = () => {
  // const projects = [
  //   {
  //     id: 1,
  //     title: "Skillstack AI",
  //     description:
  //       "An AI-powered ed-tech platform built with React Native, featuring an intelligent study assistant, quiz generator, and smooth infinite scroll. Integrated with a Next.js backend and RESTful APIs for real-time data sync, the app was tested with students and achieved an 87% satisfaction rate for its intuitive design and seamless navigation.",
  //     techStack: [
  //       "React Native",
  //       "Expo",
  //       "Zustand",
  //       "Next.Js",
  //       "Restful APIs",
  //       "Better Auth",
  //     ],
  //     image: "🛒",
  //     demoUrl:
  //       "https://github.com/mayank0304/skillstack-ai-apk/releases/tag/v1.0.0-Skillstack-AI",
  //     githubUrl: "#",
  //     status: "In Progress",
  //     date: "Jan 2025 - Present",
  //   },
  //   {
  //     id: 2,
  //     title: "Inventory",
  //     description:
  //       "An AI-powered ed-tech platform built with React Native, featuring an intelligent study assistant, quiz generator, and smooth infinite scroll. Integrated with a Next.js backend and RESTful APIs for real-time data sync, the app was tested with students and achieved an 87% satisfaction rate for its intuitive design and seamless navigation.",
  //     techStack: ["Next.Js", "Drizzle ORM", "Typescript", "Shadcn"],
  //     image: "🛒",
  //     demoUrl: "https://inventory-gndec.vercel.app/",
  //     githubUrl: "#",
  //     status: "In Progress",
  //     date: "May 2025 - Present",
  //   },
  //   {
  //     id: 3,
  //     title: "Spoco",
  //     description:
  //       "A sports venue booking app built with Flutter and Firebase, enabling users to discover facilities and make real-time reservations. Optimized with Provider state management for faster data updates, the app also includes club and event modules with member management, group chat, secure authentication, and live data synchronization.",
  //     techStack: ["Flutter", "Firebase", "Dart"],
  //     image: "🛒",
  //     demoUrl:
  //       "https://play.google.com/store/apps/details?id=com.auribises.spoco",
  //     githubUrl: "#",
  //     status: "Completed",
  //     date: "August 2024 - November 2024",
  //   },
  //   {
  //     id: 4,
  //     title: "Achieve IT",
  //     description:
  //       "AchieveIt is a modern, intuitive task and project management application built with React Native and Expo. The app helps users organize their tasks and projects efficiently while providing a sleek, user-friendly interface with a beautiful dark theme design.",
  //     techStack: ["React Native", "Expo", "Expo-Notification"],
  //     image: "🛒",
  //     demoUrl:
  //       "https://github.com/mayank0304/AchieveIt/releases/tag/v1.0.0-AchieveIt",
  //     githubUrl: "https://github.com/mayank0304/AchieveIt",
  //     status: "Completed",
  //     date: "July 2025",
  //   },
  // ];

  return (
    <div className="p-8 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#E0FA51]">Projects</h1>
        <div className="w-20 h-1 bg-[#E0FA51] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <div className="p-3 mb-3">
          <SkillstackProject>
            <Image
              src="/skillstack.png"
              width={460}
              height={260}
              alt="Skillstack"
              className="rounded-xl"
            />
          </SkillstackProject>
          <div className="text-xl text-center mt-2 font-bold">
            Skillstack AI
          </div>
        </div>
        <div className="p-3 mb-3">
          <SpocoProject>
          <Image
            src="/spoco.png"
            width={460}
            height={260}
            alt="Skillstack"
            className="rounded-xl"
          />
          </SpocoProject>
          <div className="text-xl text-center mt-2 font-bold">Spoco</div>
        </div>
        <div className="p-3 mb-3">
          <AchieveProject>
            <Image
            src="/achieve.png"
            width={460}
            height={260}
            alt="Skillstack"
            className="rounded-xl"
          />
          </AchieveProject>
          <div className="text-xl text-center mt-2 font-bold">Achieve IT</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-[#1a1f29]/50 p-8 rounded-xl border border-white/10">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Interested in collaborating?
          </h3>
          <p className="text-gray-300 mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
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
