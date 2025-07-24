'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

const heroSlides = [
  {
    id: 1,
    image: '/images/facilities/classrooms.jpg',
    title: 'Excellence in Education',
    subtitle: 'Modern classrooms equipped for quality learning',
    cta: 'Learn More'
  },
  {
    id: 2,
    image: '/images/students/in-class.jpg',
    title: 'Dedicated Students',
    subtitle: 'Committed to academic excellence and character development',
    cta: 'Admissions'
  },
  {
    id: 3,
    image: '/images/students/in-lab.jpg',
    title: 'Advanced Facilities',
    subtitle: 'Well-equipped science laboratories for hands-on learning',
    cta: 'Our Campus'
  },
  {
    id: 4,
    image: '/images/facilities/dormitory.jpg',
    title: 'Comfortable Boarding',
    subtitle: 'Safe and comfortable accommodation for our students',
    cta: 'Student Life'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
              Kabingori Adventist School
            </h1>
            <p className="text-2xl md:text-3xl font-medium mb-4">
              {heroSlides[currentSlide].title}
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                {heroSlides[currentSlide].cta}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-gray-900"
              >
                Virtual Tour
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}