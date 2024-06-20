import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageOfTheDay from './src/Pages/ImageOfTheDay/ImageOfTheDay';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageOfTheDay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
