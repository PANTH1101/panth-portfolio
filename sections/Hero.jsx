"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import ProfileImage from "@/components/ProfileImage";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <Container className="grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-16 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-bold text-muted-foreground backdrop-blur-xl">
            <Sparkles size={16} className="text-primary" />
            Available for internships and developer roles
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.96] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            {profile.name}
          </h1>

          <p className="mt-6 text-lg font-bold text-primary sm:text-xl">{profile.role.split(" | ")[0]}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#projects" size="lg">
              View Projects
              <ArrowUpRight size={19} />
            </Button>
            <Button as="a" href={profile.resume} download variant="secondary" size="lg">
              Download Resume
              <Download size={19} />
            </Button>
          </div>

          <div className="mt-10 hidden max-w-xl grid-cols-3 gap-3 sm:grid">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border bg-card p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-foreground sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative z-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <ProfileImage />
        </motion.div>
      </Container>
    </section>
  );
}
