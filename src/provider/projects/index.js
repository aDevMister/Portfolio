
import purse from "../../assets/purse.png";
import doc from "../../assets/doc.png";
import ainameit from "../../assets/ainameit.png";
import minidash from "../../assets/minidash.png";
import noorspath from "../../assets/noorspath.png";
// ADD THESE IMAGES TO YOUR ASSETS FOLDER:
import proofark from "../../assets/proofark.png";
import sunnahcompanion from "../../assets/sunnahcompanion.png";

const Projects = [
  {
    id: 1,
    title: "AiNameIt - AI-Powered SaaS",
    details:
      "Co-founded AI-powered platform generating unique brand names and checking domain availability. Built with Next.js, React, TypeScript, and OpenAI API. Launched MVP in 8 weeks, now serving 1,000+ users with 40% retention improvement.",
    tools: "Next.js TypeScript OpenAI API Supabase Tailwind CSS Zustand",
    repo: null,
    url: "https://ainameit.com",
    img: ainameit,
    featured: true,
    status: "live", // Live with users
  },
  {
    id: 2,
    title: "ProofArk - Certificate Generator",
    details:
      "Founded and building professional certificate generator platform with canvas manipulation using Fabric.js. Features real-time preview, drag-and-drop editing, custom styling, and high-resolution PDF export. Currently in development with plans for public launch.",
    tools: "Next.js TypeScript Fabric.js Supabase Tailwind CSS Canvas API",
    repo: null,
    url: "https://proofark.vercel.app/",
    img: proofark,
    featured: true,
    status: "development", // In development
  },
  {
    id: 3,
    title: "Sunnah Companion - Islamic Learning Platform",
    details:
      "Founded and developing comprehensive Islamic learning platform with stories, interactive quizzes, AI-powered personalized learning, prayer times, and Quranic resources. Built with Next.js, Supabase, and OpenAI API integration. Launching soon for global Muslim community.",
    tools: "Next.js TypeScript Supabase OpenAI API Tailwind CSS",
    repo: null,
    url: "https://sunnahcompanion.vercel.app/",
    img: sunnahcompanion,
    featured: true,
    status: "development", // In development
  },
  {
    id: 4,
    title: "Noor's Path",
    details:
      "Modern website for educational and healthcare organization. Built with Next.js, TypeScript, and Framer Motion for smooth animations. Focused on accessibility and responsive design across all devices.",
    tools: "Next.js TypeScript Tailwind CSS Framer Motion Shadcn Embla Carousel",
    repo: null,
    url: "https://noorspath.vercel.app/",
    img: noorspath,
    featured: true,
    status: "live",
  },
  {
    id: 5,
    title: "Tulupay Documentation",
    details:
      "Comprehensive developer documentation platform for Tulupay's payment API. Reduced developer onboarding time by 35% through clear structure, searchable content, and interactive examples. Fully responsive design.",
    tools: "Next.js JavaScript Tailwind CSS REST API",
    repo: null,
    url: "https://docs.tulupay.com/",
    img: doc,
    featured: true,
    status: "live",
  },
  {
    id: 6,
    title: "Purse by Tulupay",
    details:
      "Admin dashboard for managing multi-currency fiat transactions. Built complex data tables, real-time monitoring, and analytics visualization. Integrated REST APIs for live transaction data.",
    tools: "Next.js Chart.js Ant Design JavaScript Tailwind CSS",
    repo: null,
    url: "https://purse.tulupay.com/",
    img: purse,
    featured: true,
    status: "live",
  },
  {
    id: 7,
    title: "React User Dashboard",
    details:
      "Simple yet functional dashboard for managing user data with full CRUD operations. Features sorting, searching, pagination, and clean UI. Demonstrates state management and API integration skills.",
    tools: "React.js Styled Components Axios Zustand",
    repo: null,
    url: "https://mini-dashboard-gray.vercel.app/",
    img: minidash,
    featured: false,
    status: "live",
  },
];

export default Projects;