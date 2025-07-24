import PageHeader from '@/components/PageHeader';
import MissionVisionSection from '@/components/MissionVisionSection';
import CoreValuesSection from '@/components/CoreValuesSection';
import LeadershipTeamSection from '@/components/LeadershipTeamSection';
import CampusFacilitiesSection from '@/components/CampusFacilitiesSection';
import SchoolHistorySection from '@/components/SchoolHistorySection';

export const metadata = {
  title: 'About Us - Kabingori Adventist School',
  description: 'Learn about our mission, vision, values, and commitment to excellence in education at Kabingori Adventist School.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Our School" 
        subtitle="Excellence in Education • Learning for Service"
        backgroundImage="/images/facilities/classrooms.jpg"
      />
      <MissionVisionSection />
      <CoreValuesSection />
      <LeadershipTeamSection />
      <SchoolHistorySection />
      <CampusFacilitiesSection />
    </>
  );
}