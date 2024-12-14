'use client';

import Image from 'next/image';
import { CircularPattern } from '@/components/features/CircularPattern';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import atlsbg from '@/images/atlsbg3.jpg';
import { useRouter } from 'next/navigation';




const clients = [
  { id: 1, image: 'https://i.postimg.cc/KKWHkS69/Gran-Partners.png' },
  { id: 2, image: 'https://i.postimg.cc/yDV52ThT/Door-Dash-Partners.png' },
  { id: 3, image: 'https://i.postimg.cc/5XnGJFnW/DKPartners.png' },
  { id: 4, image: 'https://i.postimg.cc/Y40PCqsG/Venmo-Partners.png' },
  { id: 5, image: 'https://i.postimg.cc/4mRjQGmq/Locker-Partners.png' },
  { id: 6, image: 'https://i.postimg.cc/kBNzjHS4/Gametime-Partners.png' },
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


  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={atlsbg}
            alt="Background"
            fill
            className="object-cover opacity-120"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        
        {/* Circular Pattern */}
        <CircularPattern />
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
           Modern Strategies. 
            <br />
            <span className="text-blue-500">Proven Results.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Specializing in podcast marketing and digital partnerships for athletes, creators, and emerging brands.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600" onClick={navigateToContact}>
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
      

      {/* Services Section */}
<section id="services" className="py-24 bg-muted/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center gap-2 mb-4">
      <Sparkles className="h-5 w-5 text-primary text-blue-500 " />
      <h2 className="text-3xl font-bold">Our Services</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {[
        { name: 'Content Marketing', description: 'We create tailored, engaging content that resonates with fans and consumers, strengthening both athlete and brand presence.' },
        { name: 'Brand Elevation', description: 'We elevate an athlete’s or brand’s identity by enhancing visibility, expanding their market reach, and building a premium brand image.' },
        { name: 'Business Advisory', description: 'Our advisory services guide athletes and brands on how to grow their businesses off the field.' },
        { name: 'Post-Career', description: 'We help athletes plan for life after sports by providing strategic guidance on career transitions, investment opportunities, and new ventures.' },
        { name: 'Social Media Strategy', description: 'We create and implement tailored social media strategies that amplify engagement, grow online audiences, and enhance public image.' },
        { name: 'NIL Representation', description: ' We navigate the complexities of NIL deals, helping athletes maximize their earning potential while staying compliant with current regulations.' },
        { name: 'Contract Negotiation', description: 'Our team of experienced negotiators uses a strategic, data-driven approach to secure the best possible terms, ensuring their financial and professional interests are prioritized.' },
        { name: 'Public Relations & Earned Media', description: 'We ensure athletes and brands gain favorable media attention, increasing their visibility and credibility.' },
        { name: 'Creative Design Production', description: 'We offer creative design production services that include everything from branding and logo design to multimedia content production.' },



      ].map((service) => (
        <div key={service.name} className="bg-card p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
          <p className="text-muted-foreground">{service.description}</p>
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
                  <span>+1 (555) 123-4567</span>
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