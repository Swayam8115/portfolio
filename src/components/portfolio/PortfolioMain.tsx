import { useEffect, useState } from 'react';
import { PortfolioNav } from './PortfolioNav';
import { IntroSection } from './IntroSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { AchievementsSection } from './AchievementsSection';
import { ContactSection } from './ContactSection';
import { FooterSection } from './FooterSection';

export function PortfolioMain() {
  const [activeSection, setActiveSection] = useState('intro');

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioNav 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />
      
      {/* Main Content */}
      <main className="relative">
        <section id="intro">
          <IntroSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="achievements">
          <AchievementsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <FooterSection />
      </main>

      {/* Section Indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
        {['intro', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
              activeSection === section
                ? 'bg-primary border-primary shadow-glow-primary'
                : 'border-muted-foreground hover:border-primary'
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>

      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300 ease-out"
          style={{
            width: typeof window !== 'undefined' 
              ? `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
              : '0%'
          }}
        />
      </div>
    </div>
  );
}