import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Software Engineer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark via-portfolio-surface to-portfolio-darker"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-portfolio-secondary/10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-portfolio-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-portfolio-secondary rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6 fade-in-up">
          {/* Name */}
          <h1 className="text-hero portfolio-heading text-portfolio-text-primary leading-tight">
            Mostafa Ibrahim
            <span className="block gradient-text">ElSayed</span>
          </h1>

          {/* Animated Title */}
          <div className="h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-inter font-light text-portfolio-text-secondary">
              <span className="typing-animation portfolio-mono">
                {displayText}
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-portfolio-text-secondary max-w-2xl mx-auto leading-relaxed">
            Building scalable web applications with 
            <span className="text-accent font-semibold"> .NET Core</span> and creating 
            elegant user experiences with 
            <span className="text-portfolio-secondary font-semibold"> modern technologies</span>
          </p>

          {/* Location & Status */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-portfolio-text-muted">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Cairo, Egypt
            </span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for opportunities
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card hover-lift px-8 py-4 rounded-lg accent-border accent-glow transition-all duration-300 group"
            >
              <span className="text-accent font-semibold group-hover:text-portfolio-text-primary transition-colors duration-300">
                Get in Touch
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card hover-lift px-8 py-4 rounded-lg border-portfolio-surface-elevated hover:border-accent transition-all duration-300"
            >
              <span className="text-portfolio-text-primary">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;