import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "lightgrey",
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 15,
  },
  explanationContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  explanation: {
    fontSize: 16,
    color: "lightgrey",
    textAlign: "center",
  },
  copyright: {
    fontSize: 12,
    color: "gray",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});

export default styles;
