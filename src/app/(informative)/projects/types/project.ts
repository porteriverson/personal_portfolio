// types/project.ts
export interface Project {
  id: number;
  title: string;
  startDate: string;
  endDate?: string | "Present";
  images: string[];
  description: string;
  technologies: string[];
  demoLink?: string;
  demoLabel?: string;
  repoLink?: string;
  type: 'Personal' | 'Group' | 'Professional';
  status?: 'Live' | 'In Progress' | 'Prototype' | 'Utility';
  featured?: boolean;
  contributions?: string;
  video?: string;
}
