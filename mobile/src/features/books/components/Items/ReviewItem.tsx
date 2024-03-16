import React, { FC } from 'react';
import { type IReviewItemProps } from '../../types';
import { View, Text } from 'react-native';
import { reviewItemStyle } from '../../styles';

export const ReviewItem: FC<IReviewItemProps> = ({ review }) => {
  return (
    <View style={reviewItemStyle.container}>
      <Text style={reviewItemStyle.title}>{review.title}</Text>
      <Text style={reviewItemStyle.text}>{review.body}</Text>
    </View>
  );
};
