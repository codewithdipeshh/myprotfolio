import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Your Position",
      company: "Linuxworld",
      duration: "Creators",
      location: "Jaipur, Rajasthan",
      description: [
        "Your responsibility 1",
        "Your responsibility 2",
        "Your responsibility 3",
        "Your responsibility 4"
        
      ],
      status: "active"
    },
    {
      title: "Frontend Developer",
      company: "LN-techinfo",
      duration: "Duration",
      location: "Jaipur, Rajasthan",
      description: [
        "Your previous responsibility 1",
        "Your previous responsibility 2",
        "Your previous responsibility 3",
        "Your previous responsibility 4"
      ],
      status: "completed"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl font-bold text-green-300 mb-4">
            [WORK_EXPERIENCE]
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Telemetry Scan Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
              
              <div className="relative bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 hover:border-green-400/60 transition-all duration-500">
                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${exp.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-blue-400'}`}></div>
                  <span className="font-mono text-xs text-green-300">{exp.status.toUpperCase()}</span>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-6 h-6 text-green-400" />
                      <span className="font-mono text-green-300 text-lg">POSITION</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-mono text-xl font-bold text-green-200">{exp.title}</h3>
                      <p className="font-mono text-green-400">{exp.company}</p>
                      
                      <div className="flex items-center space-x-2 text-green-300">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-sm">{exp.duration}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-green-300">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-px bg-green-400"></div>
                      <span className="font-mono text-green-300 text-lg">RESPONSIBILITIES</span>
                      <div className="w-8 h-px bg-green-400"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.description.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 group/item">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 group-hover/item:bg-blue-400 transition-colors"></div>
                          <span className="font-mono text-green-200 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;