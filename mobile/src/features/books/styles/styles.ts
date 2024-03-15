import { StyleSheet } from 'react-native';

export const bookScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const bookItemStyles = StyleSheet.create({
  containder: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
  },
  image: {
    marginBottom: 20,
    width: '100%',
    height: 550,
  },
  bookTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  tagTitle: {
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  tagItem: {
    fontWeight: '400',
  },
  bookDescription: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
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

export const reviewItemStyle = StyleSheet.create({});

export const genreItemStyle = StyleSheet.create({});
