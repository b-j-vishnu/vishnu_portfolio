"use client";
import { useEffect, useRef } from "react";
type N={hx:number;hy:number;x:number;y:number;p:number};
// side-view brain silhouette: cerebrum + cerebellum + stem (coords -1..1)
const inside=(x:number,y:number)=>((x/0.92)**2+((y+0.08)/0.58)**2<1)||(((x-0.45)/0.3)**2+((y-0.58)/0.2)**2<1)||(((x-0.08)/0.09)**2+((y-0.7)/0.3)**2<1);
export default function NeuralBrain({count=130}:{count?:number}){
const ref=useRef<HTMLCanvasElement>(null);
useEffect(()=>{
const cv=ref.current!,ctx=cv.getContext("2d")!;let w=0,h=0,raf=0,t=0;const m={x:-999,y:-999};
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const nodes:N[]=[];while(nodes.length<count){const x=Math.random()*2-1,y=Math.random()*2-1;if(inside(x,y))nodes.push({hx:x,hy:y,x:0,y:0,p:Math.random()*6.28});}
const edges:[number,number][]=[];const adj:number[][]=nodes.map(()=>[]);
nodes.forEach((a,i)=>nodes.forEach((b,j)=>{if(j>i&&Math.hypot(a.hx-b.hx,a.hy-b.hy)<0.23&&adj[i].length<5&&adj[j].length<5){adj[i].push(edges.length);adj[j].push(edges.length);edges.push([i,j]);}}));
let pulses:{e:number;t:number;d:number}[]=[];
const resize=()=>{const r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio,2);w=r.width;h=r.height;cv.width=w*d;cv.height=h*d;ctx.setTransform(d,0,0,d,0,0);};
resize();const ro=new ResizeObserver(resize);ro.observe(cv);
const mm=(e:PointerEvent)=>{const r=cv.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top;};
addEventListener("pointermove",mm);
let first=true;
const draw=()=>{t+=0.01;ctx.clearRect(0,0,w,h);const s=Math.min(w/1.9,h/1.3),cx=w/2,cy=h/2;
for(const n of nodes){let px=cx+(n.hx+Math.sin(t+n.p)*0.012)*s,py=cy+(n.hy+Math.cos(t*1.1+n.p)*0.012)*s;
const dx=px-m.x,dy=py-m.y,d=Math.hypot(dx,dy)||1;if(d<110){const f=(110-d)/110*26;px+=dx/d*f;py+=dy/d*f;}
if(first){n.x=cx;n.y=cy;}n.x+=(px-n.x)*0.08;n.y+=(py-n.y)*0.08;}
first=false;
ctx.lineWidth=1;ctx.strokeStyle="rgba(139,92,246,0.22)";for(const[a,b]of edges){const A=nodes[a],B=nodes[b];ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke();}
if(!reduce&&Math.random()<0.18&&pulses.length<26)pulses.push({e:(Math.random()*edges.length)|0,t:0,d:Math.random()<.5?1:0});
pulses=pulses.filter(p=>{p.t+=0.035;const[a,b]=edges[p.e],end=p.d?b:a,A=nodes[p.d?a:b],B=nodes[end];
const x=A.x+(B.x-A.x)*p.t,y=A.y+(B.y-A.y)*p.t;const g=ctx.createRadialGradient(x,y,0,x,y,10);g.addColorStop(0,"rgba(221,214,254,1)");g.addColorStop(1,"rgba(124,58,237,0)");ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,10,0,6.28);ctx.fill();
if(p.t>=1){if(Math.random()<.85&&adj[end].length){const ne=adj[end][(Math.random()*adj[end].length)|0];pulses.push({e:ne,t:0,d:edges[ne][0]===end?1:0});}return false;}return true;});
for(const n of nodes){const r=1.6+Math.sin(t*2+n.p)*0.6;ctx.fillStyle="rgba(196,181,253,0.9)";ctx.beginPath();ctx.arc(n.x,n.y,r,0,6.28);ctx.fill();}
raf=requestAnimationFrame(draw);};
const vis=()=>{cancelAnimationFrame(raf);if(!document.hidden)draw();};
document.addEventListener("visibilitychange",vis);draw();
return()=>{cancelAnimationFrame(raf);ro.disconnect();removeEventListener("pointermove",mm);document.removeEventListener("visibilitychange",vis);};
},[count]);
return <canvas ref={ref} aria-hidden className="h-full w-full"/>;
}
