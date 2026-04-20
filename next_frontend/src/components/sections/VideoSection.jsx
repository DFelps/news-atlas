import { SectionHeader } from '@/components/common/SectionHeader';
import { VideoCard } from '@/components/cards/VideoCard';

export function VideoSection({ posts }) {
  return (
    <section className="home-section home-section--soft">
      <div className="container">
        <SectionHeader title="Vídeos" description="Uma área própria para entrevistas, bastidores, cortes e conteúdos rápidos." accent="rose" />

        <div className="video-grid">
          {posts.map((post) => (
            <VideoCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
