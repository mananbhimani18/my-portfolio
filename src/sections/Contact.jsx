import { portfolio } from "../data/portfolio";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
    return (
        <section className="contact-section" id="contact">

            <motion.div
                className="contact-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.2 }
                    }
                }}
            >

                {/* 🔥 Heading (Mask Reveal) */}
                <motion.h2
                    className="contact-heading"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Let's build something impactful together
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="contact-desc"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    Whether you have a question, an opportunity, or just want to connect, my inbox is always open. Let's create scalable, intelligent solutions.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="contact-actions"
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                >
                    <a href={`mailto:${portfolio.email}`} className="btn primary btn-large">
                        Get in Touch
                    </a>

                    <a
                        href={portfolio.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="btn outline btn-large linkedin-btn"
                    >
                        <FaLinkedin className="contact-icon" /> LinkedIn
                    </a>
                </motion.div>

            </motion.div>
        </section>
    );
}

export default Contact;