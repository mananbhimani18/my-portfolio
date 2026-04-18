import { portfolio } from "../data/portfolio";
import "./portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio" id="projects">
            <h2 className="heading">Projects</h2>

            <div className="grid">
                {portfolio.projects.map((project, index) => (
                    <div key={index} className="card">
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
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;