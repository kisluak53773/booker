import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';

const ios = Platform.OS === 'ios';

export const CustomKeyboardView: FC<PropsWithChildren> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={ios ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        bounces={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
