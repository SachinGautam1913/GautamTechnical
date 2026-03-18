"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <section className="pt-24 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            Comprehensive technical solutions tailored to your business needs.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
