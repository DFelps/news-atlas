export const siteConfig = {
  name: 'Atlas Journal',
  tagline: 'Leitura clara, ritmo editorial moderno',
  description:
    'Projeto demo de portal editorial em Next.js com Sass, pronto para usar WordPress como backend headless.'
};

export function formatDate(dateString) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(dateString));
}
