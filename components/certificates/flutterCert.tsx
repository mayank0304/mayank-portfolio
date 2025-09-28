"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function FlutterCert({ children }: { children: React.ReactNode }) {
  const project = {
    title: "App Development with Flutter",
    description:
      "Completed a comprehensive training on Flutter, covering state management, Firebase integration, and UI design.",
    image: "/projects/certificate.pdf",
    date: "June 2024 - August 2024",
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
    
    bg-[#0D1117]/90
    backdrop-blur-lg"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription>{project.date} </DialogDescription>
        </DialogHeader>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">{project.description}</p>
        <div className="relative h-full">
          <Image
            src="/certificate.png"
            alt="flutter certificate"
            width={500}
            height={500}
            className="object-cover" // or "object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
