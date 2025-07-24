import HeroSection from '@/components/HeroSection';
import PrincipalWelcome from '@/components/PrincipalWelcome';
import QuickLinksSection from '@/components/QuickLinksSection';
import NewsSection from '@/components/NewsSection';
import AchievementsHighlight from '@/components/AchievementsHighlight';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PrincipalWelcome />
      <QuickLinksSection />
      <AchievementsHighlight />
      <NewsSection />
    </>
  );
}