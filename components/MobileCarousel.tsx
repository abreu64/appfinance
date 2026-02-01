
import React, { useState, useEffect, useCallback } from 'react';
import { MOBILE_SCREENSHOTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const MobileCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % MOBILE_SCREENSHOTS.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + MOBILE_SCREENSHOTS.length) % MOBILE_SCREENSHOTS.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = 50;
    const duration = 4000;
    const increment = (interval / duration) * 100;
    
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          next();
          return 0;
        }
        return oldProgress + increment;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <section 
      className="relative w-full py-32 bg-zinc-950 border-t border-white/5" 
      id="mobile-experience"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Experiência Mobile</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">
            CONTROLE NA <br /><span className="text-emerald-500 italic">PALMA DA MÃO.</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg font-light">As telas originais do aplicativo projetadas para a sua agilidade.</p>
        </div>

        <div className="relative flex flex-col items-center">
          
          {/* Navegação Manual Premium */}
          <div className="absolute top-1/2 left-0 md:left-[15%] -translate-y-1/2 z-40 hidden md:block">
            <button 
              onClick={prev}
              className="p-5 rounded-full glass-morphism border border-white/5 text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all active:scale-90"
            >
              <ChevronLeft size={32} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 md:right-[15%] -translate-y-1/2 z-40 hidden md:block">
            <button 
              onClick={next}
              className="p-5 rounded-full glass-morphism border border-white/5 text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all active:scale-90"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Image Container - Moldura removida conforme solicitado */}
          <div className="relative w-full max-w-[320px] aspect-[9/19.5] z-20 group">
            {/* Sombra de destaque para a imagem flutuante */}
            <div className="absolute inset-0 shadow-[0_30px_60px_-15px_rgba(16,185,129,0.15)] group-hover:shadow-emerald-500/25 transition-shadow duration-700"></div>
            
            <div className="w-full h-full relative overflow-hidden bg-zinc-950/20">
              {MOBILE_SCREENSHOTS.map((screen, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 cubic-bezier(0.23,1,0.32,1) ${
                    index === currentIndex 
                      ? 'opacity-100 scale-100 translate-x-0' 
                      : index < currentIndex 
                        ? 'opacity-0 scale-95 -translate-x-12'
                        : 'opacity-0 scale-95 translate-x-12'
                  }`}
                >
                  <img 
                    src={screen.url} 
                    alt={screen.title}
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <div className="mt-16 text-center max-w-lg min-h-[120px]">
             <div className="overflow-hidden h-10 mb-2">
                {MOBILE_SCREENSHOTS.map((screen, index) => (
                   <h3 
                    key={index}
                    className={`text-2xl md:text-3xl font-black text-white tracking-tight uppercase transition-all duration-500 ${
                      index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                  >
                    {screen.title}
                  </h3>
                ))}
             </div>
            <p className="text-zinc-500 text-lg font-light leading-relaxed">
              {MOBILE_SCREENSHOTS[currentIndex].description}
            </p>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {MOBILE_SCREENSHOTS.map((_, i) => (
              <button 
                key={i}
                onClick={() => handleIndicatorClick(i)}
                className="relative h-1 flex items-center"
              >
                <div className={`h-full transition-all duration-500 rounded-full bg-zinc-900 ${
                  i === currentIndex ? 'w-16' : 'w-3'
                }`}>
                  {i === currentIndex && (
                    <div 
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
