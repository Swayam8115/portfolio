import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, MapPin, Calendar } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section className="min-h-screen py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="portfolio-card group">
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl text-primary group-hover:text-neon-cyan transition-colors">
                    JustNowJobs
                  </CardTitle>
                  <div className="flex items-center gap-2 text-accent">
                    <Building className="w-4 h-4" />
                    <span className="font-semibold">Software Engineering Intern</span>
                  </div>
                </div>
                <div className="space-y-2 lg:text-right">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>June 2025 - August 2025</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex flex-wrap items-center gap-2">
                        Langgraph & LangChain Integration
                        <Badge variant="secondary" className="text-xs">Gen AI</Badge>
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Currently developing AI-driven backend services using Retrieval-Augmented 
                        Generation (RAG), LangChain, and LangGraph to power a smart and scalable 
                        talent-opportunity matching platform.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex flex-wrap items-center gap-2">
                        Python Backend Development
                        <Badge variant="secondary" className="text-xs">Backend</Badge>
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Building scalable backend services in Python to support platform growth, 
                        focusing on performance optimization and clean architecture.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex flex-wrap items-center gap-2">
                        Distributed Task Management
                        <Badge variant="secondary" className="text-xs">DevOps</Badge>
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Independently improving backend architecture and delivering modular, maintainable, 
                        well-documented code with Celery + Redis for scalable task queues, efficient data flow, 
                        and future extensibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Used */}
              <div className="pt-4 border-t border-border">
                <h5 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'LangChain', 'LangGraph', 'RAG', 'Celery', 'Redis', 'Backend APIs'].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border-primary/30 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}