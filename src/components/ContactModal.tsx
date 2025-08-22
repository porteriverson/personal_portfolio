'use client';

import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onClose }) => {
  // A simple way to obfuscate and de-obfuscate strings
  const obf = (str: string) => {
    return str.split('').reverse().join('');
  };

  // Storing obfuscated details
  const obfuscatedDetails = {
    email: 'moc.liamg@39nosreviretrop',
    linkedin: 'nosreviretrop/ni/moc.nideknil//:sptth',
    github: 'nosreviretrop/moc.buhtig//:sptth',
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-[#141a1a] rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 hover:text-[#ed7b49] text-white text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[#ed7b49] mb-6 text-center">Contact Porter</h2>
        <div className="flex flex-col space-y-4">
          <a
            href={`mailto:${obf(obfuscatedDetails.email)}`}
            onClick={onClose}
            className="hover:bg-[#ed7b49] bg-white text-black hover:text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href={obf(obfuscatedDetails.linkedin)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="hover:bg-[#ed7b49] bg-white text-black hover:text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href={obf(obfuscatedDetails.github)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="hover:bg-[#ed7b49] bg-white text-black hover:text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;