import { SectionHeader } from '@/components/common/SectionHeader';
import { PostCard } from '@/components/cards/PostCard';
import { SidePostItem } from '@/components/cards/SidePostItem';

export function HeroSection({ featured, trending }) {
  return (
    <section className="home-section home-section--hero">
      <div className="container">
        <div className="hero-heading">
          <p>Jornalismo digital com visual modular, leve e direto.</p>
        </div>

        <SectionHeader title="Destaque" description="A principal manchete do dia em um bloco maior, com apoio lateral de leituras rápidas." />

        <div className="hero-grid">
          <PostCard post={featured} />
          <div className="hero-grid__side">
            {trending.map((post) => (
              <SidePostItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
