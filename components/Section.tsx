import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-32">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-100">{title}</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;