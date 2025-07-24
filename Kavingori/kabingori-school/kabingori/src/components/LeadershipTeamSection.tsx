import Image from 'next/image';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { staff } from '@/data/schoolInfo';

export default function LeadershipTeamSection() {
  const leaders = staff.filter(member => 
    member.id === 'principal' || member.id === 'bom-chair'
  );

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated leaders who guide our school towards excellence in education and character development
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leaders.map((leader) => (
            <div key={leader.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={leader.image || '/images/staff/default.jpg'}
                    alt={leader.name}
                    fill
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">
                  {leader.name}
                </h3>
                <p className="text-blue-600 font-semibold text-lg">
                  {leader.position}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {leader.message?.substring(0, 300)}...
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="primary" 
                    size="sm"
                    className="flex-1"
                  >
                    Read Full Message
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
              Our Leadership Philosophy
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our leadership team believes in collaborative governance, transparent communication, 
              and servant leadership. We are committed to creating an environment where students, 
              teachers, and the entire school community can thrive and reach their full potential.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}