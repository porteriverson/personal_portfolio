'use client';

import React, { useState } from 'react';
import { Project } from './types/project';
import { projectsData } from './data/projectData';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';

type ProjectFilter = 'All' | Project['type'];

const projectFilters: ProjectFilter[] = [
  'All',
  'Personal',
  'Professional',
  'Group',
];

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === 'All' || project.type === activeFilter,
  );
  const featuredProjects = filteredProjects.filter(
    (project) => project.featured !== false,
  );
  const experiments = filteredProjects.filter(
    (project) => project.featured === false,
  );

  return (
    <div className="bg-[#141a1a] min-h-screen p-8 font-sans pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white">
          My Projects
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Products, client work, and experiments I have built to solve real
          problems.
        </p>

        <div
          className="my-10 flex flex-wrap justify-center gap-3"
          aria-label="Filter projects"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? 'bg-[#ed7b49] text-white'
                  : 'bg-[#2a2f2f] text-gray-300 hover:bg-[#363c3c] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {featuredProjects.length > 0 && (
          <section>
            <h2 className="mb-6 text-2xl font-bold text-white">Featured Work</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onCardClick={openModal}
                />
              ))}
            </div>
          </section>
        )}

        {experiments.length > 0 && (
          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold text-white">
              Experiments &amp; Utilities
            </h2>
            <p className="mb-6 mt-2 text-gray-400">
              Smaller builds used to test an idea, learn a tool, or automate a
              personal workflow.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {experiments.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onCardClick={openModal}
                />
              ))}
            </div>
          </section>
        )}

        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-gray-400">
            No projects match this filter yet.
          </p>
        )}
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
