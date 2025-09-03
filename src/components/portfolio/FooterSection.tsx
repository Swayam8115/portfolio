export function FooterSection() {
  const funFacts = [
    { icon: "💻", text: "console.log('Always learning!')" },
    { icon: "☕", text: "Powered by coffee & curiosity" },
    { icon: "⚡", text: "# Python: IndentationError builds character (and ruins weekends)" },
    { icon: "🚀", text: "Function optimizeLife() { return 'Better every day'; }" }
  ];

  return (
    <>
      {/* Clear Separation Element */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent blur-sm" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-gradient-to-br from-primary via-accent to-neon-green rounded-full blur-lg opacity-50 animate-pulse" />
        </div>
      </div>

      {/* Developer's Corner Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
                Developer's Corner
              </h2>
              <p className="text-lg text-accent/80 font-medium tracking-wide">
                Where ideas meet execution
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
            </div>
            
            {/* Code-Style Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              {/* AI-First Mindset Card */}
              <div className="group relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-glow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary font-bold text-xl">AI</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      AI-First Mindset
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Building intelligent systems that learn, adapt, and enhance human capabilities.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-primary/60 bg-primary/5 px-2 py-1 rounded border border-primary/20">
                    &lt;intelligence/&gt;
                  </div>
                </div>
              </div>

              {/* User-Centric Design Card */}
              <div className="group relative bg-card/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/40 transition-all duration-500 hover:scale-105 hover:shadow-glow-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-accent font-bold text-xl">UX</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      User-Centric Design
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Creating intuitive interfaces that make complex technology accessible to everyone.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-accent/60 bg-accent/5 px-2 py-1 rounded border border-accent/20">
                    &lt;experience/&gt;
                  </div>
                </div>
              </div>

              {/* Continuous Learning Card */}
              <div className="group relative bg-card/50 backdrop-blur-sm border border-neon-green/20 rounded-lg p-6 hover:border-neon-green/40 transition-all duration-500 hover:scale-105 hover:shadow-glow-success/20">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-green/30 to-neon-green/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-neon-green font-bold text-xl">∞</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-neon-green transition-colors duration-300">
                      Continuous Learning
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Always exploring new technologies and pushing the boundaries of what's possible.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-neon-green/60 bg-neon-green/5 px-2 py-1 rounded border border-neon-green/20">
                    &lt;growth/&gt;
                  </div>
                </div>
              </div>

              {/* Innovation Card */}
              <div className="group relative bg-card/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-glow-purple/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-purple-400 font-bold text-xl">⚡</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-400 transition-colors duration-300">
                      Innovation Focus
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Transforming complex problems into elegant, scalable solutions with cutting-edge tech.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-purple-400/60 bg-purple-500/5 px-2 py-1 rounded border border-purple-500/20">
                    &lt;innovation/&gt;
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Tech Quotes Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-card/30 backdrop-blur-sm border-l-4 border-accent/60 rounded-r-lg p-6 mb-8 max-w-3xl mx-auto">
                <div className="absolute top-2 left-2 text-4xl text-accent/40 font-serif">"</div>
                <blockquote className="text-xl font-medium text-muted-foreground italic pl-8 pr-4 leading-relaxed">
                  Why is it drug addicts and computer aficionados are both called users?
                </blockquote>
                <cite className="block text-right text-sm text-accent font-semibold mt-3 not-italic">
                  — Robin Williams
                </cite>
                <div className="absolute bottom-2 right-2 text-4xl text-accent/40 font-serif rotate-180">"</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {funFacts.map((fact, index) => (
                  <div 
                    key={index}
                    className="group relative bg-secondary/50 backdrop-blur-sm border border-dashed border-border hover:border-solid hover:border-primary/40 rounded-lg p-4 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl flex-shrink-0">{fact.icon}</span>
                      <code className="text-sm text-muted-foreground font-mono group-hover:text-foreground transition-colors">
                        {fact.text}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Glowing Separator Line */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent blur-sm" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-primary via-accent to-neon-green rounded-full blur-md opacity-60 animate-pulse" />
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="container mx-auto px-6 mt-16 relative z-10">
          <div className="text-center space-y-6">
            <p className="text-muted-foreground text-sm">
              © 2025 Swayam Patel • Crafted with{' '}
              <span className="text-primary animate-pulse">code</span>{' '}
              and{' '}
              <span className="text-accent">creativity</span>
            </p>
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center bg-neon-green/10 text-neon-green border-neon-green/30 px-4 py-2 text-sm animate-pulse rounded-full border">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse"></div>
                Available for opportunities
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}