'use client';

import Image from 'next/image';

export default function FounderSection() {
  const phoneNumber = '+917355474484';

  const whatsappLink =
    'https://wa.me/917355474484?text=Hi%20Sachin,%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project.';

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
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">
                Meet Our Founder
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2">
                Let’s Talk Business, Directly
              </h2>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Have a serious project in mind? Connect directly with Sachin to
              discuss your goals, challenges, and the right tech strategy to
              move forward with confidence .
            </p>

            {/* ✅ DUAL CTA */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* 📞 CALL */}
              <a
                href={`tel:${phoneNumber}`}
                className="gold-btn inline-flex items-center justify-center gap-2"
              >
                Call Now
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
                    d="M3 5a2 2 0 012-2h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2h-1C9.163 19 5 14.837 5 9V8a2 2 0 01-2-2z"
                  />
                </svg>
              </a>

              {/* 💬 WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn-outline inline-flex items-center justify-center gap-2"
              >
                WhatsApp Message
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
                    d="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z"
                  />
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
