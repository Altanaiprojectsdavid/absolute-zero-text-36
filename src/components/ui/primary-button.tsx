import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "default" | "secondary";
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, children, icon: Icon, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-medium text-base transition-all duration-200 hover:scale-105 active:scale-95",
          variant === "default" && "bg-[#4B33FF] text-white shadow-[0px_0px_10px_rgba(255,255,255,0.65)_inset] hover:shadow-[0px_0px_15px_rgba(255,255,255,0.8)_inset]",
          variant === "secondary" && "bg-glass border border-glass-border text-foreground backdrop-blur-[30px]",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {Icon && <Icon className="h-5 w-5" />}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };