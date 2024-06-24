import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
    marginLeft: 120
  },
  line: {
    height: 1.3,
    backgroundColor: 'white',
    marginBottom: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardPrincipal: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    alignItems: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    alignItems: 'center',
    width: '48%',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  cardText: {
    color: '#D3D3D3',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionLine: {
    height: 0.5,
    backgroundColor: 'white',
    marginBottom: 15,
  },
  newsCard: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  newsImage: {
    width: 100,
    height: 100,
  },
  newsTextContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  newsTitle: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    marginBottom: 5,
  },
  newsDate: {
    color: 'gray',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  arrowIcon: {
    alignSelf: 'flex-end',
    marginTop: -20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginVertical: 10,
    left: 120
  },
  modalText: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 10,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  modalTextContainer: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
  },
  readMoreButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 2,
    top: -10,
    alignItems: 'center'
  },
  readMoreButtonText: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  innerModalContent: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  }
});
