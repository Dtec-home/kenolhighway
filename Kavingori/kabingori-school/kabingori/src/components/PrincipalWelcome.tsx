import Image from 'next/image';
import { Container } from './ui/Container';
import { staff } from '@/data/schoolInfo';

export default function PrincipalWelcome() {
  const principal = staff.find(member => member.id === 'principal');

  if (!principal) return null;

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Principal Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src={principal.image || '/images/staff/principal.jpg'}
                alt={principal.name}
                width={400}
                height={500}
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-semibold text-sm">School Principal</p>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-poppins">
                Welcome Message
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {principal.name}
              </h3>
              <p className="text-blue-600 font-medium">
                {principal.position}
              </p>
            </div>

            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                {principal.message?.substring(0, 400)}...
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Read Full Message
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Contact Principal
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}