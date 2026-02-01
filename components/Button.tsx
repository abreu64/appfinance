
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary' 
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 text-center cursor-pointer flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    secondary: "bg-zinc-100 hover:bg-white text-zinc-950",
    outline: "border-2 border-emerald-500/50 hover:border-emerald-500 text-emerald-400"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
