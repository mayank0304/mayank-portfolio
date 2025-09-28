import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Profile from "@/components/profile/profile";
import TabbarMobile from "@/components/tabbar/tabbarMobile";
import Tabbar from "@/components/tabbar/tabbar";
import ProfileMobile from "@/components/profile/profileMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayank | Software Developer Portfolio",
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
        <div className="flex flex-col m-5 mb-16 gap-5 sm:my-20 sm:mx-12 xl:flex-row xl:my-20 xl:mx-12 xl:gap-7 2xl:flex-row 2xl:my-20 2xl:mx-52 2xl:gap-7">
          <div className="hidden xl:block xl:sticky xl:top-20 xl:self-start">
            <Profile />
          </div>
          <ProfileMobile />
          <div className="bg-[#0D1117]/80 text-white w-full xl:w-[80%]  rounded-2xl shadow-lg backdrop-blur-md border border-white/10">
            <Tabbar />
            <div className="tab-content">{children}</div>
          </div>
          <TabbarMobile />
        </div>
      </body>
    </html>
  );
}
