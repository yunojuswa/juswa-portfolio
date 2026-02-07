import React from 'react';
import TypingSubheading from './TypingSubheading';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 iridescent-blue"
        >
          juswa
        </h1>
        <TypingSubheading text=":>" />
        <div className="flex justify-center items-center space-x-4">
          <a 
            href="#/projects"
            className="bg-cyan-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#/contact"
            className="border border-cyan-500 text-cyan-500 font-bold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;