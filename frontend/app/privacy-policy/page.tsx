"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          
          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Personal Data: name, email address, phone number, and messages submitted through our forms</li>
                <li>Automatic Data: information about your device, browser, and usage patterns</li>
                <li>Cookies: small files stored on your device to enhance your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Use of Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at gautamtechnical493@gmail.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
