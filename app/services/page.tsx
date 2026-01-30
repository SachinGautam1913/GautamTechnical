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
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  Wrench,
  Layers,
} from 'lucide-react';

const services = [
  {
    id: 'web',
    icon: Code2,
    title: 'Custom Web Development',
    shortDesc: 'Modern, scalable websites and web applications.',
    fullDesc:
      'We build fast, secure, and scalable web applications tailored to your business goals using modern frameworks and best practices.',
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
    id: 'fullstack',
    icon: Layers,
    title: 'Full-Stack Application Development',
    shortDesc: 'Complete end-to-end application solutions.',
    fullDesc:
      'We develop comprehensive full-stack applications with modern architectures, from frontend to backend, ensuring seamless user experiences and robust functionality.',
    includes: [
      'Frontend & backend development',
      'Database design & integration',
      'API development & documentation',
      'Authentication & security',
      'Real-time features',
      'Scalable architecture',
    ],
    idealFor: ['Complex applications', 'Enterprise solutions', 'Product companies'],
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'Mobile App Development (Android & iOS)',
    shortDesc: 'High-performance mobile apps for iOS & Android.',
    fullDesc:
      'From idea to app store, we develop mobile applications that are reliable, intuitive, and built to scale across all platforms.',
    includes: [
      'Android & iOS apps',
      'React Native / Cross-platform',
      'Clean UI & smooth UX',
      'API integration',
      'App store deployment',
      'Post-launch support',
    ],
    idealFor: ['Startups', 'Service-based apps', 'Consumer products'],
  },

  {
    id: 'api',
    icon: Lock,
    title: 'API Development & Integration',
    shortDesc: 'Secure and scalable APIs for integrations.',
    fullDesc:
      'We build well-documented REST and GraphQL APIs that power modern applications and enable seamless third-party integrations.',
    includes: [
      'REST & GraphQL APIs',
      'Authentication & authorization',
      'API documentation',
      'Third-party integrations',
      'Testing & versioning',
      'Rate limiting & security',
    ],
    idealFor: ['Web apps', 'Mobile apps', 'Microservices', 'Integrations'],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Infrastructure Setup (AWS-Focused)',
    shortDesc: 'Scalable and secure cloud solutions.',
    fullDesc:
      'We design and manage cloud infrastructure that supports performance, security, and future growth with AWS best practices.',
    includes: [
      'AWS-focused architecture',
      'Server & database setup',
      'Auto-scaling & load balancing',
      'Security best practices',
      'Cost optimization',
      'Monitoring & backups',
    ],
    idealFor: ['SaaS', 'High-traffic platforms', 'Enterprise applications'],
  },
  {
    id: 'devops',
    icon: Cog,
    title: 'DevOps & CI/CD Automation',
    shortDesc: 'Automation, CI/CD, and infrastructure management.',
    fullDesc:
      'We streamline development and deployment using modern DevOps workflows, ensuring reliable and efficient software delivery.',
    includes: [
      'CI/CD pipelines',
      'Docker & containerization',
      'Server monitoring',
      'Automated deployments',
      'Environment management',
      'Infrastructure as code',
    ],
    idealFor: ['Production apps', 'Growing teams', 'Enterprise deployments'],
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend Architecture & Optimization',
    shortDesc: 'Robust and scalable backend systems.',
    fullDesc:
      'We design and optimize backend architectures that are performant, secure, and maintainable for long-term success.',
    includes: [
      'Microservices architecture',
      'Performance optimization',
      'Caching strategies',
      'Load balancing',
      'Error handling & logging',
      'Code refactoring',
    ],
    idealFor: ['High-traffic apps', 'Complex systems', 'Legacy modernization'],
  },
  {
    id: 'database',
    icon: Database,
    title: 'Database Design & Performance Tuning',
    shortDesc: 'Optimized database solutions for performance.',
    fullDesc:
      'We design, implement, and optimize databases for maximum performance, scalability, and data integrity.',
    includes: [
      'Database schema design',
      'Query optimization',
      'Indexing strategies',
      'Data migration',
      'Backup & recovery',
      'Performance monitoring',
    ],
    idealFor: ['Data-heavy applications', 'Analytics platforms', 'E-commerce'],
  },
  {
    id: 'uiux',
    icon: Palette,
    title: 'UI/UX Design & Product Experience',
    shortDesc: 'User-centric, conversion-focused design.',
    fullDesc:
      'We design intuitive interfaces that enhance user experience and engagement, focusing on conversion and user satisfaction.',
    includes: [
      'Wireframes & prototypes',
      'Modern UI design',
      'UX research',
      'Design systems',
      'Developer-ready assets',
      'Usability testing',
    ],
    idealFor: ['Web apps', 'Mobile apps', 'Brand revamps', 'Product redesigns'],
  },
  {
    id: 'landing',
    icon: Globe,
    title: 'Landing Page Development & Conversion Optimization',
    shortDesc: 'High-converting landing pages and marketing sites.',
    fullDesc:
      'We create landing pages that convert visitors into customers, with A/B testing, analytics, and optimization strategies.',
    includes: [
      'Conversion-focused design',
      'A/B testing setup',
      'Analytics integration',
      'Performance optimization',
      'Mobile optimization',
      'SEO optimization',
    ],
    idealFor: ['Marketing campaigns', 'Product launches', 'Lead generation'],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Web Application Security & Hardening',
    shortDesc: 'Secure applications protected against threats.',
    fullDesc:
      'We implement comprehensive security measures to protect your applications from vulnerabilities and cyber threats.',
    includes: [
      'Security audits',
      'Vulnerability assessment',
      'OWASP compliance',
      'Authentication hardening',
      'Data encryption',
      'Security monitoring',
    ],
    idealFor: ['Financial apps', 'Healthcare', 'E-commerce', 'Enterprise software'],
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Performance Optimization & Speed Audits',
    shortDesc: 'Fast, optimized applications for better user experience.',
    fullDesc:
      'We optimize application performance to deliver lightning-fast experiences, improving user satisfaction and conversion rates.',
    includes: [
      'Performance audits',
      'Code optimization',
      'Image optimization',
      'Caching implementation',
      'CDN setup',
      'Core Web Vitals optimization',
    ],
    idealFor: ['E-commerce', 'Media sites', 'SaaS products', 'High-traffic apps'],
  },
  {
    id: 'testing',
    icon: CheckCircle,
    title: 'Testing, QA & Bug Fixing',
    shortDesc: 'Comprehensive testing and quality assurance.',
    fullDesc:
      'We ensure your applications are thoroughly tested, bug-free, and ready for production with comprehensive QA processes.',
    includes: [
      'Unit & integration testing',
      'End-to-end testing',
      'Manual QA testing',
      'Bug fixing & debugging',
      'Test automation',
      'Quality documentation',
    ],
    idealFor: ['Production releases', 'Complex applications', 'Enterprise software'],
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Website Maintenance & Technical Support',
    shortDesc: 'Ongoing support and maintenance services.',
    fullDesc:
      'We provide continuous maintenance and technical support to keep your applications running smoothly and up-to-date.',
    includes: [
      'Regular updates & patches',
      'Security monitoring',
      'Performance monitoring',
      'Bug fixes & support',
      'Feature enhancements',
      '24/7 technical support',
    ],
    idealFor: ['Established businesses', 'Long-term partnerships', 'Critical applications'],
  },
  {
    id: 'Logo Design',
    icon: Code2,
    title: 'Logo Design',
    shortDesc:  'Professional logo design services.',
    fullDesc:
      'We create unique and memorable logos that effectively represent your brand identity and values.', 
    includes: [
      'Custom logo design',
      'Multiple logo variations',
      'Brand identity guidelines',
      'Vector and raster formats',
      'Logo usage recommendations',
    ],
  },
];

