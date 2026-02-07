import React from 'react';
import TypingSubheading from './TypingSubheading';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl px-4">
        <a href="#/" className="inline-block group cursor-pointer mb-4">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter iridescent-hover-text transition-all duration-700 group-hover:scale-[1.05] group-hover:tracking-normal px-6 pb-6 pt-2"
          >
            juswa<span className="text-cyan-500 group-hover:text-cyan-400 transition-colors duration-500">.</span>
          </h1>
        </a>
        <TypingSubheading text=":>" />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <a 
            href="#/projects"
            className="w-full sm:w-auto bg-cyan-500 text-black font-bold py-4 px-10 rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            View My Work
          </a>
          <a
            href="#/contact"
            className="w-full sm:w-auto border border-white/20 text-white font-bold py-4 px-10 rounded-xl hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;