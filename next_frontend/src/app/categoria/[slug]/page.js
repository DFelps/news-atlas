import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getCategoryPosts } from '@/lib/data';
import { siteConfig } from '@/lib/site';
import { PostListItem } from '@/components/cards/PostListItem';

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return { title: `Categoria | ${siteConfig.name}` };
  }

  return {
    title: `${category.name} | ${siteConfig.name}`
  };
}

export default function CategoryPage({ params, searchParams }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const currentPage = Number(searchParams.page || 1);
  const perPage = 10;
  const posts = getCategoryPosts(params.slug);
  const totalPages = Math.max(1, Math.ceil(posts.length / perPage));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const offset = (safePage - 1) * perPage;
  const paginatedPosts = posts.slice(offset, offset + perPage);

  return (
    <section className="page-wrap">
      <div className="page-hero page-hero--category">
        <span className="eyebrow">Categoria</span>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

      <div className="category-list">
        {paginatedPosts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>

      <nav className="pagination" aria-label="Paginação da categoria">
        <Link
          className={`pagination__button ${safePage === 1 ? 'is-disabled' : ''}`}
          href={`/categoria/${category.slug}?page=${Math.max(1, safePage - 1)}`}
        >
          Anterior
        </Link>

        <div className="pagination__pages">
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = index + 1;

            return (
              <Link
                key={pageNumber}
                className={`pagination__page ${pageNumber === safePage ? 'is-active' : ''}`}
                href={`/categoria/${category.slug}?page=${pageNumber}`}
              >
                {pageNumber}
              </Link>
            );
          })}
        </div>

        <Link
          className={`pagination__button ${safePage === totalPages ? 'is-disabled' : ''}`}
          href={`/categoria/${category.slug}?page=${Math.min(totalPages, safePage + 1)}`}
        >
          Próxima
        </Link>
      </nav>
    </section>
  );
}
