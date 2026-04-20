const categories = [
  {
    id: 1,
    name: 'Brasil',
    slug: 'brasil',
    description: 'Cobertura nacional com foco em política, sociedade, cidades e movimentos do dia a dia.'
  },
  {
    id: 2,
    name: 'Saúde',
    slug: 'saude',
    description: 'Conteúdos de saúde pública, bem-estar, comportamento e informação útil.'
  },
  {
    id: 3,
    name: 'Vídeos',
    slug: 'videos',
    description: 'Entrevistas, coberturas rápidas e recortes de reportagens em formato audiovisual.'
  },
  {
    id: 4,
    name: 'Colunistas',
    slug: 'colunistas',
    description: 'Assinaturas fixas, análises, bastidores e textos autorais.'
  }
];

const content = `
  <p>Este é um conteúdo de demonstração pronto para ser substituído por dados do WordPress. A ideia aqui é validar estrutura, ritmo visual e organização editorial antes da integração definitiva com o CMS.</p>
  <p>O layout foi pensado para manter leitura confortável, hierarquia clara e liberdade para acomodar tanto notícias rápidas quanto textos mais densos. Com Sass, a manutenção visual fica simples e o projeto passa a mostrar domínio de CSS mais artesanal.</p>
  <p>No cenário final, cada bloco da home pode vir de categorias, tags, campos customizados ou regras editoriais simples, sem depender de um painel pesado ou de um tema WordPress engessado.</p>
  <p>Essa abordagem separa bem as responsabilidades: o WordPress publica, organiza e entrega dados; o Next.js renderiza a experiência final com mais controle, performance e consistência visual.</p>
`;

