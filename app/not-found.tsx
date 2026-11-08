import Link from "next/link";
export default function NotFound(){return(<main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center"><h1 className="grad text-8xl font-bold">404</h1><p className="text-mut">This neuron connects to nothing.</p><Link href="/" className="btn btn-p">Back home</Link></main>);}
