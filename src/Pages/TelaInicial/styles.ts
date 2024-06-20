import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
  },
  content: {
    position: 'absolute',
    bottom: 55,
    left: 15,
  },
  text: {
    color: 'rgb(180, 180, 180)',
    fontSize: 36,
    fontFamily: 'Roboto-Black',
  },
  textBold: {
    color: 'white',
    fontSize: 45,
    fontFamily: 'Roboto-Black',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    marginTop: 200,
  },
});
