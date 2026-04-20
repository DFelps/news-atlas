import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/data';
import { formatDate } from '@/lib/site';

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { title: 'Post não encontrado' };
  }

  return {
    title: `${post.title} | Atlas Journal`
  };
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="page-wrap page-wrap--narrow article-page">
      <header className="article-header">
        <span className="eyebrow">{post.categoryName}</span>
        <h1>{post.title}</h1>
        <div className="article-meta">
          <span>{post.author}</span>
          <span>{formatDate(post.date)}</span>
        </div>
      </header>

      <div className="article-cover">
        <Image src={post.image} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 900px" />
      </div>

      <div
        className="rich-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
