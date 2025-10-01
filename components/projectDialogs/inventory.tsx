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

export function InventoryProject({ children }: { children: React.ReactNode }) {
  const project = {
    title: "Inventory",
    description:
      "An Inventory Management System for GNDEC's IT Department",
    techStack: [
      "Next.Js",
      "Shadcn",
      "Tailwind",
      "Drizzle ORM"
    ],
    image: "/projects/inventory.png",
    demoUrl:
      "https://inventory-gndec.vercel.app",
    githubUrl: "#",
    status: "In Progress",
    date: "May 2025 - Present",
  };

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
              <ExternalLink size={16} /> Live Website
            </Button>
          </a>
        </div>

        {/* <Carousel className="w-full">
          <CarouselContent className="gap-0">
            {pic.map((p, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/6"
              >
                <div className="relative h-[480px]">
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
        </Carousel> */}
      </DialogContent>
    </Dialog>
  );
}
