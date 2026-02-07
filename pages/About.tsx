import React from 'react';
import Section from '../components/Section';
import AuraText from '../components/AuraText';

const About: React.FC = () => {
  // Replace this URL with your own image link
  const PROFILE_IMAGE_URL = "pictures/profile.jpg";

  return (
    <Section id="about" title="About Me">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-cyan-500/30 overflow-hidden bg-gray-900 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:border-cyan-400 group-hover:scale-[1.02]">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <svg className="absolute w-16 h-16 text-gray-700 -z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 text-center md:text-left text-lg text-gray-300 space-y-6">
          <p>
            Hello! I'm a developer who loves building 
            <AuraText 
              text="immersive digital worlds" 
              colorFrom="from-purple-500" 
              colorTo="to-pink-500" 
              glowSize="-inset-x-6 -inset-y-2"
              blurLevel="blur-2xl"
              opacityBase="opacity-40"
            /> 
            and pushing the boundaries of what's possible.
          </p>
          <p>
            I specialize in 
            <AuraText text="High-Performance Apps" colorFrom="from-cyan-400" colorTo="to-emerald-400" /> 
            with a heavy focus on 
            <AuraText 
              text="Clean Aesthetics" 
              colorFrom="from-orange-400" 
              colorTo="to-red-500"
              blurLevel="blur-md"
              glowSize="-inset-x-1"
              opacityBase="opacity-10"
            />. 
          </p>
          
          <div className="pt-6 border-t border-gray-800/50">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Core Philosophy</p>
            <p className="italic text-gray-400">
              "Design is not just what it looks like and feels like. Design is how it <AuraText text="works" colorFrom="from-blue-400" colorTo="to-indigo-600" blurLevel="blur-3xl" opacityBase="opacity-50" />."
            </p>
            <p className="mt-4 text-sm">
              Check out my latest code on 
              <AuraText 
                text="GitHub" 
                href="https://github.com/yunojuswa" 
                target="_blank"
                colorFrom="from-gray-400" 
                colorTo="to-gray-100"
                glowSize="-inset-x-4"
                opacityBase="opacity-20"
              />
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16 md:mt-24">
        <a
          href="#/projects"
          className="inline-flex items-center bg-cyan-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
        >
          View My Work
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </Section>
  );
};

export default About;