export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.detail;

  return message || error.message;
};
