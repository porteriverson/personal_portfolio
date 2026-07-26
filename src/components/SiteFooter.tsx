'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { hiddenChromeRoutes, siteContactLinks, siteNavLinks } from './siteConfig';

const SiteFooter = () => {
  const pathname = usePathname();

  if (hiddenChromeRoutes.includes(pathname as (typeof hiddenChromeRoutes)[number])) {
    return null;
  }

  return (
    <footer className="border-t border-[#2a2f2f] bg-[#141a1a] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/favicon.ico"
            alt="Porter Iverson's Logo"
            width={34}
            height={34}
            className="rounded-full"
          />
          <div>
            <p className="text-lg font-bold tracking-wide">
              <span className="text-[#ed7b49]">Porter</span> Iverson
            </p>
            <p className="text-sm text-gray-400">solving problems with technology</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
            {siteNavLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-300 hover:text-white ${
                    isActive ? 'text-[#ed7b49]' : ''
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={siteContactLinks.email}
              className="rounded-full border border-[#2a2f2f] p-2 text-gray-400 transition-colors duration-300 hover:border-[#ed7b49] hover:text-[#ed7b49]"
              aria-label="Email Porter"
            >
              <Mail size={16} />
            </a>
            <a
              href={siteContactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#2a2f2f] p-2 text-gray-400 transition-colors duration-300 hover:border-[#ed7b49] hover:text-[#ed7b49]"
              aria-label="Porter on LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={siteContactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#2a2f2f] p-2 text-gray-400 transition-colors duration-300 hover:border-[#ed7b49] hover:text-[#ed7b49]"
              aria-label="Porter on GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={siteContactLinks.resume}
              download="Porter_Iverson_Resume_2025.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[#2a2f2f] px-3 py-2 text-sm text-gray-300 transition-colors duration-300 hover:border-[#ed7b49] hover:text-white"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
