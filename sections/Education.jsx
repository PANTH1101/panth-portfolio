"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic roots, practical momentum."
          description="Formal learning supported by hands-on builds and repeated iteration."
        />

        <div className="mx-auto grid max-w-5xl gap-5">
          {profile.education.map((item, index) => {
            // Check if this is the school entry with multiple grades
            const hasMultipleGrades = item.grade.includes("|");
            const grades = hasMultipleGrades ? item.grade.split("|").map(g => g.trim()) : [item.grade];
            const isSchool = item.degree.includes("SSC") || item.degree.includes("HSC");

            return (
              <motion.article
                key={item.school}
                className="glass-card grid gap-5 rounded-lg p-6 sm:grid-cols-[auto_1fr_auto] sm:items-start"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-foreground text-background">
                  {isSchool ? <GraduationCap size={21} /> : <BookOpen size={21} />}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground">{item.school}</h3>
                  <p className="mt-1 font-bold text-primary">{item.degree}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">{item.details}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:grid sm:justify-items-end">
                  <span className="rounded-lg border border-border bg-muted px-3 py-1 font-mono text-xs font-bold text-muted-foreground">
                    {item.years}
                  </span>
                  {grades.map((grade, i) => (
                    <span 
                      key={i}
                      className="rounded-lg border border-primary/35 bg-primary/10 px-3 py-1 font-mono text-xs font-bold text-primary"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
