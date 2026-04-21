import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', className = '', to, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-label font-semibold text-sm tracking-widest uppercase transition-all duration-300 active:scale-95 text-center";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5",
    secondary: "bg-surface-container-high text-on-surface hover:bg-surface-bright border border-outline-variant",
    outline: "border border-outline text-on-surface hover:bg-on-surface hover:text-surface",
    ghost: "text-on-surface hover:bg-surface-container"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