const posts = [
  {
    id: 1,
    title: 'Atlas Journal estreia com visual modular e clima de revista digital',
    slug: 'atlas-journal-estreia-visual-modular',
    excerpt: 'Um layout inspirado em portais editoriais clássicos, mas redesenhado com mais respiro e leitura moderna.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-20',
    categorySlug: 'brasil',
    categoryName: 'Brasil',
    author: 'Redação Atlas',
    content
  },
  {
    id: 2,
    title: 'Bastidores da produção: como um portal pequeno ganha cara de produto grande',
    slug: 'bastidores-producao-portal-pequeno-produto-grande',
    excerpt: 'Escopo controlado, blocos previsíveis e componentes consistentes fazem diferença no resultado final.',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-18',
    categorySlug: 'brasil',
    categoryName: 'Brasil',
    author: 'Marina Torres',
    content
  },
  {
    id: 3,
    title: 'Saúde urbana: pequenas mudanças de rotina podem ter impacto real',
    slug: 'saude-urbana-mudancas-rotina-impacto-real',
    excerpt: 'Um bloco mais leve da home pode gerar contraste visual e ampliar o tempo de permanência.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-17',
    categorySlug: 'saude',
    categoryName: 'Saúde',
    author: 'Helena Prado',
    content
  },
  {
    id: 4,
    title: 'Vídeo: o que muda quando o WordPress vira apenas uma API editorial',
    slug: 'video-wordpress-vira-api-editorial',
    excerpt: 'Separar frontend e CMS dá mais previsibilidade para layout, deploy e organização do código.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-16',
    categorySlug: 'videos',
    categoryName: 'Vídeos',
    author: 'Caio Mendes',
    content
  },
  {
    id: 5,
    title: 'Coluna: design editorial ainda é o que mais dá cara de projeto premium',
    slug: 'coluna-design-editorial-projeto-premium',
    excerpt: 'Tipografia, grids e ritmo visual continuam sendo o que separa demo simples de demo memorável.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-15',
    categorySlug: 'colunistas',
    categoryName: 'Colunistas',
    author: 'Laura Meireles',
    content
  },
  {
    id: 6,
    title: 'Mercado local testa formatos de notícia mais visuais e mais curtos',
    slug: 'mercado-local-formatos-noticia-visuais-curtos',
    excerpt: 'Portais enxutos vêm trocando excesso de widgets por blocos editoriais mais claros.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-14',
    categorySlug: 'brasil',
    categoryName: 'Brasil',
    author: 'Redação Atlas',
    content
  },
  {
    id: 7,
    title: 'Bem-estar no trabalho: por que o conteúdo de serviço funciona tão bem',
    slug: 'bem-estar-trabalho-conteudo-servico-funciona-bem',
    excerpt: 'Uma editoria de utilidade pública ajuda a equilibrar o tom de um site editorial.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-13',
    categorySlug: 'saude',
    categoryName: 'Saúde',
    author: 'Helena Prado',
    content
  },
  {
    id: 8,
    title: 'Vídeo: como pensar home modular sem transformar tudo em portal gigante',
    slug: 'video-home-modular-sem-portal-gigante',
    excerpt: 'A chave está em poucos padrões fortes, e não em dezenas de blocos únicos.',
    image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-12',
    categorySlug: 'videos',
    categoryName: 'Vídeos',
    author: 'Caio Mendes',
    content
  },
  {
    id: 9,
    title: 'Coluna: um bom card de post resolve metade da home',
    slug: 'coluna-bom-card-post-resolve-metade-home',
    excerpt: 'Quando o card funciona bem, o resto da composição fica mais rápido de montar.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-11',
    categorySlug: 'colunistas',
    categoryName: 'Colunistas',
    author: 'Rafael Pires',
    content
  },
  {
    id: 10,
    title: 'Cidades experimentam novas formas de informar sem poluir a leitura',
    slug: 'cidades-experimentam-novas-formas-informar',
    excerpt: 'Mais espaço em branco e menos ruído visual fazem diferença na percepção de qualidade.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-10',
    categorySlug: 'brasil',
    categoryName: 'Brasil',
    author: 'Marina Torres',
    content
  },
  {
    id: 11,
    title: 'Saúde em pauta: conteúdo explicativo também pode parecer premium',
    slug: 'saude-em-pauta-conteudo-explicativo-premium',
    excerpt: 'Editorial leve não precisa parecer informal demais; o segredo está no acabamento.',
    image: 'https://images.unsplash.com/photo-1511174511562-5f97f4f4d1a5?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-09',
    categorySlug: 'saude',
    categoryName: 'Saúde',
    author: 'Helena Prado',
    content
  },
  {
    id: 12,
    title: 'Vídeo: uma stack pequena pode entregar percepção de projeto completo',
    slug: 'video-stack-pequena-projeto-completo',
    excerpt: 'Bons blocos, boa tipografia e um fluxo headless bem definido já resolvem muita coisa.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-08',
    categorySlug: 'videos',
    categoryName: 'Vídeos',
    author: 'Caio Mendes',
    content
  },
  {
    id: 13,
    title: 'Coluna: fazer na mão o CSS certo pode valorizar muito a entrega',
    slug: 'coluna-css-na-mao-valoriza-entrega',
    excerpt: 'Sass bem organizado mostra domínio técnico e melhora a leitura do repositório.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-07',
    categorySlug: 'colunistas',
    categoryName: 'Colunistas',
    author: 'Laura Meireles',
    content
  },
  {
    id: 14,
    title: 'Brasil em foco: coberturas regionais ganham mais espaço em projetos independentes',
    slug: 'brasil-em-foco-coberturas-regionais',
    excerpt: 'Portais menores têm aproveitado melhor recortes locais e narrativas mais próximas do leitor.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-06',
    categorySlug: 'brasil',
    categoryName: 'Brasil',
    author: 'Redação Atlas',
    content
  }
];

export const homeData = {
  featured: posts[0],
  trending: [posts[1], posts[2], posts[3], posts[4]],
  latestNews: [posts[5], posts[6], posts[9], posts[10]],
  videos: [posts[3], posts[7], posts[11]],
  health: {
    featured: posts[2],
    list: [posts[6], posts[10], posts[1], posts[8]]
  },
  columnists: [
    {
      id: 1,
      name: 'Laura Meireles',
      role: 'Design e mídia digital',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      post: posts[4]
    },
    {
      id: 2,
      name: 'Rafael Pires',
      role: 'Produto e conteúdo',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      post: posts[8]
    },
    {
      id: 3,
      name: 'Helena Prado',
      role: 'Saúde e comportamento',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80',
      post: posts[2]
    }
  ],
  brasil: [posts[0], posts[5], posts[9], posts[13]]
};

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryPosts(slug) {
  return posts.filter((post) => post.categorySlug === slug);
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts() {
  return posts;
}
