import ResumeTab from "@/components/tabs/ResumeTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Mayank | Software Developer",
  description: "View my professional experience, education, skills.",
};

export default function Resume() {
  return <ResumeTab />;
}
