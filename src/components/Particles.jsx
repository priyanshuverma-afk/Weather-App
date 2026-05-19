import React, { useMemo } from "react";

export default function Particles({ theme }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${(i * 5.5 + Math.sin(i) * 12) % 100}%`,
        top: `${(i * 4.7 + Math.cos(i) * 15) % 85}%`,
        delay: `${(i * 0.4) % 5}s`,
        duration: `${3 + (i % 4)}s`,
        size: `${11 + (i % 3) * 5}px`,
        opacity: 0.15 + (i % 4) * 0.07,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-bounce select-none"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
            opacity: p.opacity,
            color: theme.accent,
          }}
        >
          {theme.particle}
        </div>
      ))}
    </div>
  );
}
