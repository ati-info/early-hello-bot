import { AnimatedSection } from '../AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      toast.success('Message transmitted successfully!', {
        description: 'I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'text-secondary',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contact@example.com',
      color: 'text-primary',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative bg-gradient-to-b from-transparent to-card/50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-glow-magenta">
            <span className="text-gradient-cyber">Get In Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Let's build something amazing together
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <AnimatedSection animation="fade-right" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="terminal p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-primary mb-2">
                    &gt; Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-primary/30 focus:border-primary focus:glow-cyan transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-primary mb-2">
                    &gt; Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-primary/30 focus:border-primary focus:glow-cyan transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-primary mb-2">
                    &gt; Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-primary/30 focus:border-primary focus:glow-cyan transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-semibold text-lg py-6 group"
                >
                  {isSending ? (
                    <>
                      <span className="animate-pulse">Transmitting Data</span>
                      <span className="animate-blink">...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>

                {isSending && (
                  <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-text-shimmer rounded-full" />
                )}
              </div>
            </form>
          </AnimatedSection>

          {/* Social Links & Info */}
          <AnimatedSection animation="fade-left" delay={400}>
            <div className="space-y-6">
              <div className="terminal p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4 text-glow-magenta">
                  Connect With Me
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <AnimatedSection key={link.label} animation="fade-left" delay={600 + index * 100}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-primary transition-all duration-300 group card-3d-hover"
                      >
                        <div className={`${link.color}`}>
                          <link.icon className="w-6 h-6 group-hover:animate-float" />
                        </div>
                        <span className="font-semibold group-hover:text-primary transition-colors">
                          {link.label}
                        </span>
                      </a>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              <AnimatedSection animation="scale" delay={800}>
                <div className="terminal p-6 text-center">
                  <p className="font-mono text-sm text-primary mb-2">&gt; Response Time</p>
                  <p className="text-2xl font-bold text-gradient-cyber">24 Hours</p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
