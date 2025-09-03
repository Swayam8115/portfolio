import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';


export function IntroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />
      
      {/* Advanced Floating Tech Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/30 rounded-lg rotate-12 floating-animation">
        <div className="absolute inset-4 border border-primary/20 rounded-md">
          <div className="absolute top-1 left-1 w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-accent/30 rotate-45 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="absolute inset-2 grid grid-cols-2 gap-1">
          <div className="bg-accent/20 rounded-sm animate-pulse" />
          <div className="bg-primary/20 rounded-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="bg-neon-green/20 rounded-sm animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="bg-accent/30 rounded-sm animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
      
      <div className="absolute bottom-40 left-40 w-16 h-16 border-2 border-neon-green/30 rounded-full floating-animation" style={{ animationDelay: '4s' }}>
        <div className="absolute inset-1 border border-neon-green/20 rounded-full">
          <div className="absolute inset-2 bg-neon-green/10 rounded-full animate-pulse" />
        </div>
      </div>
      
      {/* Animated Circuit Lines */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <path d="M20 20 L180 20 L180 180 L20 180 Z" stroke="hsl(270 100% 70%)" strokeWidth="1" fill="none" className="animate-pulse" />
          <circle cx="50" cy="50" r="3" fill="hsl(195 100% 60%)" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="150" cy="150" r="2" fill="hsl(150 100% 60%)" className="animate-pulse" style={{ animationDelay: '2s' }} />
          <path d="M50 50 L150 150" stroke="hsl(195 100% 60%)" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        </svg>
      </div>
      
      {/* Connected Nodes Pattern */}
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 opacity-30">
        <svg className="w-full h-full animate-pulse" viewBox="0 0 150 150">
          <g className="animated-nodes">
            <circle cx="25" cy="25" r="2" fill="hsl(270 100% 70%)" />
            <circle cx="125" cy="25" r="2" fill="hsl(195 100% 60%)" />
            <circle cx="75" cy="125" r="2" fill="hsl(150 100% 60%)" />
            <line x1="25" y1="25" x2="125" y2="25" stroke="hsl(270 100% 70%)" strokeWidth="0.5" />
            <line x1="125" y1="25" x2="75" y2="125" stroke="hsl(195 100% 60%)" strokeWidth="0.5" />
            <line x1="75" y1="125" x2="25" y2="25" stroke="hsl(150 100% 60%)" strokeWidth="0.5" />
          </g>
        </svg>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary border-primary/30">
                CSE Student • IIIT Pune
              </Badge>
              <div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
                  <span className="gradient-text">Hello,</span>
                  <br />
                  I'm <span className="text-neon-cyan">Swayam Patel</span>
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <p className="text-lg text-accent">Surat, Gujarat, India</p>
                </div>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Third-year Computer Science Engineering student at IIIT Pune, 
                  passionate about building innovative solutions with <span className="text-primary font-semibold">AI</span> and 
                  <span className="text-neon-cyan font-semibold"> full-stack development</span>.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                Resume
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="border-accent/30 hover:bg-accent/10">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          {/* Right Visual - Tech Character */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing Background Effects */}
              <div className="absolute -inset-12 bg-gradient-to-br from-primary/20 via-neon-cyan/20 to-neon-purple/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -inset-8 bg-gradient-to-tl from-accent/10 via-transparent to-neon-green/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Main Image Container */}
              <div className="relative h-96 flex items-center justify-center">
                <div className="relative z-10">
                  {/* Character Image */}
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-gradient-to-br from-primary via-neon-cyan to-neon-purple shadow-2xl">
                    <img 
                      src="\Image_banner.jpg" 
                      alt="Tech Developer Character"
                      className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Animated Scanning Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
                    
                    {/* Glowing Ring Effect */}
                    <div className="absolute -inset-2 rounded-full border border-primary/30 animate-pulse" />
                    <div className="absolute -inset-4 rounded-full border border-neon-cyan/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 bg-card/90 backdrop-blur-sm border border-primary/40 px-4 py-2 rounded-full text-sm font-bold text-primary animate-pulse shadow-lg">
                    • DEVELOPER MODE
                  </div>
                  
                  {/* Floating Tech Elements */}
                  <div className="absolute -top-4 -left-4 p-2 bg-card/90 backdrop-blur-sm border border-primary/40 rounded-lg floating-animation shadow-lg">
                    <div className="font-mono text-xs text-primary">{'{ AI }'}</div>
                  </div>
                  
                  <div className="absolute -top-2 -right-6 p-2 bg-card/90 backdrop-blur-sm border border-neon-cyan/40 rounded-lg floating-animation shadow-lg" style={{ animationDelay: '1s' }}>
                    <div className="font-mono text-xs text-neon-cyan">{'</>'}</div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-6 p-2 bg-card/90 backdrop-blur-sm border border-accent/40 rounded-lg floating-animation shadow-lg" style={{ animationDelay: '2s' }}>
                    <div className="font-mono text-xs text-accent">{'🚀'}</div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-16 p-2 bg-card/90 backdrop-blur-sm border border-neon-green/40 rounded-lg floating-animation shadow-lg" style={{ animationDelay: '3s' }}>
                    <div className="font-mono text-xs text-neon-green">{'+++'}</div>
                  </div>
                </div>
                
                {/* Orbiting Particles */}
                <div className="absolute inset-0">
                  <div className="w-full h-full relative animate-spin" style={{ animationDuration: '30s' }}>
                    <div className="absolute top-4 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 animate-pulse" />
                    <div className="absolute bottom-4 left-1/2 w-1.5 h-1.5 bg-neon-cyan rounded-full -translate-x-1/2 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute left-4 top-1/2 w-2.5 h-2.5 bg-accent rounded-full -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute right-4 top-1/2 w-1.5 h-1.5 bg-neon-green rounded-full -translate-y-1/2 animate-pulse" style={{ animationDelay: '1.5s' }} />
                  </div>
                </div>
                
                {/* Holographic Corner Frames */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/50 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-neon-cyan/50 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-accent/50 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-neon-green/50 rounded-br-2xl" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-muted-foreground animate-bounce">
          <span className="text-sm">Explore More</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}