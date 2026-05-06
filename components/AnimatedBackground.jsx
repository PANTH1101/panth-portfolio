"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 7) * 0.35,
  duration: 7 + (index % 5),
}));

export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-layer" />
      <div className="absolute inset-0 noise-layer" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="particle"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            y: [-18, 18, -18],
            opacity: [0.18, 0.8, 0.18],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
