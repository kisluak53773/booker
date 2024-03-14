import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getUser } from '@/store/slices/user';

export const ProfileScreen: FC = () => {
  const user = useSelector(getUser);

  return (
    <View>
      <Text>{user?.email}</Text>
      <Text>{`${user?.first_name} ${user?.last_name}`}</Text>
    </View>
  );
};
