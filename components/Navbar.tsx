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
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-zinc-900 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo Area */}
        <div
          className="flex items-center gap-3 cursor-pointer group transition-transform hover:scale-105"
          onClick={() => navigate('/')}
        >
          <div className="bg-violet-600 p-2 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]">
            <TrendingUp className="w-5 h-5 text-white" strokeWidth={3} />
          </div>
          <span className="text-lg font-black tracking-tighter uppercase italic text-zinc-200">
            FINANCE<span className="text-violet-500">PRO</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              className={`
                text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-300
                ${item.active
                  ? 'text-violet-400'
                  : 'text-zinc-400 hover:text-white'}
              `}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button onClick={onTestNow} variant="glow" size="md" className="!py-2.5 !px-6 text-xs cursor-pointer">
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