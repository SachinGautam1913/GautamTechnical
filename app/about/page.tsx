'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Target, Zap, TrendingUp, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

const coreValues = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'We focus on clean, reliable, and scalable solutions—no shortcuts.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients as partners, not vendors.'
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Every line of code is written to solve real business challenges.'
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'Fast execution with flexibility to adapt as your needs evolve.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Mindset',
    description: 'Focused on long-term value, learning, and continuous improvement.'
  },
];

const stats = [
  { number: '40+', label: 'Clients Served' },
  { number: '60+', label: 'Projects Delivered' },
  { number: '2025', label: 'Founded' },
  { number: '100%', label: 'Growth Driven' },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            About <span className="text-accent">GautamTechnical</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            A modern startup building reliable, scalable, and future-ready digital products through thoughtful design and strong engineering.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-accent">Story</span>
            </h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                Founded in 2025, GautamTechnical began with a simple goal—build high-quality digital solutions without unnecessary complexity.
              </p>
              <p>
                As a growing startup, we’ve worked with 40+ clients, helping startups and small businesses transform ideas into reliable digital products.
              </p>
              <p>
                We believe great technology should be accessible, practical, and built to scale.
              </p>
            </div>
          </div>

          <div className="h-96 rounded-lg border border-border flex items-center justify-center bg-card">
            <div className="text-center">
              <Image src="/logo.png" alt="About GautamTechnical" width={400} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-accent">{stat.number}</p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-accent">Core Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="service-card">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Blank Image Placeholder */}
          <div className="h-96 rounded-lg border border-dashed border-border flex items-center justify-center bg-card">
            <div className="text-center space-y-2">
              <p className="text-sm text-foreground/60">Founder Image</p>
              <p className="text-xs text-foreground/40">Add image later</p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-accent">Founder & CEO</p>
            <h2 className="text-4xl font-bold mt-2">Sachin Gautam</h2>

            <div className="mt-6 space-y-4 text-foreground/80">
              <p>
                Sachin Gautam leads GautamTechnical with a mission to make premium digital solutions accessible for growing businesses.
              </p>
              <p>
                With hands-on experience in full-stack development, cloud-based systems, and product thinking, he focuses on building solutions that scale.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                'Full-Stack Engineer',
                'Cloud Architect',
                'AWS-Focused',
                'Tech Mentor',
                'Startup Builder',
                'Product Thinker',
                'Frontend Specialist',
                'Backend Enthusiast',
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30"
                >
                  <Star size={14} className="text-accent" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <h2 className="text-5xl font-bold text-white">
          Let’s Build Something <span className="text-accent">That Matters</span>
        </h2>
        <p className="mt-4 text-white/80 max-w-xl mx-auto">
          Have an idea? Let’s turn it into a real, scalable product.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://wa.me/7355474484"
            className="gold-btn flex items-center gap-2"
          >
            Start a Project <ArrowRight size={18} />
          </a>
          <a
            href="mailto:gautamtechnical493@gmail.com"
            className="border px-6 py-3 rounded-md text-white"
          >
            Contact
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
