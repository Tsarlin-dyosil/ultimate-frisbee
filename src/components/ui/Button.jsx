import React from "react";

const Button = ({ children, variant = "default", size = "md", ...props }) => {
  const baseStyles = "px-4 py-2 font-medium rounded-md transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-100",
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;