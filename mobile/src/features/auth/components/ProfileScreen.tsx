import React, { FC } from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { getUser } from '@/store/slices/user';
import { profileStyles } from '../styles/profile';
import { useAppDispatch } from '@/store';
import { removeUser } from '@/store/slices/user';
import { removeFromStorage } from '@/services';

export const ProfileScreen: FC = () => {
  const user = useSelector(getUser);
  const dispatch = useAppDispatch();

  const onPress = async () => {
    dispatch(removeUser());
    await removeFromStorage();
  };

  return (
    <SafeAreaView style={profileStyles.container}>
      <Text
        style={
          profileStyles.name
        }>{`${user?.first_name} ${user?.last_name}`}</Text>
      <Text style={profileStyles.email}>{user?.email}</Text>
      <Pressable
        onPress={onPress}
        style={profileStyles.buttonContainer}>
        <Text style={profileStyles.buttonText}>Sign out</Text>
      </Pressable>
    </SafeAreaView>
  );
};
