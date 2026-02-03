import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';

export const PricingPage = () => {
    const navigate = useNavigate();
    const APP_URL = "https://financepro-xova.onrender.com";

    const openApp = () => {
        window.open(APP_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-zinc-900 animate-fade-in flex flex-col items-center justify-center relative overflow-hidden px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none"></div>

            <Navbar
                onOpenFeatures={() => navigate('/')}
                onOpenGallery={() => navigate('/gallery')}
                onTestNow={openApp}
            />

            <div className="max-w-6xl w-full text-center py-20 md:py-40 rounded-[3rem] md:rounded-[5rem] bg-zinc-900/50 border border-violet-500/10 relative overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="relative z-10 flex flex-col items-center gap-12">
                    <div className="bg-amber-500/10 text-amber-400 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.4em] uppercase mb-4">
                        Oferta Exclusiva de Lançamento
                    </div>

                    <h2 className="text-3xl md:text-[4.5rem] font-black mb-4 tracking-tighter uppercase leading-[0.85] italic relative z-10 mx-auto text-center text-white">
                        DOMINE <br /> O SEU <span className="text-violet-500">DESTINO.</span>
                    </h2>

                    <p className="text-amber-100/70 text-lg md:text-2xl font-light max-w-xl mx-auto leading-relaxed">
                        Tenha acesso ilimitado a todas as ferramentas de IA, dashboards e controle de cartões.
                    </p>

                    <div className="flex flex-col items-center gap-8 w-full px-6">
                        <Button onClick={openApp} className="text-xl md:text-3xl py-8 md:py-10 px-12 md:px-24 w-full md:w-auto">
                            Teste o aplicativo 7 dias gratis
                        </Button>

                        <div className="flex flex-wrap justify-center gap-8 text-zinc-600 uppercase tracking-[0.3em] text-[10px] font-black">
                            <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-violet-500" /> IA Integrada</span>
                            <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-violet-500" /> Sem Publicidade</span>
                            <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-violet-500" /> Exportação PDF/Excel</span>
                        </div>
                    </div>

                    <div className="mt-16 text-amber-500/60 text-[10px] uppercase tracking-widest">
                        Cancele a qualquer momento • Pagamento Seguro
                    </div>
                </div>
            </div>
        </div>
    );
};
