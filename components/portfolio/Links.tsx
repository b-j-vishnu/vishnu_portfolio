import { profile } from "@/lib/data";
export const links=[["Email",`mailto:${profile.email}`],["LinkedIn",profile.linkedin],["GitHub",profile.github],["WhatsApp",profile.whatsapp]] as const;
export default function Links({cls}:{cls:string}){return <ul className="flex flex-wrap gap-3">{links.map(([n,h])=><li key={n}><a href={h} target={n==="Email"?undefined:"_blank"} rel="noreferrer" className={cls}>{n}</a></li>)}</ul>;}
