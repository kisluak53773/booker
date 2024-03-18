import { axiosWithAuth } from '../interceptors';
import { IReview } from '@/features/books';
import { IReviewData } from './@types';

export const reviewService = {
  async saveReview(review: IReviewData) {
    const response = await axiosWithAuth.post<IReview>('review/', review);
    return response.data;
  },
};
