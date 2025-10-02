"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

export function AchieveProject({ children }: { children: React.ReactNode }) {
  const project = {
    title: "Achieve IT",
    description:
      "AchieveIt is a modern, intuitive task and project management application built with React Native and Expo. The app helps users organize their tasks and projects efficiently while providing a sleek, user-friendly interface with a beautiful dark theme design.",
    techStack: [
      "React Native",
      "Expo",
      "Expo-Notification",
      "Async Storage"
    ],
    image: "/projects/achieve.png",
    demoUrl:
      "https://github.com/mayank0304/AchieveIt/releases/tag/v1.0.0-AchieveIt",
    githubUrl: "https://github.com/mayank0304/AchieveIt",
    status: "Completed",
    date: "July 2025",
  };

  const pic = [
    "/achieve/a1.jpg",
    "/achieve/a2.jpg",
    "/achieve/a3.jpg",
    "/achieve/a4.jpg",
    "/achieve/a5.jpg",
    "/achieve/a6.jpg",
  ];

  return (
    <Dialog>
      {/* Trigger (your image on the projects page) */}
      <DialogTrigger asChild>
        <div className="p-3 mb-3 cursor-pointer hover:opacity-90 transition">
          {children}
        </div>
      </DialogTrigger>

      {/* Dialog content */}
      <DialogContent
        className="max-h-[80vh] overflow-y-auto scrollbar-hide
    w-[90vw] max-w-[90vw] sm:max-w-[90vw] md:max-w-[90vw] lg:max-w-[90vw] xl:max-w-[80vw] 2xl:max-w-[70vw]
    bg-[#0D1117]/90
    backdrop-blur-lg"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription>
            {project.date} •{" "}
            <span className="text-green-400">{project.status}</span>
          </DialogDescription>
        </DialogHeader>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">{project.description}</p>

        {/* Tech stack */}
        <div className="">
          <h3 className="font-semibold text-lg mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="flex items-center gap-2 border border-white/30">
              <ExternalLink size={16} /> App APK
            </Button>
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2 border border-white/30">
              <Github size={16} /> GitHub
            </Button>
          </a>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="gap-0">
            {pic.map((p, index) => (
              <CarouselItem
                key={index}
                className="basis-6/11 sm:basis-3/11 md:basis-3/11 lg:basis-1/4 xl:basis-1/6"
              >
                <div className="relative h-[360px] md:h-[480px]">
                  <Image
                    src={p}
                    alt={`Skillstack ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
