import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/site';

export function PostCard({ post, compact = false }) {
  return (
    <article className={`post-card ${compact ? 'post-card--compact' : ''}`}>
      <Link href={`/post/${post.slug}`} className="post-card__media">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          unoptimized
        />
      </Link>

      <div className="post-card__content">
        <span className="post-card__meta">{formatDate(post.date)}</span>
        <Link href={`/post/${post.slug}`} className="post-card__title">
          {post.title}
        </Link>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}