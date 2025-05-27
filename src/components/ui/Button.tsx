import React, { type ReactNode, type ButtonHTMLAttributes } from "react";
import { buttonVariants } from "@/styles/buttonVariants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: keyof typeof buttonVariants;
  icon?: ReactNode;
  ariaLabel?: string;
  className?: string;
}



const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  icon,
  ariaLabel,
  className = "",
  ...props
}) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-offset-1
        ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
