import { useRef, useEffect } from "react";
import { Renderer, Program, Triangle, Mesh } from "ogl";
import "./LightRays.css";

function LightRays({ className = "" }) {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // 🔥 Create renderer
        const renderer = new Renderer({ alpha: true });
        const gl = renderer.gl;

        // ✅ FIX 1: Transparent background
        gl.clearColor(0, 0, 0, 0);

        // ✅ FIX 2: Make canvas behave like background
        gl.canvas.style.position = "absolute";
        gl.canvas.style.top = "0";
        gl.canvas.style.left = "0";
        gl.canvas.style.width = "100%";
        gl.canvas.style.height = "100%";
        gl.canvas.style.zIndex = "0";

        containerRef.current.appendChild(gl.canvas);

        // 🔥 Shader program (VISIBLE + SMOOTH)
        const program = new Program(gl, {
            vertex: `
                attribute vec2 position;
                void main() {
                    gl_Position = vec4(position, 0.0, 1.0);
                }
            `,
            fragment: `
precision highp float;

uniform float iTime;
uniform vec2 iResolution;

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    vec2 center = vec2(0.5, 0.3);
    vec2 pos = uv - center;

    float angle = atan(pos.y, pos.x);

    // VERY LOW frequency (key change)
    float rays = sin(angle * 3.0 + iTime * 0.3);

    // super smooth
    float intensity = smoothstep(0.4, 1.0, rays);

    // strong radial fade (kills harsh center)
    float dist = length(pos);
    float fade = smoothstep(0.9, 0.2, dist);

    float finalLight = intensity * fade;

    // softer color
    vec3 color = vec3(0.2, 0.5, 0.9) * finalLight;

    // MUCH lower opacity
    gl_FragColor = vec4(color, 0.12);
}
`,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: [1, 1] }
            }
        });

        const mesh = new Mesh(gl, {
            geometry: new Triangle(gl),
            program
        });

        // 🔥 Resize handler (IMPORTANT)
        const resize = () => {
            if (!containerRef.current) return;

            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;

            renderer.setSize(width, height);
            program.uniforms.iResolution.value = [width, height];
        };

        resize();
        window.addEventListener("resize", resize);

        // 🔥 Animation loop
        const loop = (t) => {
            program.uniforms.iTime.value = t * 0.001;
            renderer.render({ scene: mesh });
            animationRef.current = requestAnimationFrame(loop);
        };

        animationRef.current = requestAnimationFrame(loop);

        // 🔥 Cleanup
        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener("resize", resize);

            if (gl.canvas && gl.canvas.parentNode) {
                gl.canvas.parentNode.removeChild(gl.canvas);
            }
        };
    }, []);

    return <div ref={containerRef} className={`light-rays-container ${className}`} />;
}

export default LightRays;