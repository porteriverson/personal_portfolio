'use client';

import React, { useState, useEffect } from 'react';
import { FolderOpen, FileText, User, Home, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image'; // Import the Image component

// Navbar component definition.
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();


  // Array of navigation links.
  const navLinks = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Projects', icon: FolderOpen, href: '/projects' },
    { name: 'Resume', icon: FileText, href: '/resume' },
    { name: 'About', icon: User, href: '/about' },
  ];

  // Function to handle the scroll behavior
  const handleScroll = React.useCallback(() => {
    if (isMobileMenuOpen) {
      return;
    }
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }, [isMobileMenuOpen, lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className={`fixed w-full z-50 bg-[#141a1a] bg-opacity-90 backdrop-blur-sm shadow-xl border-b border-[#2a2f2f] p-4 transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Name section */}
        <div className="flex items-center space-x-2"> {/* Added flex and items-center to align logo and text */}
          <Image
            src="/favicon.ico" // Replace with the path to your logo
            alt="Porter Iverson's Logo"
            width={32} // Adjust the width as needed
            height={32} // Adjust the height as needed
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-white tracking-wide">
            <span className="text-[#ed7b49]">Porter</span> Iverson
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer group hover:text-white hover:bg-[#2a2f2f] text-gray-400 `}
              >
                <Icon size={18} className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-[#ed7b49]' : 'text-gray-400'}`} />
                <span className={`font-medium ${isActive ? 'text-[#ed7b49]' : 'text-gray-400'}`}>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Collapsible */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 bg-[#2a2f2f] rounded-lg shadow-lg`}>
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#202525] hover:text-white ${isActive ? 'bg-[#202525] text-white' : 'text-gray-400'}`}
              >
                <Icon size={20} className={isActive ? 'text-[#ed7b49]' : ''} />
                <span className={`font-medium text-lg ${isActive ? 'text-[#ed7b49]' : ''}`}>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;