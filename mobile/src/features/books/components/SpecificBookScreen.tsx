import React, { FC, useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  FlatList,
  ScrollView,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Tabs } from 'expo-router';
import { bookService } from '@/services/book';
import { IBook } from '../types';
import { specificBookStyles } from '../styles';
import { GenreItem } from './Items/GenreItem';
import { ReviewItem } from './Items/ReviewItem';
import { useSelector } from 'react-redux';
import { getUser } from '@/store/slices/user';
import { reviewInputStyles } from '../styles';
import { reviewService } from '@/services/reviews';
import { ReviewInput } from './Items/ReviewInput';

export const SpecificBookScreen: FC = () => {
  const { id: localBook, book } = useLocalSearchParams();
  const [bookData, setBookData] = useState<IBook | null>(null);
  const [comment, setComment] = useState<string>('');
  const [commentTitle, setCommentTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector(getUser);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const book = await bookService.getById(Number(localBook));
      setBookData(book);
      setLoading(false);
    })();
  }, [localBook]);

  const handlePress = async () => {
    if (commentTitle.length >= 1 && comment.length >= 1) {
      const data = {
        title: commentTitle,
        body: comment,
        author: user?.id as number,
        book: bookData?.id as number,
      };
      await reviewService.saveReview(data);
      setCommentTitle('');
      setComment('');
      const book = await bookService.getById(Number(localBook));
      setBookData(book);
    }
  };

  return (
    <>
      <Tabs.Screen
        options={{
          headerTitle: book as string,
        }}
      />
      <SafeAreaView style={specificBookStyles.container}>
        {bookData && !loading ? (
          <ScrollView>
            <Image
              style={specificBookStyles.image}
              source={{
                uri: bookData.cover,
              }}
            />
            <Text style={specificBookStyles.bookTitle}>{bookData.title}</Text>
            <Text style={specificBookStyles.tagTitle}>
              Publisher:{' '}
              <Text style={specificBookStyles.tagItem}>
                {bookData.publisher}
              </Text>
            </Text>
            <Text style={specificBookStyles.tagTitle}>
              Author:{' '}
              <Text style={specificBookStyles.tagItem}>{bookData.author}</Text>
            </Text>
            <FlatList
              ListHeaderComponent={() => (
                <Text style={specificBookStyles.tagTitle}>Genres: {''}</Text>
              )}
              horizontal={true}
              data={bookData.genres}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <GenreItem genre={item} />}
            />
            <Text style={specificBookStyles.bookDescription}>Description</Text>
            <Text>{bookData.description}</Text>
            {user ? (
              <ReviewInput
                handlePress={handlePress}
                commentTitle={commentTitle}
                setCommentTitle={setCommentTitle}
                comment={comment}
                setComment={setComment}
              />
            ) : (
              <View style={reviewInputStyles.authoriztionRequiredContainer}>
                <Text style={reviewInputStyles.authoriztionRequiredText}>
                  To leave your review you need to authorize
                </Text>
              </View>
            )}
            {bookData.reviews.map((item) => (
              <ReviewItem
                key={item.id}
                review={item}
              />
            ))}
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
