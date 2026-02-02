import React from 'react';
import { Button } from './Button';
import { TrendingUp, Home, Layers, Image } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenFeatures?: () => void;
  onOpenGallery?: () => void;
  onTestNow?: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFeatures, onOpenGallery, onTestNow, activeSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Simplified navigation: direct route change, no more scrolling logic
  const navItems = [
    { label: 'Início', icon: <Home size={16} />, onClick: () => navigate('/'), active: isActive('/') },
    { label: 'Funcionalidades', icon: <Layers size={16} />, onClick: () => navigate('/features'), active: isActive('/features') },
    { label: 'Galeria', icon: <Image size={16} />, onClick: () => navigate('/gallery'), active: isActive('/gallery') },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">

        {/* Logo Area */}
        <div
          className="flex items-center gap-3 cursor-pointer bg-zinc-900/80 backdrop-blur-md pl-2 pr-6 py-2 rounded-full border border-white/5 shadow-2xl transition-transform hover:scale-105"
          onClick={() => navigate('/')}
        >
          <div className="bg-emerald-500 p-2.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <TrendingUp className="w-5 h-5 text-zinc-950" strokeWidth={3} />
          </div>
          <span className="text-lg font-black tracking-tighter uppercase italic text-zinc-200">
            FINANCE<span className="text-emerald-500">PRO</span>
          </span>
        </div>

        {/* Navigation Floating Island */}
        <div className="hidden md:flex items-center gap-2 bg-zinc-900/90 backdrop-blur-xl p-2 rounded-full border border-white/10 shadow-2xl">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              className={`
                px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-300 cursor-pointer
                ${item.active
                  ? 'bg-zinc-800 text-emerald-400 shadow-inner'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'}
              `}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button onClick={onTestNow} variant="glow" size="md" className="!py-3 !px-8 text-xs cursor-pointer">
            Testar Agora
          </Button>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <Button onClick={onTestNow} variant="primary" size="sm" className="cursor-pointer">Testar</Button>
        </div>

      </div>
    </nav>
  );
};