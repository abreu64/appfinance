
import React, { useState, useEffect, useCallback } from 'react';
import { SCREENSHOTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const FullscreenGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SCREENSHOTS.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = 50; 
    const duration = 5000;
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
      className="relative w-full pt-24 pb-12 md:pt-32 md:pb-20 bg-zinc-950 overflow-hidden" 
      id="screens"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none transition-all duration-1000"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-emerald-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 block">Experiência Imersiva</span>
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
            VISÃO <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic text-white">ESTRATÉGICA.</span>
          </h2>
        </div>

        <div className="relative group max-w-6xl mx-auto">
          <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-40 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <button 
              onClick={prev}
              className="p-4 md:p-6 rounded-full glass-morphism border border-white/10 text-white hover:bg-emerald-500 hover:text-zinc-950 transition-all active:scale-90 shadow-2xl"
            >
              <ChevronLeft size={32} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-40 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <button 
              onClick={next}
              className="p-4 md:p-6 rounded-full glass-morphism border border-white/10 text-white hover:bg-emerald-500 hover:text-zinc-950 transition-all active:scale-90 shadow-2xl"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="relative rounded-[2rem] md:rounded-[4rem] overflow-hidden glass-morphism border border-white/10 shadow-4xl aspect-video md:aspect-[21/10] z-10 bg-zinc-900/50">
            {SCREENSHOTS.map((screen, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-full scale-105 pointer-events-none'
                }`}
              >
                <img 
                  src={screen.url} 
                  alt={screen.title}
                  className="w-full h-full object-contain"
                />
                
                {/* Overlay de contraste aprimorado para legibilidade em telas claras */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent flex flex-col justify-end p-8 md:p-20">
                  <div className={`max-w-2xl transition-all duration-1000 delay-300 transform ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Título com contraste máximo e sombra */}
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                      {screen.title}
                    </h3>
                    {/* Descrição em cor sólida de alto contraste com sombra leve */}
                    <p className="text-zinc-100 text-sm md:text-2xl font-semibold leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      {screen.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12 md:mt-16">
            {SCREENSHOTS.map((_, i) => (
              <button 
                key={i}
                onClick={() => handleIndicatorClick(i)}
                className="relative h-1 flex items-center group/dot"
              >
                <div className={`h-full transition-all duration-500 rounded-full bg-zinc-800 ${
                  i === currentIndex ? 'w-24' : 'w-4'
                }`}>
                  {i === currentIndex && (
                    <div 
                      className="h-full bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,1)]"
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
