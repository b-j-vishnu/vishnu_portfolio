import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  About,
  Skills,
  Services,
  Projects,
  Experience,
  Process,
  Testimonials,
  Contact,
  Footer,
} from "@/components/Sections";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        {/* <Projects /> */}
        <Experience />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
