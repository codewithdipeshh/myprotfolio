import React from 'react';
import { User, MapPin, GraduationCap, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl font-bold text-green-300 mb-4">
            [ABOUT_SUBJECT]
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card with Orbiting Animation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 hover:border-green-400/60 transition-all duration-500 transform hover:scale-105">
              {/* Orbiting elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-green-400" />
                  <span className="font-mono text-green-300 text-lg">PERSONAL_DATA</span>
                </div>
                
                <div className="space-y-4 text-green-200">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-400" />
                    <span className="font-mono">your.email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span className="font-mono">Your City, State</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-green-400" />
                    <span className="font-mono">Your Degree - Year Range</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-green-400/30">
                  <span className="font-mono text-green-400 text-sm">STATUS:</span>
                  <span className="font-mono text-green-300 ml-2">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section with Stellar Burst Animation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-l from-purple-400/20 to-green-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 hover:border-green-400/60 transition-all duration-500">
              {/* Stellar burst effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-px bg-green-400"></div>
                  <span className="font-mono text-green-300 text-lg">BIOGRAPHY</span>
                  <div className="w-8 h-px bg-green-400"></div>
                </div>
                
                <p className="text-green-200 leading-relaxed">
                  Motivated and detail-oriented individual with strong communication and problem-solving skills. 
                  Passionate about technology and teamwork, currently pursuing your degree with specialization 
                  in your field of study.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-mono text-green-300 text-sm">SPECIALIZATION: Frontend Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="font-mono text-green-300 text-sm">FOCUS: Multi-Technology Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="font-mono text-green-300 text-sm">EXPERTISE: Problem Solving & Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;