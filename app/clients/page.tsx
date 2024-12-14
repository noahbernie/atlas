'use client';

import { BannerCarousel } from '@/components/features/BannerCarousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const bannerImages = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
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
  return (
    <main className="min-h-screen pt-16">
      <BannerCarousel title="Our Clients" images={bannerImages} />

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