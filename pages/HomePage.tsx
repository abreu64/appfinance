import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { TrialButton } from '../components/TrialButton';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import {
    ArrowRight,
    TrendingUp,
    Volume2,
    VolumeX
} from 'lucide-react';

export const HomePage = () => {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const APP_URL = "https://financepro-xova.onrender.com";

    const openApp = () => {
        window.open(APP_URL, '_blank', 'noopener,noreferrer');
    };

    // Garantir que o volume esteja alto quando desmutado
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 1.0;
        }
    }, [isMuted]);

    const toggleMute = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (videoRef.current) {
            const newMuteState = !videoRef.current.muted;
            videoRef.current.muted = newMuteState;
            setIsMuted(newMuteState);
            videoRef.current.play().catch(err => console.log("Autoplay preventivo:", err));
        }
    };

    const handleVideoEnd = () => {
        if (videoRef.current) {
            setIsMuted(true);
            videoRef.current.muted = true;
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(err => console.log("Erro ao reiniciar vídeo:", err));
        }
    };

    return (
        <div className="animate-fade-in">
            <Navbar onTestNow={openApp} />

            {/* Hero Section Premium */}
            <section className="relative pt-40 md:pt-64 pb-24 px-6 hero-gradient">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="flex flex-col items-center mb-12">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-900/50 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                            <TrendingUp size={14} /> 100% Manual • Inteligente • Privado
                        </div>

                        <a
                            href="https://techsolutions-6b2y.onrender.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-500/50"></span>
                                <span className="text-[11px] font-black uppercase tracking-[0.6em] text-amber-500/70 group-hover:text-amber-400 transition-colors">
                                    um produto
                                </span>
                                <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-500/50"></span>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                                <span className="text-xl md:text-3xl font-black uppercase tracking-[0.5em] text-amber-500 filter drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                                    Techsolutions
                                </span>
                                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/20 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-all duration-500">
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-400">Visite o Site</span>
                                    <ArrowRight size={14} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <h1 className="text-3xl md:text-[5rem] font-black mb-10 leading-[1.1] tracking-tighter uppercase italic text-white mx-auto">
                        CONTROLE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-500 to-indigo-500">
                            ABSOLUTO.
                        </span>
                    </h1>

                    <p className="text-amber-100/80 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
                        Abandone a gestão passiva. Lance suas finanças, monitore seus cartões e deixe que nossa IA transforme seus dados em liberdade financeira real.
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <TrialButton onClick={openApp} />
                        <div className="flex items-center gap-6 text-amber-500/80 text-[10px] font-black uppercase tracking-[0.3em]">
                            <span>Criptografia Ponta a Ponta</span>
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></span>
                            <span>Zero Acesso Bancário</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Vídeo Showcase */}
            <section className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/[0.02] blur-[150px] pointer-events-none"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Experiência Real</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-white">
                            VEJA O APP-FINANCEPRO <br />
                            <span className="text-violet-500">EM AÇÃO.</span>
                        </h2>
                    </div>

                    {/* Container do Vídeo com clique para som */}
                    <div
                        onClick={() => toggleMute()}
                        className="relative max-w-[300px] mx-auto aspect-[9/19] rounded-[3rem] overflow-hidden border-[8px] border-zinc-800 bg-black shadow-[0_0_100px_rgba(16,185,129,0.2)] group cursor-pointer"
                    >
                        {/* Camada de Granulação e Textura (Subtle Grain) */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

                        {/* Vinheta Premium */}
                        {/* Vinheta removida para transparência total do vídeo */}

                        <video
                            ref={videoRef}
                            src="https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/video.mp4"
                            className="w-full h-full object-contain brightness-[1.0] contrast-[1.0] transition-transform duration-700"
                            autoPlay
                            muted={isMuted}
                            onEnded={handleVideoEnd}
                            playsInline
                        />

                        {/* Botão de Som Customizado com Pulse se estiver mudo */}
                        <button
                            onClick={(e) => toggleMute(e)}
                            className={`absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 p-4 rounded-full glass-morphism border border-white/10 text-white hover:bg-violet-500 hover:text-white transition-all active:scale-90 shadow-2xl group/audio ${isMuted ? 'animate-pulse' : ''} cursor-pointer`}
                        >
                            {isMuted ? (
                                <div className="flex items-center gap-2">
                                    <VolumeX size={24} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest hidden group-hover/audio:block pr-2">Ativar Áudio</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Volume2 size={24} className="text-violet-400 group-hover/audio:text-white" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest hidden group-hover/audio:block pr-2">Som Ativo</span>
                                </div>
                            )}
                        </button>

                        {/* Overlay sutil para manter o foco no vídeo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent pointer-events-none"></div>

                        {/* Indicador de "Clique para som" quando mudo */}
                        {isMuted && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="bg-zinc-950/60 backdrop-blur-md px-6 py-3 rounded-full border border-violet-500/30 text-violet-400 text-xs font-bold uppercase tracking-widest">
                                    Clique para ativar o som
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center justify-center pb-24">
                <TrialButton onClick={openApp} />
            </div>

            <Footer />
        </div>
    );
};
