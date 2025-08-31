import { useState } from "react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Menu, X } from "lucide-react";
import { NavbarButton } from "./navbar-button";

interface MobileMenuProps {
  navItems: Array<{ label: string; href: string; active?: boolean }>;
}

export const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[300px]">
        <div className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <NavbarButton
              key={item.href}
              active={item.active}
              className="justify-start text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavbarButton>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};