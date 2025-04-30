import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "rounded transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 flex items-center justify-center";

  const variantClasses = {
    primary:
      "bg-burgundy text-cream hover:bg-burgundy-light focus:ring-burgundy disabled:bg-burgundy-light/50",
    secondary:
      "bg-rose-gold text-cream hover:bg-opacity-90 focus:ring-rose-gold disabled:bg-opacity-50",
    outline:
      "border border-burgundy text-burgundy hover:bg-burgundy/10 focus:ring-burgundy disabled:text-burgundy/50 disabled:border-burgundy/50",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`₹{baseClasses} ₹{variantClasses[variant]} ₹{sizeClasses[size]} ₹{widthClass} ₹{className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="mr-2 w-4 h-4 border-2 border-cream border-t-transparent rounded-full animate-spin"></span>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
