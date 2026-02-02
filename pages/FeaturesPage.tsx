import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { FEATURES } from '../constants';
import { Feature } from '../types';
import {
    PlayCircle,
    CheckCircle2,
    ShieldCheck,
    X,
    ArrowRight
} from 'lucide-react';

export const FeaturesPage = () => {
    const [selectedTutorial, setSelectedTutorial] = useState<Feature | null>(null);
    const APP_URL = "https://financepro-xova.onrender.com";

    const openApp = () => {
        window.open(APP_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="bg-zinc-950 min-h-screen animate-fade-in flex flex-col">
            <Navbar onTestNow={openApp} activeSection="features" />

            <div className="pt-32 px-6 flex-grow">
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
                                            className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors group/btn cursor-pointer"
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
                    <div className="mt-32 mb-32 p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-500/20 relative overflow-hidden group">
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
                                    "O APP-FINANCEPRO é um ambiente privado e seguro. Estruturado com criptografia de ponta para que você foque exclusivamente na sua evolução financeira."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            {/* Tutorial Overlay */}
            {selectedTutorial && (
                <div className="fixed inset-0 z-[120] bg-zinc-950/95 backdrop-blur-xl overflow-y-auto flex items-start justify-center p-4 md:p-12 animate-fade-in">
                    <div className="max-w-2xl w-full glass-morphism p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] relative border border-emerald-500/30 my-auto shadow-2xl">
                        <button
                            onClick={() => setSelectedTutorial(null)}
                            className="absolute top-6 right-6 md:top-8 md:right-8 text-zinc-500 hover:text-emerald-500 transition-colors p-2 cursor-pointer"
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

                        <Button onClick={() => setSelectedTutorial(null)} className="mt-12 w-full py-6 text-lg uppercase tracking-widest cursor-pointer">
                            Voltar
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
