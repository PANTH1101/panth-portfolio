"use client";

import { motion } from "framer-motion";
import { Award, Code2, TrendingUp } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/data/achievements";

const iconMap = {
  Award: Award,
  Code2: Code2,
  TrendingUp: TrendingUp,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & Growth"
          description="Highlighting academic excellence, technical projects, and continuous learning journey."
        />

        {achievements.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => {
              const Icon = iconMap[achievement.icon] || Award;
              
              return (
                <motion.article
                  key={achievement.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 60px rgba(139, 92, 246, 0.15), 0 0 40px rgba(139, 92, 246, 0.1)"
                  }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${achievement.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                    initial={false}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${achievement.accent} backdrop-blur-sm transition-transform duration-500 group-hover:scale-110`}>
                      <Icon size={28} className="text-foreground" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-foreground transition-colors duration-300 group-hover:text-primary">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${achievement.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className="glass-card mx-auto max-w-3xl rounded-2xl border border-white/10 bg-card/40 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-black text-foreground">Nothing listed yet</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Add certificates, hackathon results, awards, or academic highlights whenever you have them ready.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
