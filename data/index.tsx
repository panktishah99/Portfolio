import { Mail, User } from "lucide-react";
import {
  asanaIcon,
  athonLogo,
  discord,
  dribble,
  facebook,
  figmaIcon,
  framerIcon,
  graphicDesignIcon,
  linkedInIcon,
  notionIcon,
  pinterest,
  pixelworksLogo,
  project_1,
  project_2,
  project_3,
  seoOptIcon,
  slackIcon,
  snapchat,
  spotify,
  vortexLogo,
  webDesignIcon,
  webDevIcon,
  webflowIcon,
  stackIcon,
  flyIcon,
} from "@/app/assets/assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import {
  counterListsType,
  FAQ,
  FollowerData,
  myExperienceTypes,
  myServicesPlansTypes,
  myServicesTypes,
  myShowCasesTypes,
  myStackTypes,
  socialBrandsTypes,
  testimonialsTypes,
} from "@/types";
import { socialListsTypes } from "@/types";
import { pagesListsType } from "@/types";

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "About",
    href: "/about",
    icon: <img src={stackIcon} alt="About" className="w-5 h-5 inline" />,
  },
  {
    id: 3,
    title: "Projects",
    href: "/projects",
    icon: <img src={flyIcon} alt="Projects" className="w-5 h-5 inline" />,
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: "LinkedIn",
    icon: <FaLinkedin size={22} />,
    link: "https://www.linkedin.com/in/panktibshah",
  },
  {
    id: 2,
    title: "Github",
    icon: <FaGithub size={22} />,
    link: "https://github.com/panktishah99",
  },
];

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: "Discord",
    icon: discord,
    link: "https://discord.com",
  },
  {
    id: 2,
    name: "Dribbble",
    icon: dribble,
    link: "https://dribbble.com",
  },
  {
    id: 3,
    name: "Facebook",
    icon: facebook,
    link: "https://facebook.com",
  },
  {
    id: 4,
    name: "Pinterest",
    icon: pinterest,
    link: "https://pinterest.com",
  },
  {
    id: 5,
    name: "SnapChat",
    icon: snapchat,
    link: "https://snapchat.com",
  },
  {
    id: 6,
    name: "Spotify",
    icon: spotify,
    link: "https://open.spotify.com",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Awesomeness",
    value: 100,
  },
  {
    id: 2,
    title: "Year of Experience",
    value: 4,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: 400,
  },
  {
    id: 4,
    title: "Awards Received",
    value: 6,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "Sep 2023 – Present",
    title: "Graduate Student (MS in CS & SE)",
    company: "University of Washington, Bothell",
    label: "Graduate School",
    description:
      "Pursuing MS in Computer Science & Software Engineering. GPA: 3.82/4.0. Focus on scalable web architecture, AI-driven systems, and cloud-native software design. Capstone in intelligent agent systems and mental health tech.",
    link: "https://www.uwb.edu/",
    logo: linkedInIcon,
  },
  {
    id: 2,
    year: "Sep 2020 – Jul 2023",
    title: "Applications Development Engineer",
    company: "Oracle India Pvt. Ltd.",
    label: "Enterprise Software",
    description:
      "Core contributor to Oracle ERP Cloud SaaS (HCM & Core HR). Delivered 150+ Java code fixes, 50+ custom client features, diagnostics, CI/CD improvements, and mentored 8 new hires. Support lead for 400+ tickets.",
    link: "https://www.oracle.com/",
    logo: vortexLogo,
  },
  {
    id: 3,
    year: "May 2019 – Jul 2019",
    title: "Software Engineering Intern",
    company: "Deutsche Bank Group",
    label: "Banking",
    description:
      "Automated backend infra with Flask web tool for environment health checks and setup. Reduced manual effort by 30%, error rates by 90%. Built user-friendly internal tools.",
    link: "https://www.db.com/",
    logo: pixelworksLogo,
  },
  {
    id: 4,
    year: "Aug 2016 – May 2020",
    title: "Bachelor of Technology (ICT)",
    company: "DA-IICT, Gujarat",
    label: "Undergraduate",
    description:
      "BTech in Information and Communication Technology. GPA: 8.17/10. Foundation in programming, systems design, and automation.",
    link: "https://www.daiict.ac.in/",
    logo: athonLogo,
  },
];

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: "Figma",
    description: "Interface Design Tool",
    logo: figmaIcon,
    link: "https://www.figma.com",
  },
  {
    id: 2,
    title: "Notion",
    description: "Productivity Tool",
    logo: notionIcon,
    link: "https://www.notion.so",
  },
  {
    id: 3,
    title: "Webflow",
    description: "No Code Design Tool",
    logo: webflowIcon,
    link: "https://www.webflow.com",
  },
  {
    id: 4,
    title: "Framer",
    description: "No Code Design Tool",
    logo: framerIcon,
    link: "https://www.framer.com",
  },
  {
    id: 5,
    title: "Slack",
    description: "Productivity Tool",
    logo: slackIcon,
    link: "https://slack.com",
  },
  {
    id: 6,
    title: "Asana",
    description: "Productivity Tool",
    logo: asanaIcon,
    link: "https://www.asana.com",
  },
];

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: "AI & Voice Systems",
    description:
      "Building real-time, AI-powered platforms for mental health, education, and productivity.",
    icon: webDevIcon,
    link: "/about",
  },
  {
    id: 2,
    title: "Full-Stack Development",
    description:
      "End-to-end web and mobile solutions using Next.js, React, Python, and cloud-native stacks.",
    icon: webDesignIcon,
    link: "/about",
  },
  {
    id: 3,
    title: "Backend & Automation",
    description:
      "Optimizing backend systems, CI/CD, and data workflows for scale and reliability.",
    icon: seoOptIcon,
    link: "/about",
  },
  {
    id: 4,
    title: "Mentorship & Team Enablement",
    description:
      "Training, onboarding, and supporting engineers and students in tech initiatives.",
    icon: graphicDesignIcon,
    link: "/about",
  },
];

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: "Emma – AI Voice-to-Voice Therapy Platform",
    description:
      "Real-time AI therapist platform for voice-based therapy. PSTN integration, VAD, empathetic AI, and compliance guardrails. Grand Prize at UWB Hacks AI.",
    link: "https://github.com/panktishah99/Emma",
    type: "Mental Health",
    theme: "Dark",
    pages: 4,
    image: project_1,
  },
  {
    id: 2,
    title: "LoveStorying – AI-Powered Story Crafter",
    description:
      "AI storytelling and image generation app for children. GPT-based characters, DALL·E illustrations, and gamified learning. 1st place at UWB Hacks AI.",
    link: "https://github.com/panktishah99/LoveStoryingTest",
    type: "EdTech",
    theme: "Light",
    pages: 5,
    image: project_2,
  },
  {
    id: 3,
    title: "Appointment Scheduler for Canvas LMS",
    description:
      "Tool for instructor-student meeting coordination. Real-time sync with Google/Outlook, scalable to 10,000 users, secure scheduling.",
    link: "https://alias-socraitive.vercel.app",
    type: "Productivity",
    theme: "Dark",
    pages: 6,
    image: project_3,
  },
];

