import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  photoContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
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