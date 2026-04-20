import { portfolio } from "../data/portfolio";
import TechBackground from "../components/TechBackground";
import Portfolio from "../sections/portfolio";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
function Home() {
    const { hash } = useLocation();

    // Handle scroll to hash when navigating from another page
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <main className="home-page">
            {/* HERO */}
            <section className="hero">
                <TechBackground />
                <div className="container">
                    <h1>
                        Hi, I'm{" "}
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="hero-name"
                        >
                            {portfolio.name}
                        </motion.span>
                    </h1>
                    <h2>
                        <TypeAnimation
                            sequence={portfolio.roles.flatMap(role => [role, 2000])}
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    <p>{portfolio.about}</p>
                    <div className="buttons">
                        <a href="#projects" className="btn primary">View Projects</a>
                        <a href={portfolio.socials.github} className="btn outline" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <Portfolio />

            {/* SKILLS */}
            <Skills />

            {/* CONTACT CTA */}
            <Contact />
        </main>
    );
}

export default Home;
