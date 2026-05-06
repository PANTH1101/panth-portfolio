"use client";

import { motion } from "framer-motion";
import { GraduationCap, Rocket, Target } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Computer engineering foundation with strong coursework in systems, databases, networks, and software design.",
  },
  {
    icon: Rocket,
    title: "Interests",
    text: "Problem-solving, data structures and algorithms, software design, real-world projects, and exploring new technologies.",
  },
  {
    icon: Target,
    title: "Goal",
    text: "Secure a software development internship, gain practical experience, and grow into a well-rounded developer who can work on scalable systems.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Built for curiosity, shipped with care."
          description="A concise snapshot of how I think, learn, and build."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="glass-card rounded-lg p-6 sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xl font-bold leading-9 text-foreground sm:text-2xl">{profile.about}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-lg border border-border bg-muted px-3 py-2 text-sm font-bold text-muted-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="glass-card rounded-lg p-6"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-foreground text-background">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-black text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
