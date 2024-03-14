import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { ILoginData } from '@/features/auth';
import { View, Pressable, Text } from 'react-native';
import { formStyles } from '@/features/auth/styles';
import { useToast } from '@/hooks';
import { LOGIN_FIELDS } from '@/features/auth/constants';
import { TextInputContainer } from './TextInputContainer';
import { Link } from 'expo-router';
import { loginUser, getUserError, getUser } from '@/store/slices/user';
import { useAppDispatch } from '@/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

export const LoginForm: FC = () => {
  const {
    handleSubmit,
    formState: { isValid },
    control,
    reset,
  } = useForm<ILoginData>();
  const disatch = useAppDispatch();
  const userError = useSelector(getUserError);
  const { showToast } = useToast(
    'Fill all the fields with valid data',
    'error'
  );
  const user = useSelector(getUser);
  const router = useRouter();

  const onSubmit: SubmitHandler<ILoginData> = (data) => {
    disatch(loginUser(data));
    reset();
  };

  useEffect(() => {
    if (user) router.push('/auth/');
  }, [user]);

  return (
    <View style={formStyles.formContainer}>
      {userError && <Text style={formStyles.userError}>{userError}</Text>}
      {LOGIN_FIELDS.map((fieldData) => (
        <Controller
          key={fieldData.id}
          control={control}
          name={fieldData.name as 'email' | 'password'}
          rules={fieldData.rules}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <TextInputContainer
              type={fieldData.type}
              title={fieldData.title}
              placeholder={fieldData.placeholder}
              error={error}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      ))}
      <Pressable
        onPress={isValid ? handleSubmit(onSubmit) : showToast}
        style={
          isValid
            ? formStyles.buttonWrapper
            : [formStyles.buttonWrapper, formStyles.buttonInactive]
        }>
        <Text style={formStyles.buttonText}>Log in</Text>
      </Pressable>
      <Text style={formStyles.linkWrapper}>
        If you don't have an account please
        <Link
          href={'/auth/register'}
          style={formStyles.link}>
          {' register'}
        </Link>
      </Text>
    </View>
  );
};
