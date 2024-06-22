import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Marker Felt',
    marginBottom: 10,
    left: 120

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
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 1,
    margin: 5,
    alignItems: 'baseline',
    width: '100%',
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 3,
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
    fontFamily: 'Stencil Std',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Marker Felt',
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 20,
  },
  sectionLine: {
    height: 0.5,
    backgroundColor: 'white',
    marginBottom: 15,
  },
  sectionContainer: {
    marginBottom: 1,
  },
  newsCard: {
    flexDirection: 'row',
    backgroundColor: '#1c1c1c',
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
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 16,
    marginBottom: 5,
  },
  newsDate: {
    color: 'gray',
    fontFamily: 'Roboto',
    fontSize: 12,
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
    color: 'white',
    fontSize: 24,
    fontFamily: 'Roboto',
    marginVertical: 10,
    left: 120
  },
  modalText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  arrowIcon: {
    alignSelf: 'flex-end',
    marginTop: -20,
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
    fontFamily: 'Roboto',
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
