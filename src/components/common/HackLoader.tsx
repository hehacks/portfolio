import { useEffect, useRef, useState } from "react";

const LINES = [
  "> Initializing breach protocol...",
  "> Scanning target: YOUR-DEVICE",
  "> Bypassing firewall... [OK]",
  "> Exploiting vulnerability... [OK]",
  "> Accessing system files...",
  "> WARNING: Intrusion detected!",
  "> Counter-attack initiated by ARUN S",
  "> Access revoked. System secured.",
  "> Welcome to Arun's Portfolio",
];

type Props = {
  onComplete?: () => void;
};

export default function HackLoader({ onComplete }: Props) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const termRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < LINES.length) {
        setLines((prev) => [...prev, LINES[i]]);
        setProgress(Math.round(((i + 1) / LINES.length) * 100));
        // Glitch on the warning line
        if (LINES[i].includes("WARNING")) {
          setGlitch(true);
          setTimeout(() => setGlitch(false), 400);
        }
        i++;
        // Auto-scroll terminal
        setTimeout(() => {
          if (termRef.current) {
            termRef.current.scrollTop = termRef.current.scrollHeight;
          }
        }, 10);
      } else {
        clearInterval(interval);
        // Call onComplete when animation finishes
        if (onComplete) {
          setTimeout(onComplete, 300); // Quick transition
        }
      }
    }, 120); // Faster typing speed
    return () => clearInterval(interval);
  }, [onComplete]);

  const getLineClass = (line: string) => {
    if (!line) return "hack-default";
    if (line.includes("[OK]")) return "hack-ok";
    if (line.includes("WARNING") || line.includes("Intrusion")) return "hack-warn";
    if (line.includes("Welcome") || line.includes("secured")) return "hack-grant";
    if (line.includes("Counter-attack") || line.includes("revoked")) return "hack-red";
    return "hack-default";
  };

  return (
    <div className={`hack-loader ${glitch ? "hack-glitch" : ""}`}>
      {/* Scanlines */}
      <div className="hack-scanlines" />

      {/* Top bar */}
      <div className="hack-topbar">
        <span className="hack-dots">
          <i /><i /><i />
        </span>
        <span className="hack-title">⚠️ SECURITY BREACH DETECTED</span>
        <span className="hack-status">
          <span className="hack-blink" />
          LIVE
        </span>
      </div>

      {/* Terminal output */}
      <div className="hack-terminal" ref={termRef}>
        {lines.filter(line => line).map((line, i) => (
          <div key={i} className={`hack-line ${getLineClass(line)}`}>
            <span className="hack-prompt">root@attacker:~$</span>
            <span className="hack-text">{line}</span>
          </div>
        ))}
        <div className="hack-cursor-line">
          <span className="hack-prompt">root@attacker:~$</span>
          <span className="hack-cursor-blink">█</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="hack-progress-wrap">
        <div className="hack-progress-labels">
          <span>BREACH PROGRESS</span>
          <span className={progress === 100 ? "hack-grant" : ""}>{progress}%</span>
        </div>
        <div className="hack-progress-track">
          <div
            className="hack-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="hack-footer">
        <span>TARGET: YOUR-DEVICE</span>
        <span>THREAT LEVEL: HIGH</span>
        <span>DEFENDER: ARUN S</span>
        <span>STATUS: {progress < 100 ? "HACKING..." : "SECURED"}</span>
      </div>
    </div>
  );
}
