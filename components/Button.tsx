import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md'
}) => {
  const baseStyles = "font-bold transition-all duration-300 active:scale-95 text-center cursor-pointer flex items-center justify-center gap-3 relative overflow-hidden group";

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-lg",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-2xl",
    xl: "px-10 py-5 text-lg md:text-xl rounded-2xl"
  };

  const variants = {
    primary: "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_8px_30px_-5px_rgba(16,185,129,0.6)]",
    secondary: "bg-zinc-100 text-zinc-950 hover:bg-white border border-transparent",
    outline: "border border-emerald-500/30 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 backdrop-blur-sm",
    glow: "bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.7)] hover:brightness-110"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {/* Brilliant shine effect on hover for primary/glow */}
      {(variant === 'primary' || variant === 'glow') && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-10 pointer-events-none" />
      )}
      <span className="relative z-20 flex items-center gap-2">{children}</span>
    </button>
  );
};
