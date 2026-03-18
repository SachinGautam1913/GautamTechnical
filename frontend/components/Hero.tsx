"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-6xl sm:text-7xl font-bold mb-6">
          Premium <span className="text-accent">Tech Solutions</span>
        </h1>
        <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
          Enterprise-grade technical solutions built for modern businesses. We transform ideas into scalable, high-performing digital products.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
        >
          Get Started <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
