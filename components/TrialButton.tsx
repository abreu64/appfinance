import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface TrialButtonProps {
    onClick?: () => void;
    className?: string;
}

export const TrialButton: React.FC<TrialButtonProps> = ({ onClick, className = '' }) => {
    return (
        <Button
            onClick={onClick}
            variant="glow"
            className={`py-3 md:py-4 px-6 md:px-10 flex flex-col items-center ${className}`}
        >
            <div className="flex flex-col items-center leading-tight">
                <span className="text-sm md:text-xl font-bold flex items-center gap-2 italic">
                    Teste por 7 dias
                    <span className="text-violet-400 font-black px-1 group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
                    Depois R$35,00/Mês
                </span>
                <span className="text-[10px] md:text-sm font-normal opacity-60 mt-1">
                    Cancele a qualquer momento
                </span>
            </div>
        </Button>
    );
};
