import React, { FC, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { type IBook } from '../types';
import { bookService } from '@/services/book';
import { BookItem } from './Items';
import { bookScreenStyles } from '../styles';

export const BooksScreen: FC = () => {
  const [books, setBooks] = useState<IBook[] | null>(null);

  useEffect(() => {
    (async () => {
      const books = await bookService.getAll();
      setBooks(books);
    })();
  }, []);

  return (
    <View style={bookScreenStyles.container}>
      {!books ? (
        <Text>Couldn't fetch books</Text>
      ) : (
        <FlatList
          data={books}
          renderItem={({ item }) => <BookItem book={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </View>
  );
};
