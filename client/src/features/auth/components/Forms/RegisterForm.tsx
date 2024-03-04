import React, { FC } from 'react';
import { REGISTER_FIELDS } from '../../constants';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { IRegisterData } from '../..';
import { useAppDispatch } from '@/store';
import { registerUser, getUserError } from '@/store/slices/user';
import { useSelector } from 'react-redux';

interface IForm extends IRegisterData {
  passwordRepeat?: string;
}

export const RegisterForm: FC = () => {
  const {
    watch,
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<IForm>({ mode: 'onBlur' });
  const dispatch = useAppDispatch();
  const password = watch('password');
  const userError = useSelector(getUserError);

  const onSubmit: SubmitHandler<IForm> = (data) => {
    delete data.passwordRepeat;
    dispatch(registerUser(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {userError && <div>{userError}</div>}
      {REGISTER_FIELDS.map((fieldData) => (
        <Controller
          key={fieldData.id}
          control={control}
          rules={
            fieldData.name === 'passwordRepeat'
              ? {
                  ...fieldData.rules,
                  validate: (value) =>
                    value === password || 'Passwords must match',
                }
              : fieldData.rules
          }
          name={
            fieldData.name as
              | 'email'
              | 'first_name'
              | 'last_name'
              | 'password'
              | 'passwordRepeat'
          }
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
        Register
      </button>
    </form>
  );
};
