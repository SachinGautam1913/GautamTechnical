import express, { Router } from 'express';
import { body } from 'express-validator';
import {
  createReview,
  getReviews,
  getReviewById,
  deleteReview,
} from '../controllers/reviewController';

const router: Router = express.Router();

// Validation middleware
const validateReview = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  body('role')
    .trim()
    .notEmpty()
    .withMessage('Role is required')
    .isLength({ max: 100 })
    .withMessage('Role cannot exceed 100 characters'),
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5'),
  body('review')
    .trim()
    .notEmpty()
    .withMessage('Review is required')
    .isLength({ max: 1000 })
    .withMessage('Review cannot exceed 1000 characters'),
];

// Routes
router.post('/', validateReview, createReview);
router.get('/', getReviews);
router.get('/:id', getReviewById);
router.delete('/:id', deleteReview);

export default router;
