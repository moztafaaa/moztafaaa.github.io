import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h2 className="text-section portfolio-heading gradient-text mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <p className="text-lg text-portfolio-text-secondary leading-relaxed">
                I'm a <span className="text-accent font-semibold">Backend Developer</span> specializing 
                in .NET Core and modern web technologies. I build scalable, maintainable solutions 
                that deliver exceptional user experiences.
              </p>
              
              <p className="text-lg text-portfolio-text-secondary leading-relaxed">
                Driven by <span className="text-portfolio-secondary font-semibold">clean code principles</span> and 
                continuous learning, I focus on creating meaningful impact through technology.
              </p>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl portfolio-heading text-portfolio-text-primary mb-4">
                  Core Expertise
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-portfolio-text-secondary">
                      RESTful APIs and performance optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-portfolio-secondary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-portfolio-text-secondary">
                      Full-stack development with modern frameworks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-portfolio-text-secondary">
                      Database design and optimization
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-6 animate-on-scroll">
              <div className="glass-card p-4 rounded-lg text-center hover-lift">
                <div className="text-2xl font-bold text-accent mb-2">3+</div>
                <div className="text-sm text-portfolio-text-muted">Years Experience</div>
              </div>
              <div className="glass-card p-4 rounded-lg text-center hover-lift">
                <div className="text-2xl font-bold text-portfolio-secondary mb-2">50+</div>
                <div className="text-sm text-portfolio-text-muted">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Profile Image Area */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="glass-card-elevated p-8 rounded-2xl">
                <div className="space-y-6">
                  <h3 className="text-2xl portfolio-heading text-portfolio-text-primary">
                    Technical Philosophy
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-portfolio-dark" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-portfolio-text-primary">Quality First</h4>
                        <p className="text-sm text-portfolio-text-muted">
                          Writing clean, testable, and maintainable code
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-portfolio-dark" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-portfolio-text-primary">User-Centric</h4>
                        <p className="text-sm text-portfolio-text-muted">
                          Building solutions that prioritize user experience
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-portfolio-dark" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-portfolio-text-primary">Collaborative</h4>
                        <p className="text-sm text-portfolio-text-muted">
                          Effective communication and teamwork
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-portfolio-surface">
                    <p className="text-sm text-portfolio-text-muted italic">
                      "Code is not just functional; it should be elegant and tell a story."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;