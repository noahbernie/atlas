'use client';

import Image from 'next/image';

const clients = [
  { name: 'Brandon Aiyuk', image: '/brandon.jpg' },
  { name: 'David Montgomery', image: '/david.jpg' },
  { name: 'Jorge Masvidal', image: '/jorge.jpg' },
  { name: 'Amon-Ra St. Brown', image: '/amonra.webp' },
  { name: 'DeSean Jackson', image: '/djac.webp' },
  { name: 'LeSean McCoy', image: '/shady.jpg' },
  { name: 'Melvin Gordon', image: '/melvin.webp' },
  { name: 'DJ Moore', image: '/dj.webp' },
  { name: 'Chris Olave', image: '/chris.webp' },
];

export default function ClientsSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="relative w-full overflow-hidden">
        {/* Infinite Scrolling Container */}
        <div className="flex items-center whitespace-nowrap animate-scroll">
          {/* Duplicate the clients list twice for seamless looping */}
          {clients.concat(clients).map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[1000px] lg:w-[500px] mx-4"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={500}
                  height={700}
                  className="object-cover w-full h-[500px]"
                />
                <div className="absolute bottom-8 left-4 bg-black/70 px-4 py-6 rounded">
                  <h3 className="text-lg font-bold uppercase">{client.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom CSS for seamless animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
