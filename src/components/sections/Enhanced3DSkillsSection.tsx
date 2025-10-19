import { AnimatedSection } from '../AnimatedSection';
import { Github, Terminal, Globe, Bot, Database, Code2, Zap, Cpu } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useEffect, useState, useRef } from 'react';
import { BinaryDecodeText } from '../BinaryDecodeText';

export const Enhanced3DSkillsSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: false,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [dataFlowActive, setDataFlowActive] = useState(false);

  const terminalCommands = [
    '$ git clone https://github.com/ati-info/info.git',
    '$ cd elite-project && npm install',
    '$ Building production bundle...',
    '✓ Compiled successfully in 3.2s',
    '$ Initializing bot protocols...',
    '✓ Bot systems online',
    '$ npm run deploy',
    '✓ Deployment successful',
    '$ Activating monitoring systems...',
    '✓ All systems operational',
  ];

  useEffect(() => {
    if (!hasIntersected) return;

    setDataFlowActive(true);
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < terminalCommands.length) {
        setTerminalLines(prev => [...prev, terminalCommands[currentLine]]);
        currentLine++;
      } else {
        setTimeout(() => {
          setTerminalLines([]);
          currentLine = 0;
        }, 4000);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [hasIntersected]);

  // 3D Data Flow Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !dataFlowActive) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    interface DataPacket {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      size: number;
      color: string;
    }

    const packets: DataPacket[] = [];
    let animationId: number;

    const createPacket = () => {
      const startX = canvas.width * 0.2;
      const startY = canvas.height / 2;
      const targetIndex = Math.random() > 0.5 ? 0 : 1;
      const targetX = canvas.width * 0.8;
      const targetY = targetIndex === 0 ? canvas.height * 0.3 : canvas.height * 0.7;

      packets.push({
        x: startX,
        y: startY,
        targetX,
        targetY,
        progress: 0,
        size: Math.random() * 4 + 2,
        color: targetIndex === 0 ? 'rgba(0, 255, 255, ' : 'rgba(255, 0, 255, ',
      });
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new packets
      if (Math.random() > 0.95 && packets.length < 30) {
        createPacket();
      }

      // Update and draw packets
      packets.forEach((packet, index) => {
        packet.progress += 0.015;
        
        // Easing function
        const easeProgress = packet.progress < 0.5
          ? 2 * packet.progress * packet.progress
          : 1 - Math.pow(-2 * packet.progress + 2, 2) / 2;

        packet.x = packet.x + (packet.targetX - packet.x) * 0.05;
        packet.y = packet.y + (packet.targetY - packet.y) * 0.05;

        // Draw packet
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, packet.size, 0, Math.PI * 2);
        ctx.fillStyle = packet.color + (1 - packet.progress) + ')';
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = packet.color + '1)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw trail
        ctx.beginPath();
        ctx.moveTo(packet.x, packet.y);
        const trailLength = 20;
        const trailX = packet.x - (packet.targetX - packet.x) * 0.1;
        const trailY = packet.y - (packet.targetY - packet.y) * 0.1;
        ctx.lineTo(trailX, trailY);
        ctx.strokeStyle = packet.color + (0.5 - packet.progress * 0.5) + ')';
        ctx.lineWidth = packet.size / 2;
        ctx.stroke();

        // Remove completed packets
        if (packet.progress >= 1) {
          packets.splice(index, 1);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dataFlowActive]);

  const skills = [
    { name: 'React', icon: Code2, color: 'text-primary', level: 95 },
    { name: 'Node.js', icon: Zap, color: 'text-secondary', level: 90 },
    { name: 'Python', icon: Code2, color: 'text-primary', level: 92 },
    { name: 'PostgreSQL', icon: Database, color: 'text-secondary', level: 88 },
    { name: 'TypeScript', icon: Code2, color: 'text-primary', level: 93 },
    { name: 'GraphQL', icon: Cpu, color: 'text-secondary', level: 85 },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-down">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">
            <BinaryDecodeText text="SKILLS & EXPERTISE" className="text-glow-cyan text-gradient-cyber" />
          </h2>
          <p className="text-center text-muted-foreground mb-20 text-xl">
            <BinaryDecodeText text="Mastering the GitHub → Termux → Deploy Workflow" delay={500} />
          </p>
        </AnimatedSection>

        {/* 3D Data Flow Engine */}
        <div className="relative mb-24 min-h-[600px]">
          {/* Canvas for data flow */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ height: '600px' }}
          />

          {/* GitHub Node */}
          <AnimatedSection animation="scale" delay={200}>
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="terminal transform-3d card-3d-hover p-10 text-center">
                  {/* Orbital rings */}
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border-2 border-primary/20 rounded-full animate-rotate-slow"
                      style={{
                        width: `${120 + i * 30}%`,
                        height: `${120 + i * 30}%`,
                        left: `${-10 - i * 15}%`,
                        top: `${-10 - i * 15}%`,
                        animationDelay: `${i * 1}s`,
                      }}
                    />
                  ))}
                  
                  <div className="relative z-10">
                    <Github className="w-24 h-24 text-primary animate-glow-pulse mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-primary mb-2">GITHUB</h3>
                    <p className="text-sm text-muted-foreground">Version Control Hub</p>
                  </div>
                </div>

                {/* Emanating pulses */}
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 border-4 border-primary/40 rounded-full animate-glow-pulse"
                    style={{
                      width: '120%',
                      height: '120%',
                      left: '-10%',
                      top: '-10%',
                      animationDelay: `${i * 0.5}s`,
                      animation: `glow-pulse 2s ease-in-out infinite ${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Termux Central Node */}
          <AnimatedSection animation="scale" delay={400}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-96">
              <div className="terminal transform-3d p-6 relative overflow-hidden">
                {/* Scanlines effect */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="h-px bg-primary mb-6" />
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/30">
                  <Terminal className="w-6 h-6 text-terminal-green animate-glow-pulse" />
                  <span className="font-mono text-sm text-terminal-green">
                    termux@elite-system:~$
                  </span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-destructive animate-glow-pulse" />
                    <div className="w-3 h-3 rounded-full bg-secondary animate-glow-pulse" />
                    <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
                  </div>
                </div>

                <div className="h-64 overflow-hidden">
                  {terminalLines.map((line, index) => (
                    <div
                      key={index}
                      className="font-mono text-sm mb-2 animate-fade-in-left"
                      style={{
                        color: line.includes('✓')
                          ? 'hsl(120 100% 40%)'
                          : line.includes('$')
                          ? 'hsl(180 100% 50%)'
                          : 'hsl(0 0% 70%)',
                      }}
                    >
                      {line}
                    </div>
                  ))}
                  <span className="font-mono text-primary animate-blink">█</span>
                </div>

                <div className="mt-4 h-2 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-text-shimmer rounded-full" />
              </div>
            </div>
          </AnimatedSection>

          {/* Output Nodes */}
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 z-10 space-y-12">
            <AnimatedSection animation="fade-left" delay={600}>
              <div className="terminal transform-3d card-3d-hover p-8 text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <Globe className="w-16 h-16 text-primary mx-auto mb-4 animate-float relative z-10" />
                <h3 className="text-2xl font-bold text-primary relative z-10">WEBSITES</h3>
                <p className="text-sm text-muted-foreground mt-2 relative z-10">Live & Optimized</p>
                <div className="mt-4 h-1 bg-primary rounded-full relative z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={800}>
              <div className="terminal transform-3d card-3d-hover p-8 text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <Bot className="w-16 h-16 text-secondary mx-auto mb-4 animate-float relative z-10" style={{ animationDelay: '1s' }} />
                <h3 className="text-2xl font-bold text-secondary relative z-10">BOTS</h3>
                <p className="text-sm text-muted-foreground mt-2 relative z-10">24/7 Active</p>
                <div className="mt-4 h-1 bg-secondary rounded-full relative z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Skills Grid with Progress */}
        <AnimatedSection animation="fade-up" delay={1000}>
          <h3 className="text-4xl font-bold text-center mb-12">
            <BinaryDecodeText text="TECHNOLOGY MASTERY" className="text-secondary text-glow-magenta" delay={1200} />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} animation="scale" delay={1000 + index * 100}>
                <div className="terminal transform-3d card-3d-hover p-6 group">
                  <div className="flex items-center gap-4 mb-4">
                    <skill.icon className={`w-12 h-12 ${skill.color} group-hover:animate-float`} />
                    <div className="flex-grow">
                      <h4 className="font-bold text-lg">{skill.name}</h4>
                      <div className="text-sm text-muted-foreground font-mono">{skill.level}%</div>
                    </div>
                  </div>
                  
                  {/* Animated progress bar */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        skill.color === 'text-primary' ? 'bg-primary' : 'bg-secondary'
                      } transition-all duration-1000 ease-out`}
                      style={{
                        width: hasIntersected ? `${skill.level}%` : '0%',
                        boxShadow: skill.color === 'text-primary' ? 'var(--shadow-cyan)' : 'var(--shadow-magenta)',
                      }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
