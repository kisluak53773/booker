import React, { FC } from 'react';
import { type IReviewItemProps } from '../../types';
import { View, Text } from 'react-native';

export const ReviewItem: FC<IReviewItemProps> = ({ review }) => {
  return (
    <View>
      <Text>{review.title}</Text>
      <Text>{review.body}</Text>
    </View>
  );
};
