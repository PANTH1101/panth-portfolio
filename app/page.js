import About from "@/sections/About";
import CodingPractice from "@/sections/CodingPractice";
import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <CodingPractice />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
