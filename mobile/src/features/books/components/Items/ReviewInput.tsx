import React, { FC } from 'react';
import { Pressable, TextInput, View, Text } from 'react-native';
import { reviewInputStyles } from '../../styles';
import { type IReviewInputProps } from '../../types';

export const ReviewInput: FC<IReviewInputProps> = ({
  handlePress,
  commentTitle,
  setCommentTitle,
  comment,
  setComment,
}) => {
  return (
    <View style={reviewInputStyles.container}>
      <TextInput
        style={reviewInputStyles.reviewInput}
        value={commentTitle}
        onChangeText={setCommentTitle}
        placeholder="Review title..."
      />
      <TextInput
        textAlignVertical={'top'}
        multiline={true}
        style={[
          reviewInputStyles.reviewInput,
          reviewInputStyles.reviewBodyInout,
        ]}
        value={comment}
        onChangeText={setComment}
        placeholder="Leave your review..."
      />
      <Pressable
        onPress={handlePress}
        style={reviewInputStyles.buttonContainer}>
        <Text style={reviewInputStyles.buttonText}>Save review</Text>
      </Pressable>
    </View>
  );
};
