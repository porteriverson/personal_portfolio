'use client'; // This component needs to be a Client Component

import React from 'react';

// Define the props for the ContactModal component
interface ContactModalProps {
  show: boolean;
  onClose: () => void;
  contactDetails: {
    email: string;
    phone: string;
    linkedin: string;
  };
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onClose, contactDetails }) => {
  // If `show` is false, don't render anything
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-sm relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Contact Porter</h2>
        <div className="flex flex-col space-y-4">
          <a
            href={`mailto:${contactDetails.email}`}
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
          >
            Email
          </a>
          <a
            href={`sms:${contactDetails.phone}`}
            onClick={onClose}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
          >
            Text
          </a>
          <a
            href={`tel:${contactDetails.phone}`}
            onClick={onClose}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
          >
            Call
          </a>
          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;