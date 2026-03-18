"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12">
            Terms & <span className="text-accent">Conditions</span>
          </h1>
          
          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on GautamTechnical's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Disclaimer</h2>
              <p>
                The materials on GautamTechnical's website are provided on an 'as is' basis. GautamTechnical makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitations</h2>
              <p>
                In no event shall GautamTechnical or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GautamTechnical's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at gautamtechnical493@gmail.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
