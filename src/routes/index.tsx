import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Code2,
  Cpu,
  FileText,
  GitBranch,
  Github,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Terminal,
  X,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import heroGlow from "@/assets/hero-glow.jpg";
import mridulPhoto from "@/assets/mridul-mishra.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mridul Mishra — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Mridul Mishra, a BTech 2nd-year student at Lovely Professional University. Exploring engineering, building skills, and open to opportunities.",
      },
      { property: "og:title", content: "Mridul Mishra — Portfolio" },
      {
        property: "og:description",
        content:
          "BTech 2nd-year student at Lovely Professional University. Exploring engineering, building skills, and open to opportunities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="font-heading text-lg font-bold tracking-tight">
            Mridul<span className="text-primary">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#contact">Get in touch</a>
            </Button>
          </nav>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-b border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild size="sm" className="w-full">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get in touch
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <img
          src={heroGlow}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <img
                src={mridulPhoto.url}
                alt="Mridul Mishra"
                className="h-32 w-32 rounded-full border-4 border-border object-cover shadow-xl sm:h-40 sm:w-40"
                width={160}
                height={160}
              />
              <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-background bg-primary" />
            </div>
          </div>

          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open to internships & opportunities
          </p>

          <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Mridul Mishra
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            BTech 2nd-year student at Lovely Professional University. Curious about technology,
            passionate about problem solving, and currently building the foundation for a career in
            engineering.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[160px]">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[160px]">
              <a href="#about">Learn more</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Lovely Professional University
            </span>
            <span className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              BTech, 2nd Year
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">About</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A student learning by building
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                I am Mridul Mishra, currently pursuing my BTech in my second year at Lovely
                Professional University. I am at the stage where every course, every line of code,
                and every project teaches me something new.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                I am focused on strengthening my fundamentals, exploring real-world engineering
                problems, and turning what I learn into practical work. I am eager to contribute,
                collaborate, and grow with teams that value curiosity and effort.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <Lightbulb className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-heading text-xl font-semibold">Curious</h3>
                <p className="mt-2 text-muted-foreground">
                  I enjoy understanding how things work beneath the surface and asking better
                  questions.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <Code2 className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-heading text-xl font-semibold">Builder</h3>
                <p className="mt-2 text-muted-foreground">
                  I learn best by doing — translating concepts into working code and small projects.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <Layers className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-heading text-xl font-semibold">Adaptable</h3>
                <p className="mt-2 text-muted-foreground">
                  I pick up new tools quickly and stay open to feedback and better ways of working.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <Terminal className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-heading text-xl font-semibold">Detail-oriented</h3>
                <p className="mt-2 text-muted-foreground">
                  I care about clean logic, clear communication, and writing work I can be proud of.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative border-t border-border bg-secondary/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Skills</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I am learning and practicing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A growing set of tools, languages, and mindsets I am developing as part of my
              engineering journey.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Code2, title: "Programming", desc: "Python, C/C++, JavaScript basics" },
              { icon: Layers, title: "Web Fundamentals", desc: "HTML, CSS, React, responsive UI" },
              { icon: GitBranch, title: "Version Control", desc: "Git, GitHub, collaborative workflows" },
              { icon: Cpu, title: "Core CS", desc: "Data structures, algorithms, problem solving" },
            ].map((skill) => (
              <div
                key={skill.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects placeholder */}
      <section className="relative border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Projects</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Building my first projects
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I am currently working on projects that let me apply what I am learning. This section
            will soon showcase real work — from academic assignments to personal experiments.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm text-muted-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            Projects will be added here as they are completed
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-border bg-secondary/30 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I am open to internships, collaborations, and conversations that help me learn. If you
            have an opportunity or just want to say hello, reach out.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[200px] gap-2">
              <a href="mailto:mridul.mishra@example.com">
                <Mail className="h-4 w-4" />
                Send an email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px] gap-2">
              <a
                href="https://www.linkedin.com/in/mridul-mishra"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
            </Button>
          </div>

          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="outline" size="lg" className="min-w-[200px] gap-2">
              <a
                href="https://github.com/Mridul-Mishra-cse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px] gap-2">
              <a
                href="https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_29245015089922640000_shared/e355503c-09e3-4183-9adf-bb390cd6cd25.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
                View certificate
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Replace the email and LinkedIn links above with your real details.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mridul Mishra. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
