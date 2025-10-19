import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrail(prev => [...prev.slice(-8), newTrail]);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Trail dots */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 rounded-full bg-primary/20 mix-blend-screen"
          style={{
            left: point.x,
            top: point.y,
            width: `${8 - index * 0.8}px`,
            height: `${8 - index * 0.8}px`,
            transform: 'translate(-50%, -50%)',
            opacity: 1 - index * 0.12,
            transition: 'opacity 0.3s ease-out',
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-primary transition-all duration-200 ${
            isPointer ? 'w-8 h-8 opacity-30' : 'w-4 h-4 opacity-80'
          }`}
          style={{
            boxShadow: isPointer
              ? '0 0 20px hsl(180 100% 50% / 0.8)'
              : '0 0 10px hsl(180 100% 50% / 0.6)',
          }}
        />
      </div>

      {/* Outer ring on pointer */}
      {isPointer && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-secondary animate-glow-pulse" />
        </div>
      )}
    </>
  );
};
