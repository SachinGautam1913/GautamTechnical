"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BookServicePage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <section className="pt-24 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            Book <span className="text-accent">Service</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            Schedule a consultation with our team.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
