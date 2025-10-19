import { useEffect, useRef } from 'react';

export const ScrollDistortion = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let time = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Decay velocity
      scrollVelocity *= 0.95;

      if (scrollVelocity > 0.5) {
        time += 0.1;

        // Draw distortion waves
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, `rgba(0, 255, 255, ${Math.min(scrollVelocity / 50, 0.3)})`);
        gradient.addColorStop(0.5, `rgba(255, 0, 255, ${Math.min(scrollVelocity / 50, 0.3)})`);
        gradient.addColorStop(1, `rgba(0, 255, 255, ${Math.min(scrollVelocity / 50, 0.3)})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;

        // Draw multiple sine waves
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          const offset = i * 100;
          const amplitude = scrollVelocity * 2;
          const frequency = 0.01;

          for (let x = 0; x < canvas.width; x += 5) {
            const y = canvas.height / 2 + Math.sin((x + offset) * frequency + time) * amplitude;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }

        // Draw radial blur effect at scroll position
        const centerY = (window.scrollY % canvas.height);
        const radialGradient = ctx.createRadialGradient(
          canvas.width / 2, centerY, 0,
          canvas.width / 2, centerY, 200
        );
        radialGradient.addColorStop(0, `rgba(0, 255, 255, ${Math.min(scrollVelocity / 30, 0.2)})`);
        radialGradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        
        ctx.fillStyle = radialGradient;
        ctx.fillRect(0, centerY - 200, canvas.width, 400);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-5 mix-blend-screen"
      style={{ opacity: 0.6 }}
    />
  );
};
