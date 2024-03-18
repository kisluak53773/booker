import React, { FC, useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
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
import { useDebounce } from '@/hooks';
import { Search } from './Items';

export const BooksScreen: FC = () => {
  const [books, setBooks] = useState<IBook[] | null>(null);
  const [genres, setGenres] = useState<IGenre[] | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const debouncedSearch = useDebounce(search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const books = await bookService.getByTitle(debouncedSearch as string);
      setBooks(books);
      setLoading(false);
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
  }, [debouncedSearch]);

  return (
    <SafeAreaView style={bookScreenStyles.container}>
      {!books && !genres && !selectedGenre && loading ? (
        <ActivityIndicator
          size={'large'}
          color={'black'}
        />
      ) : (
        <ScrollView>
          <Search
            search={search}
            setSearch={setSearch}
          />
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
          {books?.map((book) => (
            <BookItem
              key={book.id}
              book={book}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
