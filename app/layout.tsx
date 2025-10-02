import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedLayout from "@/components/AnimatedLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mayank | Software Developer Portfolio",
    template: "%s | Mayank",
  },
  description:
    "Portfolio of Mayank - Software Developer specializing in Mobile application and web development. Explore projects, resume, and contact details.",
  keywords: [
    "Mayank",
    "Mayank portfolio",
    "software developer",
    "Mobile Developer",
    "Application Developer",
    "Flutter",
    "React Native",
    "Expo",
    "web developer",
    "frontend developer",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "JavaScript",
    "projects",
    "resume",
    "contact",
  ],
  authors: [{ name: "Mayank" }],
  creator: "Mayank",
  publisher: "Mayank",
  applicationName: "Mayank Portfolio",
  category: "Technology",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
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
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
