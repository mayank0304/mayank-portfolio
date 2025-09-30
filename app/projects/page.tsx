import ProjectsTab from "@/components/tabs/ProjectsTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Mayank | Software Developer Portfolio",
  description: "Explore my portfolio of web development projects including full-stack applications, e-commerce platforms, and modern web solutions built with React, Next.js, and Node.js.",
};

export default function Projects() {
  return <ProjectsTab />;
}
