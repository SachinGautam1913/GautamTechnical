'use client';

import { Code2, Zap, Shield, Globe, TrendingUp, Users, Smartphone, Database, Lock, Search, BarChart3, Headphones, Cloud, Palette, Cog, Anchor } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Optimize your online presence and rank higher on search engines.',
  },
  {
    icon: Globe,
    title: 'eCommerce Solutions',
    description: 'Full-featured online stores with payment integration and analytics.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications engineered for speed and efficiency.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with full compliance to industry standards.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions that grow with your business.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Robust database architectures for optimal performance and reliability.',
  },
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for business decisions.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed for user engagement.',
  },
  {
    icon: Lock,
    title: 'API Development',
    description: 'Scalable REST and GraphQL APIs for seamless integrations.',
  },
  {
    icon: Cog,
    title: 'DevOps Services',
    description: 'CI/CD pipelines, automation, and infrastructure management.',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">
              Our Services
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance text-foreground">
              20+ Premium Services
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground/70">
              From web development to AI integration, we deliver comprehensive solutions for modern businesses.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="service-card group"
                >
                  {/* Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="gold-icon text-accent" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
