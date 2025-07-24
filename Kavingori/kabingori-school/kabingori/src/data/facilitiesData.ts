export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  category: 'academic' | 'residential' | 'recreational' | 'spiritual';
}

export const facilities: Facility[] = [
  {
    id: 'classrooms',
    name: 'Modern Classrooms',
    description: 'Well-ventilated and spacious classrooms equipped with modern learning aids to create an optimal learning environment.',
    image: '/images/facilities/classrooms.jpg',
    features: [
      'Spacious and well-ventilated',
      'Modern learning aids',
      'Comfortable seating arrangements',
      'Natural lighting',
      'Interactive learning spaces'
    ],
    category: 'academic'
  },
  {
    id: 'science-labs',
    name: 'Science Laboratories',
    description: 'State-of-the-art science laboratories for physics, chemistry, and biology with modern equipment for hands-on learning.',
    image: '/images/students/in-lab.jpg',
    features: [
      'Modern laboratory equipment',
      'Safety protocols in place',
      'Individual work stations',
      'Chemical storage facilities',
      'Microscopy equipment'
    ],
    category: 'academic'
  },
  {
    id: 'dormitories',
    name: 'Student Dormitories',
    description: 'Comfortable and secure boarding facilities providing a home away from home for our residential students.',
    image: '/images/facilities/dormitory.jpg',
    features: [
      'Secure accommodation',
      'Comfortable bedding',
      '24/7 supervision',
      'Study areas',
      'Recreation spaces'
    ],
    category: 'residential'
  },
  {
    id: 'sports-facilities',
    name: 'Sports Facilities',
    description: 'Excellent sports facilities including volleyball courts and recreational areas for physical development.',
    image: '/images/students/volleyball.jpg',
    features: [
      'Volleyball courts',
      'Sports equipment',
      'Recreational areas',
      'Physical education programs',
      'Inter-school competitions'
    ],
    category: 'recreational'
  },
  {
    id: 'chapel',
    name: 'School Chapel',
    description: 'A peaceful place for worship, spiritual development, and community gatherings.',
    image: '/images/facilities/chapel.jpg',
    features: [
      'Worship services',
      'Spiritual programs',
      'Community gatherings',
      'Choir performances',
      'Religious education'
    ],
    category: 'spiritual'
  },
  {
    id: 'library',
    name: 'Library & Resource Center',
    description: 'A comprehensive library with books, reference materials, and quiet study spaces for academic research.',
    image: '/images/facilities/classrooms.jpg',
    features: [
      'Extensive book collection',
      'Reference materials',
      'Quiet study areas',
      'Research facilities',
      'Digital resources'
    ],
    category: 'academic'
  }
];