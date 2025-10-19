import { useEffect, useState } from 'react';
import heroBg from '@/assets/hero-bg.jpg';
import { ChevronDown } from 'lucide-react';
import { BinaryDecodeText } from '../BinaryDecodeText';

export const EnhancedHeroSection = () => {
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [showMain, setShowMain] = useState(false);
  const [rotation, setRotation] = useState(0);

  const bootLines = [
    '> INITIALIZING SYSTEM...',
    '> LOADING NEURAL NETWORKS...',
    '> CONNECTING TO GITHUB MATRIX...',
    '> SYNCING TERMUX ENVIRONMENT...',
    '> COMPILING PORTFOLIO DATA...',
    '> ESTABLISHING SECURE CONNECTION...',
    '> ACTIVATING DIGITAL AVATAR...',
    '> SYSTEM READY.',
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        setBootSequence((prev) => [...prev, bootLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowMain(true), 500);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('skills');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      {/* Boot Sequence */}
      {!showMain && (
        <div className="relative z-10 terminal max-w-4xl mx-4 p-8 animate-scale-in">
          <div className="mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive animate-glow-pulse" />
            <div className="w-3 h-3 rounded-full bg-secondary animate-glow-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="space-y-2 font-mono text-sm">
            {bootSequence.map((line, index) => (
              <div
                key={index}
                className="text-primary animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {line}
                {index === bootSequence.length - 1 && (
                  <span className="animate-blink ml-1">█</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      {showMain && (
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* 3D Wireframe Avatar */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-48 h-48">
              {/* Rotating wireframe circles */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-2 border-primary/30 rounded-full animate-rotate-slow"
                  style={{
                    transform: `rotateY(${rotation + i * 45}deg) rotateX(${i * 30}deg)`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
              
              {/* Central pulsing core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary animate-glow-pulse opacity-30" />
                <div className="absolute w-16 h-16 rounded-full border-4 border-primary animate-glow-pulse" />
              </div>

              {/* Data streams */}
              {[0, 90, 180, 270].map((angle) => (
                <div
                  key={angle}
                  className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-primary to-transparent"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    animation: 'data-flow 2s ease-in-out infinite',
                    animationDelay: `${angle / 360}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Name with Glitch */}
          <div className="relative mb-6">
            <h1 className="text-6xl md:text-8xl font-bold text-glow-cyan animate-fade-in-down">
              <BinaryDecodeText text="FULL-STACK DEVELOPER" />
            </h1>
            
            {/* Multiple glitch layers */}
            <h1 
              className="text-6xl md:text-8xl font-bold absolute top-0 left-0 w-full text-primary opacity-70 animate-glitch pointer-events-none"
              style={{ clipPath: 'inset(0 0 80% 0)' }}
            >
              FULL-STACK DEVELOPER
            </h1>
            <h1 
              className="text-6xl md:text-8xl font-bold absolute top-0 left-0 w-full text-secondary opacity-70 animate-glitch pointer-events-none"
              style={{ clipPath: 'inset(80% 0 0 0)', animationDelay: '0.15s' }}
            >
              FULL-STACK DEVELOPER
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards', opacity: 0 }}>
            <h2 className="text-3xl md:text-5xl font-light text-gradient-cyber mb-8">
              <BinaryDecodeText text="Digital Avatar • Code Architect • Bot Engineer" delay={800} />
            </h2>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards', opacity: 0 }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Constructing the future through{' '}
              <span className="text-primary font-semibold text-glow-cyan">GitHub-powered workflows</span>
              {' '}and{' '}
              <span className="text-secondary font-semibold text-glow-magenta">Termux deployments</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a
                href="#projects"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold glow-cyan hover:scale-110 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Explore Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-secondary text-secondary rounded-lg font-semibold glow-magenta hover:bg-secondary/10 hover:scale-110 transition-all duration-300 relative"
              >
                <span className="relative z-10">Initialize Contact</span>
              </a>
            </div>
          </div>

          {/* System stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.5s', animationFillMode: 'forwards', opacity: 0 }}>
            {[
              { label: 'PROJECTS', value: '50+' },
              { label: 'DEPLOYMENTS', value: '100+' },
              { label: 'UPTIME', value: '99.9%' },
            ].map((stat, i) => (
              <div key={stat.label} className="terminal p-4 transform-3d card-3d-hover">
                <div className="text-3xl font-bold text-primary animate-glow-pulse" style={{ animationDelay: `${i * 0.3}s` }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      {showMain && (
        <button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-12 h-12 text-primary glow-cyan" />
        </button>
      )}

      {/* Corner Decorations */}
      {[
        'top-0 left-0 border-t-2 border-l-2',
        'top-0 right-0 border-t-2 border-r-2',
        'bottom-0 left-0 border-b-2 border-l-2',
        'bottom-0 right-0 border-b-2 border-r-2',
      ].map((position, i) => (
        <div
          key={i}
          className={`absolute ${position} w-32 h-32 border-primary/20 animate-glow-pulse`}
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}
    </section>
  );
};
