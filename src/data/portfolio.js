import { FaRobot, FaCogs, FaJava, FaPython, FaNodeJs, FaPhp, FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiPostgresql } from "react-icons/si";

export const portfolio = {
    name: "Manan Bhimani",

    roles: [
        "RPA Developer",
        "Full Stack Developer",
        "Automation Engineer"
    ],

    role: "RPA Developer & Full Stack Developer",

    about:
        "I develop intelligent automation solutions using RPA technologies to enhance operational efficiency and streamline business processes. In parallel, I actively pursue web development, building scalable and modern applications using contemporary technologies.",

    email: "mananbhimani24@gmail.com",

    socials: {
        github: "https://github.com/mananbhimani18/",
        linkedin: "https://www.linkedin.com/in/mananbhimani18/"
    },

    projects: [
        {
            title: "Appraisal System",
            description:
                "Built an automated employee appraisal system combining RPA workflows with a React–Node.js stack, enabling secure authentication, OTP verification, real-time dashboards, and process-driven activity tracking.",
            tech: ["RPA", "React.js", "Node.js"],

            github: {
                frontend: "https://github.com/mananbhimani18/manan-appraisal-frontend",
                backend: "https://github.com/mananbhimani18/manan-appraisal-backend"
            },

            live: "Coming Soon"
        },
        {
            title: "Rock Paper Scissors",
            description:
                "Interactive game with score tracking and database integration for persistent statistics.",
            tech: ["PHP", "MySQL"],
            github: "https://github.com/mananbhimani18/Rps_Game",
            live: "Coming Soon"
        }
    ],

    skills: [
        {
            category: "Automation & RPA",
            items: [
                { name: "Automation Anywhere", icon: FaRobot },
                { name: "Process Automation", icon: FaCogs }
            ]
        },
        {
            category: "Programming Languages",
            items: [
                { name: "Java", icon: FaJava },
                { name: "Python", icon: FaPython },
                { name: "JavaScript", icon: SiJavascript }
            ]
        },
        {
            category: "Frontend",
            items: [
                { name: "HTML", icon: FaHtml5 },
                { name: "CSS", icon: FaCss3Alt },
                { name: "React.js", icon: FaReact }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", icon: FaNodeJs },
                { name: "PHP", icon: FaPhp }
            ]
        },
        {
            category: "Databases",
            items: [
                { name: "MongoDB", icon: SiMongodb },
                { name: "PostgreSQL", icon: SiPostgresql }
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "GitHub", icon: FaGithub }
            ]
        }
    ],

    experience: [
        {
            role: "RPA Intern",
            company: "Tecnoprism Pvt Ltd",
            duration: "Dec 2025 – Apr 2026",
            description:
                "Developed RPA workflows using Automation Anywhere and worked on document automation for data processing. Built basic automation flows using Microsoft Power Automate and assisted in streamlining business processes to improve operational efficiency."
        }
    ],

    education: [
        {
            degree: "Master of Computer Application (MCA)",
            institution: "Institute of Science & Technology for Advanced Studies and Research",
            duration: "2024 – 2026",
            location: "Anand"
        },
        {
            degree: "Bachelor of Computer Application (BCA)",
            institution: "Vivekanand College",
            duration: "2021 – 2024",
            location: "Surat"
        }
    ],

    certifications: [
        {
            title: "Aisera GPT Basic Certification",
            issuer: "Aisera",
            date: "Apr 2026",
            image: "/assets/certificates/aisera.png",
            link: "https://certificates.automationanywhere.com/embed/fe3d8eb6-78e2-4ae5-92ca-295ced38465f"
        },
        {
            title: "Automation Anywhere Certified Essentials",
            issuer: "Automation Anywhere",
            date: "Dec 2025",
            image: "/assets/certificates/automation-essential.png",
            link: "https://certificates.automationanywhere.com/embed/e5c53eae-a59d-4d6d-8bdc-0dc9cd4eeeb1"

        },
        {
            title: "Citizen Developer Career Quest - Start Phase",
            issuer: "Automation Anywhere",
            date: "Dec 2025",
            image: "/assets/certificates/citizen-dev.png",
            link: "https://certificates.automationanywhere.com/embed/99edb2c0-658b-4579-820a-4841baf48f39"

        },
        {
            title: "Automation Developer Career Quest - Accelerate Phase",
            issuer: "Automation Anywhere",
            date: "Dec 2025",
            image: "/assets/certificates/automation-dev.png",
            link: "https://certificates.automationanywhere.com/embed/0bd8357b-38ef-4da9-b8dd-8d66dccaa833"
        }
    ]
};