import { SchoolInfo, StaffMember, AcademicTerm } from '@/types';

export const schoolInfo: SchoolInfo = {
  name: "Kabingori Adventist School",
  motto: "Learning for service",
  mission: "To provide wholesome christian education that prepares all rounded citizens who fit in this world and in the world to come.",
  vision: "To be a centre for wholesome christian in readiness for higher service",
  aim: "We endeavor to offer wholistic education that develops the whole person. Therefore, we are commited to help each and every learner to fully develop mentally,physically,socially and spiritually.",
  coreValues: [
    "Integrity",
    "Punctuality", 
    "Discipline",
    "Hardwork",
    "Responsibility",
    "Respect"
  ],
  contact: {
    phone: ["0741602235", "0790605595"],
    email: "kabingorischool2022@gmail.com",
    address: "P.O box 122- 60113 Kiritiri - Embu county",
    location: "Kiritiri - Embu county"
  }
};

export const staff: StaffMember[] = [
  {
    id: "principal",
    name: "Mr. Muriithi Denis",
    position: "Principal",
    message: "Welcome to Kabingori Adventist School! As the Principal, it is my pleasure to lead a team of dedicated educators and staff who are passionate about empowering our students to achieve academic excellence and become responsible citizens. Our school is built on a foundation of strong values, discipline, and a commitment to nurturing the unique talents and abilities of each student. We strive to provide a supportive and inclusive environment that fosters creativity, critical thinking, and problem-solving skills. Our goal is to equip our students with the knowledge, skills, and character necessary to succeed in an ever-changing world. We believe in working closely with parents, guardians, and the community to ensure that our students receive the best possible education.",
    image: "/images/staff/principal.jpg"
  },
  {
    id: "bom-chair",
    name: "Mrs. Modesta Nyaga",
    position: "Chairperson, Board of Management",
    message: "Welcome to Kabingori Adventist school, a vibrant community of learners dedicated to academic excellence and holistic development. As the Chairperson of the Board of Management, I am proud to lead an institution that fosters a culture of innovation, creativity, and discipline. Our school is committed to providing quality education that equips students with the knowledge, skills, and values necessary to succeed in an ever-changing world. We strive to create a supportive and inclusive environment that allows every student to reach their full potential.",
    image: "/images/staff/bom-chair.jpg"
  }
];

export const academicCalendar: AcademicTerm[] = [
  {
    term: 1,
    startMonth: "January",
    endMonth: "March", 
    holiday: "April"
  },
  {
    term: 2,
    startMonth: "May",
    endMonth: "July",
    holiday: "August"
  },
  {
    term: 3,
    startMonth: "September",
    endMonth: "October",
    holiday: "December (KCSE in November)"
  }
];