
import React from 'react';
import { 
  PlusCircle, 
  CreditCard, 
  BarChart3, 
  BrainCircuit, 
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';
import { Screenshot, Feature } from './types';

export const SCREENSHOTS: Screenshot[] = [
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/dashihj.png",
    title: "Dashboard Estratégico",
    description: "Uma visão panorâmica e detalhada de todo o seu ecossistema financeiro em um só lugar."
  },
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/entradahj.png",
    title: "Gestão de Receitas",
    description: "Controle manual preciso de cada centavo que entra na sua vida financeira."
  },
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/despesahj.png",
    title: "Análise de Gastos",
    description: "Categorize suas despesas e entenda seus hábitos com clareza absoluta."
  },
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/cartaohj.png",
    title: "Domínio de Cartões",
    description: "Lance suas compras no crédito e antecipe o valor da sua fatura sem surpresas."
  },
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/cadastrohj.png",
    title: "Segurança Blindada",
    description: "Privacidade total. Seus dados protegidos por criptografia em banco de dados isolado."
  }
];

export const MOBILE_SCREENSHOTS: Screenshot[] = [
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/mobiledash.png",
    title: "Seu Dashboard Mobile",
    description: "Interface otimizada para consulta rápida de saldos, metas e status do mês."
  },
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/mobileentrada.png",
    title: "Entrada de Valores",
    description: "Registre novos ganhos de forma instantânea com foco em usabilidade tátil."
  },
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/mobilesaidas.png",
    title: "Controle de Saídas",
    description: "Não perca nenhum gasto de vista. Categorização rápida para o dia a dia."
  },
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/mobilecartao.png",
    title: "Gestão de Crédito",
    description: "Monitore faturas e limites de todos os seus cartões em tempo real."
  },
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/mobileextrato.png",
    title: "Extrato Inteligente",
    description: "Histórico completo com filtros avançados para conciliação financeira rápida."
  },
  {
    url: "https://xqcwlxyflniaptjqwdwr.supabase.co/storage/v1/object/public/financaspessoaistelasmobile/mobilecadastro.png",
    title: "Segurança & Acesso",
    description: "Login seguro e interface de onboarding intuitiva para novos usuários."
  }
];

export const FEATURES: Feature[] = [
  {
    icon: <PlusCircle className="w-6 h-6 text-emerald-400" />,
    title: "Fluxo de Caixa Manual",
    description: "A consciência financeira nasce do controle ativo. Lance suas receitas e despesas com simplicidade.",
    tutorial: [
      "Navegue até o botão 'Entradas' ou 'Despesas' no menu principal.",
      "Clique no botão 'Novo Lançamento' (+).",
      "Cadastre o valor e selecione a categoria desejada.",
      "Escolha a forma de pagamento (Dinheiro, Débito ou Crédito).",
      "Confirme para que o sistema processe o saldo instantaneamente."
    ]
  },
  {
    icon: <CreditCard className="w-6 h-6 text-emerald-400" />,
    title: "Controle de Cartões",
    description: "Cadastre seus cartões para que o sistema gerencie limites e faturas automaticamente a cada nova despesa lançada.",
    tutorial: [
      "Acesse o menu 'Meus Cartões' na tela inicial.",
      "Clique no botão 'Adicionar ou Editar' para configurar seu cartão.",
      "Insira o Nome do Titular, a Bandeira, o Limite total e a Data de Fechamento.",
      "Salve as configurações para ativar a sincronização automática.",
      "Pronto! Toda vez que você lançar uma despesa no crédito ou débito, o sistema atualizará o limite e a fatura do cartão sozinho."
    ]
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-emerald-400" />,
    title: "Insights com IA",
    description: "Nossa tecnologia analisa seus padrões de lançamento para sugerir economias e otimizações reais.",
    tutorial: [
      "Navegue até o Dashboard principal do aplicativo.",
      "Localize o botão central 'Analise com IA'.",
      "Clique no botão para iniciar o processamento inteligente.",
      "Aguarde alguns segundos enquanto a IA cruza seus dados de receitas e despesas.",
      "Receba seu relatório personalizado com sugestões de corte de gastos e metas de economia baseadas no seu perfil real."
    ]
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Dados Criptografados",
    description: "Sem acesso a contas bancárias. Suas informações ficam em um ambiente blindado e seguro."
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6 text-emerald-400" />,
    title: "Exportação Avançada",
    description: "Gere relatórios profissionais em PDF ou Excel para análises externas ou contabilidade.",
    tutorial: [
      "Navegue até o botão 'Relatórios' no painel principal ou menu de navegação.",
      "Dentro da seção de relatórios, você visualizará o resumo dos seus dados.",
      "Localize os ícones de exportação específicos para Excel e PDF.",
      "Clique no ícone desejado para baixar o arquivo formatado diretamente para o seu dispositivo."
    ]
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
    title: "Dashboards Visuais",
    description: "Transforme números em gráficos intuitivos que mostram a realidade da sua saúde financeira."
  }
];
