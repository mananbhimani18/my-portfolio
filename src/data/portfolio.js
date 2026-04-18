import { FaRobot, FaCogs, FaJava, FaPython, FaNodeJs, FaPhp, FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiPostgresql } from "react-icons/si";

export const portfolio = {
    name: "Manan Bhimani",
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
                "Full-stack employee appraisal system with authentication, OTP verification, dashboard, and activity tracking.",
            tech: ["React", "Node.js", "MongoDB"],

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
    ]
};