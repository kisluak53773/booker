import React, { FC } from 'react';
import { LOGIN_FIELDS } from '../../constants';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useAppDispatch } from '@/store';
import { ILoginData } from '../..';
import { loginUser, getUserError } from '@/store/slices/user';
import { useSelector } from 'react-redux';

export const LoginForm: FC = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<ILoginData>({ mode: 'onBlur' });
  const dispatch = useAppDispatch();
  const userError = useSelector(getUserError);

  const onSubmit: SubmitHandler<ILoginData> = (data) => {
    dispatch(loginUser(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {userError && (
        <div className=" bg-error p-[10px] text-gray-600 rounded-[10px] text-center mt-[5px]">
          {userError}
        </div>
      )}
      {LOGIN_FIELDS.map((fieldData) => (
        <Controller
          key={fieldData.id}
          control={control}
          name={fieldData.name as 'email' | 'password'}
          rules={fieldData.rules}
          render={({ field, fieldState: { error } }) => (
            <div className="flex flex-col mt-[10px] mb-[10px]">
              <label htmlFor={fieldData.id}>{fieldData.title}</label>
              <input
                id={fieldData.id}
                type={fieldData.type}
                {...field}
                placeholder={fieldData.placeholder}
                className="w-[35vw] p-[5px] border-[1px] focus:outline-none border-gray-300 rounded-[5px]"
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
        Log in
      </button>
    </form>
  );
};
