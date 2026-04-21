import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/site';

export function SidePostItem({ post }) {
  return (
    <article className="side-post-item">
      <Link href={`/post/${post.slug}`} className="side-post-item__thumb">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="120px"
          unoptimized
        />
      </Link>

      <div className="side-post-item__content">
        <Link href={`/post/${post.slug}`} className="side-post-item__title">
          {post.title}
        </Link>
        <span>{formatDate(post.date)}</span>
      </div>
    </article>
  );
}