import Link from 'next/link';
import Image from 'next/image';
import { Container } from './ui/Container';
import { schoolInfo } from '@/data/schoolInfo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.jpg"
                alt="Kabingori Adventist School Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-poppins font-bold text-lg">
                  Kabingori Adventist School
                </h3>
                <p className="text-sm text-gray-300">Learning for Service</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              {schoolInfo.mission}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="text-gray-300 hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/student-life" className="text-gray-300 hover:text-white transition-colors">Student Life</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>{schoolInfo.contact.address}</p>
              <p>Phone: {schoolInfo.contact.phone.join(' / ')}</p>
              <p>Email: {schoolInfo.contact.email}</p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Core Values</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              {schoolInfo.coreValues.map((value, index) => (
                <li key={index}>• {value}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kabingori Adventist School. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Website developed as a volunteer service by{' '}
            <a href="mailto:ceo@allons-ysuite.com" className="text-blue-400 hover:text-blue-300">
              Allons-y Suite
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}