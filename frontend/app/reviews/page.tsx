"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewForm from "@/components/ReviewForm";
import { Star, Loader2 } from "lucide-react";

interface Review {
  _id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  createdAt: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${apiUrl}/reviews`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch reviews");
      }

      if (data.success && Array.isArray(data.data)) {
        setReviews(data.data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load reviews");
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? "fill-accent text-accent" : "text-muted"}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            What Our Clients <span className="text-accent">Say</span>
          </h1>
          <p className="text-lg text-foreground/70">
            We value your feedback and love hearing about your experience with our services.
            Share your thoughts and help us improve!
          </p>
        </div>
      </section>

      {/* Reviews Submit Form Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4">
          <ReviewForm />
        </div>
      </section>

      {/* Reviews Display Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Recent <span className="text-accent">Testimonials</span>
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-accent" />
              <span className="ml-2">Loading reviews...</span>
            </div>
          ) : error ? (
            <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-center">
              {error}
            </div>
          ) : reviews.length === 0 ? (
            <div className="p-6 rounded-lg bg-muted/20 border border-border text-center text-foreground/70">
              <p>No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors"
                >
                  {/* Rating */}
                  <div className="mb-3">{renderStars(review.rating)}</div>

                  {/* Review Text */}
                  <p className="text-foreground/80 mb-4 line-clamp-3">"{review.review}"</p>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-foreground/60 mb-2">{review.role}</p>
                    <p className="text-xs text-foreground/50">
                      {formatDate(review.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Have You Worked With Us?
          </h3>
          <p className="text-foreground/70 mb-6">
            Share your experience and help other businesses discover the value we bring.
          </p>
          <a
            href="#review-form"
            className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Leave a Review
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
