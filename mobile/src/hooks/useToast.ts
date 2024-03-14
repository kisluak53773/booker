import Toast, { ToastType } from 'react-native-toast-message';

export const useToast = (message: string, type: ToastType) => {
  const showToast = () => {
    Toast.show({
      type: type,
      text1: message,
    });
  };

  return { showToast };
};
