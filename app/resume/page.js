import { CodeXml, Download, Mail, Network } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { achievements } from "@/data/achievements";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export const metadata = {
  title: "Resume",
  description: "Styled HTML resume for Panth Chauhan.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-32">
      <Container className="pb-20">
        <section className="glass-card rounded-lg p-6 sm:p-10">
          <div className="flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase text-primary">Resume</p>
              <h1 className="mt-3 text-5xl font-black leading-none text-foreground sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-xl font-bold text-primary">{profile.role}</p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                {profile.headline}
              </p>
            </div>
            <Button as="a" href={profile.resume} download size="lg">
              Download PDF
              <Download size={18} />
            </Button>
          </div>

          <div className="grid gap-8 border-b border-border py-8 lg:grid-cols-3">
            <a className="flex items-center gap-3 font-bold text-muted-foreground" href={`mailto:${profile.email}`}>
              <Mail size={18} className="text-primary" />
              {profile.email}
            </a>
            <a className="flex items-center gap-3 font-bold text-muted-foreground" href={profile.github}>
              <CodeXml size={18} className="text-primary" />
              GitHub
            </a>
            <a className="flex items-center gap-3 font-bold text-muted-foreground" href={profile.linkedin}>
              <Network size={18} className="text-primary" />
              LinkedIn
            </a>
          </div>

          <div className="grid gap-10 py-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="grid content-start gap-8">
              <ResumeBlock title="Skills">
                <div className="grid gap-5">
                  {skillGroups.map((group) => (
                    <div key={group.category}>
                      <h3 className="font-black text-foreground">{group.category}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {group.skills.map((skill) => skill.name).join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeBlock>

              <ResumeBlock title="Achievements">
                {achievements.length > 0 ? (
                  <div className="grid gap-4">
                    {achievements.slice(0, 3).map((achievement) => (
                      <div key={achievement.title}>
                        <p className="font-bold text-foreground">{achievement.title}</p>
                        <p className="mt-1 font-mono text-xs font-bold text-primary">{achievement.period}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm leading-6 text-muted-foreground">
                    Certifications, hackathons, and awards can be added here.
                  </p>
                )}
              </ResumeBlock>
            </aside>

            <div className="grid gap-8">
              <ResumeBlock title="Experience">
                <div className="grid gap-6">
                  {profile.experience.map((item) => (
                    <ResumeItem
                      key={`${item.role}-${item.company}`}
                      title={item.role}
                      subtitle={item.company}
                      meta={item.period}
                      body={item.details}
                    />
                  ))}
                </div>
              </ResumeBlock>

              <ResumeBlock title="Selected Projects">
                {projects.length > 0 ? (
                  <div className="grid gap-6">
                    {projects.map((project) => (
                      <ResumeItem
                        key={project.title}
                        title={project.title}
                        subtitle={project.tech.join(" / ")}
                        body={project.description}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm leading-6 text-muted-foreground">
                    Project details will be added once available.
                  </p>
                )}
              </ResumeBlock>

              <ResumeBlock title="Education">
                <div className="grid gap-6">
                  {profile.education.map((item) => (
                    <ResumeItem
                      key={item.school}
                      title={item.school}
                      subtitle={item.degree}
                      meta={`${item.years} | ${item.grade}`}
                      body={item.details}
                    />
                  ))}
                </div>
              </ResumeBlock>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

function ResumeBlock({ title, children }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-black text-foreground">{title}</h2>
      {children}
    </section>
  );
}

function ResumeItem({ title, subtitle, meta, body }) {
  return (
    <article className="border-l border-border pl-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-black text-foreground">{title}</h3>
          {subtitle ? <p className="mt-1 font-bold text-primary">{subtitle}</p> : null}
        </div>
        {meta ? (
          <span className="w-fit rounded-lg border border-border bg-muted px-3 py-1 font-mono text-xs font-bold text-muted-foreground">
            {meta}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">{body}</p>
    </article>
  );
}
