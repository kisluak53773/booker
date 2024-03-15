import React, { FC } from 'react';
import { type IBookItemProps } from '../../types';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import { GenreItem } from './GenreItem';
import { ReviewItem } from './ReviewItem';
import { bookItemStyles } from '../../styles';

export const BookItem: FC<IBookItemProps> = ({ book }) => {
  return (
    <View style={bookItemStyles.containder}>
      <Image
        style={bookItemStyles.image}
        source={{
          uri: book.cover,
        }}
      />
      <Text style={bookItemStyles.bookTitle}>{book.title}</Text>
      <Text style={bookItemStyles.tagTitle}>
        Publisher: <Text style={bookItemStyles.tagItem}>{book.publisher}</Text>
      </Text>
      <Text style={bookItemStyles.tagTitle}>
        Author: <Text style={bookItemStyles.tagItem}>{book.author}</Text>
      </Text>
      <FlatList
        ListHeaderComponent={() => (
          <Text style={bookItemStyles.tagTitle}>Genres: {''}</Text>
        )}
        horizontal={true}
        data={book.genres}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <GenreItem genre={item} />}
      />
      <Text style={bookItemStyles.bookDescription}>Description</Text>
      <Text>{book.description}</Text>
      <Pressable style={bookItemStyles.buttonContainer}>
        <Text style={bookItemStyles.buttonText}>See the reviews</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
