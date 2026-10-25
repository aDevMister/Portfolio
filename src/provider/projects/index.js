import purse from "../../assets/purse.png";
import doc from "../../assets/doc.png";
import ainameit from "../../assets/ainameit.png";
import minidash from "../../assets/minidash.png";
import noorspath from "../../assets/noorspath.png";
import proofark from "../../assets/proofark.png";
import sunnahcompanion from "../../assets/sunnahcompanion.png";
import dobbizsignature from "../../assets/dobbizsignature.png";
import workproof from "../../assets/workproof.png";
import foundspec from "../../assets/foundspec.png";
import adssembly from "../../assets/adssembly.png";
import sabinow from "../../assets/sabinow.png";

const Projects = [
  {
    id: 1,
    title: "AiNameIt - AI-Powered SaaS",
    details:
      "Served as Chief Engineer for an AI-powered platform generating unique brand names and checking domain availability. Built with Next.js, React, TypeScript, and OpenAI API. Launched MVP in 8 weeks, now serving 1,000+ users with 40% retention improvement.",
    tools: "Next.js TypeScript OpenAI API Supabase Tailwind CSS Zustand",
    repo: null,
    url: "https://ainameit.com",
    img: ainameit,
    featured: true,
    status: "live",
  },
  {
    id: 2,
    title: "ProofArk - Certificate Generator",
    details:
      "Professional certificate generator with canvas manipulation, real-time preview, drag-and-drop editing, custom styling, and high-resolution PDF export.",
    tools: "Next.js TypeScript Fabric.js Supabase Tailwind CSS Canvas API",
    repo: null,
    url: "https://proofark.vercel.app/",
    img: proofark,
    featured: true,
    status: "development",
  },
  {
    id: 3,
    title: "Sunnah Companion - Islamic Learning Platform",
    details:
      "Islamic learning platform featuring stories, interactive quizzes, personalized AI learning, prayer times, and Quranic resources for the global Muslim community.",
    tools: "Next.js TypeScript Supabase OpenAI API Tailwind CSS",
    repo: null,
    url: "https://sunnahcompanion.vercel.app/",
    img: sunnahcompanion,
    featured: true,
    status: "development",
  },
  {
    id: 4,
    title: "Dobbiz Signature",
    details:
      "Luxury beauty and makeup website for a Houston-based beauty brand specializing in bridal makeup, soft glam, bold glam, traditional gele styling, hairstyling, and destination weddings. Features a portfolio gallery, service packages, pricing, appointment booking, customer testimonials, an online shop, account registration, and newsletter subscriptions.",
    tools: "Next.js TypeScript Tailwind CSS Framer Motion Shadcn Embla Carousel",
    repo: null,
    url: "https://dobbizsignature.vercel.app/",
    img: dobbizsignature,
    featured: true,
    status: "live",
  },
  {
    id: 5,
    title: "WorkProof",
    details:
      "Work management platform for freelancers, contractors, and small businesses to organize jobs, track working hours, document completed work, and improve payment accountability. Features task tracking, clock-in and clock-out, photo evidence, invoices, expense tracking, customer signatures, PDF reports, and data backup.",
    tools: "Bolt.new",
    repo: null,
    url: "https://workproof-saas-appli-v4y2.bolt.host/",
    img: workproof,
    featured: true,
    status: "live",
  },
  {
    id: 6,
    title: "FoundSpec",
    details:
      "Product discovery platform designed to help users find, evaluate, and compare products through an intuitive interface.",
    tools: "",
    repo: null,
    url: "https://foundspec-product-di-qyq3.bolt.host/",
    img: foundspec,
    featured: true,
    status: "live",
  },
  {
    id: 7,
    title: "Adssembly",
    details:
      "Content, copywriting, and campaign workspace designed to help users organize marketing content and manage advertising campaigns in one place.",
    tools: "",
    repo: null,
    url: "https://adssembly.vercel.app/",
    img: adssembly,
    featured: true,
    status: "live",
  },
  {
    id: 8,
    title: "Tulupay Documentation",
    details:
      "Developer documentation platform for Tulupay's payment API, featuring searchable content, clear documentation, interactive examples, and a responsive interface.",
    tools: "Next.js JavaScript Tailwind CSS REST API",
    repo: null,
    url: "https://docs.tulupay.com/",
    img: doc,
    featured: true,
    status: "live",
  },
  {
    id: 9,
    title: "Purse by Tulupay",
    details:
      "Admin dashboard for managing multi-currency fiat transactions, featuring data tables, transaction monitoring, analytics visualizations, and REST API integration.",
    tools: "Next.js Chart.js Ant Design JavaScript Tailwind CSS",
    repo: null,
    url: "https://purse.tulupay.com/",
    img: purse,
    featured: true,
    status: "live",
  },
  {
    id: 10,
    title: "React User Dashboard",
    details:
      "User management dashboard with CRUD operations, sorting, searching, pagination, state management, and API integration.",
    tools: "React.js Styled Components Axios Zustand",
    repo: null,
    url: "https://mini-dashboard-gray.vercel.app/",
    img: minidash,
    featured: false,
    status: "live",
  },
  {
    id: 11,
    title: "Noor's Path",
    details:
      "Modern website for an educational and healthcare organization, with responsive layouts and an accessible user experience.",
    tools: "Next.js TypeScript Tailwind CSS Framer Motion Shadcn Embla Carousel",
    repo: null,
    url: "https://noorspath.vercel.app/",
    img: noorspath,
    featured: true,
    status: "live",
  },
  {
    id: 12,
    title: "SabiNow",
    details:
      "Language and communication platform focused on helping users understand and express ideas naturally, without unnecessary grammar complexity.",
    tools: "Unverified",
    repo: null,
    url: "https://sabinow.vercel.app/",
    img: sabinow,
    featured: false,
    status: "live",
  },
];

export default Projects;