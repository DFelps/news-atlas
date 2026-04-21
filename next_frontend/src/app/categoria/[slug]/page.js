import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getCategoryPosts } from '@/lib/data';
import { siteConfig } from '@/lib/site';
import { PostListItem } from '@/components/cards/PostListItem';

export async function generateMetadata({ params }) {
  const category = await getCategoryBySlug(params.slug);

  if (!category) {
    return { title: `Categoria | ${siteConfig.name}` };
  }

  return {
    title: `${category.name} | ${siteConfig.name}`,
    description: category.description || `Notícias da categoria ${category.name}`
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const currentPage = Number(searchParams.page || 1);
  const perPage = 10;

  const { category, posts, totalPages } = await getCategoryPosts(
    params.slug,
    currentPage,
    perPage
  );

  if (!category) {
    notFound();
  }

  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  return (
    <section className="page-wrap">
      <div className="page-hero page-hero--category">
        <span className="eyebrow">Categoria</span>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

      <div className="category-list">
        {posts.map((post) => (
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