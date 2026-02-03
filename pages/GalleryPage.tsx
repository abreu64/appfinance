import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { FullscreenGallery } from '../components/ScreenshotSlider';
import { MobileCarousel } from '../components/MobileCarousel';
import { Navbar } from '../components/Navbar';
import { ChevronLeft, BarChart3, ArrowRight } from 'lucide-react';

export const GalleryPage = () => {
    const navigate = useNavigate();
    const APP_URL = "https://financepro-xova.onrender.com";

    const openApp = () => {
        window.open(APP_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-zinc-900 animate-fade-in flex flex-col">
            <Navbar
                onOpenFeatures={() => navigate('/')}
                onOpenGallery={() => { }}
                onTestNow={openApp}
            />
            {/* Added spacer for fixed navbar */}
            <div className="h-24"></div>

            <main className="flex-grow pt-10">
                <FullscreenGallery />
                <MobileCarousel />

                {/* Botão Centralizado e Próximo ao Carrossel Mobile */}
                <div className="pb-32 pt-10 flex flex-col items-center justify-center px-6">
                    <Button
                        onClick={openApp}
                        className="w-full max-w-md md:max-w-xl text-lg md:text-3xl py-8 md:py-10 px-8 md:px-16 shadow-[0_0_60px_rgba(139,92,246,0.3)] group"
                    >
                        Teste o aplicativo 7 dias gratis
                        <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                    <p className="mt-8 text-amber-500/60 text-[10px] uppercase tracking-[0.3em] font-black">Comece hoje sua revolução financeira</p>
                </div>
            </main>

            <Footer />
        </div>
    );
};
