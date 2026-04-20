import { PostCard } from '@/components/cards/PostCard';
import { SidePostItem } from '@/components/cards/SidePostItem';
import { SectionHeader } from '@/components/common/SectionHeader';

export function FeatureCategorySection({ title, description, featured, list }) {
  return (
    <section className="home-section">
      <div className="container">
        <SectionHeader title={title} description={description} accent="blue" />

        <div className="feature-category-grid">
          <PostCard post={featured} />
          <div className="feature-category-grid__list">
            {list.map((post) => (
              <SidePostItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
