"use client";

import { motion } from "framer-motion";
import { Code2, Globe, BrainCircuit, Wrench } from "lucide-react";
import SkillBadge from "./SkillBadge";

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  BrainCircuit: BrainCircuit,
  Wrench: Wrench,
};

export default function SkillCard({ group, index }) {
  const Icon = iconMap[group.icon] || Code2;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-white/20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 70px rgba(6, 182, 212, 0.15), 0 0 50px rgba(6, 182, 212, 0.1)"
      }}
    >
      {/* Background glow effect */}
      <motion.div
        className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${group.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
        initial={false}
      />

      {/* Floating animation */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        {/* Icon */}
        <div className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${group.gradient} backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <Icon size={32} className="text-foreground" strokeWidth={2} />
        </div>

        {/* Category Title */}
        <h3 className="mb-6 text-xl font-black text-foreground transition-colors duration-300 group-hover:text-cyan-400">
          {group.category}
        </h3>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, i) => (
            <SkillBadge key={skill} skill={skill} index={i} />
          ))}
        </div>
      </motion.div>

      {/* Decorative corner glow */}
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${group.gradient} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`} />
    </motion.article>
  );
}
