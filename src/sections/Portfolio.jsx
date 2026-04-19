import { portfolio } from "../data/portfolio";
import "./Portfolio.css";
import { motion } from "framer-motion";
import { useRef } from "react";

function Portfolio() {

    const handleMove = (e, ref) => {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -12;
        const rotateY = ((x / rect.width) - 0.5) * 12;

        ref.current.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

        // glow position
        ref.current.style.setProperty('--x', `${x}px`);
        ref.current.style.setProperty('--y', `${y}px`);
    };

    const handleLeave = (ref) => {
        ref.current.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
        <section className="portfolio" id="projects">
            <h2 className="heading">Projects</h2>

            <div className="grid">
                {portfolio.projects.map((project, index) => {
                    const cardRef = useRef();

                    return (
                        <motion.div
                            key={index}
                            ref={cardRef}
                            className="card"

                            onMouseMove={(e) => handleMove(e, cardRef)}
                            onMouseLeave={() => handleLeave(cardRef)}

                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <h3>{project.title}</h3>

                            <p className="desc">{project.description}</p>

                            <div className="tech">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tag">{t}</span>
                                ))}
                            </div>

                            <div className="links">
                                {typeof project.github === 'object' ? (
                                    <div className="github-links">
                                        <a href={project.github.frontend} target="_blank" rel="noreferrer">Frontend</a>
                                        <span className="divider">|</span>
                                        <a href={project.github.backend} target="_blank" rel="noreferrer">Backend</a>
                                    </div>
                                ) : (
                                    <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                                )}
                                <span>{project.live}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Portfolio;