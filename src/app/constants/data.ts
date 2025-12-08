import {
  SiMicrosoftazure,
  SiTerraform,
  SiGithubactions,
  SiPython,
  SiLinux,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiFigma,
  SiMongodb,
  SiGit,
  SiUdemy,
  SiMeta,
  SiGoogle,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { IconType } from "react-icons";

interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
interface MyDetails {
  id: 1;
  title: string;
  describe: string;
}
export const myDetails: MyDetails[] = [
  {
    id: 1,
    title: "Kent Gesoro",
    describe: "A passionate college student on a journey to become a",
  },
];

interface aboutDetails extends MyDetails {
  describe2: string;
}
export const aboutDetails = [
  {
    id: 2,
    title: "About Me",
    describe:
      "As a college student pursuing a Bachelor of Science degree in Information Technology, I have been actively expanding my skills in Front-End Development.",
    describe2:
      "My focus has been on mastering technologies such as HTML, CSS, Javascript, React, and Tailwind CSS to create engaging and dynamic user experiences.",
  },
];

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Azure Serverless Microservices",
    subtitle: "Serverless Login Architecture",
    description:
      "Architected a scalable, event-driven backend using Azure Functions and Cosmos DB. The infrastructure is fully provisioned using Terraform (IaC) with a zero-downtime CI/CD pipeline via GitHub Actions.",
    tags: ["Azure Functions", "Cosmos DB", "Terraform", "GitHub Actions"],
    image: "/architecture-login.png",
    github: "https://github.com/kntxx/azure-serverless-terraform",
    live: "https://zealous-tree-0dccb0700.3.azurestaticapps.net/",
  },

  {
    id: 2,
    title: "Azure PaaS Architecture",
    subtitle: "Tito Ride",
    description:
      "Engieneered a decoupled MERN stack application using Azure Static Web Apps (Frontend) and App Service (Backend). Implemented Managed Identity for keyless secutiry Cosmos DB and integrated Application Insights for obervability.",
    tags: [
      "Azure Static Web Apps",
      "App Service",
      "Managed Identity",
      "Cosmos DB",
      "Application Insights",
    ],
    image: "/tito-ride-architecture.png",
    github: "https://github.com/kntxx/tara-ride",
    live: "https://nice-mud-0b8289700.3.azurestaticapps.net/",
  },
  {
    id: 3,
    title: "Cares Platform: PMS",
    subtitle: "Role: UI/UX Lead & Frontend",
    description:
      "Led the end-to-end product design for Ramon Aboitiz Foundation Inc. (RAFI) healthcare initiative. Translated complex business requirements into high-fidelity Figma prototypes and a fully functional React.js application, delivering 100% of the requested features for patient screening. ",
    tags: ["Figma", "React.js", "Tailwind CSS", "Enterprise UX"],
    image: "/cares-platform.png",
    github: "https://github.com/kntxx/cares_platform",
    live: "https://cares-platform.vercel.app/",
  },
];

interface Skill {
  name: string;
  icon: IconType;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Microsoft Azure", icon: SiMicrosoftazure },
      { name: "Terraform", icon: SiTerraform },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Git", icon: SiGit },
      { name: "Figma", icon: SiFigma },
      { name: "Python", icon: SiPython },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

interface Certification {
  name: string;
  issuer: string;
  code: string;
  date: string;
  link: string;
  icon: IconType;
}

export const certifications: Certification[] = [
  {
    name: "Introduction to Cloud Infrastructure: Describe cloud concepts",
    issuer: "Microsoft Learn",
    code: "Training Badges",
    date: "2025",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/KentGesoro-3563/YPPWAJTR?sharingId=7D6FF448BFCD88C6",
    icon: FaMicrosoft,
  },
  {
    name: "AWS Educate: Cloud 101 & Storage",
    issuer: "Amazon Web Services",
    code: "Training Badges",
    date: "2025",
    link: "https://www.credly.com/badges/0685c6fd-abb1-4635-8f5e-62cb83632ba8/public_url",
    icon: FaAws,
  },
  {
    name: "The Complete 2023 Web Development Bootcamp",
    issuer: "Udemy",
    code: "UC-a6ba646a-6123-43a4-b343-42f7776ab157",
    date: "2023",
    link: "https://www.udemy.com/certificate/UC-a6ba646a-6123-43a4-b343-42f7776ab157/",
    icon: SiUdemy,
  },
  {
    name: "Meta Front-End Developer (Coursework)",
    issuer: "Meta (Coursera)",
    code: "Completed 8 Module",
    date: "2023",
    link: "https://coursera.org/verify/ZM694U3CZ8Q3",
    icon: SiMeta,
  },
  {
    name: "Foundations of User Experience (UX) Design",
    issuer: "Google (Coursera)",
    code: "42QDP8VFNKFA",
    date: "2022",
    link: "https://coursera.org/verify/42QDP8VFNKFA",
    icon: SiGoogle,
  },
  {
    name: "Creative Web Design",
    issuer: "TESDA Call Center Academy",
    code: "CCA-CWD-000589",
    date: "2023",
    link: "#",
    icon: TbCertificate,
  },
];
