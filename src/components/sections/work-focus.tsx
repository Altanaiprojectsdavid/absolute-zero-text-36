import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    category: "Conversion Rate",
    title: "+320% Conversion Uplift",
    description: "Redesigned onboarding flows for a subscription platform, resulting in significantly higher signups within 6 weeks.",
    type: "featured"
  },
  {
    id: 2,
    title: "31% Increase in Checkout Completion",
    description: "We redesigned the final purchase flow for a retail brand to reduce friction, build trust, and drive urgency.",
    type: "standard"
  },
  {
    id: 3,
    title: "6.2 M",
    subtitle: "Active Sessions / Month",
    description: "Optimized architecture and fast-loading UI delivered stronger user retention across mobile and desktop.",
    type: "metric"
  },
  {
    id: 4,
    metrics: [
      {
        category: "Campaign Results",
        title: "+360% Lift in Conversions",
        description: "Triggered by a multi-touch funnel redesign for a SaaS product launch."
      },
      {
        category: "Paid Media Performance",
        title: "6.4M Views, 7x Return",
        description: "Cross-platform creative that blended storytelling with precision targeting."
      },
      {
        category: "Onboarding Speed",
        title: "78% Faster Time to First Interaction",
        description: "Faster and smoother than ever."
      }
    ],
    type: "multi"
  }
];

export const WorkFocus = () => {
  return (
    <motion.section 
      className="w-full px-4 sm:px-8 py-16 sm:py-32 bg-[#04080B] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="max-w-7xl mx-auto space-y-16 sm:space-y-32"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-20">
            <div className="flex flex-col justify-center items-start gap-4">
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
                    Work in Focus
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-[277px] text-gray-400 text-xs font-medium leading-relaxed tracking-wide">
                We design with<br />people in mind.
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight lg:leading-[44px]">
                <span className="text-gray-400">Design</span>
                <span className="text-white"> is only as good as the strategy behind it. That's why our process starts with clarity—and ends with results.</span>
              </h2>
              <p className="text-white text-sm sm:text-base leading-relaxed tracking-wide">
                We create with intention. Every decision we make is rooted in purpose,<br className="hidden sm:block" />
                aligned with business goals, and built to perform.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          {/* Featured Case Study */}
          <FadeIn delay={0.2}>
            <Card className="bg-white/0 border-none rounded-[32px] shadow-[inset_0px_0px_23px_0px_rgba(255,255,255,0.25)] overflow-hidden h-full">
              <CardContent 
                className="p-6 flex flex-col justify-center gap-1 h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/lovable-uploads/cc2e2b71-f81b-4e03-9a7b-538c130af5c6.png)` }}
              >
                <div className="flex-1"></div>
                <div className="p-4 bg-white/10 rounded-xl space-y-8 sm:space-y-16">
                  <div className="flex justify-between items-center">
                    <div className="text-white text-sm leading-tight tracking-wide">
                      Conversion Rate
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                      +320% Conversion Uplift
                    </h3>
                    <p className="text-white text-sm leading-tight tracking-wide">
                      Redesigned onboarding flows for a subscription platform, resulting in significantly higher signups within 6 weeks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Right Column */}
          <div className="space-y-1">
            {/* Top Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              <FadeIn delay={0.3}>
                <Card className="bg-white/0 border-none rounded-[32px] shadow-[inset_0px_0px_23px_0px_rgba(255,255,255,0.25)] overflow-hidden h-full">
                  <CardContent className="p-6 sm:p-8 text-center space-y-6 sm:space-y-8 h-full flex flex-col justify-center">
                    <div className="space-y-3">
                      <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                        31% Increase in Checkout Completion
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide">
                        We redesigned the final purchase flow for a retail brand to reduce friction, build trust, and drive urgency.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Card className="bg-white/0 border-none rounded-[32px] shadow-[inset_0px_0px_23px_0px_rgba(255,255,255,0.25)] overflow-hidden">
                  <CardContent className="p-6 sm:p-8 text-center space-y-6 sm:space-y-8">
                    <div className="w-32 h-32 sm:w-44 sm:h-44 mx-auto rounded-full flex items-center justify-center"
                         style={{
                           backgroundColor: '#4B33FF0A', // 4B33FF at 1% opacity
                           boxShadow: 'inset 0 0 20px rgba(140, 111, 255, 0.3)', // 8C6FFF at 30% opacity
                         }}>
                      <div className="text-2xl sm:text-[42px] font-bold leading-tight text-center"
                           style={{
                             background: 'linear-gradient(90deg, #4B33FF 0%, #ffffff 100%)',
                             WebkitBackgroundClip: 'text',
                             WebkitTextFillColor: 'transparent',
                             backgroundClip: 'text'
                           }}>
                        6.2 M
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                        Active Sessions / Month
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide">
                        Optimized architecture and fast-loading UI delivered stronger user retention across mobile and desktop.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Bottom Card - Multi Metrics */}
            <FadeIn delay={0.5}>
              <Card className="bg-white/0 border-none rounded-[32px] shadow-[inset_0px_0px_23px_0px_rgba(255,255,255,0.25)] overflow-hidden">
                <CardContent className="p-6 sm:p-8 space-y-8 sm:space-y-10 h-full flex flex-col justify-between">
                  <div className="space-y-8 sm:space-y-10">
                    <div className="space-y-1">
                      <div className="text-gray-400 text-sm leading-tight tracking-wide">
                        Campaign Results
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                          +360% Lift in Conversions
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide">
                          Triggered by a multi-touch funnel redesign for a SaaS product launch.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-gray-400 text-sm leading-tight tracking-wide">
                        Paid Media Performance
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                          6.4M Views, 7x Return
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide">
                          Cross-platform creative that blended storytelling with precision targeting.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-gray-400 text-sm leading-tight tracking-wide">
                      Onboarding Speed
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                        78% Faster Time to First Interaction
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide">
                        Faster and smoother than ever.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};