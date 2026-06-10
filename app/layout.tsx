import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MusicPlayer from "@/components/MusicPlayer";
import NetworkBackground from "@/components/NetworkBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timeline KP — Robotiku 2026",
  description: "Linimasa Kerja Praktik pengembangan sistem Robotiku 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-sans text-white antialiased">
        <NetworkBackground />
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
