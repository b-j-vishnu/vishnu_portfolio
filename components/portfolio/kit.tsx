"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, projects } from "@/lib/data";
export const MDiv=motion.div;
export { default as Reveal } from "@/components/Reveal";
export function Shot({g,name,cls=""}:{g:string;name:string;cls?:string}){return(
<div className={`overflow-hidden rounded-xl border border-black/10 bg-white/5 shadow-xl ${cls}`}><div className="flex gap-1.5 border-b border-black/10 bg-black/5 px-3 py-2">{[0,1,2].map(i=><i key={i} className="h-2 w-2 rounded-full bg-current opacity-30"/>)}</div>
<div className={`flex aspect-[16/10] items-end bg-gradient-to-br p-4 text-xs ${g}`}><span className="rounded bg-black/40 px-2 py-1 text-white">Screenshot placeholder · {name}</span></div></div>);}
export function Typing({lines,cls}:{lines:string[];cls?:string}){const full=lines.join("\n"),[n,setN]=useState(0);
useEffect(()=>{if(n>=full.length)return;const t=setTimeout(()=>setN(n+1),24);return()=>clearTimeout(t);},[n,full]);
return <pre className={cls} aria-label={full}>{full.slice(0,n)}<span className="animate-pulse">▌</span></pre>;}
export function Gallery(){const [i,setI]=useState(0);const p=projects[i];return(
<div className="grid gap-4 md:grid-cols-[240px_1fr]"><div role="tablist" className="flex gap-2 md:flex-col">{projects.map((x,k)=><button key={x.name} role="tab" aria-selected={k===i} onClick={()=>setI(k)} className={`rounded-lg border px-4 py-3 text-left font-mono text-sm transition ${k===i?"border-cyan-400 bg-cyan-400/10 text-cyan-300":"border-white/10 text-slate-400 hover:border-violet-400"}`}>{String(k+1).padStart(2,"0")}_{x.cat.split(" ")[0].toLowerCase()}</button>)}</div>
<motion.div key={i} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className="rounded-xl border border-white/10 bg-white/[.03] p-6">
<Shot g="from-violet-600/60 to-cyan-500/40" name={p.name}/><h3 className="mt-4 text-xl font-semibold text-white">{p.name}</h3><p className="text-slate-400">{p.desc}</p>
<p className="mt-2 font-mono text-xs text-cyan-300">{p.tech.join(" · ")}</p><ul className="mt-2 list-disc pl-5 text-sm text-slate-400">{p.features.map(f=><li key={f}>{f}</li>)}</ul>
<div className="mt-4 flex gap-3 font-mono text-sm"><a href={p.live} className="rounded bg-cyan-400 px-4 py-2 text-slate-900">live_preview</a><a href={p.github} className="rounded border border-white/20 px-4 py-2 text-white">github</a></div></motion.div></div>);}
type F={name:string;email:string;message:string};
export function InquiryForm({i,b,l}:{i:string;b:string;l:string}){
const [f,setF]=useState<F>({name:"",email:"",message:""}),[e,setE]=useState<Partial<F>>({}),[ok,setOk]=useState(false);
const s=(k:keyof F)=>(ev:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>setF({...f,[k]:ev.target.value});
const go=(ev:React.FormEvent)=>{ev.preventDefault();const x:Partial<F>={};if(f.name.trim().length<2)x.name="Enter your name";if(!/^\S+@\S+\.\S+$/.test(f.email))x.email="Enter a valid email";if(f.message.trim().length<10)x.message="At least 10 characters";setE(x);setOk(false);if(Object.keys(x).length)return;
location.href=`mailto:${profile.email}?subject=${encodeURIComponent("Message from "+f.name)}&body=${encodeURIComponent(f.message+"\n\nEmail: "+f.email)}`;setOk(true);};
return(<form onSubmit={go} noValidate className="space-y-4">{(["name","email","message"] as const).map(k=><div key={k}><label htmlFor={"f-"+k} className={`mb-1 block text-sm capitalize ${l}`}>{k}</label>
{k==="message"?<textarea id={"f-"+k} rows={4} className={i} value={f[k]} onChange={s(k)}/>:<input id={"f-"+k} className={i} value={f[k]} onChange={s(k)}/>}{e[k]&&<p role="alert" className="mt-1 text-xs text-red-500">{e[k]}</p>}</div>)}
<button className={b}>Send message</button>{ok&&<p role="status" className="text-sm text-green-500">Thanks — your email app should open.</p>}</form>);}
