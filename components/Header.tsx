import React, { useState, useEffect } from 'react';
import SocialIcons from './SocialIcons';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Projects', href: '#/projects' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled && !isMenuOpen ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-6 md:px-12">
        <a 
          href="#/" 
          className="text-2xl font-bold tracking-tighter cursor-pointer z-[110] transition-colors hover:text-cyan-400" 
          onClick={closeMenu}
        >
          juswa<span className="text-cyan-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.filter(l => l.name !== 'Home').map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="group relative text-gray-400 hover:text-white transition-colors font-medium tracking-wide text-xs uppercase"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-[110] p-2 text-white transition-colors focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="w-6 h-5 relative flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-500 absolute ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-500 absolute ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>

      {/* Full-Screen Mobile Navigation Overlay */}
      <div 
        className={`
          fixed inset-0 bg-black/95 backdrop-blur-[40px] transition-all duration-700 ease-in-out md:hidden
          flex flex-col justify-center items-center z-[105]
          ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'}
        `}
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <nav className="flex flex-col items-center space-y-8 relative z-10 w-full px-6">
          {navLinks.map((link, index) => (
            <div
              key={link.name}
              className={`
                transform transition-all duration-700
                ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 80 + 100}ms` }}
            >
              <a
                href={link.href}
                onClick={closeMenu}
                className="group relative block text-center"
              >
                <span className="text-3xl font-bold tracking-tight text-gray-100 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-110 inline-block">
                  {link.name}<span className="text-cyan-500 opacity-50">.</span>
                </span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Discover
                </span>
              </a>
            </div>
          ))}
        </nav>
        
        {/* Mobile Menu Footer */}
        <div 
          className={`
            absolute bottom-12 left-0 right-0 flex flex-col items-center transition-all duration-1000 delay-500
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="w-10 h-px bg-white/10 mb-8"></div>
          <div className="scale-90">
            <SocialIcons />
          </div>
          <p className="text-gray-600 uppercase tracking-[0.3em] text-[9px] mt-6 font-mono">Based in the Digital Ether</p>
        </div>
      </div>
    </header>
  );
};

export default Header;