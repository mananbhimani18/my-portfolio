import { portfolio } from "../data/portfolio";
import "./certifications.css";
import { useState } from "react";

function Certifications() {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <section className="cert-section" id="certifications">
            <h2 className="heading">Certifications</h2>

            <div className="cert-grid">
                {portfolio.certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="cert-card"
                        onClick={() => setSelectedImage(cert.image)}
                    >

                        <div className="cert-image">
                            <img src={cert.image} alt={cert.title} />
                        </div>

                        <div className="cert-content">
                            <h3>{cert.title}</h3>
                            <p className="cert-date">{cert.date}</p>
                            <p className="cert-issuer">{cert.issuer}</p>

                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cert-link"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View Certificate
                                </a>
                            )}
                        </div>

                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="cert-modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Certificate" />
                </div>
            )}
        </section>
    );
}

export default Certifications;