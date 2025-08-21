'use client';

import React from 'react';

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
    phone: '1377-328-108',
    linkedin: 'nosreviretrop/ni/moc.nideknil//:sptth',
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-[#141a1a] rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#ed7b49] hover:text-white text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[#ed7b49] mb-6 text-center">Contact Porter</h2>
        <div className="flex flex-col space-y-4">
          <a
            href={`mailto:${obf(obfuscatedDetails.email)}`}
            onClick={onClose}
            className="bg-[#ed7b49] hover:bg-white hover:text-black text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
          >
            Email
          </a>
          <a
            href={`sms:${obf(obfuscatedDetails.phone)}`}
            onClick={onClose}
            className="bg-[#ed7b49] hover:bg-white hover:text-black text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
          >
            Text
          </a>
          <a
            href={`tel:${obf(obfuscatedDetails.phone)}`}
            onClick={onClose}
            className="bg-[#ed7b49] hover:bg-white hover:text-black text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
          >
            Call
          </a>
          <a
            href={obf(obfuscatedDetails.linkedin)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="bg-[#ed7b49] hover:bg-white hover:text-black text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;