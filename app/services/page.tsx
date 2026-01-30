'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Lock,
  Cog,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  MessageCircle,
} from 'lucide-react';

type Service = {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  includes: string[];
  idealFor: string[];
};

const services: Service[] = [
  {
    id: 'web',
    icon: Code2,
    title: 'Web Development',
    shortDesc: 'Modern, scalable websites and web applications.',
    fullDesc:
      'We build fast, secure, and scalable web applications tailored to your business goals.',
    includes: [
      'Custom website & web app development',
      'Responsive & mobile-first design',
      'SEO-friendly architecture',
      'Performance optimization',
      'Secure authentication & APIs',
      'Deployment & maintenance support',
    ],
    idealFor: ['Startups', 'Businesses', 'SaaS products'],
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'App Development',
    shortDesc: 'High-performance mobile apps for iOS & Android.',
    fullDesc:
      'From idea to app store, we develop mobile applications that are reliable and scalable.',
    includes: [
      'Android & iOS apps',
      'React Native / Cross-platform',
      'Clean UI & smooth UX',
      'API integration',
      'App store deployment',
      'Post-launch support',
    ],
    idealFor: ['Startups', 'Service-based apps'],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Infrastructure',
    shortDesc: 'Scalable and secure cloud solutions.',
    fullDesc:
      'We design and manage cloud infrastructure that supports performance and growth.',
    includes: [
      'AWS-focused architecture',
      'Server & database setup',
      'Auto-scaling & load balancing',
      'Security best practices',
      'Monitoring & backups',
    ],
    idealFor: ['SaaS', 'High-traffic platforms'],
  },
  {
    id: 'uiux',
    icon: Palette,
    title: 'UI/UX Design',
    shortDesc: 'User-centric, conversion-focused design.',
    fullDesc:
      'We design intuitive interfaces that enhance user experience and engagement.',
    includes: [
      'Wireframes & prototypes',
      'Modern UI design',
      'UX research',
      'Design systems',
      'Developer-ready assets',
    ],
    idealFor: ['Web apps', 'Mobile apps'],
  },
];

export default function ServicesPage() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenServiceId(prev => (prev === id ? null : id));
  };

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-20 text-center">
        <h1 className="text-5xl font-bold">
          Our <span className="text-accent">Services</span>
        </h1>
        <p className="mt-4 text-foreground/70">
          Everything you need to build and scale modern digital products.
        </p>
      </section>

      {/* Services */}
      <section className="pb-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => {
          const Icon = service.icon;
          const isOpen = openServiceId === service.id;

          return (
            <div key={service.id} className="service-card">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon className="text-accent" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-foreground/70">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <button
                onClick={() => toggleService(service.id)}
                className="mt-4 flex items-center gap-2 text-accent text-sm font-medium"
              >
                {isOpen ? 'Show Less' : 'More Details'}
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isOpen && (
                <div className="mt-6 space-y-4 text-sm">
                  <p>{service.fullDesc}</p>

                  <div>
                    <p className="font-semibold mb-2">What’s included:</p>
                    {service.includes.map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Ideal for:</p>
                    <p>{service.idealFor.join(', ')}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={`/book-service/${service.id}`}
                      className="gold-btn flex items-center gap-2 text-sm"
                    >
                      <Calendar size={16} />
                      Book Service
                    </a>
                    <a
                      href="https://wa.me/7355474484"
                      className="border border-accent px-4 py-2 rounded-md text-accent text-sm"
                    >
                      <MessageCircle size={16} />
                      Consult
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
