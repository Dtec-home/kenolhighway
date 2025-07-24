'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo and School Name */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.jpg"
              alt="Kabingori Adventist School Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-xl text-gray-900">
                Kabingori Adventist School
              </span>
              <span className="text-sm text-blue-600 font-medium">
                Learning for Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}