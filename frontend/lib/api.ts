const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface Review {
  _id?: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  createdAt?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errors?: any[];
}

/**
 * Submit a new review
 */
export const submitReview = async (reviewData: Omit<Review, '_id' | 'createdAt'>): Promise<ApiResponse<Review>> => {
  try {
    const response = await fetch(`${API_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });

    const data: ApiResponse<Review> = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit review');
    }

    return data;
  } catch (error) {
    console.error('Error submitting review:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
};

/**
 * Fetch all reviews
 */
export const fetchReviews = async (): Promise<ApiResponse<Review[]>> => {
  try {
    const response = await fetch(`${API_URL}/reviews`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const data: ApiResponse<Review[]> = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch reviews');
    }

    return data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return {
      success: false,
      data: [],
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
};

/**
 * Fetch a single review by ID
 */
export const fetchReviewById = async (id: string): Promise<ApiResponse<Review>> => {
  try {
    const response = await fetch(`${API_URL}/reviews/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: ApiResponse<Review> = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch review');
    }

    return data;
  } catch (error) {
    console.error('Error fetching review:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
};

/**
 * Delete a review by ID
 */
export const deleteReview = async (id: string): Promise<ApiResponse<null>> => {
  try {
    const response = await fetch(`${API_URL}/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: ApiResponse<null> = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete review');
    }

    return data;
  } catch (error) {
    console.error('Error deleting review:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
};
