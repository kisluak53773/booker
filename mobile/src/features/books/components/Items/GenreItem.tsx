import React, { FC } from 'react';
import { type IGenreItemProps } from '../../types';
import { Text } from 'react-native';

export const GenreItem: FC<IGenreItemProps> = ({ genre }) => {
  return (
    <Text>
      {genre.genre}
      {', '}{' '}
    </Text>
  );
};
