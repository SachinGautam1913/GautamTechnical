'use client';

import { Check } from 'lucide-react';

const benefits = [
  'Founder-led expertise with 7+ years of experience',
  '30+ successful projects delivered',
  '24/7 dedicated support & maintenance',
  'Transparent pricing, no hidden costs',
  'Agile development for faster delivery',
  'MSME certified & industry compliant',
  'Custom solutions for your business',
  'Post-launch optimization & support',
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="w-full py-16 sm:py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">
                Why Choose Us
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Built on Trust. Designed for Growth.
              </h2>
              <p className="text-lg text-foreground/70">
                We build modern websites and web applications that are fast,
                scalable, and designed to convert visitors into customers.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-1" />
                  <p className="text-foreground/80 font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            {/* WORKING CTA */}
            <a
              href="#contact"
              className="gold-btn inline-flex items-center gap-2"
            >
              Learn More
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="service-card p-8 text-center">
              <p className="text-4xl font-bold text-accent">25+</p>
              <p className="font-semibold">Happy Clients</p>
            </div>
            <div className="service-card p-8 text-center">
              <p className="text-4xl font-bold text-accent">7+</p>
              <p className="font-semibold">Years Experience</p>
            </div>
            <div className="service-card p-8 text-center">
              <p className="text-4xl font-bold text-accent">99.9%</p>
              <p className="font-semibold">Uptime SLA</p>
            </div>
            <div className="service-card p-8 text-center">
              <p className="text-4xl font-bold text-accent">24/7</p>
              <p className="font-semibold">Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
