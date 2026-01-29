'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Code2, Smartphone, Search, Globe, Zap, Shield, Cloud, Database, TrendingUp, Palette, Lock, Cog, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Modern Stack'],
    pricing: 'Custom Quote'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['Native Apps', 'Cross-Platform', 'User-Friendly', 'App Store Ready'],
    pricing: 'Custom Quote'
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Optimize your online presence and rank higher on search engines.',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics'],
    pricing: 'Starting $500/mo'
  },
  {
    icon: Globe,
    title: 'eCommerce Solutions',
    description: 'Full-featured online stores with payment integration and analytics.',
    features: ['Shopping Cart', 'Payment Gateway', 'Inventory', 'Order Management'],
    pricing: 'Custom Quote'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications engineered for speed and efficiency.',
    features: ['Speed Testing', 'Code Optimization', 'Caching', 'CDN Setup'],
    pricing: 'Custom Quote'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with full compliance to industry standards.',
    features: ['SSL Certificates', 'Security Audit', 'GDPR Compliance', 'Backup'],
    pricing: 'Custom Quote'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions that grow with your business.',
    features: ['AWS', 'Google Cloud', 'Azure', 'Auto-Scaling'],
    pricing: 'Custom Quote'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Robust database architectures for optimal performance and reliability.',
    features: ['Schema Design', 'Optimization', 'Backup Strategy', 'Monitoring'],
    pricing: 'Custom Quote'
  },
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for business decisions.',
    features: ['Analytics Setup', 'Dashboards', 'Reporting', 'Insights'],
    pricing: 'Custom Quote'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed for user engagement.',
    features: ['Wireframing', 'Prototyping', 'User Testing', 'Design System'],
    pricing: 'Custom Quote'
  },
  {
    icon: Lock,
    title: 'API Development',
    description: 'Scalable REST and GraphQL APIs for seamless integrations.',
    features: ['RESTful APIs', 'GraphQL', 'Documentation', 'Testing'],
    pricing: 'Custom Quote'
  },
  {
    icon: Cog,
    title: 'DevOps Services',
    description: 'CI/CD pipelines, automation, and infrastructure management.',
    features: ['CI/CD Pipeline', 'Docker', 'Kubernetes', 'Monitoring'],
    pricing: 'Custom Quote'
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              Our <span className="text-accent">Premium Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
              12+ comprehensive services designed to transform your business with cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="service-card group flex flex-col"
                >
                  {/* Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="gold-icon text-accent" size={28} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-accent flex-shrink-0" />
                          <span className="text-sm text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer with Pricing */}
                  <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                    <span className="text-sm font-semibold text-accent">{service.pricing}</span>
                    <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                      <ArrowRight size={20} className="text-accent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
            Ready to Get <span className="text-accent">Started?</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Let's discuss which services are perfect for your project and create a custom solution tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="gold-btn inline-flex items-center justify-center gap-2">
              Message us
              <ArrowRight size={20} />
            </a>
            <a href="mailto:hello@gautamtechnical.com" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-md border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300">
              Send Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
