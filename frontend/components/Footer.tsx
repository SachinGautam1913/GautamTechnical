"use client";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">
              <span className="text-accent">GT</span>Technical
            </h3>
            <p className="text-foreground/70 text-sm">
              Enterprise-grade technical solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="/services" className="hover:text-accent transition">Services</a></li>
              <li><a href="/projects" className="hover:text-accent transition">Projects</a></li>
              <li><a href="/about" className="hover:text-accent transition">About</a></li>
              <li><a href="/contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="/privacy-policy" className="hover:text-accent transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-accent transition">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2025 GautamTechnical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
