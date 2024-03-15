import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  email: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 15,
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
