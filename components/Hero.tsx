'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-cover bg-center"
      style={{ backgroundImage: 'url(/coding-bg.jpg)' }}
    >
      {/* Dark Overlay */}
      <div className="hero-overlay" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-3xl">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-transparent">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">Premium Tech Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
              Building Premium <span className="text-accent">Digital Solutions</span> That Power Modern Businesses
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-balance max-w-2xl">
              Web Development • App Development • SEO • eCommerce • 20+ Services
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/contact" className="gold-btn inline-flex items-center justify-center gap-2">
                Get Started Now
                <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-md border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300">
                Schedule a Call
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-white/20">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">25+</p>
                <p className="text-xs sm:text-sm text-white/70 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">20+</p>
                <p className="text-xs sm:text-sm text-white/70 mt-1">Services</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">99.9%</p>
                <p className="text-xs sm:text-sm text-white/70 mt-1">Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
