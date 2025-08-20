'use client';
import React from 'react';
import Image from 'next/image';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick(project)}
      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
    >
      <Image
        src={project.images[0]}
        alt={project.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover"
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* Gradient Overlay for Title and Timeframe */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
        <div className="text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.timeframe}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
