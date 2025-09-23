import InterestsTab from "@/components/tabs/InterestsTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interests & Hobbies - Mayank Sharma | Personal Interests",
  description: "Discover my personal interests, hobbies, and passions beyond coding. From technology exploration to creative pursuits, travel adventures, and lifestyle activities.",
};

export default function Interests() {
  return <InterestsTab />;
}
