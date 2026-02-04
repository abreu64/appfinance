import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Shield, Lock, Eye, FileText, UserCheck, Mail } from 'lucide-react';

export const PrivacyPage = () => {
    const APP_URL = "https://financepro-xova.onrender.com";

    const openApp = () => {
        window.open(APP_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-violet-500/30 font-inter overflow-x-hidden">
            <Navbar onTestNow={openApp} />

            <section className="relative pt-40 pb-24 px-6 hero-gradient">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <Shield size={14} /> Transparência e Segurança
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
                            POLÍTICA DE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">
                                PRIVACIDADE
                            </span>
                        </h1>
                        <p className="text-zinc-400 text-sm uppercase tracking-widest">Última atualização: 04 de Fevereiro de 2026</p>
                    </div>

                    <div className="space-y-12 text-zinc-300 leading-relaxed">
                        {/* Introdução */}
                        <div className="glass-morphism p-8 rounded-3xl border border-white/5">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <FileText className="text-violet-500" /> 1. Introdução
                            </h2>
                            <p>
                                O <strong>APP-FINANCEPRO</strong> valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, processamos e protegemos suas informações de acordo com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> brasileira.
                            </p>
                        </div>

                        {/* Coleta de Dados */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <Eye className="text-violet-500" /> 2. Coleta de Dados
                            </h2>
                            <p className="mb-4">
                                Coletamos apenas os dados estritamente necessários para o funcionamento do aplicativo e a melhoria da sua experiência:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Dados de Cadastro:</strong> Nome, e-mail e senha (armazenados via Supabase Auth).</li>
                                <li><strong>Dados Financeiros:</strong> Lançamentos de receitas, despesas e cartões inseridos manualmente pelo usuário.</li>
                                <li><strong>Dados de Uso:</strong> Informações sobre como você interage com o aplicativo para fins analíticos e de performance.</li>
                            </ul>
                            <div className="mt-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                                <p className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">Nota importante:</p>
                                <p className="text-amber-200/70 text-sm italic">
                                    Não possuímos integração direta com seus bancos. Todos os dados financeiros são lançados de forma manual e privada, garantindo que você tenha 100% de controle.
                                </p>
                            </div>
                        </div>

                        {/* Finalidade do Processamento */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <Lock className="text-violet-500" /> 3. Finalidade e Segurança
                            </h2>
                            <p>
                                Seus dados são processados exclusivamente para:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                                <li>Fornecer as funcionalidades de gestão financeira do aplicativo.</li>
                                <li>Garantir a segurança da sua conta e prevenir fraudes.</li>
                                <li>Comunicar atualizações importantes e suporte técnico.</li>
                            </ul>
                            <p className="mt-4">
                                Utilizamos protocolos de segurança avançados e criptografia para proteger seus dados contra acessos não autorizados, conforme exigido pelos padrões da LGPD.
                            </p>
                        </div>

                        {/* Direitos do Usuário */}
                        <div className="glass-morphism p-8 rounded-3xl border border-white/5">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <UserCheck className="text-violet-500" /> 4. Seus Direitos sob a LGPD
                            </h2>
                            <p className="mb-4">Você possui os seguintes direitos em relação aos seus dados:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-white font-bold mb-1">Acesso e Correção</h3>
                                    <p className="text-sm">Confirmar a existência do tratamento de dados e corrigir dados incompletos ou inexatos.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-white font-bold mb-1">Exclusão</h3>
                                    <p className="text-sm">Solicitar a eliminação dos seus dados pessoais tratados com o seu consentimento.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-white font-bold mb-1">Portabilidade</h3>
                                    <p className="text-sm">Solicitar a transferência dos seus dados para outro fornecedor de serviço.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-white font-bold mb-1">Informação</h3>
                                    <p className="text-sm">Saber com quais entidades compartilhamos seus dados (ex: processadores de pagamento).</p>
                                </div>
                            </div>
                        </div>

                        {/* Cookies */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <Lock className="text-violet-500" /> 5. Política de Cookies
                            </h2>
                            <p>
                                Utilizamos cookies essenciais para manter sua sessão ativa e cookies analíticos para entender o desempenho do site. Você pode gerenciar as preferências de cookies através das configurações do seu navegador.
                            </p>
                        </div>

                        {/* Retenção de Dados */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <FileText className="text-violet-500" /> 6. Retenção de Dados
                            </h2>
                            <p>
                                Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por obrigações legais de retenção de registros.
                            </p>
                        </div>

                        {/* Contato */}
                        <div className="p-8 rounded-3xl bg-violet-600/10 border border-violet-500/20 text-center">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                                <Mail className="text-violet-400" /> 7. Encarregado de Dados (DPO)
                            </h2>
                            <p className="mb-4">
                                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato com nosso Encarregado de Proteção de Dados:
                            </p>
                            <p className="text-violet-400 font-bold text-lg">privacidade@financepro.com.br</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
