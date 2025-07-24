import Image from 'next/image';
import Link from 'next/link';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { recentNews } from '@/data/newsData';
import { formatDate } from '@/lib/utils';

const categoryColors = {
  academic: 'bg-blue-100 text-blue-800',
  sports: 'bg-green-100 text-green-800',
  events: 'bg-purple-100 text-purple-800',
  general: 'bg-gray-100 text-gray-800'
};

export default function NewsSection() {
  const displayNews = recentNews.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest happenings, achievements, and important announcements from our school community.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayNews.map((newsItem) => (
            <article
              key={newsItem.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={newsItem.image || '/images/facilities/classrooms.jpg'}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    categoryColors[newsItem.category]
                  }`}>
                    {newsItem.category.charAt(0).toUpperCase() + newsItem.category.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(newsItem.date)}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {newsItem.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {newsItem.content}
                </p>

                <Link
                  href={`/news/${newsItem.id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All News
          </Button>
        </div>
      </Container>
    </section>
  );
}