import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

export const ParticleCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );

      // Create new particles
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          size: Math.random() * 4 + 2,
          color: Math.random() > 0.5 ? 'rgba(0, 255, 255, ' : 'rgba(255, 0, 255, ',
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.02;
        particle.rotation += particle.rotationSpeed;
        particle.vy += 0.1; // Gravity

        if (particle.life <= 0) return false;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        // Draw 3D cube effect
        const alpha = particle.life;
        ctx.strokeStyle = particle.color + alpha + ')';
        ctx.lineWidth = 2;
        
        // Front face
        ctx.strokeRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        
        // 3D effect lines
        ctx.beginPath();
        ctx.moveTo(-particle.size / 2, -particle.size / 2);
        ctx.lineTo(-particle.size / 2 - 2, -particle.size / 2 - 2);
        ctx.moveTo(particle.size / 2, -particle.size / 2);
        ctx.lineTo(particle.size / 2 + 2, -particle.size / 2 - 2);
        ctx.moveTo(-particle.size / 2, particle.size / 2);
        ctx.lineTo(-particle.size / 2 - 2, particle.size / 2 + 2);
        ctx.moveTo(particle.size / 2, particle.size / 2);
        ctx.lineTo(particle.size / 2 + 2, particle.size / 2 + 2);
        ctx.stroke();

        // Glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color + alpha + ')';
        ctx.strokeRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        
        ctx.restore();
        return true;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 mix-blend-screen"
      />
      
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
            isPointer ? 'w-10 h-10 opacity-20' : 'w-5 h-5 opacity-60'
          }`}
          style={{
            boxShadow: isPointer
              ? '0 0 30px hsl(180 100% 50% / 1), 0 0 60px hsl(300 100% 50% / 0.5)'
              : '0 0 15px hsl(180 100% 50% / 0.8)',
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
          <div className="w-16 h-16 rounded-full border-2 border-secondary animate-glow-pulse" />
        </div>
      )}
    </>
  );
};
