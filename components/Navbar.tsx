import React from 'react';
import { Button } from './Button';
import { TrendingUp } from 'lucide-react';

interface NavbarProps {
  onOpenFeatures?: () => void;
  onOpenGallery?: () => void;
  onTestNow?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFeatures, onOpenGallery, onTestNow }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-emerald-500 p-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-zinc-950" />
          </div>
          <span className="text-xl font-extrabold tracking-tighter uppercase italic">APP-FINANCE<span className="text-emerald-500">PRO</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-300">
          <button 
            onClick={onOpenFeatures} 
            className="hover:text-emerald-400 transition-all duration-300 hover:scale-105 active:opacity-70 border-b border-transparent hover:border-emerald-500/50 pb-1"
          >
            Funcionalidades
          </button>
          <button 
            onClick={onOpenGallery} 
            className="hover:text-emerald-400 transition-all duration-300 hover:scale-105 active:opacity-70 border-b border-transparent hover:border-emerald-500/50 pb-1"
          >
            Galeria
          </button>
        </div>

        <Button onClick={onTestNow} variant="primary" className="py-2 px-8 text-xs uppercase tracking-widest shadow-emerald-500/20">
          Testar Agora
        </Button>
      </div>
    </nav>
  );
};