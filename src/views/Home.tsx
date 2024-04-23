import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Separator from "../components/Separator";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#11111b] min-h-screen">
      <div className="relative z-50">
        <Header />
        <main className="px-4 pt-12 pb-12">
          <div className="text-[#cdd6f4] relative max-w-[650px] w-full mx-auto">
            <Hero />
            <Separator />
            <Skills />
            <Separator />
            <Experience />
            <Separator />
            <Projects />
            <Separator />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
