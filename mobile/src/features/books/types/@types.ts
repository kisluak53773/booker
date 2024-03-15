export interface IBook {
  id: number;
  title: string;
  cover: string;
  description: string;
  author: string;
  publisher: string;
  genres: IGenre[];
  reviews: IReview[];
}

export interface IGenre {
  id: number;
  created: string;
  updated: string;
  genre: string;
}

export interface IReview {
  id: number;
  created: string;
  updated: string;
  title: string;
  body: string;
  author: number;
  book: number;
}

export interface IBookItemProps {
  book: IBook;
}

export interface IReviewItemProps {
  review: IReview;
}

export interface IGenreItemProps {
  genre: IGenre;
}
