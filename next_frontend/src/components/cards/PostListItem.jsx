import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/site';

export function PostListItem({ post }) {
  return (
    <article className="post-list-item">
      <Link href={`/post/${post.slug}`} className="post-list-item__media">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          unoptimized
        />
      </Link>

      <div className="post-list-item__content">
        <span className="post-list-item__meta">
          {post.categoryName} · {formatDate(post.date)}
        </span>
        <Link href={`/post/${post.slug}`} className="post-list-item__title">
          {post.title}
        </Link>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}