import { ColumnistCard } from '@/components/cards/ColumnistCard';
import { SectionHeader } from '@/components/common/SectionHeader';

export function ColumnistsSection({ columnists }) {
  return (
    <section className="home-section home-section--soft">
      <div className="container">
        <SectionHeader title="Colunistas" description="Perfis fixos com visual forte, úteis para humanizar a home e valorizar assinatura editorial." accent="sand" />

        <div className="columnists-grid">
          {columnists.map((columnist) => (
            <ColumnistCard key={columnist.id} columnist={columnist} />
          ))}
        </div>
      </div>
    </section>
  );
}
