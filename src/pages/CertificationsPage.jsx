import { useEffect } from "react";
import { motion } from "framer-motion";
import Certifications from "../sections/Certifications";

function CertificationsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.main
            className="resume-page"  // 👈 IMPORTANT (reuse same layout feel)
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="resume-container">
                <Certifications />
            </div>
        </motion.main>
    );
}

export default CertificationsPage;