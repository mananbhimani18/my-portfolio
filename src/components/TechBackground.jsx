import { useEffect, useRef } from 'react';
import './TechBackground.css';

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    let mouse = {
      x: null,
      y: null,
      radius: 120
    };
    let smoothX = 0;
    let smoothY = 0;
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      // Get the parent hero section dimensions or fallback to window
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // compute normalized values
      mouseX = (x / canvas.width - 0.5) * 2;
      mouseY = (y / canvas.height - 0.5) * 2;

      // particle interaction
      mouse.x = x;
      mouse.y = y;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Particle settings
    const particles = [];
    const particleCount = 60; // Increased count slightly
    const maxDistance = 180; // Distance to connect lines

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        const speed = Math.random() * 0.3 + 0.1;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.radius = Math.random() * 1.8 + 0.8; // Slightly larger nodes
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;

            this.x += dx * force * 0.01;
            this.y += dy * force * 0.01;
            this.vx *= 0.98;
            this.vy *= 0.98;
          }
        }

        // bounce
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(78, 161, 255, 0.75)'; // Brighter accent color
        ctx.shadowBlur = 10; // Subtle glow
        ctx.shadowColor = 'rgba(78, 161, 255, 0.6)';
        ctx.fill();
        // Reset shadow for lines to keep them clean
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Opacity decreases as distance increases, but overall higher visibility
            const opacity = (1 - distance / maxDistance) * 0.35;
            ctx.strokeStyle = `rgba(78, 161, 255, ${opacity})`;
            ctx.lineWidth = 1.2; // Slightly thicker lines
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🔥 PARALLAX SHIFT (Depth Effect)
      // ultra-smooth interpolation
      smoothX += (mouseX * 15 - smoothX) * 0.02;
      smoothY += (mouseY * 15 - smoothY) * 0.02;

      // Particles move faster (foreground)
      ctx.setTransform(1, 0, 0, 1, smoothX * 1.5, smoothY * 1.5);

      // Grid moves slower (background)
      const container = canvas.parentElement;
      if (container) {
        const grid = container.querySelector('.tech-grid');
        if (grid) {
          const gridX = smoothX * 0.4;
          const gridY = smoothY * 0.4;
          const scale = 1 + Math.abs(smoothX) * 0.001;
          grid.style.transform = `translate(${gridX}px, ${gridY}px) scale(${scale})`;
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      drawLines();

      // 🔥 RESET TRANSFORM
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="tech-background-container">
      <div className="tech-grid"></div>
      <canvas ref={canvasRef} className="tech-particles"></canvas>
    </div>
  );
};

export default TechBackground;
