"use client";

import { motion } from "framer-motion";
import { Code2, Target, Layers, ExternalLink } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const stats = [
  {
    icon: Code2,
    label: "Primary Platform",
    value: "LeetCode",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Target,
    label: "Focus",
    value: "Data Structures & Algorithms",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Layers,
    label: "Topics Practiced",
    value: "Arrays, Trees, Graphs, DP",
    gradient: "from-emerald-500/20 to-teal-500/20"
  }
];

const topics = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Recursion",
  "Binary Search"
];

export default function CodingPractice() {
  return (
    <section id="coding-practice" className="relative py-20 sm:py-28">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute right-1/3 bottom-1/3 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Problem Solving"
          title="Coding Practice & Growth"
          description="Sharpening problem-solving skills through consistent DSA practice, algorithmic thinking, and hands-on coding challenges."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Stats Cards */}
          <div className="grid gap-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 60px rgba(6, 182, 212, 0.15)"
                  }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                    initial={false}
                  />

                  <div className="relative z-10 flex items-center gap-4">
                    {/* Icon */}
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={28} className="text-foreground" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-lg font-black text-foreground sm:text-xl">
                        {stat.value}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner glow */}
                  <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${stat.gradient} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Philosophy */}
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I regularly practice data structures and algorithms to strengthen problem-solving skills, 
              improve coding efficiency, and develop strong logical thinking for real-world software engineering.
            </p>

            {/* Topic Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {topics.map((topic, index) => (
                <motion.span
                  key={topic}
                  className="inline-flex items-center rounded-full border border-cyan-400/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  {topic}
                </motion.span>
              ))}
            </div>

            {/* LeetCode Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                as="a"
                href="https://leetcode.com/u/PanthChauhan/"
                target="_blank"
                rel="noreferrer"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View LeetCode Profile
                  <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
                
                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                  initial={false}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
