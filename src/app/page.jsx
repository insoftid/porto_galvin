"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white selection:bg-white selection:text-black pt-20">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Certificates />
      <Contacts />
      <Footer />
    </main>
  );
}
