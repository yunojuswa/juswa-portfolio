
import React, { useState, useEffect } from 'react';
import Starfield from './components/Starfield';
import Header from './components/Header';
import Intro from './components/Intro';
import SocialIcons from './components/SocialIcons';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/about':
        return <About />;
      case '#/projects':
        return <Projects />;
      case '#/contact':
        return <Contact />;
      case '#/':
      default:
        return <Home />;
    }
  };
  
  const isHomePage = route === '#/';

  return (
    <div className={`bg-black text-white min-h-screen antialiased relative flex flex-col ${isHomePage ? 'h-screen' : ''}`}>
      <Intro onComplete={() => setIntroComplete(true)} />
      <Starfield starCount={2000} />
      
      <div className={`relative z-10 flex flex-col flex-grow transition-opacity duration-1000 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main className={`container mx-auto px-6 md:px-12 flex-grow ${isHomePage ? 'flex' : ''}`}>
          {renderPage()}
        </main>
        
        <footer className={`
          relative z-20 mx-auto px-8 py-6 mb-8 
          max-w-2xl w-[90%] md:w-full
          border border-gray-800/40 
          bg-gray-900/20 backdrop-blur-sm
          rounded-2xl shadow-2xl
          transform transition-all duration-500 
          scale-90 hover:scale-95 hover:bg-gray-800/30 hover:border-gray-700/50
          text-center text-gray-500 text-xs
          ${isHomePage ? 'mt-auto' : 'mt-24'}
        `}>
          <div className="mb-4 opacity-70 hover:opacity-100 transition-opacity">
            <SocialIcons />
          </div>
          <p className="font-mono uppercase tracking-[0.2em] mb-4">Vibe Coded with</p>
          <div className="my-6 flex justify-center opacity-60 hover:opacity-100 transition-opacity">
            <img src="pictures/googleAIpic.png" alt="Google AI Studio" className="max-w-[180px] w-full grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500" />
          </div>
          <p className="font-light tracking-wide">&copy; {new Date().getFullYear()} juswa. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
