import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Profile from "@/components/profile";
import TabbarMobile from "@/components/tabbar/tabbarMobile";
import Tabbar from "@/components/tabbar/tabbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayank Sharma | Software Developer Portfolio",
  description:
    "Full-stack software developer from Ludhiana, Punjab, India. Specializing in React, Next.js, Node.js, and modern web development. View my projects, experience, and get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col-reverse m-5 mb-16 gap-5 xl:flex-row-reverse xl:my-20 xl:mx-52 xl:gap-7">
          <div className="bg-[#0D1117]/80 text-white w-full xl:w-[80%]  rounded-2xl shadow-lg backdrop-blur-md border border-white/10">
            <Tabbar />
            <div className="tab-content">{children}</div>
          </div>
          <Profile />
          <TabbarMobile />
        </div>
      </body>
    </html>
  );
}
