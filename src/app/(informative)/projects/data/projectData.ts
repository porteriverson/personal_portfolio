import { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'EE Tutors',
    timeframe: 'July 2025',
    image: '/soccer.png',
    description: 'A full-stack web application for my sister who does tutors high school students for the ACT. Built with a React frontend Supabase powered backend.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: "Tiffany's Tours",
    timeframe: 'June 2025',
    image: '/soccer.png',
    description: 'A mobile-first weather application that provides detailed forecasts and uses geolocation to determine the user\'s current location. The design is inspired by space and sci-fi themes.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenWeatherMap API'],
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: "Doughney's",
    timeframe: 'May 2025',
    image: '/soccer.png',
    description: 'A frontend prototype for wedding catering business. Increased their quote requests by 80%"',
    technologies: ['Next.js', 'Tailwind CSS'],
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 4,
    title: 'Premier League Match Predictor',
    timeframe: 'April 2025',
    image: '/soccer.png',
    description: 'An e-commerce prototype with a mock checkout system. Focus was on creating a clean, modern user interface and a smooth user experience.',
    technologies: ['Python', ],
    demoLink: '#',
    repoLink: '#',
  },
];