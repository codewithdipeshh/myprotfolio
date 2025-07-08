import React from 'react';
import { Code, Database, Bot, Cloud, Camera, TrendingUp, Container } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Email Sender Application",
      tech: "Python, Streamlit, SMTP",
      description: "User-friendly web application for sending emails through Streamlit interface with secure SMTP integration.",
      icon: <Database className="w-6 h-6" />,
      category: "web-app"
    },
    {
      title: "Interactive Chatbot",
      tech: "Python, NLP, Machine Learning",
      description: "AI-powered chatbot using Natural Language Processing techniques for intelligent conversation handling.",
      icon: <Bot className="w-6 h-6" />,
      category: "ai-ml"
    },
    {
      title: "Rain Prediction Model",
      tech: "Python, Pandas, Scikit-Learn",
      description: "Machine learning system analyzing weather datasets to predict rainfall with high accuracy.",
      icon: <Cloud className="w-6 h-6" />,
      category: "ai-ml"
    },
    {
      title: "Photo Capture Automation",
      tech: "JavaScript, Web APIs, Browser Integration",
      description: "Browser-based camera application with automated photo capture and sharing functionalities.",
      icon: <Camera className="w-6 h-6" />,
      category: "web-app"
    },
    {
      title: "Marks Prediction System",
      tech: "Python, NumPy, Linear Regression",
      description: "ML model predicting student performance based on study patterns and related factors.",
      icon: <TrendingUp className="w-6 h-6" />,
      category: "ai-ml"
    },
    {
      title: "Red Hat Containerization",
      tech: "Docker, Podman, Red Hat Tools",
      description: "Containerization project exploring deployment practices and container orchestration.",
      icon: <Container className="w-6 h-6" />,
      category: "devops"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl font-bold text-green-300 mb-4">
            [PROJECT_PORTFOLIO]
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              {/* Warp Drive Entry Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 group-hover:scale-110"></div>
              
              <div className="relative bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-all duration-500 transform hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-400/20">
                {/* Streaking effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-green-400 group-hover:text-green-300 transition-colors">
                    {project.icon}
                  </div>
                  <div className="font-mono text-xs text-green-500 px-2 py-1 bg-green-400/20 rounded">
                    {project.category.toUpperCase()}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <h3 className="font-mono text-lg font-bold text-green-200 group-hover:text-green-100 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-green-400" />
                    <span className="font-mono text-sm text-green-300">{project.tech}</span>
                  </div>
                  
                  <p className="text-green-200 text-sm leading-relaxed group-hover:text-green-100 transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Hover indicators */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="mt-16 text-center">
          <div className="relative group inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-green-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 hover:border-green-400/60 transition-all duration-500">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="font-mono text-green-300 text-lg">ACHIEVEMENT_UNLOCKED</span>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="font-mono text-2xl font-bold text-green-200 mb-2">DevSummit 2025</h3>
              <p className="font-mono text-green-300 text-sm">HACKATHON PARTICIPATION - CERTIFICATE EARNED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;