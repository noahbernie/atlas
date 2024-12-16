'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import ClientsSection from '@/components/ui/clientsSection';
import { Instagram, Linkedin, Twitter } from 'lucide-react';


const bannerImages = [
  'https://i.postimg.cc/d3zwhFkX/DJAC-Shady.jpg',
  'https://i.postimg.cc/RZJJpCL3/Amonra-banner.jpg',
  'https://i.postimg.cc/7LT1zMWW/Jorge-Banner.jpg',
  'https://i.postimg.cc/Kzf131xW/Melvin-Banner.webp',
];


const clients = [
  { id: 1, image: 'https://i.postimg.cc/KYXxGmSg/Gran-Coramino.png' },
  { id: 2, image: 'https://i.postimg.cc/yDV52ThT/Door-Dash-Partners.png' },
  { id: 3, image: 'https://i.postimg.cc/5XnGJFnW/DKPartners.png' },
  { id: 4, image: 'https://i.postimg.cc/Y40PCqsG/Venmo-Partners.png' },
  { id: 5, image: 'https://i.postimg.cc/4mRjQGmq/Locker-Partners.png' },
  { id: 6, image: 'https://i.postimg.cc/3rLhyXQh/Gametime.png' },
];


const brands = [
  'https://picsum.photos/200/100?random=7',
  'https://picsum.photos/200/100?random=8',
  'https://picsum.photos/200/100?random=9',
  'https://picsum.photos/200/100?random=10',
  'https://picsum.photos/200/100?random=11',
  'https://picsum.photos/200/100?random=12',
];

export default function ClientsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const pathname = usePathname();
  
    const navigation = [
      { name: 'Home', href: '/' },
      { name: 'Clients', href: '/clients' },
      { name: 'Media', href: '/media' },
      { name: 'Contact', href: '/contact' },
    ];
  
  
  
    useEffect(() => {
      // Event listener for scrolling
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
  return (
    <main className="min-h-screen pt-0 bg-black text-white">
      {/* Hero Banner Carousel */}
      <section className="relative h-screen flex items-end overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/DJAC-High-Quality-VEED.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        </div>

        {/* Content - Moved to Bottom */}
        <div className="relative z-10 text-left px-8 sm:px-12 md:px-16 lg:px-16 pb-8 sm:pb-8 md:pb-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            ATLS<br />
            <span className="block text-white">ClIENTS</span>
          </h1>
        </div>

    
      </section>

      

      <section className="py-10 bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Section Title */}
      <div className="text-center mb-20">
        <Image
          src="/Clients.png" // Correct path to your services header image
          alt="Our Services"
          width={600}
          height={150}
          className="mx-auto"
        />
      </div>
    <div className="relative flex items-center justify-center w-full h-[500px]">

    <ClientsSection />
    </div>
  </div>
</section>

      

      {/* Clients Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="relative aspect-[2/1] grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={client.image}
                  alt={`Client ${client.id}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full bg-black text-white py-12">
  <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-8">
    {/* Logo */}
    <div>
      <img
        src="/atlaslogo.png" // Replace with the ATLS logo path
        alt="ATLS Sports Agency"
        className="h-12"
      />
    </div>

    {/* Social Media Icons */}
    <div className="flex items-center space-x-6">
      <a
        href="https://twitter.com/atls_agency"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:text-blue-400 transition-colors duration-300"
      >
        <Twitter className="h-6 w-6 text-gray-400 hover:text-white" />
      </a>
      <a
        href="https://instagram.com/atlsagency"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition-colors duration-300"
      >
        <Instagram className="h-6 w-6 text-gray-400 hover:text-white"/>
          
      </a>
      <a
        href="https://linkedin.com/company/atls-agency"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-600 transition-colors duration-300"
      >
        <Linkedin className="h-6 w-6 text-gray-400 hover:text-white" />
      </a>
    </div>


    {/* Copyright */}
    <div>
      <p className="text-sm text-gray-400 text-center">
        2024 © ATLS SPORTS AGENCY
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}
