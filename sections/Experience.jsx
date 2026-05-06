"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Student today, developer in progress."
          description="Your current experience is focused on building strong fundamentals and preparing for software development internships."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {profile.experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              className="glass-card rounded-lg p-6 sm:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-foreground text-background">
                <BriefcaseBusiness size={21} />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-foreground">{item.role}</h3>
                  <p className="mt-1 font-bold text-primary">{item.company}</p>
                </div>
                <span className="w-fit rounded-lg border border-border bg-muted px-3 py-1 font-mono text-xs font-bold text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground sm:text-base">{item.details}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border bg-muted px-3 py-1 text-xs font-bold text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
