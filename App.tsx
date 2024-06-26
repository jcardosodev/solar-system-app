import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Routes from './src/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'), // Opcional, caso você queira usar negrito
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
      <View style={styles.container}>
        <Routes />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
