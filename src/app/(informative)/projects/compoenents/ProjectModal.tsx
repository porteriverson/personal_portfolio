'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    // Modal Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 md:p-8">
      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-800 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header with Image */}
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={320}
            className="w-full h-80 object-cover rounded-t-xl"
            style={{ objectFit: 'cover', borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white p-2">
            <h2 className="text-3xl md:text-4xl font-extrabold">{project.title}</h2>
            <p className="text-md md:text-lg">{project.timeframe}</p>
          </div>
        </div>
        
        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 text-gray-700">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Project Overview</h3>
            <p className="text-md">{project.description}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Live Demo
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-800 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
  );
};

export default ProjectModal;