export const testimonials: testimonialsTypes[] = [];

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: "Web Design",
    price: "$50",
    description:
      "Crafting visually captivating and user-friendly websites for online success.",
    completedWorks: "25+",
    experience: "5+",
    totalHoursWorked: "500 hours",
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: "Web Dev",
    price: "$60",
    description:
      "Bringing ideas to life with robust and scalable web solutions.",
    completedWorks: "30+",
    experience: "6+",
    totalHoursWorked: "420 hours",
    icon: webDevIcon,
  },
  {
    id: 3,
    service: "Graphic Design",
    price: "$40",
    description:
      "Creating visually stunning designs that captivate and engage audiences.",
    completedWorks: "40+",
    experience: "8+",
    totalHoursWorked: "328 hours",
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: "SEO",
    price: "$70",
    description:
      "Elevating online visibility and driving organic traffic through strategies.",
    completedWorks: "20+",
    experience: "4+",
    totalHoursWorked: "223 hours",
    icon: seoOptIcon,
  },
];

export const faqData: FAQ[] = [
  {
    question: "What is your core expertise?",
    answer:
      "AI-driven systems, full-stack development, backend optimization, and building products for social impact.",
  },
  {
    question: "What awards or recognition have you received?",
    answer:
      "Grand Prize Winner at UWB Hacks AI 2024 for LoveStorying. Recognized for educational impact and technical execution.",
  },
  {
    question: "How do you approach mentorship?",
    answer:
      "I mentor junior engineers and students, focusing on knowledge transfer, onboarding, and supporting capstone projects.",
  },
  {
    question: "What are your preferred tech stacks?",
    answer:
      "Next.js, React, Python, Java, TypeScript, Flask, Firebase, AWS, Azure, Jenkins, SQL/NoSQL, OpenAI GPT, DALL·E, VAPI.",
  },
];

export const followerData: FollowerData[] = [
  {
    platform: "LinkedIn",
    followers: "400+",
    url: "https://www.linkedin.com/in/panktibshah",
    icon: <FaLinkedin size={28} color="currentColor" />,
  },
  {
    platform: "Github",
    followers: "20+",
    url: "https://github.com/panktishah99",
    icon: <FaGithub size={28} color="currentColor" />,
  },
];
