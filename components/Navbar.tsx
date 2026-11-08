"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowUp } from "lucide-react";
const links = [
  "About",
  "Skills",
  "Expertise",
//   "Projects",
  "Experience",
  "Process",
  "Contact",
];
export default function Navbar() {
  const [dark, setDark] = useState(true),
    [open, setOpen] = useState(false),
    [top, setTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const sx = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const f = () => setTop(scrollY > 600);
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    try {
      localStorage.setItem("theme", d ? "dark" : "light");
    } catch {}
  };
  return (
    <>
      <motion.div
        style={{ scaleX: sx }}
        className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-violet-500"
      />
      <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"
        >
          <a href="#" className="font-semibold">
            dev<span className="grad">.portfolio</span>
          </a>
          <ul className="hidden gap-7 text-sm text-mut md:flex">
            {links.map((l) => (
              <li key={l}>
                <a
                  className="transition hover:text-fg"
                  href={`#${l.toLowerCase()}`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={toggle}
              className="btn btn-g !p-2"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="btn btn-g !p-2 md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        {open && (
          <ul className="space-y-3 border-t border-bd px-5 py-4 md:hidden">
            {links.map((l) => (
              <li key={l}>
                <a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>
      {top && (
        <a
          href="#"
          aria-label="Back to top"
          className="btn btn-p fixed bottom-6 right-6 z-50 !p-3"
        >
          <ArrowUp size={18} />
        </a>
      )}
    </>
  );
}
