import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";

import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialLinks variant="floating" />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
