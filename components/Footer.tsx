import React from 'react';
import { BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="py-24 px-6 border-t border-white/5 bg-zinc-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="bg-violet-600 p-3 rounded-2xl">
                        <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-3xl font-black tracking-tighter uppercase italic text-white">APP-FINANCE<span className="text-violet-500">PRO</span></span>
                </div>

                <p className="text-amber-500/40 text-[10px] tracking-[0.4em] uppercase">© 2025 APP-FINANCEPRO. TODOS OS DIREITOS RESERVADOS.</p>
            </div>
        </footer>
    );
};
