import { ParticleCursor } from '@/components/ParticleCursor';
import { DigitalRainBackground } from '@/components/DigitalRainBackground';
import { ScrollDistortion } from '@/components/ScrollDistortion';
import { EnhancedHeroSection } from '@/components/sections/EnhancedHeroSection';
import { Enhanced3DSkillsSection } from '@/components/sections/Enhanced3DSkillsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleCursor />
      <DigitalRainBackground />
      <ScrollDistortion />
      
      <main className="relative z-10">
        <EnhancedHeroSection />
        <Enhanced3DSkillsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
