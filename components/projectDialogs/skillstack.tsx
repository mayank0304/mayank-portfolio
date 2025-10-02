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
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export function SkillstackProject({ children }: { children: React.ReactNode }) {
  const project = {
    title: "Skillstack AI",
    description:
      "An AI-powered ed-tech platform built with React Native, featuring an intelligent study assistant, quiz generator, and smooth infinite scroll. Integrated with a Next.js backend and RESTful APIs for real-time data sync, the app was tested with students and achieved an 87% satisfaction rate for its intuitive design and seamless navigation.",
    techStack: [
      "React Native",
      "Expo",
      "Zustand",
      "Next.Js",
      "Restful APIs",
      "Better Auth",
    ],
    image: "/projects/skillstack.png",
    demoUrl:
      "https://github.com/mayank0304/skillstack-ai-apk/releases/tag/v1.0.0-Skillstack-AI",
    githubUrl: "#",
    status: "In Progress",
    date: "Jan 2025 - Present",
  };

  const pic = [
    "/skillstack/ssai1.jpg",
    "/skillstack/ssai2.jpg",
    "/skillstack/ssai3.jpg",
    "/skillstack/ssai4.jpg",
    "/skillstack/ssai5.jpg",
    "/skillstack/ssai6.jpg",
    "/skillstack/ssai7.jpg",
    "/skillstack/ssai8.jpg",
    "/skillstack/ssai9.jpg",
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
