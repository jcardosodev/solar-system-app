import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ff880f30',
  },
  photoContainer: {
    marginVertical: 16,
    padding: 10,
    backgroundColor: '#ff880f30',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#aa220f',
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 64,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  subtitle: {
    color: '#aa220f',
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});

export default styles;