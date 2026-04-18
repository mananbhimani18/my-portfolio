import { portfolio } from "../data/portfolio";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h2 className="contact-heading">Let's build something impactful together</h2>
                <p className="contact-desc">
                    Whether you have a question, an opportunity, or just want to connect, my inbox is always open. Let's create scalable, intelligent solutions.
                </p>
                <div className="contact-actions">
                    <a href={`mailto:${portfolio.email}`} className="btn primary btn-large">
                        Get in Touch
                    </a>
                    <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="btn outline btn-large linkedin-btn">
                        <FaLinkedin className="contact-icon" /> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
