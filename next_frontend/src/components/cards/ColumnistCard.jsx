import Image from 'next/image';
import Link from 'next/link';

export function ColumnistCard({ columnist }) {
  return (
    <article className="columnist-card">
      <div className="columnist-card__avatar">
        <Image src={columnist.image} alt={columnist.name} fill sizes="96px" />
      </div>
      <h3>{columnist.name}</h3>
      <p>{columnist.role}</p>
      <Link href={`/post/${columnist.post.slug}`}>{columnist.post.title}</Link>
    </article>
  );
}
