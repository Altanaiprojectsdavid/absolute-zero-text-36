import { Sparkles } from "lucide-react";
import { NavbarButton } from "../ui/navbar-button";
import { MobileMenu } from "../ui/mobile-menu";
const navItems = [{
  label: "Home",
  href: "/",
  active: true
}, {
  label: "Features",
  href: "/features"
}, {
  label: "Gallery",
  href: "/gallery"
}, {
  label: "Pricing",
  href: "/pricing"
}];
export const Navbar = () => {
  return <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="relative">
        {/* Glassmorphic container */}
        <div className="bg-glass backdrop-blur-[30px] border border-glass-border rounded-full px-6 py-3 shadow-[0px_1px_2px_rgba(255,255,255,0.20)_inset]">
          <div className="flex items-center justify-between md:justify-center md:space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Left nav items */}
              <div className="flex items-center space-x-8">
                <NavbarButton active={navItems[0].active}>
                  {navItems[0].label}
                </NavbarButton>
                <div className="w-1 h-1 bg-nav-separator rounded-full" />
                <NavbarButton active={navItems[1].active}>
                  {navItems[1].label}
                </NavbarButton>
              </div>

              {/* Center icon */}
              <div className="flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>

              {/* Right nav items */}
              <div className="flex items-center space-x-8">
                <NavbarButton active={navItems[2].active}>
                  {navItems[2].label}
                </NavbarButton>
                <div className="w-1 h-1 bg-nav-separator rounded-full" />
                <NavbarButton active={navItems[3].active}>
                  {navItems[3].label}
                </NavbarButton>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center justify-between w-full">
              <Sparkles className="h-6 w-6 text-primary" />
              <MobileMenu navItems={navItems} />
            </div>
          </div>
        </div>
      </div>
    </nav>;
};