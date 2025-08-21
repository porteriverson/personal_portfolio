import React from 'react';
import { FolderOpen, FileText, User } from 'lucide-react';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#141a1a] text-white font-sans p-4 sm:p-8">
      {/* Main Content Container - Centered and max-w for readability */}
      <div className="max-w-6xl w-full">
        {/* Hero Section - Revamped with Split Layout */}
        <header className="mb-12 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Text Content - Animated */}
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-white">
              Nice to meet you, I&apos;m <span className="text-[#ed7b49]">Porter</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0">
              I am a student at BYU getting a masters degree in Information Systems Management. I am fascinated by the potential of technology to solve problems and improve lives.
            </p>
            {/* Scannable list of links */}
            <ul className="mt-6 text-gray-400 text-lg md:text-xl space-y-2">
              <li className="transition-colors duration-300">
               Check out <a href="/projects" className="hover:underline no-underline text-[#ed7b49]"> the projects</a> I have worked on recently.
              </li>
              <li className="transition-colors duration-300">
               View  <a href="/resume" className="hover:underline no-underline text-[#ed7b49]">my resume</a> of skills and professional experience.
              </li>
              <li className="transition-colors duration-300">
               Read about  <a href="/about" className="hover:underline no-underline text-[#ed7b49]">the moments</a> that have defined my journey so far.
              </li>
            </ul>
          </div>
          
          {/* Image Placeholder with subtle animation */}
          <div className="md:w-1/2 flex justify-center animate-fade-in-down">
            {/* Replace this div with your actual Next.js Image component */}
            <div className="relative w-full max-w-sm md:max-w-md h-64 md:h-80 bg-[#2a2f2f] rounded-full shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
              {/* This is a placeholder for your image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm p-4 text-center">
                <Image src="/Iverson,Porter.png" alt="Porter Iverson" layout="fill" objectFit="cover" className="rounded-none" />
              </div>
            </div>
          </div>
        </header>

        {/* Divider with subtle styling */}
        <hr className="w-full border-t border-[#2a2f2f] my-12" />

        {/* Links Section - Using a grid for responsive layout */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Projects Link */}
          <a
            href="/projects"
            className="group flex flex-col items-center p-6 bg-[#2a2f2f] rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-[#202525] focus:outline-none focus:ring-4 focus:ring-[#ed7b49] focus:ring-opacity-50 animate-fade-in-up delay-300"
          >
            <FolderOpen size={48} className="text-[#ed7b49] mb-4 transition-transform duration-300 group-hover:rotate-6" />
            <span className="text-xl font-bold">My Projects</span>
            <p className="text-sm text-gray-400 mt-1">See what I&apos;ve been working on.</p>
          </a>

          {/* Resume Link */}
          <a
            href="/resume"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 bg-[#2a2f2f] rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-[#202525] focus:outline-none focus:ring-4 focus:ring-[#ed7b49] focus:ring-opacity-50 animate-fade-in-up delay-400"
          >
            <FileText size={48} className="text-[#ed7b49] mb-4 transition-transform duration-300 group-hover:translate-y-1" />
            <span className="text-xl font-bold">My Resume</span>
            <p className="text-sm text-gray-400 mt-1">View my professional experience.</p>
          </a>

          {/* About Page Link */}
          <a
            href="/about"
            className="group flex flex-col items-center p-6 bg-[#2a2f2f] rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-[#202525] focus:outline-none focus:ring-4 focus:ring-[#ed7b49] focus:ring-opacity-50 animate-fade-in-up delay-500"
          >
            <User size={48} className="text-[#ed7b49] mb-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-bold">About Me</span>
            <p className="text-sm text-gray-400 mt-1">Read about my defining moments.</p>
          </a>
        </main>
      </div>
    </div>
  );
};

export default HomePage;