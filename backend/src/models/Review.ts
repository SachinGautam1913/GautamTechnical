import mongoose, { Schema, Document } from 'mongoose';
import { IReview } from '../types/review';

interface IReviewDocument extends IReview, Document {}

const reviewSchema = new Schema<IReviewDocument>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    role: {
      type: String,
      required: [true, 'Please provide a role'],
      trim: true,
      maxlength: [100, 'Role cannot exceed 100 characters'],
    },
    rating: {
      type: Number,
      required: [true, 'Please provide a rating'],
      min: [1, 'Rating must be between 1 and 5'],
      max: [5, 'Rating must be between 1 and 5'],
    },
    review: {
      type: String,
      required: [true, 'Please provide a review'],
      trim: true,
      maxlength: [1000, 'Review cannot exceed 1000 characters'],
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model<IReviewDocument>('Review', reviewSchema);

export default Review;
