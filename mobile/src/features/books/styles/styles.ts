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

export const genreItemStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    width: 120,
    padding: 12,
  },
  containerSelected: {
    backgroundColor: 'black',
  },
  genre: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    height: 20,
  },
  genreSelected: {
    color: 'white',
  },
});

export const specificBookStyles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
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
});

export const reviewItemStyle = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {},
});

export const searchStyles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderBlockColor: 'gray',
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'gray',
    padding: 5,
    paddingLeft: 20,
  },
});

export const reviewInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  authoriztionRequiredContainer: {
    flex: 1,
    padding: 20,
  },
  authoriztionRequiredText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  reviewBodyInout: {
    height: 200,
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
