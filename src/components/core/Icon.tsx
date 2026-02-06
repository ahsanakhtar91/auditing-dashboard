import * as React from "react";
import { cn } from "../../lib/utils";

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-9 h-9",
  xl: "w-10 h-10",
};

const Icon = React.forwardRef<HTMLImageElement, IconProps>(
  ({ className, size = "sm", alt = "", ...props }, ref) => {
    return (
      <img
        ref={ref}
        alt={alt}
        className={cn(sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Icon.displayName = "Icon";

export { Icon };
