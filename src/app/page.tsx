import React from 'react';
import { FolderOpen, FileText, User } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white font-sans p-4 sm:p-8">
      {/* Main Content Container - Centered and max-w for readability */}
      <div className="max-w-4xl w-full text-center">
        {/* Hero Section */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-up">
            Hello, I&apos;m <span className="text-cyan-400">Porter</span>.
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
            I&apos;m a full-stack developer passionate about building clean, performant, and delightful web applications.
          </p>
        </header>

        {/* Links Section - Using a grid for responsive layout */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Projects Link */}
          <a
            href="/projects" // Assuming /projects is your projects page route
            className="group flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
          >
            <FolderOpen size={48} className="text-cyan-400 mb-4 transition-transform duration-300 group-hover:rotate-6" />
            <span className="text-xl font-bold">My Projects</span>
            <p className="text-sm text-gray-400 mt-1">See what I&apos;ve been working on.</p>
          </a>

          {/* Resume Link */}
          <a
            href="/resume" // Placeholder for your resume file path or link
            // target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
          >
            <FileText size={48} className="text-cyan-400 mb-4 transition-transform duration-300 group-hover:translate-y-1" />
            <span className="text-xl font-bold">My Resume</span>
            <p className="text-sm text-gray-400 mt-1">View my professional experience.</p>
          </a>

          {/* About Page Link */}
          <a
            href="/about" // Assuming /about is your about page route
            className="group flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
          >
            <User size={48} className="text-cyan-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-bold">About Me</span>
            <p className="text-sm text-gray-400 mt-1">Learn more about my background.</p>
          </a>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
