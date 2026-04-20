import { useRef } from "react";

function Magnet({ children, strength = 40, padding = 60 }) {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / centerX * strength;
        const moveY = (y - centerY) / centerY * strength;

        ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
        ref.current.style.transform = `translate(0px, 0px)`;
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                display: "inline-block",
                transition: "transform 0.2s ease"
            }}
        >
            {children}
        </div>
    );
}

export default Magnet;