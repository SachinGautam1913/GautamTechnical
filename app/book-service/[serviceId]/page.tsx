'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Calendar,
  MessageCircle,
  CheckCircle,
  ArrowLeft,
  Star,
  Clock,
  DollarSign,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  Wrench,
  Layers,
  Lock,
  Cog,
} from 'lucide-react';

type Service = {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  includes: string[];
  idealFor: string[];
  startingPrice: string;
  estimatedTime: string;
  rating: number;
};

const services: Service[] = [
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
    startingPrice: '₹2,500',
    estimatedTime: '2-4 weeks',
    rating: 4.9,
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
    startingPrice: '₹15,000',
    estimatedTime: '4-8 weeks',
    rating: 4.8,
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
    startingPrice: '₹35,000',
    estimatedTime: '4-8 weeks',
    rating: 4.8,
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
    startingPrice: '₹3,500',
    estimatedTime: '2-4 weeks',
    rating: 4.7,
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
    startingPrice: '₹3,000',
    estimatedTime: '1-2 weeks',
    rating: 4.9,
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
    startingPrice: '₹4,000',
    estimatedTime: '2-3 weeks',
    rating: 4.8,
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
    startingPrice: '₹4,500',
    estimatedTime: '3-6 weeks',
    rating: 4.8,
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
    startingPrice: '₹2,000',
    estimatedTime: '1-3 weeks',
    rating: 4.7,
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
    startingPrice: '₹1,500',
    estimatedTime: '1-3 weeks',
    rating: 4.7,
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
    startingPrice: '₹1,000',
    estimatedTime: '1-2 weeks',
    rating: 4.6,
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
    startingPrice: '₹3,500',
    estimatedTime: '2-4 weeks',
    rating: 4.9,
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
    startingPrice: '₹2,500',
    estimatedTime: '1-2 weeks',
    rating: 4.8,
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
    startingPrice: '₹2,000',
    estimatedTime: '1-3 weeks',
    rating: 4.7,
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
    startingPrice: '₹1,500/month',
    estimatedTime: 'Ongoing',
    rating: 4.8,
  },
];

export default function BookServicePage() {
  const params = useParams();
  const serviceId = params.serviceId as string;
  const service = services.find(s => s.id === serviceId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    preferredContact: 'email',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (!service) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <Header />
        <div className="pt-24 pb-20 text-center">
          <h1 className="text-4xl font-bold">Service Not Found</h1>
          <p className="mt-4 text-foreground/70">The service you're looking for doesn't exist.</p>
          <a href="/services" className="mt-8 inline-block gold-btn px-6 py-3 rounded-md">
            View All Services
          </a>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = service.icon;

  if (isSubmitted) {
    return (
      <main className="bg-background text-foreground">
        <Header />
        <div className="pt-24 pb-20 text-center min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-foreground/70 mb-8">
              We've received your booking request and will contact you within 24 hours to discuss your project.
            </p>
            <div className="space-y-3">
              <a href="/services" className="block gold-btn px-6 py-3 rounded-md">
                View More Services
              </a>
              <a href="/" className="block border border-accent px-6 py-3 rounded-md text-accent">
                Back to Home
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 text-center">
        <a href="/services" className="inline-flex items-center gap-2 text-accent mb-4 hover:text-accent/80 transition-colors">
          <ArrowLeft size={16} />
          Back to Services
        </a>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon className="text-accent" size={32} />
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-bold">{service.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{service.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-foreground/70">
                <DollarSign size={14} />
                <span>Starting at {service.startingPrice}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-foreground/70">
                <Clock size={14} />
                <span>{service.estimatedTime}</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-foreground/70 max-w-2xl mx-auto">{service.fullDesc}</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-24 grid lg:grid-cols-2 gap-12">
        {/* Service Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">What's Included</h2>
          <div className="space-y-3 mb-8">
            {service.includes.map(item => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">Ideal For</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {service.idealFor.map(tag => (
              <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-accent/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Ready to Get Started?</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Fill out the form to discuss your project requirements and get a custom quote.
            </p>
            <a
              href="https://wa.me/7355474484"
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors"
            >
              <MessageCircle size={16} />
              Quick Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Booking Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Book This Service</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Mail"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Number"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectDetails" className="block text-sm font-medium mb-2">
                Project Details *
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                required
                rows={4}
                value={formData.projectDetails}
                onChange={handleInputChange}
                placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under ₹5,000</option>
                  <option value="5k-15k">₹5,000 - ₹15,000</option>
                  <option value="15k-50k">₹15,000 - ₹50,000</option>
                  <option value="50k-100k">₹50,000 - ₹100,000</option>
                  <option value="over-100k">Custom</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="20-30-days">20 to 30 days</option>
                  <option value="40-50-days">40 to 50 days</option>
                  <option value="60-70-days">60 to 70 days</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="preferredContact" className="block text-sm font-medium mb-2">
                Preferred Contact Method
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={3}
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Any additional details, questions, or special requirements..."
                className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gold-btn flex items-center justify-center gap-2 py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Calendar size={20} />
                  Book Consultation
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-foreground/70 mb-4">
              Prefer to chat directly? We're available on WhatsApp for quick discussions.
            </p>
            <a
              href="https://wa.me/7355474484"
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors"
            >
              <MessageCircle size={16} />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}