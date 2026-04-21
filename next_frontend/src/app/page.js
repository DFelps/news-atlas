import { HeroSection } from '@/components/sections/HeroSection';
import { LatestNewsSection } from '@/components/sections/LatestNewsSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { FeatureCategorySection } from '@/components/sections/FeatureCategorySection';
import { ColumnistsSection } from '@/components/sections/ColumnistsSection';
import { SecondaryCategorySection } from '@/components/sections/SecondaryCategorySection';
import { getHomeData } from '@/lib/data';

export default async function HomePage() {
  const homeData = await getHomeData();

  return (
    <>
      {homeData.featured && (
        <HeroSection featured={homeData.featured} trending={homeData.trending || []} />
      )}

      {!!homeData.latestNews?.length && (
        <LatestNewsSection posts={homeData.latestNews} />
      )}

      {!!homeData.videos?.length && (
        <VideoSection posts={homeData.videos} />
      )}

      {homeData.health?.featured && (
        <FeatureCategorySection
          title="Saúde e bem-estar"
          description="Uma editoria leve e útil"
          featured={homeData.health.featured}
          list={homeData.health.list || []}
        />
      )}

      {!!homeData.columnists?.length && (
        <ColumnistsSection columnists={homeData.columnists} />
      )}

      {!!homeData.brasil?.length && (
        <SecondaryCategorySection title="Brasil" posts={homeData.brasil} />
      )}
    </>
  );
}