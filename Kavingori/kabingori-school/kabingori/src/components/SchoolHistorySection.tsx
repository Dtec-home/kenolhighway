import { Container } from './ui/Container';

const timeline = [
  {
    year: '2016',
    title: 'School Establishment',
    description: 'Kabingori Adventist School was established as a secondary school, growing from its primary school foundation with Mrs. Leah Mwendia Njue as the pioneering educator.',
    principal: 'Mr. Stanley Kimani (First Principal)'
  },
  {
    year: '2017-2019',
    title: 'Early Growth Period',
    description: 'The school experienced steady growth in enrollment and infrastructure development under dedicated leadership.',
    principal: 'Mr. John Kavoi'
  },
  {
    year: '2020-2022',
    title: 'Academic Excellence',
    description: 'The school began establishing its reputation for academic excellence and holistic student development.',
    principal: 'Mr. Julius Ondara'
  },
  {
    year: '2023-Present',
    title: 'Current Leadership',
    description: 'Under current leadership, the school continues to thrive with outstanding KCSE results and expanded facilities.',
    principal: 'Mr. Muriithi Denis (Current Principal)'
  }
];

const achievements = [
  {
    icon: '🏆',
    title: 'Academic Excellence',
    items: [
      '95% University admission rate in 2024',
      'Consistent improvement in KCSE results',
      'Recognition for outstanding academic performance',
      'Multiple subject excellence awards'
    ]
  },
  {
    icon: '⚽',
    title: 'Sports & Co-curricular',
    items: [
      'Regional Volleyball Champions 2024',
      'Inter-school competitions participation',
      'Active sports programs',
      'Student leadership development'
    ]
  },
  {
    icon: '🏫',
    title: 'Infrastructure Development',
    items: [
      'Modern science laboratories',
      'Upgraded dormitory facilities',
      'Enhanced classroom environments',
      'Improved recreational facilities'
    ]
  },
  {
    icon: '👥',
    title: 'Community Impact',
    items: [
      '500+ students currently enrolled',
      'Strong alumni network',
      'Community service programs',
      'Parent-school partnerships'
    ]
  }
];

export default function SchoolHistorySection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* History Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to academic excellence - discover the milestones that shaped our school
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>
            
            {timeline.map((event, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                          {event.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
                        {event.title}
                      </h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {event.description}
                      </p>
                      <p className="text-blue-600 font-medium text-sm">
                        {event.principal}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 font-poppins">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-blue-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 font-poppins">
            Join Our Legacy of Excellence
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Be part of our continuing story of academic achievement and character development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply for Admission
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}