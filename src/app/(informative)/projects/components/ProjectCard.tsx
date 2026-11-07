'use client';
import React from 'react';
import Image from 'next/image';
import { Project } from '../types/project';
import { formatProjectTimeframe } from '../utils/projectDates';

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onCardClick }) => {
  const timeframe = formatProjectTimeframe(project);

  return (
    <button
      type="button"
      onClick={() => onCardClick(project)}
      className="relative w-full overflow-hidden rounded-xl bg-[#2a2f2f] text-left shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed7b49] focus-visible:ring-offset-4 focus-visible:ring-offset-[#141a1a]"
      aria-label={`View details for ${project.title}`}
    >
      <Image
        src={project.images[0]}
        alt={project.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover"
        style={{ objectFit: 'cover' }}
      />

      {project.status && (
        <span className="absolute right-4 top-4 rounded-full bg-[#141a1a]/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {project.status}
        </span>
      )}

      {/* Gradient Overlay for Title and Timeframe */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
        <div className="text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-300">{timeframe}</p>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
