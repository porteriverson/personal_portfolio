import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porter Iverson",
  description: "See my latest projects, resume and more.",
  openGraph: {
    url: 'https://porteriverson.com',
    siteName: 'Porter Iverson',
    images: [
      {
        url: 'https://ugsqqbopiurqmwxivwgs.supabase.co/storage/v1/object/public/portfolio-pics/logo.png',
        width: 1200,
        height: 1200,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <div className="my-auto">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
