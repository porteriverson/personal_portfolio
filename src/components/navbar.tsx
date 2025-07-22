'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Contact', href: '/contact' },
];

export default function FloatingNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-1/13 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="flex bg-blue-200 shadow-lg rounded-full border border-gray-200 overflow-hidden">
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'px-6 py-2 text-sm font-medium transition-colors duration-200',
              pathname === item.href
                ? 'bg-blue-400 text-white'
                : 'text-gray-700 hover:bg-gray-100',
              index !== navItems.length - 1 && 'border-r border-gray-200'
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
