import { useEffect, useState } from 'react';
import heroBg from '@/assets/hero-bg.jpg';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [displayedTitle, setDisplayedTitle] = useState('');
  const fullText = 'Full-Stack Developer';
  const fullTitle = 'Building the Future';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start title after main text
        setTimeout(() => {
          let titleIndex = 0;
          const titleInterval = setInterval(() => {
            if (titleIndex <= fullTitle.length) {
              setDisplayedTitle(fullTitle.substring(0, titleIndex));
              titleIndex++;
            } else {
              clearInterval(titleInterval);
              setShowCursor(false);
            }
          }, 80);
        }, 300);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('skills');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Glitch Effect Container */}
        <div className="relative inline-block mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-glow-cyan">
            {displayedText}
            {showCursor && <span className="animate-blink">|</span>}
          </h1>
          {/* Glitch layers */}
          <h1 
            className="text-6xl md:text-8xl font-bold mb-4 absolute top-0 left-0 text-primary opacity-70 animate-glitch"
            style={{ clipPath: 'inset(0 0 80% 0)', animationDelay: '0s' }}
          >
            {displayedText}
          </h1>
          <h1 
            className="text-6xl md:text-8xl font-bold mb-4 absolute top-0 left-0 text-secondary opacity-70 animate-glitch"
            style={{ clipPath: 'inset(80% 0 0 0)', animationDelay: '0.1s' }}
          >
            {displayedText}
          </h1>
        </div>

        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-light text-gradient-cyber mb-8">
            {displayedTitle}
            {displayedTitle && displayedTitle.length < fullTitle.length && showCursor && (
              <span className="animate-blink">|</span>
            )}
          </h2>
        </div>

        <div className="flex flex-col items-center gap-6">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-fade-in-up" style={{ animationDelay: '3s', animationFillMode: 'forwards', opacity: 0 }}>
            Crafting innovative{' '}
            <span className="text-primary font-semibold text-glow-cyan">web applications</span>
            {' '}and{' '}
            <span className="text-secondary font-semibold text-glow-magenta">intelligent bots</span>
            {' '}with GitHub workflows and Termux deployment
          </p>

          <div className="flex gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '3.5s', animationFillMode: 'forwards', opacity: 0 }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold glow-cyan hover:scale-105 transition-transform duration-300 hover:animate-glow-pulse"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-secondary text-secondary rounded-lg font-semibold glow-magenta hover:bg-secondary/10 hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-12 h-12 text-primary glow-cyan" />
      </button>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 border-2 border-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-primary/30 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};
