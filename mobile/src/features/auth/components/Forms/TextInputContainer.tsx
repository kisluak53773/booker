import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import { formStyles } from '@/features/auth/styles';
import { ITextInputContainerProps } from '@/features/auth/types';

export const TextInputContainer: FC<ITextInputContainerProps> = ({
  title,
  type,
  placeholder,
  error,
  value,
  onBlur,
  onChange,
}) => {
  return (
    <View style={formStyles.inputWrapper}>
      <Text style={formStyles.inputLabel}>{title}</Text>
      <TextInput
        style={formStyles.inputField}
        secureTextEntry={type === 'password'}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
      />
      {error && <Text style={formStyles.inputError}>{error.message}</Text>}
    </View>
  );
};
