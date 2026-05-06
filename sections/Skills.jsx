"use client";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I build with."
          description="A growing stack focused on modern web development, computer science fundamentals, and practical software engineering."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.category} group={group} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
