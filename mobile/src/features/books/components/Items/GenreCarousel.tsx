import React, { FC } from 'react';
import { type IGenreCarouselProps } from '../../types';
import { Text, Pressable } from 'react-native';
import { genreItemStyle } from '../../styles';
import { bookService } from '@/services/book';
import { DEFAULT_GENRE } from '../../constants';

export const GenreCarousel: FC<IGenreCarouselProps> = ({
  genre,
  setSelectedGenre,
  selectedGenre,
  setBooks,
}) => {
  const filterByGenre = async () => {
    setSelectedGenre(genre.id);
    if (genre.genre === DEFAULT_GENRE.genre) {
      const books = await bookService.getAll();
      setBooks(books);
      return;
    }
    const books = await bookService.getByGenre(genre.id);
    setBooks(books);
  };

  return (
    <Pressable
      onPress={() => filterByGenre()}
      style={
        selectedGenre === genre.id
          ? [genreItemStyle.container, genreItemStyle.containerSelected]
          : genreItemStyle.container
      }>
      <Text
        style={
          selectedGenre === genre.id
            ? [genreItemStyle.genre, genreItemStyle.genreSelected]
            : genreItemStyle.genre
        }>
        {genre.genre}
      </Text>
    </Pressable>
  );
};
