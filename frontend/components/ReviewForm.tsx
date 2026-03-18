"use client";

import React, { useState } from "react";
import { Star, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface ReviewFormData {
  name: string;
  role: string;
  rating: number;
  review: string;
}

interface SubmitResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: ReviewFormData & { _id?: string; createdAt?: string };
}

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
  successMessage: string;
}

export default function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    role: "",
    rating: 0,
    review: "",
  });

  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    successMessage: "",
  });

  const [hoveredRating, setHoveredRating] = useState<number>(0);

  /**
   * Handle input changes for text fields
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on input change
    if (formState.isError) {
      setFormState((prev) => ({
        ...prev,
        isError: false,
        errorMessage: "",
      }));
    }
  };

  /**
   * Handle rating selection
   */
  const handleRatingChange = (value: number): void => {
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  /**
   * Validate form data
   */
  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: "Name is required",
      }));
      return false;
    }

    if (!formData.role.trim()) {
      setFormState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: "Role is required",
      }));
      return false;
    }

    if (formData.rating === 0) {
      setFormState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: "Please select a rating",
      }));
      return false;
    }

    if (!formData.review.trim()) {
      setFormState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: "Review text is required",
      }));
      return false;
    }

    if (formData.review.length > 1000) {
      setFormState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: "Review must be less than 1000 characters",
      }));
      return false;
    }

    return true;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setFormState((prev) => ({
      ...prev,
      isLoading: true,
      isError: false,
      isSuccess: false,
    }));

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

      const response = await fetch(`${apiUrl}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: SubmitResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit review");
      }

      if (!data.success) {
        throw new Error(data.error || "Review submission failed");
      }

      // Success state
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        isSuccess: true,
        successMessage: "Review submitted successfully! Thank you for your feedback.",
      }));

      // Reset form
      setFormData({
        name: "",
        role: "",
        rating: 0,
        review: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({
          ...prev,
          isSuccess: false,
          successMessage: "",
        }));
      }, 5000);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        isError: true,
        errorMessage:
          error instanceof Error ? error.message : "An error occurred. Please try again.",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto p-6 rounded-lg border border-border bg-card">
      <h2 className="text-2xl font-bold mb-6">Share Your Review</h2>

      {/* Success Message */}
      {formState.isSuccess && (
        <div className="mb-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
          <p className="text-emerald-600 dark:text-emerald-400">
            {formState.successMessage}
          </p>
        </div>
      )}

      {/* Error Message */}
      {formState.isError && (
        <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-600 dark:text-red-400">
            {formState.errorMessage}
          </p>
        </div>
      )}

      {/* Name Field */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={formState.isLoading}
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent"
          maxLength={100}
        />
        <p className="text-xs text-foreground/60 mt-1">
          {formData.name.length}/100 characters
        </p>
      </div>

      {/* Role Field */}
      <div className="mb-6">
        <label htmlFor="role" className="block text-sm font-medium mb-2">
          Role/Title <span className="text-red-500">*</span>
        </label>
        <input
          id="role"
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          disabled={formState.isLoading}
          placeholder="e.g., CEO, Manager, Developer"
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent"
          maxLength={100}
        />
        <p className="text-xs text-foreground/60 mt-1">
          {formData.role.length}/100 characters
        </p>
      </div>

      {/* Rating Field */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3">
          Rating <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingChange(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              disabled={formState.isLoading}
              className="focus:outline-none focus:ring-2 focus:ring-accent rounded"
              aria-label={`Rate ${star} stars`}
            >
              <Star
                size={28}
                className={`transition-all ${
                  star <= (hoveredRating || formData.rating)
                    ? "fill-accent text-accent"
                    : "text-muted"
                } ${formState.isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              />
            </button>
          ))}
          <span className="text-sm text-foreground/70 ml-2">
            {formData.rating > 0 ? `${formData.rating} out of 5` : "Select a rating"}
          </span>
        </div>
      </div>

      {/* Review Field */}
      <div className="mb-6">
        <label htmlFor="review" className="block text-sm font-medium mb-2">
          Your Review <span className="text-red-500">*</span>
        </label>
        <textarea
          id="review"
          name="review"
          value={formData.review}
          onChange={handleChange}
          disabled={formState.isLoading}
          placeholder="Share your experience with us..."
          rows={6}
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          maxLength={1000}
        />
        <p className="text-xs text-foreground/60 mt-1">
          {formData.review.length}/1000 characters
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState.isLoading}
        className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2"
      >
        {formState.isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Review"
        )}
      </button>

      {/* Form Info */}
      <p className="text-xs text-foreground/60 text-center mt-4">
        Your review will be displayed on our website after verification.
      </p>
    </form>
  );
}
