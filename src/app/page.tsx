"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { SnackbarProvider } from "notistack";
export default function Home() {
  return (
    <main>
      <SnackbarProvider>
        <Nav />
        <NavMobile />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </SnackbarProvider>
    </main>
  );
}
