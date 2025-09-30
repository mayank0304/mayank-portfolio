"use client";

import { motion } from "framer-motion";
import Profile from "@/components/profile/profile";
import ProfileMobile from "@/components/profile/profileMobile";
import Tabbar from "@/components/tabbar/tabbar";
import TabbarMobile from "@/components/tabbar/tabbarMobile";
import AnimatedContent from "@/components/AnimatedContent";
import { Toaster } from "sonner";

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  return (
    <motion.div
      className="flex flex-col m-5 mb-16 gap-5 sm:my-20 sm:mx-12 xl:flex-row xl:my-20 xl:mx-12 xl:gap-7 2xl:flex-row 2xl:my-20 2xl:mx-52 2xl:gap-7"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="hidden xl:block xl:sticky xl:top-20 xl:self-start"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Profile />
      </motion.div>
      <ProfileMobile />
      <motion.div
        className="bg-[#0D1117]/80 text-white w-full xl:w-[80%] rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
        initial={{ opacity: 0, scale: 0.95, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Tabbar />
        <AnimatedContent>{children}</AnimatedContent>
      </motion.div>
      <TabbarMobile />
      <Toaster position="top-center" richColors />
    </motion.div>
  );
};

export default AnimatedLayout;
