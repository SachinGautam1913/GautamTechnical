'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Calendar,
  MessageCircle,
  CheckCircle,
  Star,
  Users,
  Award,
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
    preferredContact: 'email',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Project details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        name: formData.name, 
        email: formData.email, 
        phone: formData.phone, 
        company: formData.company,
        service: formData.service,
        projectDetails: formData.projectDetails,
        budget: formData.budget,
        timeline: formData.timeline,
        preferredContact: formData.preferredContact,
        additionalInfo: formData.additionalInfo,
        source: "book-service" 
      })
    });

    if (res.ok) alert("Message sent!");
    else alert("Error");
  };

  if (isSubmitted) {
    return (
      <main className="bg-background text-foreground">
        <Header />
        <div className="pt-24 pb-20 text-center min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-foreground/70 mb-8">
              We've received your booking request and will contact you within 24 hours to discuss your project.
            </p>
            <div className="space-y-3">
              <a href="/services" className="block gold-btn px-6 py-3 rounded-md">
                View Our Services
              </a>
              <a href="/" className="block border border-accent px-6 py-3 rounded-md text-accent">
                Back to Home
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

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

        {/* Stats */}
        <div className="flex justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users size={20} className="text-accent" />
              <span className="text-2xl font-bold">50+</span>
            </div>
            <p className="text-sm text-foreground/70">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star size={20} className="text-accent" />
              <span className="text-2xl font-bold">4.9</span>
            </div>
            <p className="text-sm text-foreground/70">Client Rating</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award size={20} className="text-accent" />
              <span className="text-2xl font-bold">3+</span>
            </div>
            <p className="text-sm text-foreground/70">Years Experience</p>
          </div>
        </div>
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
                  className={`w-full px-4 py-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                  className={`w-full px-4 py-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Mail"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Number"
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
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Acme Corp"
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
                className={`w-full px-4 py-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                  errors.service ? 'border-red-500' : 'border-border'
                }`}
              >
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="cloud">Cloud Infrastructure</option>
                <option value="uiux">UI/UX Design</option>
                <option value="logo-design">Logo Design</option>
                <option value="portfolio">Portfolio</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
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
                className={`w-full px-4 py-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-colors ${
                  errors.projectDetails ? 'border-red-500' : 'border-border'
                }`}
              />
              {errors.projectDetails && <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>}
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
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under ₹5,000</option>
                  <option value="5k-15k">₹5,000 - ₹15,000</option>
                  <option value="15k-50k">₹15,000 - ₹50,000</option>
                  <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                  <option value="over-100k">Over ₹1,00,000</option>
                  <option value="custom">Custom</option>   
                  <option value="not-sure">Not sure yet</option>
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
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="20-30-days">20-30 days</option>
                  <option value="40-50-days">40-50 days</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="3-3.5-months">3-3.5months</option>
                  <option value="4-5-months">4-5 months</option>
                  <option value="6-months">6 months</option>
                  <option value="plus">6+ months</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="preferredContact" className="block text-sm font-medium mb-2">
                Preferred Contact Method
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={3}
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Any additional details, questions, or special requirements..."
                className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gold-btn flex items-center justify-center gap-2 py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Calendar size={20} />
                  Book Consultation
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-foreground/70 mb-4">
              Prefer to chat directly? We're available on WhatsApp for quick discussions.
            </p>
            <a
              href="https://wa.me/7355474484"
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors"
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