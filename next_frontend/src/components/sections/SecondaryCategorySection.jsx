import { PostCard } from '@/components/cards/PostCard';
import { SectionHeader } from '@/components/common/SectionHeader';

export function SecondaryCategorySection({ title, posts }) {
  return (
    <section className="home-section">
      <div className="container">
        <SectionHeader title={title} description="Mais uma editoria para fechar a home com modularidade e volume visual sem exagero." accent="rose" />

        <div className="news-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
