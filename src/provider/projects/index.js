import purse from "../../assets/purse.png";
import doc from "../../assets/doc.png";
import ainameit from "../../assets/ainameit.png";

const Projects = [
  {
    id: 1,
    title: "Business Name Generator",
    details:
      "A tool that helps generate business names with available domains using AI in less than a minute.",
    tools: "Nextjs TypeScript Openai Supabase Zustand",
    repo: null,
    url: "https://ainameit.com",
    img: ainameit,
    featured: true,
  },
  {
    id: 2,
    title: "Purse",
    details:
      "Purse is a comprehensive digital platform designed to streamline the management of fiat currencies. It enables users to save, receive, transact, exchange, and oversee multiple traditional currencies within a single, user-friendly interface.",
    tools: "Next.js Chart.js AntDesign JavaScript TailwindCSS",
    repo: null,
    url: "https://purse.tulupay.com/",
    img: purse,
    featured: true,
  },
  {
    id: 3,
    title: "Tulupay Documentation Website",
    details:
      "Tulupay is Africa's leading Web2 and Web3 financial ecosystem, enabling seamless payments, remittances, trade, investments, and capital raising. With robust APIs and SDKs, it offers flexible integrations, secure user management, streamlined payouts, and comprehensive developer resources for creating custom financial solutions.",
    tools: "Next.js JavaScript Tailwind CSS  API  Styled Component",
    repo: null,
    url: "https://docs.tulupay.com/",
    img: doc,
    featured: true,
  },
  
];

export default Projects;
