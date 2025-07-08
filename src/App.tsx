import React from 'react';
import StarField from './components/StarField';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-300 relative overflow-x-hidden">
      <StarField />
      <Navigation />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-sm border-t border-green-400/30 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-mono text-green-300">SYSTEM STATUS: ONLINE</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <p className="font-mono text-green-400 text-sm">
            © 2025 YOUR NAME - ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;