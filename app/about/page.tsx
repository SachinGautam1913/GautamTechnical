"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
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

type Review = {
  _id: string;
  name: string;
  role: string;
  rating: number;
  feedback: string;
  createdAt?: string;
};

export default function AboutPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isFetchingReviews, setIsFetchingReviews] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const [reviewForm, setReviewForm] = useState({
    name: "",
    role: "",
    rating: "",
    feedback: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= rating ? "text-accent" : "text-foreground/40"
          }
        />
      ))}
    </div>
  );

  const fetchReviews = async () => {
    setIsFetchingReviews(true);
    setFetchError("");

    try {
      const response = await fetch("http://localhost:5000/api/reviews");
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || data.error || "Failed to fetch reviews");
      }

      if (Array.isArray(data.data)) {
        setReviews(data.data);
      } else {
        setReviews([]);
      }
    } catch (err) {
      setFetchError(
        err instanceof Error
          ? err.message
          : "Failed to load reviews. Please try again."
      );
    } finally {
      setIsFetchingReviews(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReviewForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: reviewForm.name,
          role: reviewForm.role,
          rating: Number(reviewForm.rating),
          feedback: reviewForm.feedback,
        }),
      });

      const text = await response.text();
      let data: any;

      try {
        data = JSON.parse(text);
      } catch (parseError) {
        throw new Error("Invalid JSON response from server");
      }

      if (!response.ok || !data.success) {
        throw new Error(data.message || data.error || "Submission failed");
      }

      setSuccessMessage("✅ Review submitted successfully!");
      setReviewForm({ name: "", role: "", rating: "", feedback: "" });

      // Refresh the displayed reviews so new entries appear immediately
      fetchReviews();

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

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
                As a growing startup, we’ve worked with 40+ clients, helping
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
              <Image
                src="/logo.png"
                alt="About GautamTechnical"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-accent">{stat.number}</p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-accent">Core Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="service-card">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ⭐ Testimonials (ADDED) */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our <span className="text-accent">Clients Say</span>
          </h2>

          {isFetchingReviews ? (
            <p className="text-center text-foreground/70">Loading reviews…</p>
          ) : fetchError ? (
            <p className="text-center text-red-500">{fetchError}</p>
          ) : reviews.length === 0 ? (
            <p className="text-center text-foreground/70">
              No reviews yet — be the first to submit one!
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((item) => (
                <div
                  key={item._id}
                  className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition"
                >
                  <div className="flex gap-1 mb-4">
                    {renderStars(item.rating)}
                  </div>

                  <p className="text-foreground/80 mb-6">“{item.feedback}”</p>

                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-foreground/60">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 📝 Write Review (ADDED) */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Write a <span className="text-accent">Review</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {successMessage && (
              <div className="p-4 rounded bg-emerald-500/10 border border-emerald-500 text-emerald-700">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="p-4 rounded bg-red-500/10 border border-red-500 text-red-700">
                {errorMessage}
              </div>
            )}

            <input
              name="name"
              value={reviewForm.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card"
            />

            <input
              name="role"
              value={reviewForm.role}
              onChange={handleChange}
              type="text"
              placeholder="Your Role / Business"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card"
            />

            <select
              name="rating"
              value={reviewForm.rating}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card"
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ (5)</option>
              <option value="4">⭐⭐⭐⭐ (4)</option>
              <option value="3">⭐⭐⭐ (3)</option>
              <option value="2">⭐⭐ (2)</option>
              <option value="1">⭐ (1)</option>
            </select>

            <textarea
              name="feedback"
              value={reviewForm.feedback}
              onChange={handleChange}
              rows={4}
              placeholder="Write your feedback..."
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-accent text-white font-semibold disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-96 rounded-lg border border-dashed border-border flex items-center justify-center bg-card">
            <div className="text-center space-y-2">
              <p className="text-sm text-foreground/60">Founder Image</p>
              <p className="text-xs text-foreground/40">Add image later</p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-accent">
              Founder & CEO
            </p>
            <h2 className="text-4xl font-bold mt-2">Sachin Gautam</h2>

            <div className="mt-6 space-y-4 text-foreground/80">
              <p>
                Sachin Gautam leads GautamTechnical with a mission to make
                premium digital solutions accessible for growing businesses.
              </p>
              <p>
                With hands-on experience in full-stack development, cloud-based
                systems, and product thinking, he focuses on building solutions
                that scale.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Full-Stack Engineer",
                "Cloud Architect",
                "AWS-Focused",
                "Tech Mentor",
                "Startup Builder",
                "Product Thinker",
                "Frontend Specialist",
                "Backend Enthusiast",
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30"
                >
                  <Star size={14} className="text-accent" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <h2 className="text-5xl font-bold text-white">
          Let’s Build Something{" "}
          <span className="text-accent">That Matters</span>
        </h2>
        <p className="mt-4 text-white/80 max-w-xl mx-auto">
          Have an idea? Let’s turn it into a real, scalable product.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://wa.me/7355474484"
            className="gold-btn flex items-center gap-2"
          >
            Start a Project <ArrowRight size={18} />
          </a>
          <a
            href="mailto:gautamtechnical493@gmail.com"
            className="border px-6 py-3 rounded-md text-white"
          >
            Contact
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}