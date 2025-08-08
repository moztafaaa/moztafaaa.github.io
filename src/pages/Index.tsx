const Index = () => {
  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-[720px] px-6 py-12">
        <header className="mb-8">
          <h1 className="text-h1 font-normal tracking-tight">
            MOSTAFA IBRAHIM ELSAYED
          </h1>
        </header>

        <section aria-label="About" className="mb-12">
            <p className="relative">
            <img
              src="/lovable-uploads/15c562e4-4d52-4538-b7a7-b2cb871eaa2b.png"
              alt="Author portrait – junior backend developer"
              loading="lazy"
              className="float-left mr-6 mb-5 h-20 w-20 rounded-full object-cover"
            />
            I am a junior backend developer, recent graduate from the Faculty of Computers and AI at Cairo University, ITI .NET Full-Stack trainee, and aspiring software
            architect. I'm passionate about building efficient,
            scalable APIs, exploring system architectures, and continuously
            learning new technologies.{' '}
            </p>
          <p className="mt-2">
            I write about my learning journey on <a href="#">my blog</a>, and
            you can reach me at{' '}
            <a href="mailto:imoztafa@gmail.com">imoztafa@gmail.com</a>. You can
            also find me on{' '}
            <a href="https://linkedin.com/in/moztafaa">LinkedIn</a> and{' '}
            <a href="https://github.com/moztafaa">GitHub</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-[24px] leading-[26px] font-normal text-foreground mb-3">
            Backend Developer
          </h2>
          <p>
            I specialize in building robust backend solutions using C#, .NET,
            and SQL Server. My focus is on creating efficient REST APIs,
            optimizing databases, and designing clean, maintainable code. I'm
            always exploring new technologies like Go and Angular to broaden my
            skill set and improve my approach to system architecture.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-[24px] leading-[26px] font-normal text-foreground mb-3">
            Education and Training
          </h2>
          <p>
            I graduated with a Bachelor's degree in Computer Science from Cairo
            University in 2024. Currently, I'm a trainee in the ITI .NET
            Full-Stack Diploma, where I'm deepening my expertise in C#, ASP.NET
            Core, and full-stack development. These experiences have shaped my
            passion for backend development and my goal to become a software
            architect.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-[24px] leading-[26px] font-normal text-foreground mb-3">
            Projects and Contributions
          </h2>
          <p>
            I've built several backend projects, including REST APIs with C# and
            .NET, integrated with SQL Server for efficient data management. I'm
            also exploring Go for backend services and Angular for frontend
            development to expand my full-stack capabilities. You can explore my
            work on <a href="https://github.com/moztafaa">GitHub</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-[24px] leading-[26px] font-normal text-foreground mb-3">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {[
              'C#',
              '.NET',
              'ASP.NET Core',
              'SQL Server',
              'PostgreSQL',
              'Entity Framework',
              'LINQ',
              'TypeScript',
              'JavaScript',
              'Express.js',
              'REST APIs',
              'Neovim',
              'Rider',
              'VSCode',
              'Linux',
              'Go (exploring)',
              'Angular (exploring)',
            ].map((s) => (
              <li
                key={s}
                className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-[24px] leading-[26px] font-normal text-foreground mb-3">
            Personal Interests
          </h2>
          <p>
            Outside of coding, I'm an avid table tennis player, which helps me
            stay focused and precise in my work. I'm also a Linux enthusiast,
            often using Neovim and integrating Linux tools into my Windows
            workflow for a seamless development experience.
          </p>
        </section>

        <section className="mb-2">
          <h2 className="text-[24px] leading-[26px] font-normal text-foreground mb-3">
            Contact
          </h2>
          <p>
            I welcome emails to{' '}
            <a href="mailto:imoztafa@gmail.com">imoztafa@gmail.com</a>. You can
            also connect with me on{' '}
            <a href="https://linkedin.com/in/moztafaa">LinkedIn</a> and{' '}
            <a href="https://github.com/moztafaa">GitHub</a>.
          </p>
        </section>
      </article>
    </main>
  );
};

export default Index;
