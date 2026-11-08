import type { Config } from "tailwindcss";
export default {darkMode:"class",content:["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{bg:"var(--bg)",fg:"var(--fg)",mut:"var(--mut)",bd:"var(--bd)"}}},plugins:[]} satisfies Config;
