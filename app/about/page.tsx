'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Award, Users, Target, Zap, Globe, TrendingUp, ArrowRight, Star } from 'lucide-react';

const coreValues = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver premium quality solutions that exceed expectations.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Your success is our success. We work as an extension of your team.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Cutting-edge technology and creative solutions for modern challenges.'
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'Fast, responsive, and adaptable to your evolving business needs.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with local expertise and support.'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Dedicated to your long-term success and continuous improvement.'
  },
];

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '100+', label: 'Projects Delivered' },
  { number: '25+', label: 'Team Members' },
  { number: '2+', label: 'Years in Business' },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              About <span className="text-accent">GautamTechnical</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
              A forward-thinking tech agency delivering high-impact digital solutions through strategy, design, and engineering excellence            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Established in 2025, GautamTechnical is a modern tech agency driven by innovation and execution. In a short time, we’ve worked with 40+ clients, helping brands turn ideas into high-quality digital products through clean design and solid engineering.                </p>
                <p>
                  We believe in making high-quality technology accessible to businesses of all sizes. With a commitment to innovation and long-term client success, we collaborate with startups and established brands to deliver reliable digital solutions.                </p>
                <p>
                  Today, our work is driven by curiosity, innovation, and a constant push to create technology that truly makes a difference.                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5" />
              <div className="relative h-full bg-gradient-to-br from-card to-card border border-border rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-accent">Gautam Technical</div>
                  <p className="text-foreground font-semibold">Since 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-4xl sm:text-5xl font-bold text-accent">{stat.number}</p>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-4">
              Our <span className="text-accent">Core Values</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              These principles guide everything we do and how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="service-card group">
                  {/* Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/0 z-10" />
              <img 
                src="/founder.jpg" 
                alt="Founder" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-accent uppercase tracking-widest">Founder & CEO</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Sachin Gautam</h2>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  With over a decade of experience in the tech industry, Gautam leads GautamTechnical with a vision to democratize premium digital solutions. His expertise spans full-stack development, cloud architecture, and business strategy.
                </p>
                <p>
                  Gautam is passionate about mentoring talented developers and building a company culture that values innovation, collaboration, and continuous learning. Under his leadership, GautamTechnical has become a trusted partner for businesses worldwide.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                  <Star size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Full-Stack Expert</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                  <Star size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Tech Mentor</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                  <Star size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Innovator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
            Let's Build Something <span className="text-accent">Amazing Together</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Partner with us to transform your vision into a reality with cutting-edge technology and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/7355474484" target="_blank" rel="noopener noreferrer" className="gold-btn inline-flex items-center justify-center gap-2">
              Start a Project
              <ArrowRight size={20} />
            </a>
            <a href="mailto:gautamtechnical493@gmail.com" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-md border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
