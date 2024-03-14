import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { IRegisterFormProps } from '@/features/auth';
import { View, Pressable, Text } from 'react-native';
import { formStyles } from '@/features/auth/styles';
import { useToast } from '@/hooks';
import { REGISTER_FIELDS } from '@/features/auth/constants';
import { TextInputContainer } from './TextInputContainer';
import { Link } from 'expo-router';
import { useAppDispatch } from '@/store';
import { registerUser, getUserError, getUser } from '@/store/slices/user';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

export const RegisterForm: FC = () => {
  const {
    handleSubmit,
    formState: { isValid },
    control,
    reset,
    watch,
  } = useForm<IRegisterFormProps>();
  const password = watch('password');
  const dispatch = useAppDispatch();
  const userError = useSelector(getUserError);
  const { showToast } = useToast(
    'Fill all the fields with valid data',
    'error'
  );
  const user = useSelector(getUser);
  const router = useRouter();

  const onSubmit: SubmitHandler<IRegisterFormProps> = (data) => {
    delete data.passwordRepeat;
    dispatch(registerUser(data));
    reset();
  };

  useEffect(() => {
    if (user) router.push('/auth/');
  }, [user]);

  return (
    <View style={formStyles.formContainer}>
      {userError && <Text style={formStyles.userError}>{userError}</Text>}
      {REGISTER_FIELDS.map((fieldData) => (
        <Controller
          key={fieldData.id}
          control={control}
          name={
            fieldData.name as
              | 'email'
              | 'first_name'
              | 'last_name'
              | 'password'
              | 'passwordRepeat'
          }
          rules={
            fieldData.name === 'passwordRepeat'
              ? {
                  ...fieldData.rules,
                  validate: (value) =>
                    value === password || 'Password must match',
                }
              : fieldData.rules
          }
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
        If you already have an account
        <Link
          href={'/auth/'}
          style={formStyles.link}>
          {' sign in'}
        </Link>
      </Text>
    </View>
  );
};
