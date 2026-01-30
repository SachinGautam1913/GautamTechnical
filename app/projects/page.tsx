'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Header />

      {/* Page Title */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Our <span className="text-accent">Projects</span>
            </h1>
            <p className="text-lg text-foreground/70 text-balance">
              We’re currently curating our project showcase. Stay tuned.
            </p>
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border border-dashed border-border rounded-lg p-16 text-center bg-card">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Projects Coming Soon 🚀
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              We’re working on exciting projects and will be showcasing real,
              high-impact work here very soon. Quality takes time — and it’s
              worth the wait.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 bg-card border border-border rounded-lg p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Let’s talk about your idea and turn it into a scalable,
              production-ready solution.
            </p>
            <a href="/contact" className="gold-btn inline-block">
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
