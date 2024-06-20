import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: '#fff',
    height: 54,
    fontFamily: 'Roboto-Regular',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    backgroundColor: 'transparent',
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
});
