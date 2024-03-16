import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { type IBook } from '../types';
import { bookService } from '@/services/book';
import { BookItem } from './Items';
import { bookScreenStyles } from '../styles';
import { GenreCarousel } from './Items/GenreCarousel';
import {
  getUserFromSecureStore,
  getRefreshToken,
  getAccessToken,
  removeFromStorage,
} from '@/services';
import { authService } from '@/services/auth';
import { setUser } from '@/store/slices/user';
import { useAppDispatch } from '@/store';
import { type IGenre } from '../types';
import { genreService } from '@/services/genre';
import { DEFAULT_GENRE } from '../constants';

export const BooksScreen: FC = () => {
  const [books, setBooks] = useState<IBook[] | null>(null);
  const [genres, setGenres] = useState<IGenre[] | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const books = await bookService.getAll();
      setBooks(books);
      const genres = await genreService.getAll();
      setGenres([DEFAULT_GENRE, ...genres]);
      setSelectedGenre(DEFAULT_GENRE.id);
      const refresh = await getRefreshToken();
      if (refresh) await authService.refresh();
      const accessToken = await getAccessToken();
      if (accessToken) {
        const user = await getUserFromSecureStore();
        user ? dispatch(setUser(user)) : removeFromStorage();
      } else {
        removeFromStorage();
      }
    })();
  }, []);

  return (
    <SafeAreaView style={bookScreenStyles.container}>
      {!books && !genres && !selectedGenre ? (
        <ActivityIndicator
          size={'large'}
          color={'black'}
        />
      ) : (
        <>
          <FlatList
            data={genres}
            renderItem={({ item }) => (
              <GenreCarousel
                genre={item}
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
                setBooks={setBooks}
              />
            )}
            keyExtractor={(item) => String(item.id)}
            horizontal={true}
          />
          <FlatList
            data={books}
            renderItem={({ item }) => <BookItem book={item} />}
            keyExtractor={(item) => String(item.id)}
          />
        </>
      )}
    </SafeAreaView>
  );
};
