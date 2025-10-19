import { CustomCursor } from '@/components/CustomCursor';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <ParticlesBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
