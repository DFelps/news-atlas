import { HeroSection } from '@/components/sections/HeroSection';
import { LatestNewsSection } from '@/components/sections/LatestNewsSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { FeatureCategorySection } from '@/components/sections/FeatureCategorySection';
import { ColumnistsSection } from '@/components/sections/ColumnistsSection';
import { SecondaryCategorySection } from '@/components/sections/SecondaryCategorySection';
import { homeData } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <HeroSection featured={homeData.featured} trending={homeData.trending} />
      <LatestNewsSection posts={homeData.latestNews} />
      <VideoSection posts={homeData.videos} />
      <FeatureCategorySection
        title="Saúde e bem-estar"
        description="Uma editoria leve, útil e com cara mais humana para quebrar o ritmo das manchetes mais duras."
        featured={homeData.health.featured}
        list={homeData.health.list}
      />
      <ColumnistsSection columnists={homeData.columnists} />
      <SecondaryCategorySection
        title="Brasil"
        posts={homeData.brasil}
      />
    </>
  );
}
