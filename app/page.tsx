'use client';

import Image from 'next/image';
import { CircularPattern } from '@/components/features/CircularPattern';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import atlsbg from '@/images/atlsbg3.jpg';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';




const clients = [
  { id: 1, image: 'https://i.postimg.cc/KYXxGmSg/Gran-Coramino.png' },
  { id: 2, image: 'https://i.postimg.cc/yDV52ThT/Door-Dash-Partners.png' },
  { id: 3, image: 'https://i.postimg.cc/5XnGJFnW/DKPartners.png' },
  { id: 4, image: 'https://i.postimg.cc/Y40PCqsG/Venmo-Partners.png' },
  { id: 5, image: 'https://i.postimg.cc/4mRjQGmq/Locker-Partners.png' },
  { id: 6, image: 'https://i.postimg.cc/3rLhyXQh/Gametime.png' },
];


export default function Home() {
  const pathname = usePathname(); // Get the current path
  const router = useRouter(); // Use router for navigation

  const navigateToContact = () => {
    // Get the current origin (base URL)
    const currentOrigin = window.location.origin;
    // Construct the full URL with '/contact'
    const fullUrl = `${currentOrigin}${pathname}/contact`;
    router.push(fullUrl); // Navigate to the full URL
  };

  const navigateToMedia = () => {
    // Get the current origin (base URL)
    const currentOrigin = window.location.origin;
    // Construct the full URL with '/contact'
    const fullUrl = `${currentOrigin}${pathname}/media`;
    router.push(fullUrl); // Navigate to the full URL
  };


  return (
    <main className="min-h-screen pt-0">
      {/* Hero Section */}
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
      <span className="block text-white">SPORTS AGENCY</span>
    </h1>
  </div>

  <div className="absolute inset-0 z-10 pointer-events-none">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1920 1080"
    preserveAspectRatio="none"
    className="w-full h-full"
  >
    {/* Vertical and Horizontal Lines */}
    <line x1="50%" y1="0" x2="50%" y2="1080" stroke="#00CFFF" strokeWidth="1" />
    <line x1="0" y1="50%" x2="1920" y2="50%" stroke="#00CFFF" strokeWidth="1" />

    {/* Diagonal Lines */}
    <line x1="0" y1="0" x2="1920" y2="1080" stroke="#00CFFF" strokeWidth="1" />
    <line x1="0" y1="1080" x2="1920" y2="0" stroke="#00CFFF" strokeWidth="1" />

    {/* Outer Curves */}
    <path
      d="M0,1080 Q960,540 1920,1080"
      stroke="#00CFFF"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
</div>


</section>
{/* About Section */}
<section id="about" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8">
    {/* Left Side - Video */}
    <div className="relative w-full max-w-[500px] ml-0"> {/* Increased width */}
      <div className="relative aspect-[4/5] overflow-hidden shadow-md"> {/* Removed rounded-lg */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/REEL.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    {/* Right Side - Text */}
    <div className="text-left">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
        About ATLS
      </h2>
      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
        ATLS Sports Agency, inspired by the enduring strength of Atlas, is a premier representation and marketing agency specializing in elevating athletes, creators, and emerging brands. We pride ourselves on delivering innovative, tailor-made strategies that maximize opportunities on and off the field. With a 360° approach, ATLS combines creativity, strategic partnerships, and results-driven execution to amplify our clients’ careers. Our commitment to excellence, attention to detail, and relentless work ethic set us apart as we continuously push boundaries and redefine success for those we represent.
      </p>
    </div>
  </div>
</section>



      

      {/* Services Section */}
<section id="services" className="py-24 bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Title */}
    <div className="text-center mb-16">
  <Image
    src="/services.png" // Update with the correct path to your image
    alt="Our Services"
    width={600} // Adjust the width as needed
    height={150} // Adjust the height as needed
    className="mx-auto"
    />
  </div>


    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: 'Player Development', icon: '📋' },
        { name: 'NIL Representation', icon: '🤝' },
        { name: 'NBA WNBA NCAA Certified', icon: '✅' },
        { name: 'Brand Elevation', icon: '📢' },
        { name: 'Public Relations Earned Media', icon: '📰' },
        { name: 'Social Media Strategy', icon: '📱' },
        { name: 'Post-Career', icon: '🔄' },
        { name: 'Impact Community Philanthropy', icon: '🌍' },
        { name: 'Creative Design Production', icon: '🎨' },
      ].map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-md shadow-lg"
        >
          {/* Icon */}
          <div className="text-5xl mb-4 text-teal-400">{service.icon}</div>
          {/* Title */}
          <h3 className="text-lg font-bold text-white uppercase text-center mb-2">
            {service.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Clients Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
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
      
      <section className="py-24  bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">General Inquiries</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have a question or want to learn more about our services? We'd love to hear from you.
                Reach out to our team for any general inquiries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span>info@atlsagency.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>+1 (310) 292-9492</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src={"https://i.postimg.cc/4xJ3GR8B/LA-skyline.png"}
                alt="Office"
                fill
                className="object-cover rounded-lg opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}