import { portfolio } from "../data/portfolio";
import "./Resume.css";
import Portfolio from "../sections/Portfolio";
import Skills from "../sections/Skills";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Resume() {
    const pdfRef = useRef();
    const [isGenerating, setIsGenerating] = useState(false);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDownloadPdf = async () => {
        setIsGenerating(true);
        const element = pdfRef.current;
        if (!element) {
            setIsGenerating(false);
            return;
        }

        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff",
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("Manan_Bhimani_Resume.pdf");
        } catch (error) {
            console.error("Failed to generate PDF", error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <main className="resume-page">
            <div className="resume-container">

                {/* Header */}
                <header className="resume-header">
                    <div className="header-info">
                        <h1>{portfolio.name}</h1>
                        <h2>{portfolio.role}</h2>
                    </div>
                    <div className="header-actions">
                        <button onClick={handleDownloadPdf} disabled={isGenerating} className="btn primary">
                            {isGenerating ? "Generating..." : "Download Resume (PDF)"}
                        </button>
                        <Link to="/" className="btn outline">Back to Portfolio</Link>
                    </div>
                </header>

                {/* Summary */}
                <section className="resume-section">
                    <h3 className="section-title">Summary</h3>
                    <p className="resume-summary">{portfolio.about}</p>
                </section>

                {/* Experience */}
                <section className="resume-section">
                    <h3 className="section-title">Experience</h3>
                    <div className="timeline">
                        {portfolio.experience.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h4 className="role">{exp.role}</h4>
                                        <span className="duration">{exp.duration}</span>
                                    </div>
                                    <h5 className="company">{exp.company}</h5>
                                    <p className="description">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="resume-section">
                    <h3 className="section-title">Education</h3>
                    <div className="timeline">
                        {portfolio.education.map((edu, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h4 className="degree">{edu.degree}</h4>
                                        <span className="duration">{edu.duration}</span>
                                    </div>
                                    <h5 className="institution">{edu.institution} | {edu.location}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Embedded components overriding layout padding */}
            <div className="resume-embedded">
                <Skills />
                <Portfolio />
            </div>

            {/* Hidden PDF Layout */}
            <div className="pdf-layout-wrapper">
                <div id="resume-pdf" className="pdf-content" ref={pdfRef}>
                    <div className="pdf-header">
                        <h1>{portfolio.name}</h1>
                        <h2>{portfolio.role}</h2>
                        <div className="pdf-contact">
                            <span>{portfolio.email}</span>
                            <span>•</span>
                            <span>{portfolio.socials.linkedin.replace('https://www.', '')}</span>
                            <span>•</span>
                            <span>{portfolio.socials.github.replace('https://', '')}</span>
                        </div>
                    </div>

                    <div className="pdf-section">
                        <h3>Professional Summary</h3>
                        <div className="pdf-divider"></div>
                        <p>{portfolio.about}</p>
                    </div>

                    <div className="pdf-section">
                        <h3>Experience</h3>
                        <div className="pdf-divider"></div>
                        {portfolio.experience.map((exp, idx) => (
                            <div key={idx} className="pdf-item">
                                <div className="pdf-item-header">
                                    <span className="pdf-role">{exp.role}</span>
                                    <span className="pdf-duration">{exp.duration}</span>
                                </div>
                                <div className="pdf-company">{exp.company}</div>
                                <p className="pdf-description">{exp.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="pdf-section">
                        <h3>Education</h3>
                        <div className="pdf-divider"></div>
                        {portfolio.education.map((edu, idx) => (
                            <div key={idx} className="pdf-item">
                                <div className="pdf-item-header">
                                    <span className="pdf-degree">{edu.degree}</span>
                                    <span className="pdf-duration">{edu.duration}</span>
                                </div>
                                <div className="pdf-institution">{edu.institution} | {edu.location}</div>
                            </div>
                        ))}
                    </div>

                    <div className="pdf-section">
                        <h3>Skills</h3>
                        <div className="pdf-divider"></div>
                        <div className="pdf-skills">
                            {portfolio.skills.map((skillGroup, idx) => (
                                <div key={idx} className="pdf-skill-group">
                                    <span className="pdf-skill-category">{skillGroup.category}:</span>
                                    <span className="pdf-skill-list">
                                        {skillGroup.items.map(i => i.name).join(", ")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pdf-section">
                        <h3>Projects</h3>
                        <div className="pdf-divider"></div>
                        {portfolio.projects.map((proj, idx) => (
                            <div key={idx} className="pdf-item">
                                <div className="pdf-item-header">
                                    <span className="pdf-role">{proj.title}</span>
                                </div>
                                <p className="pdf-description">{proj.description}</p>
                                <div className="pdf-tech">
                                    <strong>Tech Stack:</strong> {proj.tech.join(", ")}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Resume;