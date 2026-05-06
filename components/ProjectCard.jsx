"use client";

import { motion } from "framer-motion";
import { CodeXml, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        scale: 1.02,
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Card content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Project Image or Placeholder */}
        {project.image ? (
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-30 transition-opacity duration-300 group-hover:opacity-20`} />
          </div>
        ) : (
          <div className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br ${project.accent}`}>
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)",
                backgroundSize: "40px 40px",
              }}
            />
            <Code2 size={80} className="relative z-10 text-white/40" strokeWidth={1.5} />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-2xl font-black text-foreground transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
          
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                className="rounded-lg border border-border/50 bg-muted/50 px-3 py-1.5 text-xs font-bold text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.live && (
              <Button 
                as="a" 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                size="sm"
                className="flex-1 sm:flex-none"
              >
                <ExternalLink size={16} />
                Live Demo
              </Button>
            )}
            <Button 
              as="a" 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              variant={project.live ? "secondary" : "default"}
              size="sm"
              className="flex-1 sm:flex-none"
            >
              <CodeXml size={16} />
              {project.live ? "GitHub" : "View Code"}
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
