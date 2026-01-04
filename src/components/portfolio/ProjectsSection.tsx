import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Sparkles, Code2, Database, Cloud, Play, Brain, Shield } from 'lucide-react';
import { useEffect, useRef } from 'react';

const projects = [
  {
    title: "Sanjaya-AI",
    subtitle: "AI-Powered Multi-Agent Research & Reporting Platform",
    description: "Advanced AI platform that uses an agent-based architecture and GenAI to automate cross-domain research, insight synthesis, and professional report generation across clinical trials, sales data, patents, internal knowledge, and web intelligence.",
    highlights: [
      "Multi-Agent Intelligence Architecture: Designed a master-agent orchestration system that dynamically routes user queries to specialized agents for clinical trials, sales insights, patents, internal documents, and web intelligence",
      "GenAI-Powered Reasoning & Synthesis: Leveraged Gemini 2.5 Flash via the OpenAI SDK for intelligent query understanding, agent selection, structured output generation, and insight synthesis",
      "Automated Report Generation: Implemented end-to-end PDF report generation using ReportLab with structured tables, charts, and summaries, enabling one-click access to decision-ready reports",
      "Cross-Source Data Integration: Integrated Supabase for structured sales data, public APIs for clinical trials, internal document parsing, and real-time web intelligence into a unified analysis pipeline",
      "Scalable & Modular Backend Design: Built with a clean, extensible backend architecture where new agents, data sources, or analysis modules can be added without impacting existing workflows",
      "Modern Frontend Experience: Developed a responsive user interface using React.js, Vite, TypeScript, and TailwindCSS for seamless query input and report access"
    ],
    technologies: ["Python", "FastAPI", "LangGraph", "OpenAI SDK", "Gemini 2.5 Flash", "React.js", "Vite", "TypeScript", "TailwindCSS", "Supabase", "ReportLab"],
    github: "https://github.com/Swayam8115/Sanjaya-AI",
    demo: "https://youtu.be/eXlGkw-12rA",
    featured: true,
    theme: "primary",
    icon: Brain
  },
  {
    title: "GUARDIAN",
    subtitle: "AI-Powered FIR Analysis & Crime Visualization Platform",
    description: "A smart crime analysis and visualization platform that processes FIR records, extracts structured information using Generative AI, and presents geospatial crime insights through an interactive map interface for improved situational awareness and decision-making.",
    highlights: [
      "FIR Data Extraction & Structuring: Automated extraction of key FIR details such as crime categories, incident summaries, and locations using Gemini 2.5 Pro for high-accuracy language understanding",
      "AI-Driven Crime Classification & Summarization: Leveraged Gemini 2.5 Pro to classify crimes, generate concise incident summaries, and normalize FIR data for consistent downstream analysis",
      "Interactive Crime Map Visualization: Developed an interactive map-based visualization displaying FIR locations with clustering and intelligent marker offsetting to handle overlapping incidents",
      "Backend API & Secure Data Storage: Implemented a FastAPI-based backend integrated with Supabase (PostgreSQL) for reliable, scalable, and secure FIR data storage and retrieval",
      "Scalable & Modular Architecture: Designed the system for extensibility, enabling future additions such as heatmaps, time-based crime analysis, and real-time crime reporting"
    ],
    technologies: ["Python", "FastAPI", "Supabase(PostgreSQL)", "Gemini 2.5 Pro", "MapMyIndia", "OpenStreetMap", "HTML"],
    github: "https://github.com/Swayam8115/guardian",
    featured: true,
    theme: "neon-cyan",
    icon: Shield
  },
  {
    title: "CVAlign",
    subtitle: "AI-Powered CV Evaluation Platform",
    description: "Advanced platform using RAG pipeline and GenAI for intelligent CV-job matching with comprehensive evaluation insights.",
    highlights: [
      "RAG Pipeline & GenAI: Built using LangChain, Groq (LLM), and Google GenAI embeddings for accurate relevance matching",
      "Frontend & Visualization: React.js and Tailwind CSS with Recharts-powered dashboards",
      "Role-Based Access Control: FastAPI-based RBAC for secure multi-user access management",
      "LLM-Driven Evaluation: Prompt engineering for structured ATS insights and feedback",
      "Scalable Document Handling: MongoDB + Cloudinary API integration"
    ],
    technologies: ["Python", "LangChain", "React.js", "FastAPI", "MongoDB", "Cloudinary", "Groq", "Tailwind CSS"],
    github: "https://github.com/Swayam8115/CV_Align",
    featured: true,
    theme: "primary",
    icon: Code2
  },
  {
    title: "InstEd",
    subtitle: "Ed-Tech Doubt Solving Platform",
    description: "Comprehensive educational platform with real-time collaboration, personalized recommendations, and seamless user experience.",
    highlights: [
      "Full-Stack Development: Node.js, Express.js, MongoDB backend with React.js frontend",
      "Recommender System: Collaborative Filtering for personalized doubt suggestions",
      "Real-Time Communication: WebSocket-based bi-directional communication for live interactions",
      "Secure Authentication: Google OAuth and OTP-based login integration",
      "Cloud Storage: Cloudinary APIs for efficient doubt content management"
    ],
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "WebSocket", "OAuth", "Cloudinary"],
    github: "https://github.com/Swayam8115/InstEd",
    featured: true,
    theme: "neon-cyan",
    icon: Database
  },
  {
    title: "FloorPlanner",
    subtitle: "Overlap-Free Room Layout Management System",
    description: "Interactive Java-based application for precise floor plan design with real-time collision detection and data persistence.",
    highlights: [
      "Geometric Collision Handling: Real-time bounding box detection for spatial accuracy",
      "Room Serialization: Plain-text file system for cross-platform layout portability",
      "Efficient Management: OOP principles with Java Collections Framework optimization"
    ],
    technologies: ["Java", "OOP", "Collections Framework", "File I/O", "CLI"],
    github: "https://github.com/Swayam8115/FloorPlanner",
    featured: false,
    theme: "neon-green",
    icon: Cloud
  }
];

