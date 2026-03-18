"use client";

import { Code2, Smartphone, Cloud } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Modern, scalable web applications built with latest technologies."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions."
    }
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-accent">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-6 rounded-lg border border-border bg-background">
              <service.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
