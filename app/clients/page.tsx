'use client';

import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const bannerImages = [
  'https://i.postimg.cc/dtvWKXxt/2510-Baner.jpg',
  'https://i.postimg.cc/RZJJpCL3/Amonra-banner.jpg',
  'https://i.postimg.cc/7LT1zMWW/Jorge-Banner.jpg',
  'https://i.postimg.cc/Kzf131xW/Melvin-Banner.webp',
];

const clients = [
  {
    name: 'Tech Innovators',
    description: 'Leading technology solutions provider',
    image: 'https://picsum.photos/400/300?random=4',
  },
  {
    name: 'Creative Studios',
    description: 'Award-winning creative agency',
    image: 'https://picsum.photos/400/300?random=5',
  },
  {
    name: 'Global Enterprises',
    description: 'International business solutions',
    image: 'https://picsum.photos/400/300?random=6',
  },
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

  return (
    <main className="min-h-screen pt-16 bg-black text-white">
      {/* Hero Banner Carousel */}
      <section className="relative">
        <div className="relative w-full h-[600px] overflow-hidden">
          {/* Rotating Banner Carousel */}
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end items-start px-8 md:px-16 lg:px-8 pb-12 md:pb-16 lg:pb-24">
            <h1 className="text-8xl font-extrabold uppercase leading-none">
              ATLS
            </h1>
            <span className="text-5xl font-bold tracking-wide mt-2 uppercase">
              Athletes
            </span>
            {/* Geometric Shape */}
            <div className="absolute right-8 bottom-8 transform rotate-12">
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-70 stroke-cyan-500"
              >
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem key={client.name}>
                  <div className="p-4">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mt-4">{client.name}</h3>
                    <p className="text-muted-foreground">{client.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Brand Elevation */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Brand Elevation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Transform Your Brand</h3>
              <p className="text-muted-foreground">
                We help businesses elevate their brand presence through strategic
                marketing and creative solutions that drive results.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Measurable Impact</h3>
              <p className="text-muted-foreground">
                Our data-driven approach ensures your brand reaches its full
                potential with measurable results and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Leading Brands */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By Leading Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="relative aspect-[2/1] grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
