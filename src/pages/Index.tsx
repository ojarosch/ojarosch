import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import Certifications from '../components/Certifications';
import SocialLinks from '../components/SocialLinks';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Languages />
      <Certifications />
      <SocialLinks />
    </div>
  );
};

export default Index;