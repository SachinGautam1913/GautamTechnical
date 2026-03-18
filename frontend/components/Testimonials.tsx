"use client";

import { useEffect, useState } from "react";
import { Star, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Review {
  _id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  createdAt: string;
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${apiUrl}/reviews?limit=3&sort=-createdAt`);

      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data = await response.json();
      setReviews(Array.isArray(data) ? data.slice(0, 3) : data.data?.slice(0, 3) || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setError("Could not load testimonials");
      setReviews([]);
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
            className={`${
              star <= rating
                ? "fill-accent text-accent"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-card/30 border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Star size={14} />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Real feedback from our satisfied customers and partners who have
            experienced our services firsthand.
          </p>
        </div>

        {/* Content */}
        {isLoading ? (
          // Loading State
          <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-8 h-8 text-accent animate-spin" />
              <p className="text-foreground/60">Loading testimonials...</p>
            </div>
          </div>
        ) : error ? (
          // Error State
          <div className="py-12 text-center">
            <p className="text-foreground/60 mb-6">{error}</p>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-6 py-2 bg-accent hover:bg-accent/90 text-background rounded-lg transition-colors"
            >
              View All Reviews
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : reviews.length > 0 ? (
          // Reviews Grid
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="p-6 bg-background border border-border rounded-lg hover:border-accent/50 transition-colors"
                >
                  {/* Rating */}
                  <div className="mb-4">{renderStars(review.rating)}</div>

                  {/* Review Text */}
                  <p className="text-foreground/80 mb-4 line-clamp-3">
                    {review.review}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-foreground">
                        {review.name}
                      </p>
                      <p className="text-sm text-foreground/60">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* Date */}
                  <p className="text-xs text-foreground/40 mt-4">
                    {formatDate(review.createdAt)}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-background border border-border rounded-lg">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Share Your Experience
                </h3>
                <p className="text-foreground/60">
                  Have you worked with us? We'd love to hear your feedback!
                </p>
              </div>
              <Link
                href="/reviews"
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-background font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2"
              >
                Leave a Review
                <ArrowRight size={16} />
              </Link>
            </div>
          </>
        ) : (
          // Empty State
          <div className="py-12 text-center">
            <p className="text-foreground/60 mb-6">
              No testimonials yet. Be the first to share your experience!
            </p>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-6 py-2 bg-accent hover:bg-accent/90 text-background rounded-lg transition-colors"
            >
              Leave a Review
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
