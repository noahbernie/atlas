'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Twitter, Instagram, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/images/atlaslogo.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0); // Dynamic opacity state
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Clients', href: '/clients' },
    { name: 'Media', href: '/media' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    // Event listener for gradual scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200; // Scroll limit for full opacity
      const newOpacity = Math.min(scrollY / maxScroll, 0.9); // Gradual increase up to 90%
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`, // Dynamic opacity
        backdropFilter: opacity > 0 ? 'blur(10px)' : 'none', // Add blur when opacity increases
      }}
    >
      <nav className="w-full px-0 ">
      <div className="flex justify-between items-center h-20 px-4 sm:px-8">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <div className="relative w-20 h-20">
        <Image
          src={logo}
          alt="Agency Logo"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <Link href="/" className="text-2xl font-bold text-white">
        ATLS SPORTS
      </Link>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`${
            pathname === item.href
              ? 'text-white font-medium'
              : 'text-gray-300'
          } hover:text-white transition-colors`}
        >
          {item.name}
        </Link>
      ))}

      {/* Social Links */}
      <div className="flex items-center space-x-4">
        <Link href="https://twitter.com/atls_agency" target="_blank" aria-label="Twitter">
          <Twitter className="h-5 w-5 text-gray-300 hover:text-white" />
        </Link>
        <Link href="https://instagram.com/atlsagency" target="_blank" aria-label="Instagram">
          <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
        </Link>
        <Link href="https://linkedin.com/company/atls-agency" target="_blank" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
        </Link>
      </div>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-white"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  </div>
</nav>

    </header>
  );
}
