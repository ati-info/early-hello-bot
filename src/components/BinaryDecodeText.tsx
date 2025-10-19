import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface BinaryDecodeTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BinaryDecodeText = ({ text, className, delay = 0 }: BinaryDecodeTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecoding, setIsDecoding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDecoding(true);
      let currentIndex = 0;
      const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*';

      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          // Generate random characters for remaining positions
          let newText = text.substring(0, currentIndex);
          for (let i = currentIndex; i < text.length; i++) {
            if (text[i] === ' ') {
              newText += ' ';
            } else {
              newText += chars[Math.floor(Math.random() * chars.length)];
            }
          }
          setDisplayText(newText);
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsDecoding(false);
          setDisplayText(text);
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className={cn('font-mono', isDecoding && 'text-primary', className)}>
      {displayText || text}
    </span>
  );
};
