"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import NeuralBrain from "./NeuralBrain";
import { profile } from "@/lib/data";
const up = (d: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
});
const socials = [
  { I: Github, h: profile.github, l: "GitHub" },
  { I: Linkedin, h: profile.linkedin, l: "LinkedIn" },
  { I: Mail, h: `mailto:${profile.email}`, l: "Email" },
];
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 lg:grid-cols-2">
        <div>
          {/* {profile.available&&<motion.span {...up(.1)} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"><span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-green-400"/><span className="h-2 w-2 rounded-full bg-green-500"/></span>Open to New Opportunities</motion.span>} */}
          <motion.h1
            {...up(0.2)}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Building Modern <span className="grad">Digital Experiences.</span>
          </motion.h1>
          <motion.p {...up(0.35)} className="mt-6 max-w-xl text-lg text-mut">
            I&apos;m a Frontend Developer specializing in Next.js and modern web
            technologies. I build responsive, scalable, and user-friendly web
            applications.
          </motion.p>
          <motion.div {...up(0.5)} className="mt-8 flex flex-wrap gap-3">
            {/* <a href="#projects" className="btn btn-p">
              View My Work
            </a> */}
            <a href="#contact" className="btn btn-g">
              Get in Touch
            </a>
            <a href={profile.resume} download className="btn btn-g">
              Download Resume
            </a>
          </motion.div>
          <motion.div {...up(0.65)} className="mt-8 flex gap-3">
            {socials.map(({ I, h, l }) => (
              <a
                key={l}
                href={h}
                aria-label={l}
                target="_blank"
                rel="noreferrer"
                className="btn btn-g !p-3"
              >
                <I size={18} />
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative h-[340px] sm:h-[460px] lg:h-[560px]"
        >
          <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-[90px]" />
          <NeuralBrain />
        </motion.div>
      </div>
    </section>
  );
}
