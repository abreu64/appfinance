import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { FullscreenGallery } from './components/ScreenshotSlider';
import { MobileCarousel } from './components/MobileCarousel';
import { FEATURES } from './constants';
import { Feature } from './types';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  BarChart3, 
  X, 
  PlayCircle, 
  ChevronLeft,
  Volume2,
  VolumeX,
  ExternalLink
} from 'lucide-react';

type ViewState = 'home' | 'gallery' | 'pricing';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedTutorial, setSelectedTutorial] = useState<Feature | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const APP_URL = "https://financepro-xova.onrender.com";

  // Resetar scroll ao mudar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Garantir que o volume esteja alto quando desmutado
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 1.0;
    }
  }, [isMuted]);

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); // Evita conflitos se clicar no botão dentro do container
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
      
      // Tentativa de play caso o navegador tenha pausado por segurança
      videoRef.current.play().catch(err => console.log("Autoplay preventivo:", err));
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      // Ao final, desativa o áudio (volta ao mudo)
      setIsMuted(true);
      videoRef.current.muted = true;
      // Reinicia o vídeo manualmente para simular o loop
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.log("Erro ao reiniciar vídeo:", err));
    }
  };

  const scrollToFeatures = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openApp = () => {
    window.open(APP_URL, '_blank', 'noopener,noreferrer');
  };

  // --- COMPONENTE: HOME PAGE ---
  const HomePage = () => (
    <div className="animate-fade-in">
      <Navbar 
        onOpenFeatures={scrollToFeatures} 
        onOpenGallery={() => setCurrentView('gallery')}
        onTestNow={openApp}
      />

      {/* Hero Section Premium */}
      <section className="relative pt-40 md:pt-64 pb-24 px-6 hero-gradient">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-900/50 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <TrendingUp size={14} /> 100% Manual • Inteligente • Privado
            </div>
            
            <a 
              href="https://techsolutions-6b2y.onrender.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-all duration-300"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 group-hover:text-zinc-300 transition-colors">um produto</span>
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                <span className="text-xl md:text-3xl font-black uppercase tracking-[0.5em] animate-rainbow-text filter drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">
                  Techsolutions
                </span>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/40 transition-all duration-500">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400">Visite o Site</span>
                  <ArrowRight size={14} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
          
          <h1 className="text-3xl md:text-[5rem] font-black mb-10 leading-[1.1] tracking-tighter uppercase italic text-white mx-auto">
            CONTROLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-cyan-500">
              ABSOLUTO.
            </span>
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            Abandone a gestão passiva. Lance suas finanças, monitore seus cartões e deixe que nossa IA transforme seus dados em liberdade financeira real.
          </p>

          <div className="flex flex-col items-center gap-8">
            <Button onClick={openApp} className="text-2xl py-8 px-14 group shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              Teste o aplicativo 7 dias gratis
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <div className="flex items-center gap-6 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
              <span>Criptografia Ponta a Ponta</span>
              <span className="w-1.5 h-1.5 bg-emerald-500/40 rounded-full"></span>
              <span>Zero Acesso Bancário</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Vídeo Showcase */}
      <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/[0.02] blur-[150px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Experiência Real</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-white">
              VEJA O APP-FINANCEPRO <br />
              <span className="text-emerald-500">EM AÇÃO.</span>
            </h2>
          </div>
          
          {/* Container do Vídeo com clique para som */}
          <div 
            onClick={() => toggleMute()}
            className="relative aspect-video rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-[0_0_100px_rgba(16,185,129,0.15)] group cursor-pointer"
          >
            <video 
              ref={videoRef}
              src="https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/Agent_video_Pippit_20260131124710.mp4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              autoPlay
              muted={isMuted}
              onEnded={handleVideoEnd}
              playsInline
            />
            
            {/* Botão de Som Customizado com Pulse se estiver mudo */}
            <button 
              onClick={(e) => toggleMute(e)}
              className={`absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 p-4 rounded-full glass-morphism border border-white/10 text-white hover:bg-emerald-500 hover:text-zinc-950 transition-all active:scale-90 shadow-2xl group/audio ${isMuted ? 'animate-pulse' : ''}`}
            >
              {isMuted ? (
                <div className="flex items-center gap-2">
                  <VolumeX size={24} />
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden group-hover/audio:block pr-2">Ativar Áudio</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Volume2 size={24} className="text-emerald-400 group-hover/audio:text-zinc-950" />
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden group-hover/audio:block pr-2">Som Ativo</span>
                </div>
              )}
            </button>

            {/* Overlay sutil para manter o foco no vídeo */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Indicador de "Clique para som" quando mudo */}
            {isMuted && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-zinc-950/60 backdrop-blur-md px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  Clique para ativar o som
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recursos Premium Section */}
      <section id="features" className="py-40 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Manual & Inteligente</span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-tight">
                RECURSOS DE <br /><span className="text-zinc-600">ALTA PERFORMANCE.</span>
              </h2>
            </div>
            <div className="text-zinc-500 text-lg md:text-xl font-light italic max-w-lg border-t border-emerald-500/30 pt-8">
              "A verdadeira organização financeira não é automática, é consciente."
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="group relative p-12 rounded-[3rem] bg-zinc-900/30 border border-white/5 hover:border-emerald-500/40 transition-all duration-700 overflow-hidden flex flex-col items-center text-center justify-between min-h-[450px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                   {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 160 })}
                </div>
                <div className="relative z-10 w-full flex flex-col items-center">
                  <div className="bg-emerald-500/10 text-emerald-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight uppercase leading-tight">{feature.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-light text-lg group-hover:text-zinc-300 transition-colors mb-8">
                    {feature.description}
                  </p>
                </div>
                
                {feature.tutorial && (
                  <div className="relative z-10 pt-4 flex justify-center w-full">
                    <button 
                      onClick={() => setSelectedTutorial(feature)}
                      className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors group/btn"
                    >
                      <PlayCircle size={18} className="group-hover/btn:scale-125 transition-transform" />
                      Ver Guia Prático
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Segurança Section Centralizada */}
          <div className="mt-32 p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-500/20 relative overflow-hidden group">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] group-hover:opacity-5 transition-opacity pointer-events-none">
                <ShieldCheck size={500} className="text-emerald-500" />
             </div>
             
             <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                <h3 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter italic">
                  Sua Privacidade <br /><span className="text-emerald-500">É Sagrada.</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16 text-left">
                   {[
                     "Dados armazenados em banco de dados isolado",
                     "Sem necessidade de senhas bancárias",
                     "Criptografia de nível militar em todos os lançamentos",
                     "Privacidade total: você é o dono dos seus dados"
                   ].map((text, i) => (
                     <div key={i} className="flex items-center gap-4 text-zinc-300 text-lg md:text-xl">
                        <CheckCircle2 size={24} className="text-emerald-500 shrink-0" /> {text}
                     </div>
                   ))}
                </div>

                <div className="bg-zinc-950/50 p-10 md:p-14 rounded-[3rem] border border-white/5 backdrop-blur-md max-w-3xl">
                   <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed italic">
                      "Diferente de outros aplicativos que vendem seus dados de consumo para financeiras, o APP-FINANCEPRO é um ambiente fechado e seguro focado exclusivamente na sua evolução financeira."
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );

  // --- COMPONENTE: GALLERY PAGE ---
  const GalleryPage = () => (
    <div className="min-h-screen bg-zinc-950 animate-fade-in flex flex-col">
      <header className="p-6 md:p-10 flex items-center justify-between border-b border-white/5 glass-morphism sticky top-0 z-[100]">
        <button 
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition-all font-bold uppercase tracking-widest text-xs"
        >
          <ChevronLeft size={20} /> Voltar para o Início
        </button>
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-emerald-500" />
          <span className="text-lg font-black uppercase italic tracking-tighter">Galeria Visual</span>
        </div>
        <Button onClick={openApp} variant="outline" className="py-2 px-6 text-[10px] uppercase">
          Testar Agora
        </Button>
      </header>

      <main className="flex-grow pt-10">
        <FullscreenGallery />
        <MobileCarousel />
        
        {/* Botão Centralizado e Próximo ao Carrossel Mobile */}
        <div className="pb-32 pt-10 flex flex-col items-center justify-center px-6">
           <Button 
            onClick={openApp} 
            className="w-full max-w-md md:max-w-xl text-lg md:text-3xl py-8 md:py-10 px-8 md:px-16 shadow-[0_0_60px_rgba(16,185,129,0.3)] group"
           >
             Teste o aplicativo 7 dias gratis
             <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
           </Button>
           <p className="mt-8 text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-black">Comece hoje sua revolução financeira</p>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );

  // --- COMPONENTE: PRICING PAGE ---
  const PricingPage = () => (
    <div className="min-h-screen bg-zinc-950 animate-fade-in flex flex-col items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none"></div>
      
      <button 
        onClick={() => setCurrentView('home')}
        className="absolute top-10 left-10 flex items-center gap-2 text-zinc-500 hover:text-white transition-all font-bold uppercase tracking-widest text-xs z-50"
      >
        <ChevronLeft size={20} /> Voltar
      </button>

      <div className="max-w-6xl w-full text-center py-20 md:py-40 rounded-[3rem] md:rounded-[5rem] bg-zinc-900/50 border border-emerald-500/10 relative overflow-hidden shadow-2xl backdrop-blur-sm">
        <div className="relative z-10 flex flex-col items-center gap-12">
          <div className="bg-emerald-500/10 text-emerald-400 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.4em] uppercase mb-4">
            Oferta Exclusiva de Lançamento
          </div>
          
          <h2 className="text-3xl md:text-[4.5rem] font-black mb-4 tracking-tighter uppercase leading-[0.85] italic relative z-10 mx-auto text-center text-white">
            DOMINE <br /> O SEU <span className="text-emerald-500">DESTINO.</span>
          </h2>
          
          <p className="text-zinc-500 text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed">
            Tenha acesso ilimitado a todas as ferramentas de IA, dashboards e controle de cartões.
          </p>

          <div className="flex flex-col items-center gap-8 w-full px-6">
            <Button onClick={openApp} className="text-xl md:text-3xl py-8 md:py-10 px-12 md:px-24 w-full md:w-auto">
              Teste o aplicativo 7 dias gratis
            </Button>
            
            <div className="flex flex-wrap justify-center gap-8 text-zinc-600 uppercase tracking-[0.3em] text-[10px] font-black">
              <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> IA Integrada</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Sem Publicidade</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Exportação PDF/Excel</span>
            </div>
          </div>

          <div className="mt-16 text-zinc-600 text-[10px] uppercase tracking-widest">
            Cancele a qualquer momento • Pagamento Seguro
          </div>
        </div>
      </div>
    </div>
  );

  // --- COMPONENTE: FOOTER ---
  const FooterSection = () => (
    <footer className="py-24 px-6 border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setCurrentView('home')}>
          <div className="bg-emerald-500 p-3 rounded-2xl">
            <BarChart3 className="w-8 h-8 text-zinc-950" />
          </div>
          <span className="text-3xl font-black tracking-tighter uppercase italic text-white">APP-FINANCE<span className="text-emerald-500">PRO</span></span>
        </div>
        
        <p className="text-zinc-700 text-[10px] tracking-[0.4em] uppercase">© 2025 APP-FINANCEPRO. TODOS OS DIREITOS RESERVADOS.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 font-inter overflow-x-hidden">
      
      {/* RENDERIZADOR DE PÁGINAS */}
      {currentView === 'home' && <HomePage />}
      {currentView === 'gallery' && <GalleryPage />}
      {currentView === 'pricing' && <PricingPage />}

      {/* Tutorial Overlay (Exclusivo para Home) */}
      {selectedTutorial && (
        <div className="fixed inset-0 z-[120] bg-zinc-950/95 backdrop-blur-xl overflow-y-auto flex items-start justify-center p-4 md:p-12 animate-fade-in">
          <div className="max-w-2xl w-full glass-morphism p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] relative border border-emerald-500/30 my-auto shadow-2xl">
            <button 
              onClick={() => setSelectedTutorial(null)}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-zinc-500 hover:text-emerald-500 transition-colors p-2"
            >
              <X size={32} />
            </button>
            
            <div className="flex items-center text-center gap-6 mb-10">
              <div className="bg-emerald-500 text-zinc-950 p-4 rounded-2xl">
                {selectedTutorial.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">{selectedTutorial.title}</h3>
            </div>
            
            <p className="text-zinc-400 mb-12 text-center text-lg">Siga o passo a passo abaixo para utilizar esta funcionalidade com máxima eficiência:</p>
            
            <div className="space-y-8">
              {selectedTutorial.tutorial?.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-500 font-black group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-300">
                    {i + 1}
                  </div>
                  <p className="text-lg md:text-xl text-zinc-200 font-lightBase leading-relaxed group-hover:text-white transition-colors">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            
            <Button onClick={() => setSelectedTutorial(null)} className="mt-12 w-full py-6 text-lg uppercase tracking-widest">
              Entendido, vamos lá!
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;