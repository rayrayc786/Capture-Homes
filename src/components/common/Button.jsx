import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3.5 rounded-full font-label font-semibold text-sm tracking-widest uppercase transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5",
    secondary: "bg-surface-container-high text-on-surface hover:bg-surface-bright border border-outline-variant",
    outline: "border border-outline text-on-surface hover:bg-on-surface hover:text-surface",
    ghost: "text-on-surface hover:bg-surface-container"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
