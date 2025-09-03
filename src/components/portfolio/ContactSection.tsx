import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "swayampatel2421@gmail.com",
    href: "mailto:swayampatel2421@gmail.com",
    color: "primary"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Swayam8115",
    href: "https://github.com/Swayam8115",
    color: "accent"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/swayam-patel-4032a7297/",
    href: "https://www.linkedin.com/in/swayam-patel-4032a7297/",
    color: "neon-cyan"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "IIIT Pune, India",
    href: "#",
    color: "neon-green"
  }
];


export function ContactSection() {
  return (
    <section className="min-h-screen py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10" />
      <div className="absolute top-20 left-20 w-40 h-40 border border-primary/20 rounded-lg rotate-12 floating-animation" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-accent/20 rounded-full floating-animation" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-10 w-6 h-6 bg-neon-green/30 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            Let's build something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card 
                  key={contact.label}
                  className="portfolio-card group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => contact.href !== '#' && window.open(contact.href, '_blank')}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-${contact.color}/10 border border-${contact.color}/20 group-hover:bg-${contact.color}/20 transition-colors`}>
                        <Icon className={`w-6 h-6 text-${contact.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <Card className="portfolio-card bg-gradient-to-br from-card via-card to-card/50 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text text-center">
                  Ready to Start a Project?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking for a collaborator on an innovative project, 
                  seeking technical expertise, or exploring internship opportunities, 
                  I'd love to hear from you!
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                  onClick={() => window.open('mailto:swayampatel2421@gmail.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>


        </div>
      </div>
    </section>
  );
}