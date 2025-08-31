import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const statsData = [
  {
    number: "19+",
    title: "Brands launch",
    description: "Scale, or reimagine—from bold startups to global leaders.",
    id: "01"
  },
  {
    number: "5M+",
    title: "Users reached",
    description: "Across digital platforms, products, and touchpoints.",
    id: "02"
  },
  {
    number: "96%",
    title: "Client retention",
    description: "Rate built on clarity, craft, and results that speak for themselves.",
    id: "03"
  },
  {
    number: "10+",
    title: "Years of experience",
    description: "Turning complexity into clarity, and vision into execution.",
    id: "04"
  }
];

export const Statistics = () => {
  return (
    <motion.section 
      className="w-full px-4 sm:px-8 py-16 sm:py-32 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-20 mb-16 sm:mb-32">
            <div className="flex justify-start items-center gap-3">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                   style={{
                     backgroundColor: '#4B33FF0A', // 4B33FF at 1% opacity
                     boxShadow: 'inset 0 0 20px rgba(140, 111, 255, 0.3)', // 8C6FFF at 30% opacity
                   }}>
                <span style={{
                  background: 'linear-gradient(90deg, #4B33FF 0%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Momentum, measured.
                </span>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-foreground text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight lg:leading-10">
                Numbers don't tell the whole story - <br className="hidden sm:block" />
                but they show we're doing something right.
              </h2>
            </div>
          </div>
        </FadeIn>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {statsData.map((stat, index) => (
            <FadeIn key={stat.id} delay={0.2 + index * 0.1}>
              <div className="flex flex-col gap-1">
                {/* Main stat card */}
                <Card className="bg-white/0 border-none rounded-[32px] shadow-[inset_0px_0px_23px_0px_rgba(255,255,255,0.25)] overflow-hidden">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex justify-between items-start mb-4">
                       <AnimatedCounter 
                         value={stat.number}
                         className="text-white text-4xl sm:text-6xl lg:text-8xl font-bold uppercase"
                       />
                      <div className="text-white text-xs font-medium uppercase leading-none tracking-tight">
                        {stat.id}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Description card */}
                <Card className="bg-white/0 border-none rounded-[32px] shadow-[inset_0px_0px_23px_0px_rgba(255,255,255,0.25)] overflow-hidden">
                  <CardContent className="p-6 sm:p-8">
                    <div className="h-32 sm:h-36 flex flex-col justify-between items-end">
                      <div className="w-full text-right text-white text-xl sm:text-2xl font-bold leading-relaxed">
                        {stat.title}
                      </div>
                      <div className="w-full text-white/70 text-sm sm:text-base font-normal leading-snug tracking-tight">
                        {stat.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
};