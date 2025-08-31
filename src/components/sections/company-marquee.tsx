export const CompanyMarquee = () => {
  const companies = [
    "OpenAI",
    "Google",
    "Microsoft",
    "Adobe",
    "Figma",
    "Canva",
    "Midjourney",
    "Stability AI",
    "Anthropic",
    "Meta",
    "Apple",
    "NVIDIA",
    "Runway",
    "Dall-E",
    "Sketch",
    "Framer"
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="relative overflow-hidden">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll space-x-16">
          {/* First set of companies */}
          {companies.map((company, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 text-muted-foreground/60 text-lg font-medium tracking-wider"
            >
              {company}
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 text-muted-foreground/60 text-lg font-medium tracking-wider"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};