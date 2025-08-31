import { FadeIn } from "@/components/ui/fade-in";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact us", href: "/contact" }
  ],
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Tik Tok", href: "#" },
    { label: "Threads", href: "#" },
    { label: "X", href: "#" }
  ],
  legal: [
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Privacy Policy", href: "/privacy-policy" }
  ]
};

export const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-8 py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0.1}>
          <div className="bg-[#0D0D0D] rounded-3xl p-6 sm:p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
              
              {/* Contact Information */}
              <div className="flex flex-col gap-2 lg:order-1">
                <div className="text-white text-lg sm:text-xl font-normal leading-7 tracking-wide text-right lg:text-left">
                  +1-555-933-2082
                </div>
                <div className="text-white text-xl sm:text-2xl font-bold leading-8 text-right lg:text-left">
                  design@creativestudio.com
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="flex flex-col justify-between gap-8 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-white text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight lg:leading-[44px]">
                    Stay updated with our latest projects
                  </h2>
                  <p className="text-white text-base sm:text-xl font-normal leading-7 tracking-wide">
                    Our initiatives engage diverse audiences across various channels.
                  </p>
                  
                  {/* Email Input */}
                  <div className="flex items-center gap-4 border-b border-[#666666] pb-2">
                    <Input 
                      type="email" 
                      placeholder="Your email address"
                      className="flex-1 bg-transparent border-none text-white placeholder:text-white text-sm font-normal leading-tight tracking-wide p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button 
                      size="sm" 
                      className="w-6 h-6 bg-white rounded-full p-0 hover:bg-white/90"
                    >
                      <ArrowRight className="w-3 h-3 text-[#111111]" />
                    </Button>
                  </div>
                </div>
                
                {/* Copyright */}
                <div className="text-white text-sm sm:text-base font-normal leading-relaxed tracking-wide text-right lg:text-left">
                  @Copyright Uinkits System. Each project blends innovation, artistry, and tangible outcomes.
                </div>
              </div>

              {/* Links Section */}
              <div className="flex flex-col justify-between gap-8 lg:order-3">
                <div className="flex flex-col sm:flex-row lg:flex-col gap-8 sm:gap-12 lg:gap-8">
                  
                  {/* Navigation Links */}
                  <div className="flex-1">
                    <nav className="space-y-2.5">
                      {footerLinks.navigation.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="block text-white text-sm font-medium leading-tight tracking-wide hover:text-white/80 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Social Links */}
                  <div className="flex-1">
                    <nav className="space-y-2.5">
                      {footerLinks.social.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="block text-white text-sm font-medium leading-tight tracking-wide hover:text-white/80 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Legal Links */}
                <div className="grid grid-cols-2 lg:grid-cols-1 lg:flex lg:flex-wrap lg:justify-between gap-2 lg:gap-4">
                  {footerLinks.legal.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-white text-xs font-medium leading-tight tracking-wide hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};