import { AnimatedSection } from '../AnimatedSection';
import { Code, Rocket, Heart, Lightbulb } from 'lucide-react';

export const AboutSection = () => {
  const journey = [
    {
      icon: Lightbulb,
      title: 'The Beginning',
      description: 'Started coding with a passion for creating digital solutions that solve real-world problems.',
      color: 'text-primary',
    },
    {
      icon: Code,
      title: 'Full-Stack Mastery',
      description: 'Developed expertise across the entire technology stack, from frontend interfaces to backend systems.',
      color: 'text-secondary',
    },
    {
      icon: Rocket,
      title: 'GitHub & Termux',
      description: 'Perfected the workflow of version control, deployment automation, and bot creation using powerful command-line tools.',
      color: 'text-primary',
    },
    {
      icon: Heart,
      title: 'Continuous Innovation',
      description: 'Always learning, always building, always pushing the boundaries of what\'s possible with code.',
      color: 'text-secondary',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative bg-gradient-to-b from-transparent to-card/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-glow-magenta">
            <span className="text-gradient-cyber">About Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Journey of a passionate developer
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          {journey.map((item, index) => (
            <AnimatedSection
              key={item.title}
              animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              delay={index * 200}
            >
              <div className="terminal transform-3d card-3d-hover p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className={`flex-shrink-0 ${item.color}`}>
                  <div className="w-16 h-16 rounded-lg bg-card/50 flex items-center justify-center glow-cyan">
                    <item.icon className="w-10 h-10" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-1 ${item.color === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`} />
                    <h3 className={`text-2xl font-bold ${item.color}`}>{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={800}>
          <div className="mt-16 terminal p-8 text-center">
            <p className="text-xl text-foreground mb-6 leading-relaxed">
              <span className="text-primary font-semibold text-glow-cyan">Innovation</span> meets{' '}
              <span className="text-secondary font-semibold text-glow-magenta">execution</span> in every line of code I write.
            </p>
            <p className="text-muted-foreground text-lg">
              I believe in building not just functional applications, but experiences that push the envelope of what's possible in web development.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
