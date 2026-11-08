import Link from "next/link";
import type { Metadata } from "next";
export const metadata:Metadata={title:"Portfolio Concepts",description:"Five landing page concepts for a Frontend / Next.js Developer."};
const c=[
{h:"minimal",n:"Minimal",d:"Apple-inspired whitespace, huge type, violet accents.",t:"bg-neutral-50 text-neutral-900",x:<p className="text-3xl font-bold tracking-tight">Crafting<br/><span className="text-violet-600">Digital</span></p>},
{h:"creative",n:"Dark Creative",d:"Neon gradients, glass cards and floating motion.",t:"bg-black text-white",x:<><i className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-violet-600 blur-2xl"/><i className="absolute bottom-0 left-4 h-20 w-20 rounded-full bg-blue-600 blur-2xl"/><p className="relative text-3xl font-black">Turning Ideas</p></>},
{h:"bento",n:"Bento Grid",d:"Structured, card-based, information-rich layout.",t:"bg-stone-100",x:<div className="grid h-full grid-cols-3 gap-1.5"><i className="col-span-2 row-span-2 rounded-xl bg-white"/><i className="rounded-xl bg-violet-500"/><i className="rounded-xl bg-white"/><i className="col-span-3 rounded-xl bg-neutral-900"/></div>},
{h:"editorial",n:"Editorial",d:"Serif typography, asymmetry and image-led case studies.",t:"bg-[#efe6d6] text-stone-800",x:<p className="font-serif text-3xl italic">Designing<br/>Interfaces.</p>},
{h:"tech",n:"Interactive Tech",d:"Terminal, animated code and a navy cyber palette.",t:"bg-slate-950 text-cyan-300",x:<p className="font-mono text-sm">$ npm run build<br/>✓ compiled<span className="animate-pulse">▌</span></p>}];
export default function Preview(){return(<main className="mx-auto min-h-screen max-w-6xl px-5 py-20"><h1 className="text-4xl font-bold">Portfolio concepts</h1><p className="mt-2 text-mut">Five distinct landing pages. Pick your favorite.</p>
<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{c.map(x=><Link key={x.h} href={`/portfolio/${x.h}`} className="glass group rounded-2xl p-4 transition hover:-translate-y-1.5 hover:border-violet-500/60">
<div className={`relative h-44 overflow-hidden rounded-xl p-5 ${x.t}`}>{x.x}</div><h2 className="mt-4 font-semibold">{x.n}</h2><p className="text-sm text-mut">{x.d}</p><span className="mt-3 inline-block text-sm text-violet-400 group-hover:underline">Preview →</span></Link>)}</div></main>);}
