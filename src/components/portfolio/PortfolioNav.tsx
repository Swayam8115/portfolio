import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Briefcase, 
  Code, 
  Wrench, 
  Trophy, 
  Mail,
  Menu,
  X
} from 'lucide-react';

interface PortfolioNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { section: 'intro', label: 'Intro', icon: User },
  { section: 'experience', label: 'Experience', icon: Briefcase },
  { section: 'projects', label: 'Projects', icon: Code },
  { section: 'skills', label: 'Skills', icon: Wrench },
  { section: 'achievements', label: 'Achievements', icon: Trophy },
  { section: 'contact', label: 'Contact', icon: Mail },
];

export function PortfolioNav({ activeSection, onSectionChange }: PortfolioNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-card/90 backdrop-blur-xl border border-primary/20 rounded-full px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-1">
          {navigationItems.map((nav) => {
            const Icon = nav.icon;
            const isActive = activeSection === nav.section;
            
            return (
              <div key={nav.section} className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const element = document.getElementById(nav.section);
                    element?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                    onSectionChange(nav.section);
                  }}
                  className={`relative px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/10 group rounded-full ${
                    isActive 
                      ? 'text-primary bg-primary/10 shadow-glow-primary/20' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-card'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="font-medium transition-colors duration-300 group-hover:text-primary">{nav.label}</span>
                  
                  {/* Active indicator - glowing dot */}
                  {isActive && (
                    <>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary/30 rounded-full blur-sm animate-pulse" />
                    </>
                  )}
                  
                  {/* Hover underline */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent transform origin-left transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
                </Button>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <Button
          variant={isMobileMenuOpen ? "default" : "secondary"}
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-card/80 backdrop-blur-md border border-border"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navigationItems.map((nav) => {
              const Icon = nav.icon;
              const isActive = activeSection === nav.section;
              
              return (
                <Button
                  key={nav.section}
                  variant={isActive ? "default" : "ghost"}
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById(nav.section);
                    element?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                    onSectionChange(nav.section);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-48 transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-primary text-primary-foreground shadow-glow-primary' 
                      : 'hover:bg-muted'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {nav.label}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}