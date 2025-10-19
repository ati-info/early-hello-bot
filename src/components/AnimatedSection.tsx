import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'none';
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const animationClasses = {
    'fade-up': 'animate-fade-in-up',
    'fade-down': 'animate-fade-in-down',
    'fade-left': 'animate-fade-in-left',
    'fade-right': 'animate-fade-in-right',
    'scale': 'animate-scale-in',
    'none': '',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        hasIntersected && animationClasses[animation],
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
};
