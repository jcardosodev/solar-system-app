import React from 'react';
import { View, StyleSheet ,ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Login } from './src/Pages/Login/Login';
import { Cadastrar } from './src/Pages/Cadastro/Cadastro';
import { TelaInicial } from "./src/Pages/TelaInicial";
import { Routes } from "./src/Routes";
import SolarSystem from "./src/Pages/SolarSystem/index";
import ImageOfTheDay from './src/Pages/ImageOfTheDay/ImageOfTheDay';
import PlanetsTest from './src/Pages/PlanetsTest/PlanetsTest';

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
      {/* <TelaInicial /> */}
      {/* <SolarSystem/> */}
      {/* <Cadastrar /> */}
      {/* <ImageOfTheDay /> */}
      {/* <Login /> */}
      {/* <PlanetsTest /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
