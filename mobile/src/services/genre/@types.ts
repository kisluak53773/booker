import { IGenre } from '@/features/books';

export interface IGenreResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: IGenre[];
}
