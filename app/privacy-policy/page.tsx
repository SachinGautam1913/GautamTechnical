'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Users, Cookie, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="text-accent" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="mt-2 text-sm text-foreground/60">
            Last updated: January 30, 2026
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="prose prose-lg max-w-none text-foreground/80">

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
            <p className="mb-4">
              At GT (referred to as "we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
            </p>
            <p className="mb-4">
              By using our website or services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information except as described in this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-accent" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            </div>
            <h3 className="text-xl font-medium mb-3">Personal Information</h3>
            <p className="mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address</li>
              <li><strong>Business Information:</strong> Company name, job title, and business contact details</li>
              <li><strong>Project Information:</strong> Details about your project requirements, preferences, and specifications</li>
              <li><strong>Communication Records:</strong> Messages, inquiries, and feedback you send to us</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Automatically Collected Information</h3>
            <p className="mb-4">When you visit our website, we automatically collect certain information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, and navigation paths</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
              <li><strong>Location Data:</strong> General location information based on IP address</li>
              <li><strong>Cookies and Tracking:</strong> Information collected through cookies and similar technologies</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our web development, app development, and technology services</li>
              <li><strong>Communication:</strong> To respond to your inquiries, provide customer support, and send important updates</li>
              <li><strong>Project Management:</strong> To understand your requirements and deliver customized solutions</li>
              <li><strong>Business Operations:</strong> To process transactions, manage accounts, and maintain business records</li>
              <li><strong>Marketing:</strong> To send promotional materials and service updates (with your consent)</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
              <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website functionality</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-accent" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">Information Sharing and Disclosure</h2>
            </div>
            <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business (under strict confidentiality agreements)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our customers</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-accent" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
            </div>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Encryption:</strong> Data transmission and storage using industry-standard encryption</li>
              <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
              <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
              <li><strong>Employee Training:</strong> Staff training on data protection and privacy practices</li>
              <li><strong>Incident Response:</strong> Procedures for responding to potential security breaches</li>
            </ul>
            <p className="mb-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights and Choices</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us using the information provided below. We will respond to your request within 30 days.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Services</h2>
            <p className="mb-4">
              Our website and services may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party services you use.
            </p>
            <p className="mb-4">
              We may use third-party service providers for various business functions, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Cloud hosting and infrastructure services</li>
              <li>Payment processing and financial services</li>
              <li>Analytics and performance monitoring</li>
              <li>Customer communication and support tools</li>
              <li>Project management and collaboration platforms</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="text-accent" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">Cookies and Tracking Technologies</h2>
            </div>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us provide personalized content and remember your preferences.
            </p>
            <h3 className="text-xl font-medium mb-3">Types of Cookies We Use:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
            <p className="mb-4">
              You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Children's Privacy</h2>
            <p className="mb-4">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
            </p>
            <p className="mb-4">
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Posting the updated policy on our website with a new "Last updated" date</li>
              <li>Sending you an email notification (if applicable)</li>
              <li>Providing a prominent notice on our website</li>
            </ul>
            <p className="mb-4">
              Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-accent" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
            </div>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="space-y-3">
                <div>
                  <strong>Email:</strong> gautamtechnical439@gmail.com
                </div>
                <div>
                  <strong>Phone:</strong> +91 73554 74484
                </div>
                <div>
                  <strong>Address:</strong> [lucknow, Uttar Pradesh, India]
                </div>
                <div>
                  <strong>Data Protection Officer:</strong> gautamtechnical439@gmail.com
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/60">
              We will respond to your inquiries within 30 days of receipt.
            </p>
          </section>

          {/* Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Compliance and Legal Basis</h2>
            <p className="mb-4">
              We comply with applicable data protection laws and regulations, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>General Data Protection Regulation (GDPR) for EU residents</li>
              <li>California Consumer Privacy Act (CCPA) for California residents</li>
              <li>Information Technology Act, 2000 and rules for Indian residents</li>
              <li>Other applicable local data protection laws</li>
            </ul>
            <p className="mb-4">
              Our legal basis for processing your personal information includes consent, contract performance, legitimate business interests, and legal compliance.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}