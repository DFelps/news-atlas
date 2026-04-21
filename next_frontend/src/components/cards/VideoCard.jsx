import Image from 'next/image';
import Link from 'next/link';

export function VideoCard({ post }) {
  return (
    <article className="video-card">
      <Link href={`/post/${post.slug}`} className="video-card__media">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          unoptimized
        />
        <span className="video-card__play">▶</span>
      </Link>

      <div className="video-card__content">
        <span className="pill">Vídeo</span>
        <Link href={`/post/${post.slug}`} className="video-card__title">
          {post.title}
        </Link>
      </div>
    </article>
  );
}