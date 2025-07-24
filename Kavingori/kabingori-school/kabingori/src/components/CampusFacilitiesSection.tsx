'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { facilities, Facility } from '@/data/facilitiesData';

const categories = [
  { id: 'all', name: 'All Facilities', color: 'bg-gray-100 text-gray-800' },
  { id: 'academic', name: 'Academic', color: 'bg-blue-100 text-blue-800' },
  { id: 'residential', name: 'Residential', color: 'bg-green-100 text-green-800' },
  { id: 'recreational', name: 'Recreational', color: 'bg-orange-100 text-orange-800' },
  { id: 'spiritual', name: 'Spiritual', color: 'bg-purple-100 text-purple-800' }
];

export default function CampusFacilitiesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const filteredFacilities = activeCategory === 'all' 
    ? facilities 
    : facilities.filter(facility => facility.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our Campus Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our modern facilities designed to provide the best learning and living environment for our students
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    categories.find(cat => cat.id === facility.category)?.color
                  }`}>
                    {facility.category.charAt(0).toUpperCase() + facility.category.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {facility.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {facility.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {facility.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setSelectedFacility(facility)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for facility details */}
        {selectedFacility && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                  {selectedFacility.name}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedFacility.description}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">All Features:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFacility.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}