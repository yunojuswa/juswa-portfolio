import React, { useState, useEffect } from 'react';

interface IntroProps {
  onComplete: () => void;
}

const INTRO_TEXT_1 = "hello, ";
const INTRO_TEXT_2 = "I'm Juswa";
const TYPING_SPEED = 120;
const PRE_TYPE_DELAY = 1000;
const POST_TYPE_DELAY = 2000;
const FADE_OUT_DURATION = 1500;

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [stage, setStage] = useState<'delay' | 'typing1' | 'typing2' | 'fading' | 'done'>('delay');

  useEffect(() => {
    if (stage === 'delay') {
      const timer = setTimeout(() => setStage('typing1'), PRE_TYPE_DELAY);
      return () => clearTimeout(timer);
    }

    if (stage === 'typing1') {
      if (text1.length < INTRO_TEXT_1.length) {
        const timer = setTimeout(() => {
          setText1(INTRO_TEXT_1.slice(0, text1.length + 1));
        }, TYPING_SPEED);
        return () => clearTimeout(timer);
      } else {
        setStage('typing2');
      }
    }
    
    if (stage === 'typing2') {
        if (text2.length < INTRO_TEXT_2.length) {
            const timer = setTimeout(() => {
                setText2(INTRO_TEXT_2.slice(0, text2.length + 1));
            }, TYPING_SPEED);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => setStage('fading'), POST_TYPE_DELAY);
            return () => clearTimeout(timer);
        }
    }

    if (stage === 'fading') {
      onComplete();
      const timer = setTimeout(() => setStage('done'), FADE_OUT_DURATION);
      return () => clearTimeout(timer);
    }
  }, [stage, text1, text2, onComplete]);

  if (stage === 'done') {
    return null;
  }

  const isFading = stage === 'fading';
  const showCursor1 = stage === 'typing1';
  const showCursor2 = stage === 'typing2';

  return (
    <div
      className={`fixed inset-0 bg-black flex justify-center items-center z-[100] transition-opacity duration-1000 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`text-white text-4xl md:text-7xl font-mono transition-all duration-1000 flex flex-wrap justify-center items-center px-6 ${
          isFading ? 'blur-lg scale-110' : 'blur-0 scale-100'
        }`}
      >
        <span className={`${showCursor1 ? 'typing-text' : ''} whitespace-pre`}>
          {text1}
        </span>
        {/* Added font-bold to make the name part stand out */}
        <span className={`iridescent-text font-bold px-4 pb-4 ${showCursor2 ? 'typing-text' : ''}`}>
          {text2}
        </span>
      </div>
    </div>
  );
};

export default Intro;