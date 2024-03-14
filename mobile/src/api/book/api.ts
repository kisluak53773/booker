import { axiosDefault } from '../interceptors';
import { IBooksResponse } from './@types';
import { IBook } from '@/features/books';

export const bookService = {
  async getAll() {
    const response = await axiosDefault.get<IBooksResponse>('book/');
    return response.data.results;
  },
  async getById(id: number) {
    const response = await axiosDefault.get<IBook>(`book/${id}/`);
    return response.data;
  },
};
