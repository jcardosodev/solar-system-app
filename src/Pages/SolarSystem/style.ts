import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navigationContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  navigationButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,

    borderRadius: 5,
  },
  leftButton: {
    alignSelf: 'flex-start',
  },
  rightButton: {
    alignSelf: 'flex-end',
  },
  navigationButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;