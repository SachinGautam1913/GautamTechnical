'use client';

import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function CTABanner() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/7355474484', '_blank');
  };

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Main CTA */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/80">
              Let's discuss how GautamTechnical can help you achieve your goals.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
            <button 
              onClick={handleWhatsApp}
              className="gold-btn inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.176l-.013 6.042s.405 1.34 1.26 2.242c.546.564 1.236.992 1.993 1.242l4.386-6.592c-.881-.86-2.04-1.394-3.444-1.11Z"/>
              </svg>
              WhatsApp Us
            </button>

            <Link href="/contact" className="gold-btn inline-flex items-center gap-2 text-sm sm:text-base">
              <Phone className="w-5 h-5" />
              Schedule Call
            </Link>

            <a href="mailto:gautamtechnical439@gmail.com" className="gold-btn inline-flex items-center gap-2 text-sm sm:text-base">
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Phone</p>
                  <p className="text-white font-semibold">+91 7355474484</p>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-white font-semibold">gautamtechnical439@gmail.com</p>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Available</p>
                  <p className="text-white font-semibold">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
