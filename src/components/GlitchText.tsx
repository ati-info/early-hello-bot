import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  trigger?: 'hover' | 'always';
}

export const GlitchText = ({ text, className, trigger = 'always' }: GlitchTextProps) => {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(trigger === 'always');

  useEffect(() => {
    if (!isGlitching) return;

    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    let glitchInterval: NodeJS.Timeout;

    const glitch = () => {
      const iterations = Math.floor(Math.random() * 3) + 1;
      let currentIteration = 0;

      glitchInterval = setInterval(() => {
        if (currentIteration < iterations) {
          const newText = text
            .split('')
            .map((char) => {
              if (char === ' ') return ' ';
              if (Math.random() > 0.7) {
                return chars[Math.floor(Math.random() * chars.length)];
              }
              return char;
            })
            .join('');
          setGlitchedText(newText);
          currentIteration++;
        } else {
          setGlitchedText(text);
          if (trigger === 'always') {
            setTimeout(glitch, Math.random() * 3000 + 2000);
          }
          clearInterval(glitchInterval);
        }
      }, 50);
    };

    if (trigger === 'always') {
      glitch();
    }

    return () => clearInterval(glitchInterval);
  }, [text, isGlitching, trigger]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }
  };

  return (
    <span
      className={cn('relative inline-block', className)}
      onMouseEnter={handleMouseEnter}
    >
      {glitchedText}
    </span>
  );
};
