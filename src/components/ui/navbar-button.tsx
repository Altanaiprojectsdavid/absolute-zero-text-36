import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";

interface NavbarButtonProps extends ButtonProps {
  active?: boolean;
}

export const NavbarButton = ({ 
  children, 
  active = false, 
  className, 
  ...props 
}: NavbarButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        "text-foreground font-medium capitalize text-base px-4 py-2 h-auto",
        "hover:bg-transparent hover:text-primary transition-colors duration-200",
        active && "text-primary",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};