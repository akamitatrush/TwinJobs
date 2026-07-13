export const siteMeta = {
  title: "CareerTwin | Evolua, reposicione-se e conquiste",
  description:
    "Use inteligência artificial para melhorar seu currículo e LinkedIn, analisar sua aderência a vagas e construir um plano prático de evolução profissional.",
} as const;

export const navigationItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "Para empresas", href: "#empresas" },
] as const;

export const heroContent = {
  eyebrow: "Seu próximo passo profissional começa aqui",
  titleLines: ["Evolua.", "Reposicione-se.", "Conquiste."] as const,
  highlight: "Conquiste.",
  description:
    "A plataforma completa para impulsionar sua carreira com clareza, estratégia e um plano prático — sem promessas irreais de contratação.",
  primaryCta: { label: "Começar agora", href: "/cadastro" },
  secondaryCta: { label: "Conhecer a plataforma", href: "#como-funciona" },
  microcopy: "Comece gratuitamente. Sem cartão de crédito.",
} as const;

export const trustedCompanies = [
  "Mercado livre",
  "Nubank",
  "iFood",
  "Stone",
  "Ambev",
  "VTEX",
] as const;

export const trustMessage =
  "Profissionais de diferentes empresas já estão evoluindo com a CareerTwin.";

export const howItWorksSteps = [
  {
    title: "Envie seu perfil",
    description:
      "Adicione seu currículo e as informações principais da sua trajetória profissional.",
    icon: "FileUser" as const,
  },
  {
    title: "Defina sua meta",
    description: "Informe o cargo, a área ou a oportunidade que deseja conquistar.",
    icon: "Target" as const,
  },
  {
    title: "Analise sua aderência",
    description:
      "Identifique pontos fortes, lacunas e melhorias prioritárias para seu posicionamento.",
    icon: "SearchCheck" as const,
  },
  {
    title: "Conquiste seu lugar",
    description:
      "Receba um plano prático para fortalecer sua candidatura e evoluir profissionalmente.",
    icon: "Trophy" as const,
  },
] as const;

export const features = [
  {
    id: "curriculo-linkedin",
    title: "Recomendações para currículo e LinkedIn",
    description:
      "Receba orientações práticas para melhorar clareza, posicionamento, palavras-chave e aderência aos padrões atuais de recrutamento.",
    benefits: [
      "Melhoria do resumo profissional",
      "Destaque de resultados reais",
      "Otimização de palavras-chave",
      "Reorganização das experiências",
      "Priorização das ações de maior impacto",
    ],
  },
  {
    id: "aderencia",
    title: "Diagnóstico de aderência ao cargo e à vaga",
    description:
      "Compare sua trajetória com um cargo-alvo ou uma vaga específica e compreenda sua compatibilidade de maneira objetiva.",
    benefits: [
      "Percentual de aderência",
      "Pontos fortes",
      "Lacunas profissionais",
      "Riscos da candidatura",
      "Melhorias recomendadas",
    ],
  },
  {
    id: "traducao-contextual",
    title: "Tradução contextual da experiência",
    description:
      "Transforme descrições informais em uma linguagem clara, estratégica e compatível com o mercado — sem inventar o que você não viveu.",
    example: {
      before: "Organizava as tarefas do setor.",
      after:
        "Coordenava a rotina operacional e acompanhava a execução das atividades da área.",
    },
  },
  {
    id: "plano-evolucao",
    title: "Plano de evolução profissional",
    description:
      "Receba um plano priorizado com ações de curto, médio e longo prazo para alcançar seu próximo objetivo profissional.",
    benefits: [
      "Ações prioritárias",
      "Nível de impacto",
      "Nível de esforço",
      "Prazo recomendado",
      "Acompanhamento da evolução",
    ],
  },
] as const;

/** Métricas demonstrativas — substituir por dados reais quando disponíveis */
export const metrics = [
  { value: "4x", label: "mais clareza no posicionamento" },
  { value: "70%", label: "mais confiança nas candidaturas" },
  { value: "85%", label: "identificam melhorias prioritárias" },
  { value: "2.500+", label: "recomendações personalizadas" },
] as const;

export const testimonials = [
  {
    quote:
      "A CareerTwin me ajudou a enxergar o que realmente precisava mudar no meu currículo e no meu posicionamento. Passei a me candidatar com muito mais clareza e confiança.",
    name: "Mariana Alves",
    role: "Product Designer",
    rating: 5,
  },
] as const;

export const companiesSection = {
  title: "Para times de carreira e RH",
  description:
    "Em breve: apoio a programas de recolocação, bootcamps e áreas de talentos com diagnósticos estruturados e acompanhamento.",
  cta: { label: "Falar com o time", href: "/cadastro" },
} as const;

export const finalCta = {
  title: "Pronto para evoluir, se reposicionar e conquistar seu próximo capítulo?",
  description:
    "Descubra como transformar sua experiência em um posicionamento mais competitivo — com honestidade e plano de ação.",
  cta: { label: "Começar agora gratuitamente", href: "/cadastro" },
} as const;

export const footerDescription =
  "A CareerTwin ajuda profissionais a compreender, comunicar e desenvolver melhor sua trajetória profissional.";

export const footerGroups = [
  {
    title: "Produto",
    links: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Funcionalidades", href: "#solucoes" },
      { label: "Para empresas", href: "#empresas" },
      { label: "Preços", href: "/planos" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Conteúdos", href: "#resultados" },
      { label: "Guia de carreira", href: "#como-funciona" },
      { label: "Central de ajuda", href: "#faq-landing" },
      { label: "Entrar", href: "/login" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre nós", href: "#como-funciona" },
      { label: "Contato", href: "/cadastro" },
      { label: "Criar conta", href: "/cadastro" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de uso", href: "#" },
      { label: "Política de privacidade", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
] as const;

export const socialNetworks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
] as const;
