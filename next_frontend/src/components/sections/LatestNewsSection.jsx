import { PostCard } from '@/components/cards/PostCard';
import { SectionHeader } from '@/components/common/SectionHeader';

export function LatestNewsSection({ posts }) {
  return (
    <section className="home-section">
      <div className="container">
        <SectionHeader title="Últimas notícias" description="Bloco principal de atualização, com grid simples e bastante respiro." accent="sand" />

        <div className="news-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
