'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Calendar,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';

export default function BookServicePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectDetails: '',
    budget: '',
    timeline: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 text-center">
        <h1 className="text-5xl font-bold">
          Book a <span className="text-accent">Service</span>
        </h1>
        <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
          Ready to bring your project to life? Let's discuss your requirements and create something amazing together.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        {/* Booking Form */}
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-center">Tell Us About Your Project</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Service Interested In *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="cloud">Cloud Infrastructure</option>
                <option value="uiux">UI/UX Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="projectDetails" className="block text-sm font-medium mb-2">
                Project Details *
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                required
                rows={4}
                value={formData.projectDetails}
                onChange={handleInputChange}
                placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-months-plus">6+ months</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full gold-btn flex items-center justify-center gap-2 py-3 text-lg font-medium"
            >
              <Calendar size={20} />
              Book Consultation
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-foreground/70 mb-4">
              Prefer to chat directly? We're available on WhatsApp for quick discussions.
            </p>
            <a
              href="https://wa.me/7355474484"
              className="inline-flex items-center gap-2 text-accent font-medium"
            >
              <MessageCircle size={16} />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}