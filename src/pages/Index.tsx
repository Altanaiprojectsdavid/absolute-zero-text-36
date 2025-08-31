import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { CompanyMarquee } from "@/components/sections/company-marquee";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Statistics } from "@/components/sections/statistics";
import { WorkFocus } from "@/components/sections/work-focus";
import { Footer } from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CompanyMarquee />
      <HowItWorks />
      <Statistics />
      <WorkFocus />
      <Footer />
    </div>
  );
};

export default Index;
