'use client';

// Using standard anchor tags for navigation.
import React from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'About', href: '/about' },
];

export default function FloatingNavbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm shadow-xl rounded-full border border-gray-700/50 p-1">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white"
            aria-label={item.label}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
