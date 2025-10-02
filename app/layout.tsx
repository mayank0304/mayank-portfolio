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
      <head>
        <title>Mayank | Software Developer Portfolio</title>
        <meta name="title" content="Mayank | Software Developer Portfolio" />
        <meta
          name="description"
          content="Portfolio of Mayank - Software Developer specializing in Mobile application and web development. Explore projects, resume, and contact details."
        />
        <meta
          name="keywords"
          content="Mayank, Mayank portfolio, software developer, Mobile Developer, Application Developer, Flutter, React Native, Expo, web developer, frontend developer, Next.js, Node.js, Tailwind CSS, JavaScript, projects, resume, contact"
        />
        <meta name="author" content="Mayank" />
        <meta name="application-name" content="Mayank Portfolio" />
        <meta name="publisher" content="Mayank" />
        <meta name="category" content="Technology" />

        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
