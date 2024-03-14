import React, { FC } from 'react';
import { ProfileScreen } from '@/features/auth';
import { useSelector } from 'react-redux';
import { getUser } from '@/store/slices/user';
import { AuthScreen } from '@/features/auth';

const Profile: FC = () => {
  const user = useSelector(getUser);

  return user ? <ProfileScreen /> : <AuthScreen />;
};

export default Profile;
