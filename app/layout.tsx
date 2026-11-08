import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Vishnu J. | Frontend Developer",
  description:
    "Vishnu J. is a Frontend Developer specializing in Next.js, React, and TypeScript. Explore projects, skills, and experience.",
  openGraph: {
    title: "Vishnu J. | Frontend Developer",
    description:
      "Building modern, responsive, and user-friendly web experiences.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%237c3aed'/><text x='16' y='22' font-size='16' text-anchor='middle' fill='white' font-family='monospace'>&lt;/&gt;</text></svg>",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.remove('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
