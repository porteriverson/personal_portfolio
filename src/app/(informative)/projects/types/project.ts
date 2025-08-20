// types/project.ts
export interface Project {
  id: number;
  title: string;
  timeframe: string;
  images: string[]; 
  description: string;
  technologies: string[];
  demoLink?: string;
  repoLink: string;
  type: 'Personal' | 'Group'; 
  contributions?: string; 
  video?: string;
}