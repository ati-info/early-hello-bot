import { AnimatedSection } from '../AnimatedSection';
import { Github, Terminal, Globe, Bot, Database, Code2, Zap } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

export const SkillsSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const terminalCommands = [
    '$ git clone https://github.com/project.git',
    '$ cd project && npm install',
    '$ npm run build',
    '$ deploying to production...',
    '✓ Build successful',
    '✓ Deployment complete',
    '$ Running bot automation...',
    '✓ Bot active and monitoring',
  ];

  useEffect(() => {
    if (!hasIntersected) return;

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < terminalCommands.length) {
        setTerminalLines(prev => [...prev, terminalCommands[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        // Loop back after a delay
        setTimeout(() => {
          setTerminalLines([]);
          currentLine = 0;
        }, 3000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [hasIntersected]);

  const skills = [
    { name: 'React', icon: Code2, color: 'text-primary' },
    { name: 'Node.js', icon: Zap, color: 'text-secondary' },
    { name: 'Python', icon: Code2, color: 'text-primary' },
    { name: 'PostgreSQL', icon: Database, color: 'text-secondary' },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-glow-cyan">
            <span className="text-gradient-cyber">Skills & Expertise</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Mastering the GitHub → Termux → Deploy workflow
          </p>
        </AnimatedSection>

        {/* GitHub to Termux Flow Diagram */}
        <div className="relative mb-20">
          <AnimatedSection animation="scale" delay={200}>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* GitHub Hub */}
              <div className="relative">
                <div className="terminal transform-3d card-3d-hover p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Github className="w-20 h-20 text-primary animate-glow-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">GitHub</h3>
                  <p className="text-sm text-muted-foreground">Source Control & Collaboration</p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>
                {/* Data flow animation - right */}
                {hasIntersected && (
                  <div className="hidden md:block absolute top-1/2 -right-12 w-24 h-1 bg-gradient-to-r from-primary to-secondary overflow-hidden">
                    <div className="w-4 h-full bg-white/80 animate-data-flow" />
                  </div>
                )}
              </div>

              {/* Termux Terminal */}
              <div className="relative">
                <div className="terminal transform-3d card-3d-hover p-6">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/30">
                    <Terminal className="w-6 h-6 text-terminal-green" />
                    <span className="font-mono text-sm text-terminal-green">termux@localhost:~$</span>
                  </div>
                  <div className="h-48 overflow-hidden">
                    {terminalLines.map((line, index) => (
                      <div
                        key={index}
                        className="font-mono text-sm mb-2 animate-fade-in-up"
                        style={{
                          color: line.includes('✓') ? 'hsl(120 100% 40%)' : 'hsl(180 100% 50%)',
                        }}
                      >
                        {line}
                      </div>
                    ))}
                    <span className="font-mono text-primary animate-blink">_</span>
                  </div>
                </div>
                {/* Data flow animation - right */}
                {hasIntersected && (
                  <div className="hidden md:block absolute top-1/2 -right-12 w-24 h-1 bg-gradient-to-r from-secondary to-primary overflow-hidden">
                    <div className="w-4 h-full bg-white/80 animate-data-flow" style={{ animationDelay: '0.5s' }} />
                  </div>
                )}
              </div>

              {/* Deployment Outputs */}
              <div className="space-y-6">
                <AnimatedSection animation="fade-left" delay={400}>
                  <div className="terminal transform-3d card-3d-hover p-6 text-center">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-3 animate-float" />
                    <h3 className="text-xl font-bold text-primary">Websites</h3>
                    <p className="text-sm text-muted-foreground mt-2">Deployed & Live</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-left" delay={600}>
                  <div className="terminal transform-3d card-3d-hover p-6 text-center">
                    <Bot className="w-12 h-12 text-secondary mx-auto mb-3 animate-float" style={{ animationDelay: '1s' }} />
                    <h3 className="text-xl font-bold text-secondary">Bots</h3>
                    <p className="text-sm text-muted-foreground mt-2">Automated & Running</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Technology Stack */}
        <AnimatedSection animation="fade-up" delay={800}>
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} animation="scale" delay={800 + index * 100}>
                <div className="terminal transform-3d card-3d-hover p-6 text-center group">
                  <skill.icon className={`w-16 h-16 mx-auto mb-4 ${skill.color} group-hover:animate-float`} />
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
