'use client';

import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const scrollToHero = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const yOffset = -80; // Adjust this value based on your navbar height
      const y = heroSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-35">
          <div className="flex-shrink-0">
            <Image
              src="/images/ntx-logo.png"
              alt="NTX Home Buyers Logo"
              width={150}
              height={40}
              className="h-20 w-auto"
              priority
            />
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-blue-50"
              >
                About Us
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-blue-50"
              >
                How It Works
              </a>
              <a 
                href="#reviews" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-blue-50"
              >
                Reviews
              </a>
              <a 
                href="#our-company" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-blue-50"
              >
                Our Company
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <a 
              href="#hero" 
              onClick={scrollToHero}
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg flex items-center gap-2"
            >
              Sell Your House
              <HomeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 