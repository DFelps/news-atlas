import { siteConfig } from '@/lib/site';

export const metadata = {
  title: `Nossa história | ${siteConfig.name}`
};

export default function HistoriaPage() {
  return (
    <section className="page-wrap page-wrap--narrow">
      <div className="page-hero">
        <span className="eyebrow">Institucional</span>
        <h1>Nossa história</h1>
        <p>
          O {siteConfig.name} nasceu como um projeto editorial demo para mostrar um fluxo moderno:
          WordPress no backend, Next.js no frontend e uma interface com visual forte, limpa e fácil de manter.
        </p>
      </div>

      <article className="rich-content">
        <p>
          A proposta do projeto é simples: construir uma publicação digital com cara profissional,
          blocos editoriais bem organizados e estrutura pronta para escalar sem depender de um tema pesado.
        </p>
        <p>
          Em vez de transformar o WordPress no site inteiro, ele passa a funcionar como um núcleo de publicação,
          responsável por cadastro de posts, categorias, vídeos, páginas e metadados editoriais.
        </p>
        <p>
          No frontend, o foco fica em performance, previsibilidade de componentes, reaproveitamento visual e liberdade
          total para reproduzir e adaptar layouts inspirados em portais e revistas digitais.
        </p>
        <blockquote>
          Um projeto pequeno no escopo, mas com cara de produto sério.
        </blockquote>
        <p>
          Essa base foi montada para ser o ponto de partida de um portal editorial modular, com home composta por seções,
          páginas de categoria enxutas, single minimalista e uma página institucional para dar contexto à marca.
        </p>
      </article>
    </section>
  );
}
