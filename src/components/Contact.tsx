import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.sendForm(
      'service_dacg4xl',          // Your service ID
      'template_ibvkspt',         // Your template ID
      e.currentTarget,            // The actual HTML form element
      'xcdA_ODYsAzQG_BWl'         // Your public key
    );

    console.log('EmailJS result:', result);
    alert("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  } catch (error: any) {
    console.error('EmailJS Error:', error?.text || error);
    alert('Failed to send message. Please check console.');
  }

  setIsSubmitting(false);
};
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl font-bold text-green-300 mb-4">
            [ESTABLISH_CONNECTION]
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 hover:border-green-400/60 transition-all duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-px bg-green-400"></div>
                  <span className="font-mono text-green-300 text-lg">CONTACT_PROTOCOLS</span>
                  <div className="w-8 h-px bg-green-400"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group/item">
                    <Mail className="w-6 h-6 text-green-400 group-hover/item:text-green-300 transition-colors" />
                    <div>
                      <div className="font-mono text-green-300 text-sm">EMAIL</div>
                      <div className="font-mono text-green-200">dipeshverma81122@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group/item">
                    <MapPin className="w-6 h-6 text-green-400 group-hover/item:text-green-300 transition-colors" />
                    <div>
                      <div className="font-mono text-green-300 text-sm">LOCATION</div>
                      <div className="font-mono text-green-200">Jaipur, Rajasthan</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group/item">
                    <Linkedin className="w-6 h-6 text-green-400 group-hover/item:text-green-300 transition-colors" />
                    <div>
                      <div className="font-mono text-green-300 text-sm">LINKEDIN</div>
                      <div className="font-mono text-green-200 text-sm"><a href="https://www.linkedin.com/in/dipesh-verma-70b8ba2b7/" target="_blank" rel="noopener noreferrer">Dipesh Verma</a></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group/item">
                    <Github className="w-6 h-6 text-green-400 group-hover/item:text-green-300 transition-colors" />
                    <div>
                      <div className="font-mono text-green-300 text-sm">GITHUB</div>
                      <div className="font-mono text-green-200"><a href="https://github.com/codewithdipeshh" target="_blank" rel="noopener noreferrer">codewithdipeshh</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <a 
                href="https://www.linkedin.com/in/dipesh-verma-70b8ba2b7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full group relative overflow-hidden bg-transparent border-2 border-blue-400 text-blue-400 font-mono py-3 px-6 hover:bg-blue-400 hover:text-black transition-all duration-300">
                  <span className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Linkedin className="w-5 h-5" />
                    <span>CONNECT_ON_LINKEDIN</span>
                  </span>
                </button>
              </a>
              
              <a 
                href="https://github.com/codewithdipeshh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full group relative overflow-hidden bg-transparent border-2 border-purple-400 text-purple-400 font-mono py-3 px-6 hover:bg-purple-400 hover:text-black transition-all duration-300">
                  <span className="absolute inset-0 bg-purple-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Github className="w-5 h-5" />
                    <span>VIEW_GITHUB_PROFILE</span>
                  </span>
                </button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-l from-purple-400/20 to-green-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 hover:border-green-400/60 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <Send className="w-6 h-6 text-green-400" />
                <span className="font-mono text-green-300 text-lg">SEND_MESSAGE</span>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit} >
                <div>
                  <label className="block font-mono text-green-300 text-sm mb-2">NAME</label>
                  <input 
                    name='name'
                    type="text" 
                    className="w-full bg-black/50 border border-green-400/30 rounded px-4 py-3 text-green-200 font-mono focus:border-green-400 focus:outline-none transition-colors"
                    placeholder="Enter your name..."
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-green-300 text-sm mb-2">EMAIL</label>
                  <input 
                    name='email'
                    type="email" 
                    className="w-full bg-black/50 border border-green-400/30 rounded px-4 py-3 text-green-200 font-mono focus:border-green-400 focus:outline-none transition-colors"
                    placeholder="Enter your email..."
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-green-300 text-sm mb-2">MESSAGE</label>
                  <textarea 
                    name='message'
                    rows={4}
                    className="w-full bg-black/50 border border-green-400/30 rounded px-4 py-3 text-green-200 font-mono focus:border-green-400 focus:outline-none transition-colors resize-none"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full group relative overflow-hidden bg-transparent border-2 border-green-400 text-green-400 font-mono py-3 px-6 hover:bg-green-400 hover:text-black transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>TRANSMIT_MESSAGE</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;