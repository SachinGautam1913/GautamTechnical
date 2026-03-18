export interface IReview {
  _id?: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ReviewInput = Omit<IReview, '_id' | 'createdAt' | 'updatedAt'>;
