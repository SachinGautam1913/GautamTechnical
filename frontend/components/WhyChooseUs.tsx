"use client";

import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    "Expert team with years of experience",
    "Scalable and maintainable solutions",
    "Transparent communication",
    "On-time delivery",
    "Post-launch support",
    "Competitive pricing"
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Why <span className="text-accent">Choose Us</span>
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-96 rounded-lg border border-border flex items-center justify-center bg-card">
            <p className="text-foreground/50">Content placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
