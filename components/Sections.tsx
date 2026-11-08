"use client";
import { useState } from "react";
import {
  Globe,
  Rocket,
  Layers,
  Paintbrush,
  LayoutDashboard,
  Plug,
  ExternalLink,
  Github,
  MessageCircle,
  Mail,
} from "lucide-react";
import Reveal from "./Reveal";
import {
  profile,
  stats,
  skills,
  services,
  projects,
  experience,
  education,
  process,
  testimonials,
} from "@/lib/data";
const icons: Record<string, any> = {
  Globe,
  Rocket,
  Layers,
  Paintbrush,
  LayoutDashboard,
  Plug,
};
const Sec = ({
  id,
  title,
  sub,
  children,
}: {
  id: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
    <Reveal>
      <p className="text-sm uppercase tracking-widest text-violet-400">{sub}</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
    </Reveal>
    <div className="mt-10">{children}</div>
  </section>
);
const Card = ({
  children,
  i = 0,
}: {
  children: React.ReactNode;
  i?: number;
}) => (
  <Reveal delay={i * 0.07}>
    <div className="glass h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-violet-500/50">
      {children}
    </div>
  </Reveal>
);
export function About() {
  return (
    <Sec id="about" sub="About" title="Clean code, thoughtful experiences">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-mut leading-relaxed">
            My journey in web development started with exploring the MERN stack
            and gradually grew into a passion for crafting modern frontend
            experiences. I enjoy solving UI challenges, building reusable
            components, and turning ideas into functional designs. I'm always
            eager to explore new technologies and improve my skills.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Card key={s.label} i={i}>
              <p className="grad text-4xl font-bold">{s.value}</p>
              <p className="mt-1 text-sm text-mut">{s.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </Sec>
  );
}
export function Skills() {
  return (
    <Sec id="skills" sub="Skills" title="Technical toolkit">
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(skills).map(([k, v], i) => (
          <Card key={k} i={i}>
            <h3 className="font-semibold">{k}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {v.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-bd px-3 py-1.5 text-sm text-mut transition hover:border-violet-500 hover:text-fg"
                >
                  {s}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Sec>
  );
}
export function Services() {
  return (
    <Sec id="expertise" sub="Expertise" title="What I do">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const I = icons[s.icon];
          return (
            <Card key={s.title} i={i}>
              <span className="inline-flex rounded-xl bg-violet-500/15 p-3 text-violet-400">
                <I size={22} />
              </span>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-mut">{s.desc}</p>
            </Card>
          );
        })}
      </div>
    </Sec>
  );
}
const cats = [
  "All",
  "Web Applications",
  "Dashboards",
  "UI Projects",
  "Personal Projects",
];
export function Projects() {
  const [c, setC] = useState("All");
  const list = projects.filter((p) => c === "All" || p.cat === c);
  return (
    <Sec id="projects" sub="Work" title="Featured projects">
      <div className="mb-8 flex flex-wrap gap-2" role="tablist">
        {cats.map((x) => (
          <button
            key={x}
            role="tab"
            aria-selected={c === x}
            onClick={() => setC(x)}
            className={`btn !py-2 text-sm ${c === x ? "btn-p" : "btn-g"}`}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {list.map((p, i) => (
          <Card key={p.name} i={i}>
            <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-transparent text-sm text-mut">
              Screenshot placeholder
            </div>
            <h3 className="font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-mut">{p.desc}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-mut">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-violet-500/15 px-2 py-0.5 text-xs text-violet-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a href={p.live} className="btn btn-p !py-2 text-sm">
                <ExternalLink size={15} />
                Live Demo
              </a>
              <a href={p.github} className="btn btn-g !py-2 text-sm">
                <Github size={15} />
                GitHub
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Sec>
  );
}
export function Experience() {
  return (
    <Sec id="experience" sub="Experience" title="Work experience & education">
      <div className="relative space-y-6 border-l border-violet-500/40 pl-6">
        {experience.map((e, i) => (
          <Reveal key={i}>
            <div className="glass relative rounded-2xl p-6">
              <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_12px_#8b5cf6]" />
              <h3 className="font-semibold">
                {e.title} · {e.company}
              </h3>
              <p className="text-sm text-mut">
                {e.period} · {e.type}
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-mut">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-violet-500/15 px-2 py-0.5 text-xs text-violet-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
        {education.map((e, i) => (
          <Reveal key={i}>
            <div className="glass relative rounded-2xl p-6">
              <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-violet-300" />
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm text-mut">
                {e.place} · {e.year}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}
export function Process() {
  return (
    <Sec id="process" sub="Process" title="How I work">
      <div className="grid gap-4 md:grid-cols-4">
        {process.map(([t, d], i) => (
          <Card key={t} i={i}>
            <p className="grad text-3xl font-bold">0{i + 1}</p>
            <h3 className="mt-2 font-semibold">{t}</h3>
            <p className="mt-1 text-sm text-mut">{d}</p>
          </Card>
        ))}
      </div>
    </Sec>
  );
}
export function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <Sec id="testimonials" sub="Testimonials" title="Kind words">
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Card key={i} i={i}>
            <p>“{t.text}”</p>
            <p className="mt-3 text-sm text-mut">
              {t.name} · {t.role}
            </p>
          </Card>
        ))}
      </div>
    </Sec>
  );
}
type F = { name: string; email: string; subject: string; message: string };
export function Contact() {
  const [f, setF] = useState<F>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [err, setErr] = useState<Partial<F>>({});
  const [st, setSt] = useState<"idle" | "ok" | "fail">("idle");
  const set =
    (k: keyof F) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const x: Partial<F> = {};
    if (f.name.trim().length < 2) x.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) x.email = "Enter a valid email.";
    if (f.subject.trim().length < 3) x.subject = "Add a subject.";
    if (f.message.trim().length < 10)
      x.message = "Message must be at least 10 characters.";
    setErr(x);
    if (Object.keys(x).length) {
      setSt("fail");
      return;
    }
    // Opens the visitor's mail app. Swap for a /api/contact route or a form service if you prefer.
    location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`)}`;
    setSt("ok");
  };
  const inp =
    "w-full rounded-xl border border-bd bg-transparent px-4 py-3 outline-none transition focus:border-violet-500";
  return (
    <Sec id="contact" sub="Contact" title="Get In Touch">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          {/* <p className="text-mut">
            I&apos;m always happy to connect — whether it&apos;s about a role, a
            collaboration, or just to say hello.
          </p> */}
          <div className="mt-6 space-y-3 text-sm">
            <a
              className="flex items-center gap-2 hover:text-violet-400"
              href={`mailto:${profile.email}`}
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              className="flex items-center gap-2 hover:text-violet-400"
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              {/* <MessageCircle size={16} /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
                <path d="M8.5 8.5c.3-.7.6-.7 1-.7h.5c.2 0 .4.2.5.5l.8 1.9c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.6c.2-.2.4-.2.6-.1l1.9.8c.3.1.5.3.5.5v.5c0 .4 0 .7-.7 1-1 .5-2.3.3-4.1-.6-1.8-.9-3.3-2.4-4.2-4.2-.9-1.8-1.1-3.1-.4-4.1Z" />
              </svg>
              WhatsApp
            </a>
            <a
              className="flex items-center gap-2 hover:text-violet-400"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a
              className="flex items-center gap-2 hover:text-violet-400"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </Reveal>
        {/* <Reveal>
          <form
            onSubmit={submit}
            noValidate
            className="glass space-y-4 rounded-2xl p-6"
          >
            {(["name", "email", "subject"] as const).map((k) => (
              <div key={k}>
                <label htmlFor={k} className="mb-1 block text-sm capitalize">
                  {k}
                </label>
                <input
                  id={k}
                  className={inp}
                  value={f[k]}
                  onChange={set(k)}
                  aria-invalid={!!err[k]}
                />
                {err[k] && (
                  <p role="alert" className="mt-1 text-xs text-red-400">
                    {err[k]}
                  </p>
                )}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1 block text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={inp}
                value={f.message}
                onChange={set("message")}
              />
              {err.message && (
                <p role="alert" className="mt-1 text-xs text-red-400">
                  {err.message}
                </p>
              )}
            </div>
            <button className="btn btn-p w-full justify-center">
              Send Message
            </button>
            {st === "ok" && (
              <p role="status" className="text-sm text-green-400">
                Thanks! Your email app should open to send the message.
              </p>
            )}
            {st === "fail" && (
              <p role="alert" className="text-sm text-red-400">
                Please fix the highlighted fields.
              </p>
            )}
          </form>
        </Reveal> */}
      </div>
    </Sec>
  );
}
export function Footer() {
  return (
    <footer className="border-t border-bd py-8 text-center text-sm text-mut">
      © {new Date().getFullYear()} {profile.name}. Crafted with passion using Next.js & Tailwind CSS.
    </footer>
  );
}
