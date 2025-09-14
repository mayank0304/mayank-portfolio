import ResumeTab from "@/components/tabs/ResumeTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Mayank Sharma | Software Developer",
  description: "View my professional experience, education, skills, and certifications. Full-stack developer with expertise in React, Node.js, and modern web technologies.",
};

export default function Resume() {
  return <ResumeTab />;
}
