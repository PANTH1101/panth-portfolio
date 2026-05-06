"use client";

import { motion } from "framer-motion";

export default function SkillBadge({ skill, index }) {
  return (
    <motion.span
      className="inline-flex items-center rounded-full border border-cyan-400/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {skill}
    </motion.span>
  );
}
