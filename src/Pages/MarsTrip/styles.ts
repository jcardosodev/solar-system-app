import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  companionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  companionImageContainer: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 30,
    padding: 5,
  },
  companionImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
  },
  selectedCompanion: {
    borderColor: '#007BFF',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  dateButtonText: {
    color: 'white',
  },
  dateButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
