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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "lightgrey",
    textAlign: "center",
    marginTop:75
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 13,
    borderRadius: 15,
  },
  explanationContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 2,
  },
  explanation: {
    fontSize: 15,
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
  readMoreButtonText: {
    color: "#fff",
    marginTop: 8,
    textAlign: "center",
  },
});

export default styles;
