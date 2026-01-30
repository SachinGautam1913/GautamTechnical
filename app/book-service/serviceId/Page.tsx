'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, IndianRupee } from 'lucide-react';

type ServiceDetails = {
  title: string;
  price: number;
  description: string;
  includes: string[];
  bestFor: string[];
};

const serviceData: Record<string, ServiceDetails> = {
  web: {
    title: 'Web Development',
    price: 25000,
    description: 'Build fast, secure, and scalable websites and web applications.',
    includes: [
      'Custom website / web app',
      'Responsive UI',
      'SEO structure',
      'Performance optimization',
      'Deployment support',
    ],
    bestFor: ['Startups', 'Businesses', 'SaaS'],
  },
  app: {
    title: 'App Development',
    price: 45000,
    description: 'End-to-end mobile app development for Android & iOS.',
    includes: [
      'Android / iOS app',
      'API integration',
      'App store deployment',
      'Testing & optimization',
    ],
    bestFor: ['Service apps', 'Booking apps'],
  },
};

export default function BookServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceData[serviceId];

  if (!service) {
    return <div className="p-20 text-center">Service not found</div>;
  }

  return (
    <main className="bg-background text-foreground">
      <Header />

      <section className="pt-24 pb-20 max-w-4xl mx-auto px-4 space-y-8">
        <h1 className="text-4xl font-bold">
          Book <span className="text-accent">{service.title}</span>
        </h1>

        <p className="text-foreground/70">{service.description}</p>

        <div className="flex items-center gap-2 text-3xl font-bold text-accent">
          <IndianRupee />
          {service.price.toLocaleString()}
        </div>

        <div>
          <h3 className="font-semibold mb-2">What’s Included</h3>
          {service.includes.map(item => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Best For</h3>
          <p>{service.bestFor.join(', ')}</p>
        </div>

        <a
          href="https://wa.me/7355474484"
          className="gold-btn mt-6 inline-block"
        >
          Proceed to Payment
        </a>
      </section>

      <Footer />
    </main>
  );
}
