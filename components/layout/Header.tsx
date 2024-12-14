'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/images/atlaslogo.png';


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Clients', href: '/clients' },
    { name: 'Media', href: '/media' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src={logo}
                alt="Agency Logo"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <Link href="/" className="text-2xl font-bold">
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
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                } hover:text-foreground transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <Twitter className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-primary" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    pathname === item.href
                      ? 'text-foreground bg-accent'
                      : 'text-muted-foreground'
                  } hover:bg-accent rounded-md`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Twitter className="h-5 w-5" />
                <Instagram className="h-5 w-5" />
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}