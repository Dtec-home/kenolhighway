export interface SchoolInfo {
  name: string;
  motto: string;
  mission: string;
  vision: string;
  aim: string;
  coreValues: string[];
  contact: {
    phone: string[];
    email: string;
    address: string;
    location: string;
  };
}

export interface StaffMember {
  id: string;
  name: string;
  position: string;
  message?: string;
  image?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'academic' | 'sports' | 'events' | 'general';
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  category: 'academic' | 'sports' | 'cultural' | 'administrative';
}

export interface AcademicTerm {
  term: number;
  startMonth: string;
  endMonth: string;
  holiday: string;
}