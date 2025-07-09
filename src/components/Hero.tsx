import React from 'react';
import { Terminal, Code, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Night vision overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black/60 mix-blend-overlay z-10"></div>
      
      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-20 z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      ></div>

      <div className="relative z-30 text-center max-w-4xl mx-auto">
        {/* Scanning line effect */}
        <div className="absolute -inset-10 border border-green-400/30 animate-pulse"></div>
        
        {/* Main content */}
        <div className="space-y-8">
          {/* Terminal-style header */}
          <div className="font-mono text-green-400 text-sm mb-4">
            <span className="animate-pulse">███</span> SYSTEM ONLINE - SUBJECT IDENTIFICATION
          </div>
          
          <h1 className="font-mono text-5xl md:text-7xl font-bold text-green-300 mb-6 tracking-wider">
            Dipesh Verma
          </h1>
          
          <div className="font-mono text-xl md:text-2xl text-green-200 mb-8">
            <span className="border-r-2 border-green-400 animate-pulse pr-2">
              Front-End Developer
            </span>
          </div>
          
          {/* Status indicators */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-green-400">
              <Terminal className="w-5 h-5" />
              <span className="font-mono text-sm">Jaipur, Rajasthan</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Code className="w-5 h-5" />
              <span className="font-mono text-sm">B.Tech Computer Science (A.I), 2023-2027</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Database className="w-5 h-5" />
              <span className="font-mono text-sm">AI Student</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group relative overflow-hidden bg-transparent border-2 border-green-400 text-green-400 font-mono px-8 py-4 hover:bg-green-400 hover:text-black transition-all duration-300">
              <span className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10">INITIATE CONTACT</span>
            </button>
            
            <button className="group relative overflow-hidden bg-transparent border-2 border-green-600 text-green-600 font-mono px-8 py-4 hover:bg-green-600 hover:text-black transition-all duration-300">
              <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10">DOWNLOAD DATA</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;