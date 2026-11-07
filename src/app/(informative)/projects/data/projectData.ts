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
    startDate: "2026-08-01",
    images: ["/soccer.png"],
    description:
      "A reproducible machine-learning pipeline that syncs Premier League results from FotMob, combines them with historical match data, and predicts the next matchweek with home, draw, and away probabilities.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Parquet", "FotMob API"],
    repoLink: "https://github.com/porteriverson/match-predictor",
    type: "Personal",
    status: "In Progress",
    contributions:
      "Built the data synchronization, feature engineering, prematch snapshotting, model training, and weekly prediction workflow while keeping API requests cacheable and reproducible.",
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
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/elephrend-ideas.jpeg",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/elephrend-record.jpeg",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/elephrend-contact-detail.jpeg",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/elephrend-settings.jpeg",
    ],
    description:
      "A voice-first personal relationship assistant for iPhone. Elephrend helps people remember birthdays, important moments, conversations, and thoughtful gift ideas while keeping their data local to their device.",
    technologies: [
      "React Native",
      "Supabase",
      "Expo",
      "PostHog",
      "RevenueCat",
      "App Store Connect",
    ],
    demoLink: "https://elephrend.com",
    demoLabel: "Visit Website",
    type: "Personal",
    status: "Live",
    contributions:
      "Designed and built the iOS app, App Store release workflow, privacy-first local data model, voice capture experience, product analytics, subscriptions, and marketing website.",
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
    description:
      "A chrome extension to quickly scan multiple temples for availability. The current system has multiple clicks to check 1 temple. With nearly 6 or more temples in my area, this extension saves me a lot of clicks and time when trying to schedule temple visits. Built in 3 hours with codex.",
    technologies: [ "API Reverse Engineering", "Network Tools"],
    // video: "",
    // repoLink: "",
    type: "Personal",
    contributions: "",
  },
  {
    id: 10,
    title: "Heyits",
    startDate: "2026-02-28",
    images: [
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/heyits-1.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/heyits-2.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/heyits-3.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/heyits-4.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/heyits-5.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/heyits-6.png",
      "https://vxxoyghhxvuwltfkegva.supabase.co/storage/v1/object/public/portfolio-photos/heyits-7.png",
    ],
    description: "A Hackathon project to eliminate the friction of journaling. Heyits connects to your calendar and sends you a daily prompt to make a quick journal entry for the day. The end product would be publishable as a book. Exporting as a PDF was the main distribution feature that was actually built in the 24 hour hackathon.",
    technologies: ["React", "TypeScript", "Nextjs", "Supabase", "Vercel", "Google Calendar", ],
    video:
      "https://drive.google.com/file/d/1wL5sPemqiJfTKudfR7ViDDURllUMTxQ4/view?usp=sharing",
    type: "Group",
    contributions: "I managed the AI system that generated code for this project.",
  },
  {
    id: 11,
    title: "Side Quest Society",
    startDate: "2026-10-01",
    images: ["/projects/side-quest-society.png"],
    description:
      "An interactive learning platform that replaces slide-based training with story-driven quests, challenges, and practical decisions. Organizations can distribute access codes, manage seats, and track learner progress.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "SCORM",
      "Vercel",
    ],
    demoLink: "https://side-quest-society.vercel.app",
    demoLabel: "Visit Website",
    type: "Personal",
    status: "Live",
    contributions:
      "Built the responsive product experience, guest and authenticated progress, organization access-code entitlements, seat limits, and a SCORM 1.2 packaging workflow.",
  },
  {
    id: 12,
    title: "Kate Iverson Media",
    startDate: "2026-09-01",
    images: ["/projects/kate-media.png"],
    description:
      "A portfolio and inquiry website for a short-form video and social media management business, paired with a private operations dashboard for managing clients, invoices, and contracts.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
      "Documenso",
    ],
    repoLink: "https://github.com/porteriverson/Kate-media",
    type: "Professional",
    status: "In Progress",
    contributions:
      "Created an editable content system, click-to-load video portfolio, accessible marketing pages, authenticated admin tools, and integrations for invoicing and contracts.",
  },
  {
    id: 13,
    title: "Swipe Cleaner",
    startDate: "2026-08-01",
    images: ["/projects/swipe-cleaner.svg"],
    description:
      "An on-device iPhone cleanup prototype that lets people review photos, videos, contacts, and selected files one item at a time before committing any destructive changes.",
    technologies: ["React Native", "Expo", "TypeScript", "NativeWind", "Jest"],
    repoLink: "https://github.com/porteriverson/swipe-cleaner",
    type: "Personal",
    status: "Prototype",
    contributions:
      "Built a review-first deletion flow with explicit confirmation, permission-aware media access, contact restore backups, accessibility support, and no backend or tracking SDKs.",
  },
  {
    id: 14,
    title: "House Search Ranker",
    startDate: "2026-04-01",
    images: ["/projects/house-searching.svg"],
    description:
      "A Python utility that gathers local real-estate listings, normalizes property details, and ranks homes using value, price-per-square-foot, space, and lot-size criteria.",
    technologies: ["Python", "Pandas", "REST API", "Data Analysis"],
    repoLink: "https://github.com/porteriverson/house-searching",
    type: "Personal",
    status: "Utility",
    featured: false,
    contributions:
      "Implemented API ingestion, defensive response parsing, scoring rules, ranking, CSV export, and a concise command-line summary of the strongest matches.",
  },
];

export const projectsData = [...rawProjectsData].sort(
  (a, b) => getProjectSortDate(b) - getProjectSortDate(a),
);
