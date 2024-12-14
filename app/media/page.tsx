'use client';

import { BannerCarousel } from '@/components/features/BannerCarousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const bannerImages = [
  'https://picsum.photos/1920/1080?random=13',
  'https://picsum.photos/1920/1080?random=14',
  'https://picsum.photos/1920/1080?random=15',
];

const shows = [
  {
    title: 'Tech Talk Daily',
    description: 'Daily insights into the latest technology trends and innovations.',
    image: 'https://picsum.photos/600/400?random=16',
    links: {
      spotify: '#',
      youtube: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    title: 'Creative Chronicles',
    description: 'Exploring creativity in the digital age through inspiring stories.',
    image: 'https://picsum.photos/600/400?random=17',
    links: {
      spotify: '#',
      youtube: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    title: 'Future Forward',
    description: 'A look into the future of technology and its impact on society.',
    image: 'https://picsum.photos/600/400?random=18',
    links: {
      spotify: '#',
      youtube: '#',
      instagram: '#',
      twitter: '#',
    },
  },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen pt-16">
      <BannerCarousel title="Media Productions" images={bannerImages} />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {shows.map((show, index) => (
            <div
              key={show.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center mb-24 last:mb-0`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold">{show.title}</h2>
                <p className="text-muted-foreground text-lg">{show.description}</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href={show.links.spotify} target="_blank" rel="noopener noreferrer">
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={show.links.youtube} target="_blank" rel="noopener noreferrer">
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={show.links.instagram} target="_blank" rel="noopener noreferrer">
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={show.links.twitter} target="_blank" rel="noopener noreferrer">
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}