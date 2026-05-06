"use client";

import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Explore my latest work showcasing full-stack development, modern UI/UX, and innovative solutions."
        />

        {projects.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="glass-card mx-auto max-w-3xl rounded-2xl border border-white/10 bg-card/40 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-black text-foreground">No projects added yet</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Share your project details to showcase your work here.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
