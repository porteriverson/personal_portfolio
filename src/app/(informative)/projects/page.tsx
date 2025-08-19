'use client';

import React, { useState } from 'react';
import { Project } from './types/project';
import { projectsData } from './data/projectData';
import ProjectCard from './compoenents/ProjectCard';
import ProjectModal from './compoenents/ProjectModal';

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
          My Projects
        </h1>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCardClick={openModal}
            />
          ))}
        </div>
      </div>
      
      {/* Project Modal (conditionally rendered) */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectsPage;