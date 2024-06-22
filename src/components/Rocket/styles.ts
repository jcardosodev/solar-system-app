import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rocketContainer: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 300,
    transform: [{ translateX: -5 }],
    width: 50,
    height: '100%',
    zIndex: 100,
  },
  rocket: {
    position: 'absolute',
    bottom: 0,
  },
  rocketIcon: {
    color: 'yellow',
    shadowColor: 'green',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});