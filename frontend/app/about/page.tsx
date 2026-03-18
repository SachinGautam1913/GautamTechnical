"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Award,
  Users,
  Target,
  Zap,
  TrendingUp,
  ArrowRight,
  Star,
} from "lucide-react";
import Image from "next/image";

const coreValues = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We focus on clean, reliable, and scalable solutions—no shortcuts.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients as partners, not vendors.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description:
      "Every line of code is written to solve real business challenges.",
  },
  {
    icon: Zap,
    title: "Agility",
    description:
      "Fast execution with flexibility to adapt as your needs evolve.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "Focused on long-term value, learning, and continuous improvement.",
  },
];

const stats = [
  { number: "40+", label: "Clients Served" },
  { number: "60+", label: "Projects Delivered" },
  { number: "2025", label: "Founded" },
  { number: "100%", label: "Growth Driven" },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            About <span className="text-accent">GautamTechnical</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            A modern startup building reliable, scalable, and future-ready
            digital products through thoughtful design and strong engineering.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-accent">Story</span>
            </h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                Founded in 2025, GautamTechnical began with a simple goal—build
                high-quality digital solutions without unnecessary complexity.
              </p>
              <p>
                As a growing startup, we've worked with 40+ clients, helping
                startups and small businesses transform ideas into reliable
                digital products.
              </p>
              <p>
                We believe great technology should be accessible, practical, and
                built to scale.
              </p>
            </div>
          </div>

          <div className="h-96 rounded-lg border border-border flex items-center justify-center bg-card">
            <div className="text-center">
              <p className="text-foreground/50">Image placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-accent">Core Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value) => (
              <div key={value.title} className="p-6 rounded-lg border border-border bg-background">
                <value.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
