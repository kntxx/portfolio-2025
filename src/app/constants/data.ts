import {
  SiMicrosoftazure,
  SiTerraform,
  SiGithubactions,
  SiLinux,
  SiPowershell,
  SiUdemy,
  SiMeta,
  SiGoogle,
  SiDocker,
} from "react-icons/si";
import {
  FaAws,
  FaMicrosoft,
  FaLock,
  FaChartLine,
  FaDatabase,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaGlobe,
  FaTerminal,
  FaWindows,
  FaRoute,
  FaBolt,
  FaUserShield,
  FaUsersCog,
  FaBalanceScale,
  FaArchive,
  FaKey,
  FaExchangeAlt,
  FaCode,
  FaBoxOpen,
} from "react-icons/fa";
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
    title: "Secure Enterprise Infrastructure on Azure",
    subtitle: "Multi-Environment IaaS Platform",
    description: "Architected a secure, multi-environment (Dev/Staging/Prod) Azure infrastructure platform using Terraform, with zero-public-IP networking via Azure Bastion and NAT Gateway. Automated deployment through a GitHub Actions CI/CD pipeline with OIDC federated authentication and a manual approval gate on Production, backed by Azure Monitor and KQL-based alerting.",
    tags: [
      "Terraform",
      "Azure Bastion",
      "NAT Gateway",
      "GitHub Actions",
      "Azure Monitor",
    ],
    image: "/enterprise-Architecture.png",
    github: "https://github.com/kntxx/project-IaC-enterprise",
    live: ""
  },
  {
    id: 2,
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
    id: 3,
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
    title: "Infrastructure as Code & DevOps",
    skills: [
      { name: "Terraform (IaC)", icon: SiTerraform },
      { name: "Bicep", icon: FaCode },
      { name: "GitHub Actions (CI/CD)", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Azure Container Registry", icon: FaBoxOpen },
      { name: "Azure CLI", icon: FaTerminal },
      { name: "PowerShell", icon: SiPowershell },
    ],
  },
  {
    title: "Azure Core Services",
    skills: [
      { name: "Microsoft Azure", icon: SiMicrosoftazure },
      { name: "Virtual Machines", icon: FaServer },
      { name: "App Service", icon: FaServer },
      { name: "Azure Functions", icon: FaBolt },
      { name: "Cosmos DB", icon: FaDatabase },
      { name: "Storage Account", icon: FaDatabase },
      { name: "Virtual Networks", icon: FaNetworkWired },
      { name: "DNS", icon: FaGlobe },
      { name: "NAT Gateway", icon: FaExchangeAlt },
      { name: "Azure Monitor", icon: FaChartLine },
    ],
  },
  {
    title: "Security, Identity & Governance",
    skills: [
      { name: "Microsoft Entra ID (IAM)", icon: FaUserShield },
      { name: "RBAC", icon: FaUsersCog },
      { name: "Azure Policy", icon: FaBalanceScale },
      { name: "Key Vault", icon: FaLock },
      { name: "NSGs", icon: FaShieldAlt },
      { name: "Azure Bastion", icon: FaKey },
      { name: "Recovery Services Vault (Backup)", icon: FaArchive },
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
    name: "Azure Administrator Associate (AZ-104)",
    issuer: "Microsoft Learn / Udemy • Course in Progress",
    code: "Target Exam: July 2026",
    date: "2026",
    link: "#",
    icon: SiMicrosoftazure,
  },
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
