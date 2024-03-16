import React, { FC, useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Tabs } from 'expo-router';
import { bookService } from '@/services/book';
import { IBook } from '../types';
import { specificBookStyles } from '../styles';
import { GenreItem } from './Items/GenreItem';
import { ReviewItem } from './Items/ReviewItem';

export const SpecificBookScreen: FC = () => {
  const { id: localBook, book } = useLocalSearchParams();
  const [bookData, setBookData] = useState<IBook | null>(null);

  useEffect(() => {
    (async () => {
      const book = await bookService.getById(Number(localBook));
      setBookData(book);
    })();
  }, [localBook]);

  return (
    <>
      <Tabs.Screen
        options={{
          headerTitle: book as string,
        }}
      />
      <SafeAreaView style={specificBookStyles.container}>
        {bookData ? (
          <ScrollView>
            <Image
              style={specificBookStyles.image}
              source={{
                uri: bookData.cover,
              }}
            />
            <Text>{bookData.title}</Text>
            <Text>
              Publisher: <Text>{bookData.publisher}</Text>
            </Text>
            <Text>
              Author: <Text>{bookData.author}</Text>
            </Text>
            <FlatList
              ListHeaderComponent={() => <Text>Genres: {''}</Text>}
              horizontal={true}
              data={bookData.genres}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <GenreItem genre={item} />}
            />
            <Text>Description</Text>
            <Text>{bookData.description}</Text>
            <FlatList
              data={bookData.reviews}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <ReviewItem review={item} />}
            />
          </ScrollView>
        ) : (
          <ActivityIndicator
            size={'large'}
            color={'black'}
          />
        )}
      </SafeAreaView>
    </>
  );
};
