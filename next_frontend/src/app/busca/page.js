import { searchPosts } from '@/lib/data';
import { PostListItem } from '@/components/cards/PostListItem';

export function generateMetadata({ searchParams }) {
  const q = searchParams.q?.trim();

  return {
    title: q ? `Busca por "${q}" | Atlas Journal` : 'Busca | Atlas Journal'
  };
}

export default async function SearchPage({ searchParams }) {
  const q = searchParams.q?.trim() || '';
  const currentPage = Number(searchParams.page || 1);
  const perPage = 10;

  const { posts, totalPages, total } = await searchPosts(q, currentPage, perPage);
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  return (
    <section className="page-wrap">
      <div className="page-hero page-hero--category">
        <span className="eyebrow">Busca</span>
        <h1>{q ? `Resultados para: ${q}` : 'Digite algo para buscar'}</h1>
        <p>
          {q
            ? `${total} resultado(s) encontrado(s).`
            : 'Use o campo de busca no topo para encontrar posts.'}
        </p>
      </div>

      {!!posts.length && (
        <div className="category-list">
          {posts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </div>
      )}

      {q && !posts.length && (
        <div className="empty-state">
          <p>Nenhum resultado encontrado.</p>
        </div>
      )}

      {q && totalPages > 1 && (
        <nav className="pagination" aria-label="Paginação da busca">
          <a
            className={`pagination__button ${safePage === 1 ? 'is-disabled' : ''}`}
            href={`/busca?q=${encodeURIComponent(q)}&page=${Math.max(1, safePage - 1)}`}
          >
            Anterior
          </a>

          <div className="pagination__pages">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;

              return (
                <a
                  key={pageNumber}
                  className={`pagination__page ${pageNumber === safePage ? 'is-active' : ''}`}
                  href={`/busca?q=${encodeURIComponent(q)}&page=${pageNumber}`}
                >
                  {pageNumber}
                </a>
              );
            })}
          </div>

          <a
            className={`pagination__button ${safePage === totalPages ? 'is-disabled' : ''}`}
            href={`/busca?q=${encodeURIComponent(q)}&page=${Math.min(totalPages, safePage + 1)}`}
          >
            Próxima
          </a>
        </nav>
      )}
    </section>
  );
}