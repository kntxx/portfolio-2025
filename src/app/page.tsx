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
import Snowfall from "react-snowfall";
import { useEffect, useState } from "react";

export default function Home() {
  const [snowflake, setSnowflake] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const img = new Image();
    img.src = "/snowflake.png";
    img.onload = () => setSnowflake([img]);
  }, []);

  return (
    <main>
      <Snowfall
        snowflakeCount={150}
        radius={[10, 25]}
        speed={[0.5, 2]}
        wind={[-1 , 2]}
        images={snowflake.length > 0 ? snowflake : undefined}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />
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
