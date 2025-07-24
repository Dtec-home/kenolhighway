import Link from 'next/link';
import { Container } from './ui/Container';

const quickLinks = [
  {
    title: 'Admissions',
    description: 'Join our community of learners',
    href: '/admissions',
    icon: '📝',
    color: 'bg-blue-50 hover:bg-blue-100 text-blue-700'
  },
  {
    title: 'Academic Programs',
    description: 'Explore our curriculum',
    href: '/academics',
    icon: '📚',
    color: 'bg-green-50 hover:bg-green-100 text-green-700'
  },
  {
    title: 'Student Life',
    description: 'Experience boarding life',
    href: '/student-life',
    icon: '🏠',
    color: 'bg-purple-50 hover:bg-purple-100 text-purple-700'
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with us',
    href: '/contact',
    icon: '📞',
    color: 'bg-orange-50 hover:bg-orange-100 text-orange-700'
  }
];

export default function QuickLinksSection() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Quick Links
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Kabingori Adventist School
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`block p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${link.color}`}
            >
              <div className="text-4xl mb-4">{link.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
              <p className="text-sm opacity-80">{link.description}</p>
              <div className="mt-4 flex items-center text-sm font-medium">
                Learn More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}