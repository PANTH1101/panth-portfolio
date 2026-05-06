"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CodeXml, Mail, Network, Send, Sparkle } from "lucide-react";
import { useState } from "react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 2800);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let us build the next useful thing."
          description="For internships, collaborations, and developer opportunities, send a note or connect directly."
        />

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.aside
            className="glass-card rounded-lg p-6 sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid h-14 w-14 place-items-center rounded-lg bg-foreground text-background">
              <Sparkle size={24} />
            </div>
            <h3 className="mt-6 text-3xl font-black text-foreground">Open to impact-focused teams.</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              I am especially interested in frontend engineering, product engineering, and teams that value clean systems with expressive interfaces.
            </p>
            <div className="mt-8 grid gap-3">
              <Button as="a" href={`mailto:${profile.email}`} variant="secondary">
                <Mail size={18} />
                {profile.email}
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button as="a" href={profile.github} target="_blank" rel="noreferrer" variant="secondary">
                  <CodeXml size={18} />
                  GitHub
                </Button>
                <Button as="a" href={profile.linkedin} target="_blank" rel="noreferrer" variant="secondary">
                  <Network size={18} />
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.aside>

          <motion.form
            className="glass-card rounded-lg p-6 sm:p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-foreground">
                Name
                <input
                  className="focus-ring h-12 rounded-lg border border-border bg-background/60 px-4 text-base text-foreground placeholder:text-muted-foreground"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-foreground">
                Email
                <input
                  className="focus-ring h-12 rounded-lg border border-border bg-background/60 px-4 text-base text-foreground placeholder:text-muted-foreground"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-foreground">
                Message
                <textarea
                  className="focus-ring min-h-36 resize-y rounded-lg border border-border bg-background/60 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground"
                  name="message"
                  placeholder="Tell me what you are building..."
                  required
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" size="lg">
                Send Message
                <Send size={18} />
              </Button>
              <AnimatePresence>
                {sent ? (
                  <motion.p
                    className="rounded-lg border border-primary/35 bg-primary/10 px-4 py-3 text-sm font-bold text-primary"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    Message queued. I will reply soon.
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
