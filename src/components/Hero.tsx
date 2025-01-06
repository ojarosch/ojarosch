import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-white">
      <div className="text-center">
        <img src="https://github.com/ojarosch.png" alt="Profile Picture" className="rounded-full w-32 h-32 mx-auto mb-4" />
        <h1 className="text-6xl font-bold mb-4 text-gray-800">Oliver Jarosch</h1>
        <p className="text-2xl text-gray-600">Cloud Solution Architect</p>
      </div>
    </section>
  );
};

export default Hero;