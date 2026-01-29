'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import FounderSection from '@/components/FounderSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FounderSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
