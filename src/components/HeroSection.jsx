export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-8 text-center md:text-left">
        <div className="md:order-2 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hello, I'm Sophia</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
            Rising software engineer focused on building intuitive solutions and growing through every challenge in the development process.          </p>
        </div>
        <div className="md:order-1 mt-8 md:mt-0">
          <img src="personalwebsiteheadshot.png" className="headshot-style" alt="Sophia's headshot"></img>
        </div>
      </div>
    </section>
  );
};