import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <section className="py-20 bg-secondary" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Connect With Me</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/oliver-jarosch/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
            <Linkedin size={32} />
          </a>
          <a href="https://github.com/ojarosch" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
            <Github size={32} />
          </a>
          <a href="mailto:ojarosch95@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
            <Mail size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;