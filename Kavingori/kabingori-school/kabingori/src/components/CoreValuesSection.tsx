import { Container } from './ui/Container';
import { schoolInfo } from '@/data/schoolInfo';

const valueIcons = [
  '🤝', // Integrity
  '⏰', // Punctuality
  '📚', // Discipline
  '💪', // Hardwork
  '🎯', // Responsibility
  '🙏'  // Respect
];

export default function CoreValuesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These fundamental principles guide everything we do at Kabingori Adventist School
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolInfo.coreValues.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">
                  {valueIcons[index]}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getValueDescription(value)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function getValueDescription(value: string): string {
  const descriptions: Record<string, string> = {
    'Integrity': 'We uphold honesty and moral principles in all our actions',
    'Punctuality': 'We value time and maintain consistency in our commitments',
    'Discipline': 'We foster self-control and orderly conduct in learning',
    'Hardwork': 'We encourage dedication and perseverance in all endeavors',
    'Responsibility': 'We take ownership of our actions and decisions',
    'Respect': 'We honor diversity and treat everyone with dignity'
  };
  return descriptions[value] || 'A fundamental value that guides our community';
}