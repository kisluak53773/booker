import React, { FC } from 'react';
import { LOGIN_FIELDS } from '../../constants';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useAppDispatch } from '@/store';
import { ILoginData } from '../..';
import { loginUser } from '@/store/slices/user';

export const LoginForm: FC = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<ILoginData>({ mode: 'onBlur' });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ILoginData> = (data) => {
    dispatch(loginUser(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {LOGIN_FIELDS.map((fieldData) => (
        <Controller
          key={fieldData.id}
          control={control}
          name={fieldData.name as 'email' | 'password'}
          rules={fieldData.rules}
          render={({ field, fieldState: { error } }) => (
            <div>
              <label htmlFor={fieldData.id}>{fieldData.title}</label>
              <input
                id={fieldData.id}
                type={fieldData.type}
                {...field}
                placeholder={fieldData.type}
              />
              {error && <div>{error.message}</div>}
            </div>
          )}
        />
      ))}
      <button
        type="submit"
        disabled={!!isValid}>
        Log in
      </button>
    </form>
  );
};
