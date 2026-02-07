import React from 'react';
import Section from '../components/Section';
import SocialIcons from '../components/SocialIcons';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          I'm currently available for freelance work or full-time opportunities. Have a project in mind? Let's talk.
        </p>
        <a 
          href="mailto:your.email@example.com"
          className="inline-block bg-cyan-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
        >
          Say Hello
        </a>
        <div className="mt-12">
          <SocialIcons />
        </div>
      </div>
      <div className="text-center mt-16 md:mt-24">
        <a
          href="#/projects"
          className="inline-flex items-center border border-cyan-500 text-cyan-500 font-bold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
          My Work
        </a>
      </div>
    </Section>
  );
};

export default Contact;