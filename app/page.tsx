import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { About } from "@/src/components/sections/About";
import { Contact } from "@/src/components/sections/Contact";
import { Projects } from "@/src/components/sections/Projects";
import { Services } from "@/src/components/sections/Services";
import { Skills } from "@/src/components/sections/Skills";
import { Testimonials } from "@/src/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-gradient-primary focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <About />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
