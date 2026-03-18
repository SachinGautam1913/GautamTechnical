import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Review from '../models/Review';
import { ReviewInput, IReview } from '../types/review';

export const createReview = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { name, role, rating, review }: ReviewInput = req.body;

    // Create new review
    const newReview = new Review({
      name,
      role,
      rating,
      review,
    });

    // Save to database
    const savedReview: IReview = await newReview.save();

    res.status(201).json({
      success: true,
      message: 'Review created successfully',
      data: savedReview,
    });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating review',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching reviews',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getReviewById = async (req: Request, res: Response): Promise<void> => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      res.status(404).json({
        success: false,
        message: 'Review not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching review',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const deleteReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      res.status(404).json({
        success: false,
        message: 'Review not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting review',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
