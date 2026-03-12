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
  repoLink?: string;
  type: 'Personal' | 'Group' | 'Professional'; 
  contributions?: string; 
  video?: string;
}
