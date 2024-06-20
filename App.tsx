import React from 'react';
import { View, StyleSheet ,ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Login } from './src/Pages/Login/Login';
import { Cadastrar } from './src/Pages/Cadastro/Cadastro';

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
      <Login />
      {/* <Cadastrar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

