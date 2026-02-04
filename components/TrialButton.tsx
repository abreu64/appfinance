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
            className={`text-xl md:text-3xl py-8 md:py-10 px-12 md:px-24 flex flex-col items-center group ${className}`}
        >
            <span className="flex items-center gap-4">
                Teste grátis por 7 dias
                <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="text-sm md:text-lg font-medium opacity-70">depois R$35,00/Mês</span>
        </Button>
    );
};
