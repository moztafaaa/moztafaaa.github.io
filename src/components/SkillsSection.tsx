import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'database' | 'tools';
  icon: string;
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animateSkills, setAnimateSkills] = useState(false);

  const skills: Skill[] = [
    // Backend
    { name: '.NET Core', level: 90, category: 'backend', icon: '🔧' },
    { name: 'C#', level: 88, category: 'backend', icon: '💎' },
    { name: 'Node.js', level: 75, category: 'backend', icon: '🟢' },
    { name: 'RESTful APIs', level: 85, category: 'backend', icon: '🔗' },
    
    // Frontend  
    { name: 'TypeScript', level: 82, category: 'frontend', icon: '📘' },
    { name: 'Angular', level: 80, category: 'frontend', icon: '🅰️' },
    { name: 'HTML/CSS', level: 85, category: 'frontend', icon: '🎨' },
    { name: 'Tailwind CSS', level: 78, category: 'frontend', icon: '💨' },
    
    // Database
    { name: 'SQL Server', level: 85, category: 'database', icon: '🗄️' },
    { name: 'PostgreSQL', level: 75, category: 'database', icon: '🐘' },
    { name: 'MongoDB', level: 70, category: 'database', icon: '🍃' },
    { name: 'Entity Framework', level: 82, category: 'database', icon: '🔄' },
    
    // Tools
    { name: 'Docker', level: 72, category: 'tools', icon: '🐳' },
    { name: 'Git/GitHub', level: 85, category: 'tools', icon: '📂' },
    { name: 'Python', level: 65, category: 'tools', icon: '🐍' },
    { name: 'TensorFlow', level: 60, category: 'tools', icon: '🤖' },
  ];

  const categories = {
    backend: { name: 'Backend', color: 'accent' },
    frontend: { name: 'Frontend', color: 'portfolio-secondary' },
    database: { name: 'Database', color: 'accent' },
    tools: { name: 'Tools & Others', color: 'portfolio-secondary' }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            if (entry.target.classList.contains('skills-container')) {
              setTimeout(() => setAnimateSkills(true), 500);
            }
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
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-section portfolio-heading gradient-text mb-6">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in modern software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="glass-card p-8 rounded-xl hover-lift animate-on-scroll skills-container">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${
                  category.color === 'accent' ? 'bg-accent' : 'bg-portfolio-secondary'
                }`}></div>
                <h3 className="text-xl portfolio-heading text-portfolio-text-primary">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {skills
                  .filter(skill => skill.category === key)
                  .map((skill, index) => (
                    <div key={skill.name} className="glass-card p-4 rounded-lg hover-lift">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-portfolio-text-primary">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${
                              dotIndex < Math.floor(skill.level / 20)
                                ? category.color === 'accent' ? 'bg-accent' : 'bg-portfolio-secondary'
                                : 'bg-portfolio-surface-elevated'
                            }`}
                            style={{
                              transitionDelay: `${index * 100 + dotIndex * 50}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;