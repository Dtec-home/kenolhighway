import { Container } from './ui/Container';

const achievements = [
  {
    id: 1,
    metric: '95%',
    label: 'University Admission Rate',
    description: 'Students qualifying for higher education',
    icon: '🎓'
  },
  {
    id: 2,
    metric: '500+',
    label: 'Students Enrolled',
    description: 'Active learners in our community',
    icon: '👥'
  },
  {
    id: 3,
    metric: '25+',
    label: 'Qualified Teachers',
    description: 'Dedicated education professionals',
    icon: '👨‍🏫'
  },
  {
    id: 4,
    metric: '8',
    label: 'Years of Excellence',
    description: 'Serving the community since 2016',
    icon: '⭐'
  }
];

const recentAwards = [
  {
    title: 'Regional Volleyball Champions',
    year: '2024',
    category: 'Sports Excellence'
  },
  {
    title: 'Outstanding KCSE Performance',
    year: '2024',
    category: 'Academic Achievement'
  },
  {
    title: 'Best Boarding School',
    year: '2023',
    category: 'Student Welfare'
  }
];

export default function AchievementsHighlight() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <Container>
        {/* Achievements Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Our Achievements
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Excellence is not just our goal—it&apos;s our tradition
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="text-center">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2 font-poppins">
                {achievement.metric}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {achievement.label}
              </h3>
              <p className="text-blue-100">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Awards */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Recent Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentAwards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 rounded-lg p-6 hover:bg-white/30 transition-colors">
                  <div className="text-2xl font-bold mb-2">{award.year}</div>
                  <h4 className="font-semibold mb-2">{award.title}</h4>
                  <p className="text-blue-100 text-sm">{award.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-xl mb-6">Ready to join our community of excellence?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Visit
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}