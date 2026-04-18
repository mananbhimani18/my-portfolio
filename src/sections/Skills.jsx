import { portfolio } from "../data/portfolio";
import "./Skills.css";

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <h2 className="heading">Skills</h2>

            <div className="skills-grid">
                {portfolio.skills.map((group, index) => (
                    <div key={index} className="skill-card">
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
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
