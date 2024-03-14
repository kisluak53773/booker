import { SetStateAction, Dispatch } from 'react';
import { FieldError, Noop } from 'react-hook-form';

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

export interface IRegisterFormProps extends IRegisterData {
  passwordRepeat?: string;
}

export interface IInvalidDataModalProps {
  invalidModalFormActive: boolean;
  setInvalidModalFormActive: Dispatch<SetStateAction<boolean>>;
}

export interface ITextInputContainerProps {
  title: string;
  type: string;
  placeholder: string;
  error: FieldError | undefined;
  value?: string;
  onBlur: Noop;
  onChange: (...event: any[]) => void;
}
