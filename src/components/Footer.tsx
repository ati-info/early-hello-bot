import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary animate-glow-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="font-mono text-sm text-muted-foreground">
            © {currentYear} <span className="text-primary">Full-Stack Developer</span>
          </div>

          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="text-primary">GitHub</span>
            <span>•</span>
            <span className="text-secondary">Termux</span>
            <span>•</span>
            <span className="text-primary">Deploy</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
      </div>
    </footer>
  );
};
