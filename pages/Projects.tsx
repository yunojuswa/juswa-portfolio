
import React from 'react';
import Section from '../components/Section';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Work">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-500 card-glow hover:-translate-y-2">
          <div className="relative overflow-hidden h-48">
            <img src="https://picsum.photos/seed/project1/600/400" alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
               <span className="text-xs font-mono text-cyan-400">View Details</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Project Title One</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-900/30 text-cyan-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-cyan-500/20">React</span>
              <span className="bg-cyan-900/30 text-cyan-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-cyan-500/20">TypeScript</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">A brief description of the project, its purpose, and the technologies used.</p>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 font-bold text-sm inline-flex items-center group/link uppercase tracking-widest">
              Live Preview
              <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-500 card-glow hover:-translate-y-2">
          <div className="relative overflow-hidden h-48">
            <img src="https://picsum.photos/seed/project2/600/400" alt="Project 2" className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
               <span className="text-xs font-mono text-cyan-400">View Details</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Project Title Two</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-900/30 text-cyan-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-cyan-500/20">Next.js</span>
              <span className="bg-cyan-900/30 text-cyan-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-cyan-500/20">Tailwind</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">A brief description of the project, its purpose, and the technologies used.</p>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 font-bold text-sm inline-flex items-center group/link uppercase tracking-widest">
              Live Preview
              <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-500 card-glow hover:-translate-y-2">
          <div className="relative overflow-hidden h-48">
            <img src="https://picsum.photos/seed/project3/600/400" alt="Project 3" className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
               <span className="text-xs font-mono text-cyan-400">View Details</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Project Title Three</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-900/30 text-cyan-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-cyan-500/20">Vue</span>
              <span className="bg-cyan-900/30 text-cyan-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-cyan-500/20">Firebase</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">A brief description of the project, its purpose, and the technologies used.</p>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 font-bold text-sm inline-flex items-center group/link uppercase tracking-widest">
              Live Preview
              <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* FIXED NAVIGATION BUTTONS FOR MOBILE */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-5xl mx-auto mt-20 md:mt-32 px-4">
        <a
          href="#/about"
          className="w-full sm:w-auto text-center inline-flex items-center justify-center border border-white/20 text-white font-bold py-4 px-10 rounded-xl hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
          Back to About
        </a>
        <a
          href="#/contact"
          className="w-full sm:w-auto text-center inline-flex items-center justify-center bg-cyan-500 text-black font-bold py-4 px-10 rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
        >
          Get in Touch
          <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </Section>
  );
};

export default Projects;
