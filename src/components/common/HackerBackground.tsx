import { useEffect, useRef } from "react";

export default function HackerBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const chars =
      "01ABCDEF0xFF{}[]<>/*=+-#$@!&|;:?_~^%HACKARUNSECURITYCYBERPENTESTROOTSUDONULLVOIDPTRBYTEHEX".split(
        ""
      );

    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = Array(columns).fill(1);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    };
    window.addEventListener("resize", resize);

    let animationId: number;
    const draw = () => {
      // Black fade for trailing effect — slightly stronger so trails are clean
      ctx.fillStyle = "rgba(6, 6, 6, 0.06)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${fontSize}px "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Lead character is bright white-blue
        if (Math.random() > 0.97) {
          ctx.fillStyle = "rgba(147, 197, 253, 1)";
          ctx.shadowColor = "rgba(96, 165, 250, 1)";
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = "rgba(59, 130, 246, 0.9)";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Matrix rain canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 1,
        }}
      />

      {/* Cyber grid overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle radial glow accents */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          background: `
            radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.22), transparent 45%),
            radial-gradient(circle at 80% 70%, rgba(29, 78, 216, 0.18), transparent 45%)
          `,
        }}
      />
    </>
  );
}
