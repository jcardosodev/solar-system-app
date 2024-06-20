import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    position: 'absolute',
    top: 428,
    left: 148,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'rgb(50, 8, 74)',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 9,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;