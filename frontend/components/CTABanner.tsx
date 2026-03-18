"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center bg-accent/10 rounded-lg border border-accent/20 p-12">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Get <span className="text-accent">Started?</span>
        </h2>
        <p className="text-lg text-foreground/80 mb-8">
          Let's discuss your project and explore how we can help bring your vision to life.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
        >
          Contact Us <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
