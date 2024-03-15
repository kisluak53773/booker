import { axiosDefault } from '@/services';
import { IBooksResponse } from './@types';
import { IBook } from '@/features/books';
import { bookCoverPathFormatter, booksCoverPathFormatter } from '@/utils';

export const bookService = {
  async getAll() {
    const response = await axiosDefault.get<IBooksResponse>('book/');
    const books = booksCoverPathFormatter(response.data.results);
    return books;
  },
  async getById(id: number) {
    const response = await axiosDefault.get<IBook>(`book/${id}/`);
    const book = bookCoverPathFormatter(response.data);
    return book;
  },
};
