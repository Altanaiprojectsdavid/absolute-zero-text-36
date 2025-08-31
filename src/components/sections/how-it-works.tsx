import { SplitText } from "@/components/ui/split-text";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  return (
    <motion.section 
      className="w-full py-24 px-4 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Mobile mockup placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src="/lovable-uploads/94a76d1f-a489-4068-a2fd-37243cd93cce.png"
                alt="Maestro AI Mobile App Interface"
                className="w-80 h-auto object-contain shadow-2xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                 style={{
                   backgroundColor: '#4B33FF0A', // 4B33FF at 1% opacity
                   boxShadow: 'inset 0 0 20px rgba(140, 111, 255, 0.3)', // 8C6FFF at 30% opacity
                   background: `linear-gradient(90deg, #4B33FF 0%, #ffffff 100%)`,
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   backgroundClip: 'text'
                 }}>
              <span style={{
                background: 'linear-gradient(90deg, #4B33FF 0%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                How It Works
              </span>
            </div>

            {/* Heading */}
            <SplitText 
              as="h2" 
              className="text-4xl lg:text-5xl font-serif font-normal text-foreground leading-tight"
              splitBy="words"
              delay={0.3}
              staggerDelay={0.15}
            >
              Share Your Prompt
            </SplitText>

            {/* Description */}
            <FadeIn delay={0.6} duration={0.8}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Quickly write a short description of the image you want to make. The more specific 
                your prompt, the better the results!
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </motion.section>
  );
};