export function ProjectsSection() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Floating Tech Elements */}
      <div className="absolute top-32 right-20 opacity-20">
        <Code2 className="w-16 h-16 text-primary floating-animation" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <Database className="w-12 h-12 text-accent floating-animation" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative solutions built with cutting-edge technologies, 
            showcasing expertise in <span className="text-primary font-semibold">AI</span>, 
            <span className="text-accent font-semibold"> full-stack development</span>, and 
            <span className="text-neon-green font-semibold"> system design</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.title}
                ref={(el) => projectRefs.current[index] = el}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <Card className={`group hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ${
                  project.theme === 'primary' ? 'border-primary/20 hover:border-primary/40 hover:shadow-primary/10' :
                  project.theme === 'neon-cyan' ? 'border-accent/20 hover:border-accent/40 hover:shadow-accent/10' :
                  'border-neon-green/20 hover:border-neon-green/40 hover:shadow-neon-green/10'
                } bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm overflow-hidden`}>
                  
                  {/* Project Header */}
                  <CardHeader className="pb-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-4">
                          {/* Enhanced Icon Container */}
                          <div className={`p-4 rounded-2xl ${
                            project.theme === 'primary' ? 'bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30' :
                            project.theme === 'neon-cyan' ? 'bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30' :
                            'bg-gradient-to-br from-neon-green/20 to-neon-green/10 border border-neon-green/30'
                          } group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                            <Icon className={`w-8 h-8 relative z-10 ${
                              project.theme === 'primary' ? 'text-primary' :
                              project.theme === 'neon-cyan' ? 'text-accent' :
                              'text-neon-green'
                            }`} />
                            {/* Animated background glow */}
                            <div className={`absolute inset-0 ${
                              project.theme === 'primary' ? 'bg-primary/10' :
                              project.theme === 'neon-cyan' ? 'bg-accent/10' :
                              'bg-neon-green/10'
                            } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
                            <CardTitle className={`text-2xl lg:text-3xl font-bold ${
                              project.theme === 'primary' ? 'text-primary group-hover:text-accent' :
                              project.theme === 'neon-cyan' ? 'text-accent group-hover:text-primary' :
                              'text-neon-green group-hover:text-primary'
                            } transition-colors duration-300`}>
                              {project.title}
                            </CardTitle>
                            {project.featured && (
                              <Badge className={`${
                                project.theme === 'primary' ? 'bg-gradient-to-r from-primary to-primary/80' :
                                project.theme === 'neon-cyan' ? 'bg-gradient-to-r from-accent to-accent/80' :
                                'bg-gradient-to-r from-neon-green to-neon-green/80'
                              } text-white shadow-lg animate-pulse`}>
                                <Sparkles className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <p className={`text-lg font-semibold ${
                          project.theme === 'primary' ? 'text-accent' :
                          project.theme === 'neon-cyan' ? 'text-accent' :
                          'text-neon-green'
                        } transition-colors`}>
                          {project.subtitle}
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-3 flex-wrap">
                        {project.demo && (
                          <Button 
                            size="default" 
                            variant="outline"
                            className={`${
                              project.theme === 'primary' ? 'border-primary/50 text-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/25' :
                              project.theme === 'neon-cyan' ? 'border-accent/50 text-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/25' :
                              'border-neon-green/50 text-neon-green hover:bg-neon-green/10 hover:shadow-lg hover:shadow-neon-green/25'
                            } hover:scale-105 transition-all duration-300`}
                            onClick={() => window.open(project.demo, '_blank')}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Demo Video
                          </Button>
                        )}
                        <Button 
                          size="default" 
                          className={`${
                            project.theme === 'primary' ? 'bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/25' :
                            project.theme === 'neon-cyan' ? 'bg-gradient-to-r from-accent to-accent/80 hover:shadow-lg hover:shadow-accent/25' :
                            'bg-gradient-to-r from-neon-green to-neon-green/80 hover:shadow-lg hover:shadow-neon-green/25'
                          } text-white hover:scale-105 transition-all duration-300`}
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Source
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    {/* Enhanced Key Features */}
                    <div className="space-y-6">
                      <h4 className={`font-bold text-lg ${
                        project.theme === 'primary' ? 'text-primary' :
                        project.theme === 'neon-cyan' ? 'text-accent' :
                        'text-neon-green'
                      } flex items-center gap-3`}>
                        <div className={`w-3 h-6 ${
                          project.theme === 'primary' ? 'bg-gradient-to-b from-primary to-primary/50' :
                          project.theme === 'neon-cyan' ? 'bg-gradient-to-b from-accent to-accent/50' :
                          'bg-gradient-to-b from-neon-green to-neon-green/50'
                        } rounded-full`} />
                        Key Features & Achievements
                      </h4>
                      
                      <div className="grid gap-4">
                        {project.highlights.map((highlight, idx) => (
                          <div 
                            key={idx} 
                            className="group/item flex items-start gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/40 border border-border/50 hover:border-border transition-all duration-300 hover:translate-x-2"
                          >
                            <div className={`w-3 h-3 ${
                              project.theme === 'primary' ? 'bg-primary' :
                              project.theme === 'neon-cyan' ? 'bg-accent' :
                              'bg-neon-green'
                            } rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform`} />
                            <div className="space-y-1">
                              <p className="text-foreground leading-relaxed">
                                <span className={`font-semibold ${
                                  project.theme === 'primary' ? 'text-primary group-hover/item:text-accent' :
                                  project.theme === 'neon-cyan' ? 'text-accent group-hover/item:text-primary' :
                                  'text-neon-green group-hover/item:text-primary'
                                } transition-colors`}>
                                  {highlight.split(':')[0]}:
                                </span>
                                <span className="text-muted-foreground ml-1">
                                  {highlight.split(':').slice(1).join(':')}
                                </span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Tech Stack */}
                    <div className="pt-6 border-t border-border/50">
                      <div className="flex items-center gap-3 mb-6">
                        <h5 className="text-sm font-semibold text-muted-foreground">Tech Stack</h5>
                        <div className={`h-px flex-1 ${
                          project.theme === 'primary' ? 'bg-gradient-to-r from-primary/50 to-transparent' :
                          project.theme === 'neon-cyan' ? 'bg-gradient-to-r from-accent/50 to-transparent' :
                          'bg-gradient-to-r from-neon-green/50 to-transparent'
                        }`} />
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, idx) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className={`text-sm px-4 py-2 font-medium ${
                              project.theme === 'primary' ? 'border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:shadow-sm hover:shadow-primary/20' :
                              project.theme === 'neon-cyan' ? 'border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 hover:shadow-sm hover:shadow-accent/20' :
                              'border-neon-green/30 text-neon-green hover:bg-neon-green/10 hover:border-neon-green/50 hover:shadow-sm hover:shadow-neon-green/20'
                            } hover:scale-105 transition-all duration-300 cursor-default`}
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full">
            <span className="text-muted-foreground">Want to see more projects?</span>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300" onClick={() => window.open('https://github.com/Swayam8115', '_blank')}>
              <Github className="w-4 h-4 mr-2" />
              Visit GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}