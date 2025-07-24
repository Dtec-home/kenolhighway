import { Container } from './ui/Container';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  backgroundImage = '/images/facilities/classrooms.jpg' 
}: PageHeaderProps) {
  return (
    <section 
      className="relative h-64 md:h-80 bg-cover bg-center bg-gray-900"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 h-full flex items-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-200">
                {subtitle}
              </p>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}