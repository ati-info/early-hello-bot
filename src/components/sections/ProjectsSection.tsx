import { AnimatedSection } from '../AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack online store with React, Node.js, and Stripe integration. Deployed via GitHub Actions and Termux automation.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      color: 'primary',
    },
    {
      title: 'Discord Bot Suite',
      description: 'Automated moderation and engagement bot with custom commands. Running 24/7 on Termux with GitHub version control.',
      tech: ['Python', 'Discord.py', 'SQLite'],
      color: 'secondary',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform with interactive charts and live updates. Deployed from GitHub to cloud.',
      tech: ['React', 'D3.js', 'WebSocket', 'Express'],
      color: 'primary',
    },
    {
      title: 'Telegram News Bot',
      description: 'Automated news aggregation bot that fetches and delivers personalized content. Managed through Termux workflows.',
      tech: ['Node.js', 'Telegram API', 'RSS'],
      color: 'secondary',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-glow-cyan">
            <span className="text-gradient-cyber">Featured Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Innovative solutions built with cutting-edge technology
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              delay={index * 150}
            >
              <Card className="terminal transform-3d card-3d-hover p-8 h-full group overflow-hidden relative">
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${
                    project.color === 'primary' ? 'from-primary to-secondary' : 'from-secondary to-primary'
                  }`}
                />

                <div className="relative z-10">
                  {/* Project Title with Glitch Effect on Hover */}
                  <div className="relative mb-4">
                    <h3
                      className={`text-2xl font-bold mb-3 ${
                        project.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <div
                      className={`h-1 w-20 rounded-full ${
                        project.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      } group-hover:w-full transition-all duration-500`}
                    />
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 bg-card border border-border rounded-full group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 ${
                        project.color === 'primary'
                          ? 'border-primary text-primary hover:bg-primary/10'
                          : 'border-secondary text-secondary hover:bg-secondary/10'
                      } transition-all duration-300 hover:scale-105 font-semibold`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 ${
                    project.color === 'primary' ? 'border-primary/20' : 'border-secondary/20'
                  } group-hover:border-opacity-100 transition-all duration-500`}
                />
                <div
                  className={`absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 ${
                    project.color === 'primary' ? 'border-primary/20' : 'border-secondary/20'
                  } group-hover:border-opacity-100 transition-all duration-500`}
                />
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="text-center mt-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg glow-cyan hover:scale-105 transition-transform duration-300 hover:animate-glow-pulse"
            >
              <Github className="w-6 h-6" />
              View All on GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
