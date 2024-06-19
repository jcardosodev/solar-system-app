import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  form: {
    marginTop: 40,
    paddingHorizontal: 20,
    width: '100%',
    maxWidth: 400,
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  label: {
    color: "#ffffff",
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  input: {
    height: 54,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    color: '#fff',
    fontFamily: 'Roboto-Regular',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    backgroundColor: 'transparent',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
});
