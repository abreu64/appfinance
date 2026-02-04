import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FileText, CheckCircle, AlertCircle, CreditCard, ShieldAlert, Gavel } from 'lucide-react';

export const TermsPage = () => {
    const APP_URL = "https://financepro-xova.onrender.com";

    const openApp = () => {
        window.open(APP_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-violet-500/30 font-inter overflow-x-hidden">
            <Navbar onTestNow={openApp} />

            <section className="relative pt-40 pb-24 px-6 hero-gradient">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <FileText size={14} /> Contrato de Utilização
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
                            TERMOS DE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
                                USO
                            </span>
                        </h1>
                        <p className="text-zinc-400 text-sm uppercase tracking-widest">Última atualização: 04 de Fevereiro de 2026</p>
                    </div>

                    <div className="space-y-12 text-zinc-300 leading-relaxed">
                        {/* 1. Descrição do Serviço */}
                        <div className="glass-morphism p-8 rounded-3xl border border-white/5">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <CheckCircle className="text-indigo-500" /> 1. Descrição do Serviço
                            </h2>
                            <p>
                                O <strong>APP-FINANCEPRO</strong> é uma plataforma de gestão financeira pessoal que permite aos usuários lançarem manualmente suas receitas, despesas e faturas de cartões de crédito, fornecendo análises e relatórios para auxílio no controle financeiro.
                            </p>
                        </div>

                        {/* 2. Responsabilidades do Usuário */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <AlertCircle className="text-indigo-500" /> 2. Responsabilidades do Usuário
                            </h2>
                            <p className="mb-4">Ao utilizar nossa plataforma, você concorda em:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Fornecer informações verídicas e atualizadas no cadastro.</li>
                                <li>Manter a confidencialidade de sua senha e dados de acesso.</li>
                                <li>Utilizar o serviço apenas para fins lícitos e pessoais.</li>
                                <li>Não realizar engenharia reversa ou tentativas de invasão ao sistema.</li>
                            </ul>
                        </div>

                        {/* 3. Assinatura e Teste Grátis */}
                        <div className="p-8 rounded-3xl bg-indigo-600/10 border border-indigo-500/20">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <CreditCard className="text-indigo-400" /> 3. Assinatura e Pagamentos
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="h-8 w-8 shrink-0 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">7</div>
                                    <p><strong>Período de Teste:</strong> Oferecemos um período de teste gratuito de 7 dias para novos usuários experimentarem todas as funcionalidades premium.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-8 w-8 shrink-0 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">$</div>
                                    <p><strong>Valor da Assinatura:</strong> Após o período de teste, o valor da assinatura é de <strong>R$ 35,00 por mês</strong>, processado de forma recorrente via Stripe.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-8 w-8 shrink-0 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">X</div>
                                    <p><strong>Cancelamento:</strong> O cancelamento pode ser realizado a qualquer momento através das configurações da sua conta, sem multas ou taxas de fidelidade.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Propriedade Intelectual */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <ShieldAlert className="text-indigo-500" /> 4. Propriedade Intelectual
                            </h2>
                            <p>
                                Todo o conteúdo, design, logotipos e códigos do APP-FINANCEPRO são de propriedade exclusiva da Techsolutions. É proibida a reprodução total ou parcial sem autorização prévia por escrito.
                            </p>
                        </div>

                        {/* 5. Limitação de Responsabilidade */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <AlertCircle className="text-indigo-500" /> 5. Limitação de Responsabilidade
                            </h2>
                            <p>
                                O APP-FINANCEPRO é uma ferramenta de auxílio e não se responsabiliza por decisões financeiras tomadas pelos usuários ou por erros decorrentes de lançamentos manuais incorretos.
                            </p>
                        </div>

                        {/* 6. Foro e Legislação */}
                        <div className="glass-morphism p-8 rounded-3xl border border-white/5">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <Gavel className="text-indigo-500" /> 6. Lei Aplicável e Foro
                            </h2>
                            <p>
                                Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca da sede da empresa para dirimir quaisquer controvérsias oriundas deste contrato.
                            </p>
                        </div>

                        <div className="text-center pt-8">
                            <p className="text-zinc-500 text-sm">
                                Ao clicar em "Testar Agora" ou realizar login, você concorda integralmente com estes Termos de Uso.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
