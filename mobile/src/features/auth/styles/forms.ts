import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
  formContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30%',
  },
  userError: {
    color: 'red',
  },
  inputWrapper: {
    width: '66%',
    marginTop: 10,
  },
  inputLabel: {
    fontWeight: 'bold',
  },
  inputField: {
    padding: 5,
    borderBottomWidth: 1,
  },
  inputError: {
    color: 'red',
  },
  buttonWrapper: {
    width: '66%',
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
  },
  buttonInactive: {
    backgroundColor: '#383837',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  linkWrapper: {
    marginTop: 10,
  },
  link: {
    color: 'blue',
    marginLeft: 4,
  },
});
