'use client';

import { useState } from 'react';
import {
  Code2,
  Smartphone,
  Search,
  Globe,
  Cloud,
  Database,
  Shield,
  Zap,
  Palette,
  Cog,
} from 'lucide-react';

type Service = {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  points: string[];
};

const services: Service[] = [
  {
    id: 'web',
    icon: Code2,
    title: 'Web Development',
    shortDesc: 'Crafting modern websites and web applications with clean design, powerful performance, and future-ready technology. Built to be fast, responsive, secure, and scalable—focused on seamless user experience, strong brand presence, and real business growth in a digital-first world',
    fullDesc:
      'We build fast, secure, and scalable websites and web applications tailored to business needs.',
    points: [
      'Custom website & web app',
      'Responsive & mobile-first design',
      'SEO-friendly architecture',
      'Performance optimization',
      'Secure authentication',
      'Deployment & support',
      'CMS integration',
      'E-commerce solutions',
      'API development',
      'Progressive Web Apps (PWAs)',
      'Single Page Applications (SPAs)',
      'Third-party integrations',
      'Accessibility compliance',
      'Cross-browser compatibility',
      'Analytics setup',
      'Maintenance & updates',
    ],
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'App Development',
    shortDesc: 'Android & iOS mobile application development using native and cross-platform frameworks. We build high-performance, secure, and scalable apps with clean UI, smooth UX, robust backend integration, and modern architecture—designed to deliver speed, reliability, and seamless experiences across all devices.',
    fullDesc:
      'End-to-end mobile app development—from pixel-perfect, clean UI to a secure, scalable backend. We build fast, reliable apps with smooth UX, robust APIs, cloud-ready architecture, and performance that scales effortlessly with your users and business growth.',
    points: [
      'Android & iOS apps',
      'Cross-platform (React Native)',
      'API integration',
      'App store deployment',
      'Maintenance & updates',
      'Performance tuning',
      'Push notifications',
      'In-app purchases',
      'User analytics',
      'Offline functionality',
      'Security best practices',
      'UI/UX design',
      'Backend development',
      'Cloud integration',
      'Scalable architecture',
    ],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Services',
    shortDesc: 'Improve search visibility, boost rankings, and drive consistent organic traffic that converts. We help brands enhance their online presence, attract the right audience, increase engagement, and achieve long-term, sustainable digital growth through smart SEO strategies..',
  
    fullDesc:
      'Data-driven SEO strategies to increase organic traffic and rankings and drive long-term growth with measurable results.',
    points: [
      'Keyword research',
      'On-page SEO',
      'Technical SEO',
      'Performance tracking',
      'Analytics reports',
      'Content optimization',
      'Link building',
      'Local SEO',
      'Competitor analysis',
      'SEO audits',
      'Content strategy',
      'Mobile SEO',
      'Voice search optimization',
      'E-commerce SEO',
      'International SEO',
      'SEO consulting',
      'Penalty recovery',
      'Conversion optimization',
      'Schema markup',
      'Page speed optimization',
    ],
  },
  {
    id: 'ecommerce',
    icon: Globe,
    title: 'eCommerce Solutions',
    shortDesc: 'Online stores built to convert, combining clean design, smooth user journeys, and optimized performance. We create fast, secure, and scalable eCommerce experiences that engage users, build trust, and turn visitors into paying customers.',
    fullDesc:
      'Scalable eCommerce platforms with secure payments and analytics .',
    points: [
      'Custom store development',
      'Payment gateway integration',
      'Inventory management',
      'Order & user handling',
      'Speed optimization',
      'SEO for eCommerce',
      'Analytics setup',
      'UX/UI design',
      'Mobile optimization',
      'Security enhancements',
      'Multi-channel selling',
      'Product catalog management',
      'Promotions & discounts',
      'Customer reviews integration',
      'Shipping & tax setup',
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Infrastructure',
    shortDesc: 'AWS-focused cloud solutions designed for scalability, security, and performance. We help businesses deploy, manage, and optimize cloud infrastructure, reduce costs, ensure reliability, and build resilient, high-availability systems that support long-term growth and innovation.',
    fullDesc:
      'Secure and scalable cloud architecture for modern applications and growth. ',
    points: [
      'AWS setup & deployment',
      'Auto-scaling',
      'Monitoring & backups',
      'Security hardening',
      'Cost optimization',
      'Cloud migration',
      'Disaster recovery',
      'Serverless architecture',
      'Container orchestration',
      'Load balancing',
      'VPN setup',
      'Cloud consulting',
      'Hybrid cloud solutions',
      'Cloud cost management',
      'Identity & access management',
      'Cloud compliance',
      'Performance tuning',
      'DevOps integration',
      'Cloud-native app design',
      'Data lake solutions',
    ],
  },
  {
    id: 'uiux',
    icon: Palette,
    title: 'UI/UX Design',
    shortDesc: 'Creating intuitive and engaging user experiences that guide users seamlessly, boost interaction, and drive higher conversions. We focus on user-first design, usability, and visual clarity to turn visitors into loyal customers and fuel long-term digital growth.',
    fullDesc:
      'Creating intuitive and engaging user experiences that drive conversions.',
    points: [
      'Wireframes & prototypes',
      'Design systems',
      'UX research',
      'High-fidelity UI',
      'Usability testing',
      'User journey mapping',
      'Interaction design',
      'Visual design',
      'Brand identity',
      'Responsive design',
      'Accessibility design',
      'Information architecture',
      'User personas',
      'Design workshops',
      'Style guides',
      'Design audits',
    ],
  },
  {
    id: 'devops',
    icon: Cog,
    title: 'DevOps & Automation',
    shortDesc: 'CI/CD and deployment pipelines built to automate testing, integration, and releases. We streamline deployments, reduce errors, ensure faster delivery, and maintain reliable, production-ready systems using modern DevOps best practices.',
    fullDesc:
      'Automated workflows for reliable deployments and scaling.',
    points: [
      'CI/CD pipelines',
      'Docker & containerization',
      'Monitoring & alerts',
      'Infrastructure automation',
      'Configuration management',
      'Version control',
      'Automated testing', 
      'Cloud integration',
      'Load balancing',
      'Performance monitoring',
      'Security automation',
      'Disaster recovery',
      'DevOps consulting',
    ],
  },
  {
    id: 'database',
    icon: Database,
    title: 'Database Design',
    shortDesc: 'Optimized database architecture designed for performance, scalability, and reliability. We structure data efficiently, improve query performance, reduce latency, and ensure secure, maintainable systems that support high-traffic, data-driven applications.',
    fullDesc:
      'High-performance and reliable database design and tuning.',
    points: [
      'Schema design',
      'Query optimization',
      'Backup strategy',
      'Monitoring',
      'Migration planning',
      'Data modeling',
      'Replication setup',
      'NoSQL & SQL solutions',
      'Performance tuning',
      'Data warehousing',
      'ETL processes',
      'Database security',
      'Cloud database solutions',
    ],
  },
];

export default function Services() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlipped(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="mt-4 text-foreground/70">
            Click on any service to view full details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => {
            const Icon = service.icon;
            const isFlipped = flipped[service.id];

            return (
              <div
                key={service.id}
                className="relative h-[360px] perspective"
                onClick={() => toggleFlip(service.id)}
              >
                <div
                  className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 service-card backface-hidden flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-accent" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {service.shortDesc}
                      </p>
                    </div>
                    <p className="text-accent text-sm font-medium">
                      Click to view details →
                    </p>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 service-card backface-hidden rotate-y-180 overflow-y-auto">
                    <div className="space-y-3 text-sm">
                      <h3 className="text-lg font-semibold">
                        {service.title}
                      </h3>
                      <p>{service.fullDesc}</p>
                      <ul className="list-disc list-inside space-y-1">
                        {service.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                      <p className="text-accent text-sm font-medium pt-2">
                        ← Click to go back
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tailwind helpers */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
