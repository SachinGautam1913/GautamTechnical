'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-accent rounded flex items-center justify-center text-primary font-bold">
                GT
              </div>
              <span className="font-bold text-white">GautamTechnical</span>
            </div>
            <p className="text-sm text-white/70 max-w-sm">
              Premium, founder-led tech solutions built for performance,
              scalability, and long-term growth.
            </p>
          </div>

          {/* ✅ WORKING QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-white/70 hover:text-accent transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="text-sm text-white/70 hover:text-accent transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-accent transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/70 hover:text-accent transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Connect
            </h4>

            <p className="text-sm text-white/70">
              📧 gautamtechnical439@gmail.com
              <br />
              📱 +91 7355474484
              <br />
              📍 Lucknow, Uttar Pradesh, India
            </p>

            <div className="flex gap-3 pt-2">
              {[
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Github, href: 'https://github.com' },
                { icon: Mail, href: 'mailto:gautamtechnical439@gmail.com' },
              ].map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © {currentYear} GautamTechnical. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs">
            <Link href="/privacy-policy" className="text-white/60 hover:text-accent">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-accent">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
