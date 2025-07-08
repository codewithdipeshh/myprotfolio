import React from 'react';
import { Code, Database, Cloud, Wrench, Globe, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
      color: "green"
    },
    {
      category: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["Python", "Node.js", "REST APIs", "Database Design", "Authentication"],
      color: "blue"
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker", "Podman", "Linux Administration", "CI/CD", "Container Orchestration"],
      color: "purple"
    },
    {
      category: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "VS Code", "Terminal", "Automation Scripts", "Red Hat Tools"],
      color: "orange"
    },
    {
      category: "AI & Machine Learning",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Python ML Libraries", "Scikit-Learn", "Pandas", "NumPy", "NLP Basics"],
      color: "cyan"
    },
    {
      category: "Design & Marketing",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Canva Design", "Digital Marketing", "SEO", "Social Media", "Content Strategy"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "border-green-400/30 hover:border-green-400/60 text-green-400",
      blue: "border-blue-400/30 hover:border-blue-400/60 text-blue-400",
      purple: "border-purple-400/30 hover:border-purple-400/60 text-purple-400",
      orange: "border-orange-400/30 hover:border-orange-400/60 text-orange-400",
      cyan: "border-cyan-400/30 hover:border-cyan-400/60 text-cyan-400",
      pink: "border-pink-400/30 hover:border-pink-400/60 text-pink-400"
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl font-bold text-green-300 mb-4">
            [TECHNICAL_SKILLS]
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative group">
              {/* Asteroid Field Shift Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className={`relative bg-black/40 backdrop-blur-sm border ${getColorClasses(category.color)} rounded-lg p-6 transition-all duration-500 transform hover:scale-105`}>
                {/* Parallax background elements */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/10 rounded-full"></div>
                
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`${category.color === 'green' ? 'text-green-400' : 
                    category.color === 'blue' ? 'text-blue-400' :
                    category.color === 'purple' ? 'text-purple-400' :
                    category.color === 'orange' ? 'text-orange-400' :
                    category.color === 'cyan' ? 'text-cyan-400' :
                    'text-pink-400'}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-mono text-lg font-bold text-green-200">
                    {category.category.toUpperCase()}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        category.color === 'green' ? 'bg-green-400 group-hover/skill:bg-green-300' :
                        category.color === 'blue' ? 'bg-blue-400 group-hover/skill:bg-blue-300' :
                        category.color === 'purple' ? 'bg-purple-400 group-hover/skill:bg-purple-300' :
                        category.color === 'orange' ? 'bg-orange-400 group-hover/skill:bg-orange-300' :
                        category.color === 'cyan' ? 'bg-cyan-400 group-hover/skill:bg-cyan-300' :
                        'bg-pink-400 group-hover/skill:bg-pink-300'
                      }`}></div>
                      <span className="font-mono text-sm text-green-200 group-hover/skill:text-green-100 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill level indicator */}
                <div className="mt-6 pt-4 border-t border-green-400/20">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-green-400">PROFICIENCY</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${
                          i < Math.floor(Math.random() * 2) + 3 ? 'bg-green-400' : 'bg-green-400/20'
                        }`}></div>
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

export default Skills;