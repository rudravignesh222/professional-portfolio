import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian-900 text-zinc-100 font-sans selection:bg-crimson selection:text-white">
      {/* Background Interactive Particle Canvas */}
      <ParticleBackground />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <MarqueeBanner />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
