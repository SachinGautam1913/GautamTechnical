'use client';

import { Check } from 'lucide-react';

const benefits = [
  'Founder-led expertise with 15+ years in tech',
  'Proven track record with 500+ successful projects',
  '24/7 dedicated support and maintenance',
  'Transparent pricing with no hidden fees',
  'Agile methodology for faster delivery',
  'ISO certified and industry compliant',
  'Custom solutions tailored to your needs',
  'Post-launch support and optimization',
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="w-full py-16 sm:py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">
                Why Choose Us
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-foreground/70">
                We're not just another IT company. We're a founder-led premium tech solutions provider committed to transforming your business.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground/80 font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="gold-btn inline-flex items-center gap-2">
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Side - Stats Box */}
          <div className="grid grid-cols-2 gap-6">
            <div className="service-card p-8 text-center space-y-4">
              <p className="text-4xl font-bold text-accent">500+</p>
              <p className="text-foreground font-semibold">Happy Clients</p>
              <p className="text-sm text-foreground/60">Across diverse industries</p>
            </div>

            <div className="service-card p-8 text-center space-y-4">
              <p className="text-4xl font-bold text-accent">15+</p>
              <p className="text-foreground font-semibold">Years Experience</p>
              <p className="text-sm text-foreground/60">In tech solutions</p>
            </div>

            <div className="service-card p-8 text-center space-y-4">
              <p className="text-4xl font-bold text-accent">99.9%</p>
              <p className="text-foreground font-semibold">Uptime SLA</p>
              <p className="text-sm text-foreground/60">Guaranteed reliability</p>
            </div>

            <div className="service-card p-8 text-center space-y-4">
              <p className="text-4xl font-bold text-accent">24/7</p>
              <p className="text-foreground font-semibold">Support</p>
              <p className="text-sm text-foreground/60">Always there for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
