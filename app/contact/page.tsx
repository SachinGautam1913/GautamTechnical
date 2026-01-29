'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gautamtechnical493@gmail.com',
      href: 'mailto:gautamtechnical493@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7355474484',
      href: 'tel:+917355474484',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: 'Start a conversation',
      href: 'https://wa.me/7355474484',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'lucknow, Uttar Pradesh, India',
      href: '#',
    },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Header />

      {/* Page Title */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Let's Build Something <span className="text-accent">Amazing Together</span>
            </h1>
            <p className="text-lg text-foreground/70 text-balance">
              Have a project in mind? We'd love to hear about it. Get in touch with our team and let's discuss how we can help transform your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="service-card group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="gold-icon text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{method.label}</h3>
                      <p className="text-sm text-foreground/70 mt-2">{method.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Form */}
            <div className="bg-card border border-border rounded-lg p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
              
              {submitted ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-foreground font-medium">Thank you for your message!</p>
                    <p className="text-foreground/70 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent text-foreground placeholder-foreground/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Mail"
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent text-foreground placeholder-foreground/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Number"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent text-foreground placeholder-foreground/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent text-foreground placeholder-foreground/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="gold-btn w-full"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/80">Quick response time - we get back to you within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/80">Experienced team with 10+ years in the industry</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/80">Transparent pricing and no hidden costs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/80">Dedicated support throughout the project</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/80">Portfolio of 500+ successful projects</span>
                  </li>
                </ul>
              </div>

             <div className="p-6 bg-card border border-accent/30 rounded-lg">
  <h4 className="font-semibold text-foreground mb-2">
    Need Immediate Assistance?
  </h4>

  <p className="text-foreground/70 text-sm mb-4">
    Chat with our support team on WhatsApp for instant help with your inquiry.
  </p>

  <a
    href="https://wa.me/7355474484?text=Hi%20I%20want%20to%20know%20more%20about%20your%20company%20and%20I%20am%20interested%20in%20building%20a%20project."
    target="_blank"
    rel="noopener noreferrer"
    className="gold-btn text-sm inline-block"
  >
    Open WhatsApp
  </a>
</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
