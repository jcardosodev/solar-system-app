import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 60,
    position: 'absolute',
    top: -90,
    left: 290,
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
    backgroundColor: 'rgb(50, 8, 65)',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalImage: {
    width: 100,
    height: 120,
    marginBottom: 10,
  },
  modalText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  topicTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgb(106, 90, 205)',
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(106, 90, 205)',
    borderRadius: 9,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;