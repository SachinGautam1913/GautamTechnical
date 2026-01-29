'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Web Development', 'App Development', 'SEO', 'e-Commerce'],
    Company: ['About Us', 'Our Team', 'Careers', 'Blog'],
    Resources: ['Documentation', 'Support', 'Contact', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms & Conditions', 'Security', 'Sitemap'],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Github, href: 'https://github.com' },
    { icon: Mail, href: 'mailto:hello@gautamtechnical.com' },
  ];

  return (
    <footer className="w-full bg-primary border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 sm:py-20 lg:py-24">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded flex items-center justify-center text-primary font-bold font-semibold">
                  GT
                </div>
                <span className="font-bold text-lg text-white">GautamTechnical</span>
              </div>
              <p className="text-sm text-white/70">
                Premium enterprise-grade technical solutions for modern businesses.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className="w-10 h-10 rounded-full bg-white/10 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-semibold text-white text-sm uppercase tracking-widest">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Bottom Section */}
          <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-white/60">
              © {currentYear} GautamTechnical. All rights reserved.
            </p>

            {/* Additional Info */}
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-white/60 hover:text-accent transition-colors duration-200">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-white/60 hover:text-accent transition-colors duration-200">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
