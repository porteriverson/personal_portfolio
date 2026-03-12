import { Project } from "../types/project";
import { getProjectSortDate } from "../utils/projectDates";

const rawProjectsData: Project[] = [
  {
    id: 1,
    title: "EE Tutors",
    startDate: "2025-07-01",
    images: [
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/EE-Tests.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/EE-Science.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/EE-Report.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/EE-English.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/EE-Math.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/EE-Reading.png",
    ],
    description:
      "A full-stack web application for my sister who tutors high school students for the ACT. The ACT is transitioning to a digital format and her tutoring sessions lacked that dimension. This project strengthens the value proposition she can offer to get more students.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    demoLink: "https://ee-tutors.vercel.app",
    repoLink: "#",
    type: "Personal",
    contributions:
      "Database Normalization, unique structure for each test section, report correct/incorrect answers, full test simulation, practice questions, login and admin dashboard",
  },
  {
    id: 2,
    title: "Tiffany's Tours",
    startDate: "2025-06-01",
    images: [
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/TT-Home.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/TT-AdminDash.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/TT-BuildTour.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/TT-Login.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/TT-ViewTour.png",
    ],
    description:
      "Created for tour guides to plan, manage, and execute international travel tours for groups of 100+ high school students. Features include itinerary planning, traveler management, and pre-travel checklist.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    demoLink: "https://tiffanystours.vercel.app",
    repoLink: "https://github.com/porteriverson/tiff_tours.git",
    type: "Personal",
    contributions:
      "Role-Based Access Control, Tour Drafting/Publishing, Traveler Management, Email Notification System, Registration and Payment Processing",
  },
  {
    id: 3,
    title: "Doughney's",
    startDate: "2025-05-01",
    images: [
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/Doughneys-Home.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/doughneys-request.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/doughneys-faq.png",
    ],
    description:
      "A frontend website for wedding catering business. They had no previous online presence as they were launching their business. In the first summer, this site Increased their quote requests by 80%",
    technologies: ["TypeScript", "React", "Tailwind CSS", "EmailJS", "Vercel"],
    demoLink: "https://doughneys.com",
    // repoLink: 'https://github.com/porteriverson/donuts.git',
    type: "Personal",
    contributions:
      "Integrated EmailJS for contact form functionality, Accordion FAQ section, Image Carousel, Responsive Design, SEO Optimization",
  },
  {
    id: 4,
    title: "CineNiche",
    startDate: "2025-04-01",
    images: [
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/CN-Home.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/CN-Landing.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/CN-Movie.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/CN-Login.png",
    ],
    description:
      "Final Group Project Winter Semester 2025. We created a movie streaming site complete with user authentication, ML recommendations, and a custom admin panel. This was a group project that was hosted on Azure but taken down. The recorded demo features videos from other group members in addition to my own work",
    technologies: [
      "React",
      "Python",
      "SciKit-learn",
      "Microsof Azure",
      ".NET",
      "PostgreSQL",
    ],
    video:
      "https://drive.google.com/drive/folders/1UFx7PT1VHQFfswMLEnAdQeoUFmJrXEG_?usp=share_link",
    repoLink: "https://github.com/sand20man/Winter_Intex_1-10.git",
    type: "Group",
    contributions:
      "Machine Learning Model for Recommentations, Ratings and Movie Details Page, API Development with .NET",
  },
  {
    id: 5,
    title: "Premier League Match Predictor",
    startDate: "2025-04-01",
    images: ["/soccer.png"],
    description:
      "Worked with my brother to build a discord bot that gets premier league matches from an API and allows users to predict the outcomes. After the matches are played, the bot updates the users with the results and their prediction accuracy. I built the machine learning model to predict the match outcomes based on a variety of features.",
    technologies: ["Python", "Scikit-learn", "RESTful API"],
    demoLink: "#",
    repoLink: "https://github.com/jaceiverson/pl-discord-bot.git",
    type: "Group",
    contributions:
      "Developed a machine learning model to predict match outcomes based on 12 features, working on integrating it with the discord bot.",
  },
  {
    id: 6,
    title: "Turtle Shelter Project",
    startDate: "2024-12-01",
    images: [
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/TS-Home.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/TS-Login.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/TS-Admin.png",
    ],
    description:
      "Final Group Project Fall Semester 2024. We built a web app to manage a non-profit charity that makes life saving vests for people experiencing homelessness. The demo videos include my contributions as well as the contributions of my 3 group members.",
    technologies: ["Python", "Scikit-learn", "Tableau", "Node.js", "Express"],
    video:
      "https://drive.google.com/drive/folders/1AQwP5cdbPartuxt8e0nGiapGEoDRHHyu?usp=share_link",
    repoLink: "https://github.com/Jburton175/INTEX.git",
    type: "Group",
    contributions:
      "Database Normalization, Data Visualizations, UI Design, CRUD with Node.js and Express",
  },
  {
    id: 7,
    title: "Elephrend",
    startDate: "2025-12-01",
    endDate: "Present",
    images: [
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/elephrend-settings.jpeg",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/elephrend-record.jpeg",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/elephrend-ideas.jpeg",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/elephrend-contact-detail.jpeg",
    ],
    description:
      "A mobile app that solves a personal problem. Elephrend helps me remember important details about the people I care about. This is a voice-first personal CRM that generates gift ideas, interaction summaries, and special event reminders/messages so you never miss a special occasion. Currently being beta tested in iOS TestFlight.",
    technologies: [
      "React Native",
      "Supabase",
      "Expo",
      "PostHog",
      "RevenueCat",
      "App Store Connect",
    ],
    video: "",
    // repoLink: "",
    type: "Personal",
    contributions: "",
  },
  {
    id: 8,
    title: "Cureo Health",
    startDate: "2026-01-01",
    endDate: "Present",
    images: [
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/cureo-main.png",
    ],
    description:
      "Collaborated with 2 primary-care physicians to provide a cheap telehealth service for patients who go directly to a pharamacy. ",
    technologies: [
      "React",
      "TypeScript",
      "AWS Cognito",
      "AWS DynamoDB",
      "AWS End User Messaging",
      "AWS S3",
      "AWS Route 53",
    ],
    demoLink: "https://cureo.me",
    // repoLink: "",
    type: "Professional",
    contributions: "End to end implementation",
  },
  {
    id: 9,
    title: "Temple Scheduler",
    startDate: "2026-03-01",
    images: [
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/temple-scheduler-1.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/temple-scheduler-2.png",
    ],
    description: "A chrome extension to ",
    technologies: ["React"],
    video: "",
    // repoLink: "",
    type: "Personal",
    contributions: "",
  },
];

export const projectsData = [...rawProjectsData].sort(
  (a, b) => getProjectSortDate(b) - getProjectSortDate(a),
);
