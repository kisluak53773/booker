import { IBook } from '@/features/books';

export interface IBooksResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: IBook[];
}
