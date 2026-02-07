import React, { useState, useEffect } from 'react';

interface TypingSubheadingProps {
  text: string;
}

const TYPING_SPEED = 75;

const TypingSubheading: React.FC<TypingSubheadingProps> = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping && typedText.length < text.length) {
      const timer = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timer);
    } else if (typedText.length === text.length) {
        setIsTyping(false);
    }
  }, [typedText, text, isTyping]);

  return (
    <p className={`text-lg md:text-xl text-gray-400 mb-6 font-mono h-8 ${isTyping ? 'typing-text' : ''}`}>
      {typedText}
    </p>
  );
};

export default TypingSubheading;
