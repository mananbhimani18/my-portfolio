import { portfolio } from "../data/portfolio";
import "./Skills.css";
import { motion } from "framer-motion";
import { useRef } from "react";

function Skills() {

    const handleMove = (e, ref) => {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;

        ref.current.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

        ref.current.style.setProperty('--x', `${x}px`);
        ref.current.style.setProperty('--y', `${y}px`);
    };

    const handleLeave = (ref) => {
        ref.current.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
        <section className="skills-section" id="skills">
            <h2 className="heading">Skills</h2>

            <div className="skills-grid">
                {portfolio.skills.map((group, index) => {
                    const cardRef = useRef();

                    return (
                        <motion.div
                            key={index}
                            ref={cardRef}
                            className="skill-card"

                            onMouseMove={(e) => handleMove(e, cardRef)}
                            onMouseLeave={() => handleLeave(cardRef)}

                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3>{group.category}</h3>

                            <div className="skill-tags">
                                {group.items.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <span key={i} className="tag">
                                            <Icon className="skill-icon" />
                                            {item.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;