export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    // If clicking the same service, close it
    if (activeServiceId === serviceId) {
      setActiveServiceId(null);
    } else {
      // If clicking a different service, close any open service and open the new one
      setActiveServiceId(serviceId);
    }
  };

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            Everything you need to build, launch, and scale modern digital products.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isOpen = activeServiceId === service.id;

            return (
              <div key={service.id} className="service-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-accent" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-foreground/70 mt-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Toggle */}
                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className="mt-4 flex items-center gap-2 text-accent text-sm font-medium"
                >
                  {isOpen ? 'Show Less' : 'More Details'}
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="mt-6 space-y-5 text-sm text-foreground/80">
                    <p>{service.fullDesc}</p>

                    <div>
                      <p className="font-semibold mb-2">What’s included:</p>
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-accent" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Ideal for:</p>
                      <p>{service.idealFor.join(', ')}</p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <a
                        href={`/book-service/${service.id}`}
                        className="gold-btn inline-flex items-center justify-center gap-2 text-sm"
                      >
                        <Calendar size={16} />
                        Book This Service
                      </a>
                      <a
                        href="/book-service"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-accent text-accent hover:bg-accent hover:text-primary transition-all text-sm"
                      >
                        <MessageCircle size={16} />
                        Consult First
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <h2 className="text-4xl font-bold">
          Not Sure Which Service You Need?
        </h2>
        <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
          Book a free consultation and we'll guide you in the right direction.
        </p>
        <a
          href="/book-service"
          className="gold-btn inline-flex items-center gap-2 mt-8"
        >
          Talk to an Expert <ArrowRight size={18} />
        </a>
      </section>

      <Footer />
    </main>
  );
}
