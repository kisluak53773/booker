import { IBook } from '@/features/books';

const IP_TO_REPLACE_WITH = '127.0.0.1';
const IP_TO_REPLACE = '10.0.2.2';

export const booksCoverPathFormatter = (books: IBook[]): IBook[] => {
  const result = [];
  for (let i = 0; i < books.length; i++) {
    result.push(bookCoverPathFormatter(books[i]));
  }
  return result;
};

export const bookCoverPathFormatter = (book: IBook): IBook => {
  const data = { ...book };
  data.cover.replace(IP_TO_REPLACE, IP_TO_REPLACE_WITH);
  return data;
};
