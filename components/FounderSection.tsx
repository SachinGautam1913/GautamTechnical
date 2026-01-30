'use client';

import Image from 'next/image';

export default function FounderSection() {
  return (
    <section id="about" className="w-full py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden gold-glow">
            <Image
              src="https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg"
              alt="Sachin Gautam - Founder & CEO"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
              <div className="w-full p-8 text-white space-y-2">
                <h3 className="text-2xl font-bold">Sachin Gautam</h3>
                <p className="text-accent font-semibold">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">
                Meet Our Founder
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
                Sachin Gautam's Vision for Premium Tech
              </h2>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                With 15+ years of experience in enterprise technology, Gautam founded GautamTechnical with a singular vision: to provide premium, founder-led technical solutions that empower businesses to scale.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Starting from a passion for solving complex technical challenges, Gautam has built a team of elite developers and engineers who share the commitment to excellence, innovation, and customer success.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Today, GautamTechnical stands as a trusted partner for 500+ businesses worldwide, delivering custom solutions that drive growth and transformation.
              </p>
            </div>

            {/* Expertise */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'App Development', 'Cloud Architecture', 'DevOps', 'AI/ML Solutions', 'eCommerce', 'Data Analytics'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-card border border-accent/20 rounded-full text-foreground/80 font-medium hover:border-accent transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="gold-btn inline-flex items-center gap-2">
              Schedule a Call with Sachin Gautam
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
