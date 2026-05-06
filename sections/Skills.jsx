"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A stack shaped for shipping."
          description="Core tools I use to build responsive interfaces, API-backed apps, and polished developer experiences."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.category}
              className="glass-card rounded-lg p-5 sm:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: groupIndex * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <h3 className="text-2xl font-black text-foreground">{group.category}</h3>
              <div className="mt-6 grid gap-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-lg bg-muted">
                      <motion.div
                        className="h-full rounded-lg bg-gradient-to-r from-teal-300 via-rose-300 to-lime-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
