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
      {userError && <div className=" text-red-400">{userError}</div>}
      {REGISTER_FIELDS.map((fieldData) => (
        <Controller
          key={fieldData.id}
          control={control}
          rules={
            fieldData.name === 'passwordRepeat'
              ? {
                  ...fieldData.rules,
                  validate: (value) =>
                    value === password || 'Password must match',
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
            <div className="flex flex-col mt-[10px] mb-[10px]">
              <label htmlFor={fieldData.id}>{fieldData.title}</label>
              <input
                id={fieldData.id}
                type={fieldData.type}
                {...field}
                placeholder={fieldData.placeholder}
                className="w-[35vw] p-[5px] focus:outline-none border-[1px] border-gray-300 rounded-[5px]"
              />
              {error && <div className=" text-red-400">{error.message}</div>}
            </div>
          )}
        />
      ))}
      <button
        type="submit"
        className="w-[35vw] mt-[20px] text-center bg-primary rounded-[5px] p-[5px]"
        disabled={!isValid}>
        Register
      </button>
    </form>
  );
};
