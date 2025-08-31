import { PrimaryButton } from "@/components/ui/primary-button";
import { SplitText } from "@/components/ui/split-text";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowUpRight } from "lucide-react";
export const Hero = () => {
  // Create array of AI-generated images for marquee
  const images = [{
    id: 1,
    src: "/lovable-uploads/e45c366d-99e7-450b-949d-ba63bfe742e0.png",
    alt: "Mysterious figure in neon landscape"
  }, {
    id: 2,
    src: "/lovable-uploads/5fd2c8ad-e383-4c05-bad7-5c91fbc3a50b.png",
    alt: "Purple mountain landscape"
  }, {
    id: 3,
    src: "/lovable-uploads/307ff3f4-2670-4eea-9e77-3741b354984b.png",
    alt: "Tropical purple scene with trees"
  }, {
    id: 4,
    src: "/lovable-uploads/69b0b88f-f0c5-4184-9c19-0b446a523663.png",
    alt: "Glowing blue flowers"
  }, {
    id: 5,
    src: "/lovable-uploads/39d84bab-51ed-4949-acc5-1de277d532c9.png",
    alt: "Purple unicorns in mystical scene"
  }, {
    id: 6,
    src: "/lovable-uploads/45abea92-a90b-410d-84a6-27fbaccce27f.png",
    alt: "Mountain climber in purple landscape"
  }];
  return <section className="flex flex-col items-center justify-between min-h-[100vh] px-4 pt-32 pb-0 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline controls={false}>
          <source src="https://res.cloudinary.com/dqd4dvem7/video/upload/v1755064345/6847119f22b5391772dbf625_684efaff0f6e64c09d96d807_freepik__animate-this-with-8k-loop__54302-transcode_hzy6io.mp4" type="video/mp4" />
        </video>
        <img src="/lovable-uploads/f8bb24b7-ec80-4941-bedc-db27f82e2bdd.png" alt="" className="w-auto h-auto object-contain transform scale-y-[-1] -translate-y-[500px]" />
      </div>
      
      {/* Overlay Layer */}
      <div className="absolute inset-0 z-10 mix-blend-hue" style={{
      backgroundColor: '#4B33FF'
    }}></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 py-[51px]">
        {/* Main Title */}
        <div className="space-y-2">
          <SplitText as="h1" className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal text-white leading-none" splitBy="words" delay={0.2} staggerDelay={0.1}>
            Produce Dazzling
          </SplitText>
          <SplitText as="h1" className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal italic text-white leading-none" splitBy="words" delay={0.6} staggerDelay={0.1}>
            AI Visuals
          </SplitText>
        </div>

        {/* Description */}
        <FadeIn delay={1.0} duration={0.8}>
          <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
            Turn your ideas into bold visuals with just a few words.
          </p>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={1.3} duration={0.8}>
          <div className="pt-4">
            <PrimaryButton icon={ArrowUpRight} className="text-base sm:text-lg">
              Download on iOS
            </PrimaryButton>
          </div>
        </FadeIn>
      </div>

    </section>;
};