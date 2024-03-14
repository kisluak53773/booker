import React, { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getRefreshToken } from '@/services';
import { useAppDispatch } from '@/store';

export const BookScreen: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const access = await getRefreshToken();
      console.log(access);
    })();
  }, []);

  return (
    <View>
      <Text>Main</Text>
    </View>
  );
};
