import React from 'react';
import Section from '../components/Section';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Work">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 card-glow">
          <img src="https://picsum.photos/seed/project1/600/400" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Project Title One</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">React</span>
              <span className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">TypeScript</span>
            </div>
            <p className="text-gray-400 mb-4">A brief description of the project, its purpose, and the technologies used.</p>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center group">
              View Project
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 card-glow">
          <img src="https://picsum.photos/seed/project2/600/400" alt="Project 2" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Project Title Two</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">Next.js</span>
              <span className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">Tailwind CSS</span>
            </div>
            <p className="text-gray-400 mb-4">A brief description of the project, its purpose, and the technologies used.</p>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center group">
              View Project
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 card-glow">
          <img src="https://picsum.photos/seed/project3/600/400" alt="Project 3" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Project Title Three</h3>
              <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">Vue</span>
              <span className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">Firebase</span>
            </div>
            <p className="text-gray-400 mb-4">A brief description of the project, its purpose, and the technologies used.</p>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center group">
              View Project
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center max-w-5xl mx-auto mt-16 md:mt-24">
        <a
          href="#/about"
          className="inline-flex items-center border border-cyan-500 text-cyan-500 font-bold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
          About Me
        </a>
        <a
          href="#/contact"
          className="inline-flex items-center bg-cyan-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
        >
          Get in Touch
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </Section>
  );
};

export default Projects;