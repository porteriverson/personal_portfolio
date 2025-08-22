'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  const showNavigationButtons = project.images.length > 1;

  return (
    // Modal Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 md:p-8">
      {/* Modal Content */}
      <div className="relative bg-[#2a2f2f] rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-400 transition-colors"
          aria-label="Close modal"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header with Image Carousel */}
        <div className="relative w-full h-[60vh] md:h-[60vh] sm:min-h-[40vh]">
          <Image
            src={project.images[currentImageIndex]}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
            priority
          />
          
          {/* Navigation Buttons for Carousel */}
          {showNavigationButtons && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors duration-200 z-10"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors duration-200 z-10"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white p-2">
            <h2 className="text-3xl md:text-4xl font-extrabold">{project.title}</h2>
            <p className="rounded-full bg-[#ed7b49] justify-center flex text-md md:text-lg">{project.type} Project</p>
            <p className="text-md md:text-lg">{project.timeframe}</p>
          </div>
        </div>
        
        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 text-gray-400">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">Project Overview</h3>
            <p className="text-md">{project.description}</p>
          </div>
          {/* My contributions to the group for the group project */}
          {project.type === 'Group' && project.contributions && (
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">My Contributions</h3>
              <p className="text-md">{project.contributions}</p>
            </div>
          )}
          {/* Key elements for personal project */}
          {project.type === 'Personal' && project.contributions && (
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Key Elements</h3>
              <p className="text-md">{project.contributions}</p>
            </div>
          )}

          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-[#202525] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={project.demoLink || '#'}
              target={project.demoLink ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#ed7b49] text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-80 transition-colors duration-200"
            >
              {project.demoLink ? 'Live Demo' : 'Recorded Demo'}
            </a>
            {project.repoLink && 
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#202525] text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-80 transition-colors duration-200"
            >
              View Code
            </a>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
