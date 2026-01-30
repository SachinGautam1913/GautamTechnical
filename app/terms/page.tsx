'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Scale, AlertTriangle, Users } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="text-accent" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Terms of <span className="text-accent">Service</span>
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Please read these terms carefully before using our services.
          </p>
          <p className="mt-2 text-sm text-foreground/60">
            Last updated: January 30, 2026
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="prose prose-lg max-w-none text-foreground/80">

          {/* Acceptance */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using GT (GautamTechnical) services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Services</h2>
            <p className="mb-4">
              GT provides technology consulting and development services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Custom web application development</li>
              <li>Mobile application development (iOS & Android)</li>
              <li>Full-stack application development</li>
              <li>SaaS product development</li>
              <li>API development and integration</li>
              <li>Cloud infrastructure setup and management</li>
              <li>DevOps and CI/CD automation</li>
              <li>UI/UX design and product experience</li>
              <li>Performance optimization and security hardening</li>
              <li>Technical consulting and project management</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-accent" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">User Responsibilities</h2>
            </div>
            <p className="mb-4">As a client or user of our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate and complete information for project requirements</li>
              <li>Cooperate with our team and provide timely feedback</li>
              <li>Respect intellectual property rights and confidentiality</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not attempt to reverse engineer, decompile, or disassemble our deliverables</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Keep your account credentials secure and confidential</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
            <h3 className="text-xl font-medium mb-3">Our Intellectual Property</h3>
            <p className="mb-4">
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by GT or our licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-medium mb-3">Client Intellectual Property</h3>
            <p className="mb-4">
              You retain ownership of any intellectual property rights you provide to us for the purpose of delivering our services. Upon full payment, we transfer ownership of the deliverables to you, subject to the terms of our agreement.
            </p>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Payment Terms</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Payment Schedule:</strong> Payments are due according to the agreed project timeline and milestones</li>
              <li><strong>Late Payments:</strong> Late payments may incur additional charges and could pause project work</li>
              <li><strong>Refunds:</strong> Refunds are provided according to our refund policy based on project stage and work completed</li>
              <li><strong>Taxes:</strong> All fees are exclusive of applicable taxes, which will be charged additionally</li>
              <li><strong>Currency:</strong> All payments are in Indian Rupees (INR) unless otherwise specified</li>
            </ul>
          </section>

          {/* Project Delivery */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Project Delivery and Timeline</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Timelines:</strong> Project timelines are estimates and may vary based on project complexity and client feedback</li>
              <li><strong>Revisions:</strong> A reasonable number of revisions are included; additional revisions may incur extra charges</li>
              <li><strong>Third-party Dependencies:</strong> Delays caused by third-party services or APIs are not our responsibility</li>
              <li><strong>Acceptance:</strong> Client approval is required at each milestone before proceeding</li>
            </ul>
          </section>

          {/* Confidentiality */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Confidentiality</h2>
            <p className="mb-4">
              Both parties agree to maintain the confidentiality of proprietary information, trade secrets, and sensitive data shared during the course of our business relationship. This obligation continues beyond the termination of our services.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-accent" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
            </div>
            <p className="mb-4">
              In no event shall GT be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
            </p>
            <p className="mb-4">
              Our total liability for any claim arising out of or relating to these terms or our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Termination</h2>
            <p className="mb-4">
              Either party may terminate the service agreement with written notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You remain responsible for payment of all services rendered up to the termination date</li>
              <li>We will deliver completed work and transfer ownership as per our agreement</li>
              <li>Confidentiality obligations continue beyond termination</li>
              <li>Dispute resolution terms remain in effect</li>
            </ul>
          </section>

          {/* Warranties */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Warranties and Disclaimers</h2>
            <h3 className="text-xl font-medium mb-3">Our Warranties</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Deliverables will be free from material defects for 30 days post-delivery</li>
              <li>Services will be performed in a professional and workmanlike manner</li>
              <li>We warrant that we have the right to provide the services</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Disclaimers</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Services are provided "as is" without warranty of any kind</li>
              <li>We do not warrant that services will meet all your requirements</li>
              <li>We do not guarantee specific results or outcomes</li>
              <li>Third-party services and integrations are not covered by our warranties</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Dispute Resolution</h2>
            <p className="mb-4">
              Any disputes arising from these terms or our services shall be resolved through good faith negotiations. If resolution cannot be reached, disputes shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Governing Law</h2>
            <p className="mb-4">
              These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-accent" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">Changes to Terms</h2>
            </div>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the new terms.
            </p>
            <p className="mb-4">
              For significant changes, we will provide reasonable notice through email or prominent website notices.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="space-y-3">
                <div>
                  <strong>Email:</strong> legal@gt.com
                </div>
                <div>
                  <strong>Phone:</strong> +91 73554 74484
                </div>
                <div>
                  <strong>Address:</strong> [Your Business Address]
                </div>
                <div>
                  <strong>Legal Department:</strong> legal@gt.com
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}