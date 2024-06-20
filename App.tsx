<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import  TelaInicial  from './src/Pages/TelaInicial';
import Routes from './src/Routes';

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('../solar-system-app/src/assets/fonts/Roboto-Regular.ttf'),
    'PlaywriteAUSA-Regular': require('../solar-system-app/src/assets/fonts/PlaywriteAUSA-Regular.ttf'),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFonts();
      setFontsLoaded(true);
    }
    load();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Routes />;
};

const styles = StyleSheet.create({
  loadingContainer: {
=======

import React from 'react';
import { View, StyleSheet ,ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Login } from './src/Pages/Login/Login';
import { Cadastrar } from './src/Pages/Cadastro/Cadastro';
import { TelaInicial } from "./src/Pages/TelaInicial";
import { Routes } from "./src/Routes";

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
      <TelaInicial />
      {/* <Login /> */}
      <Cadastrar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
>>>>>>> 3e597be22f50eb5fe70da35437d8e74953f725e7
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
<<<<<<< HEAD

export default App;


=======
>>>>>>> 3e597be22f50eb5fe70da35437d8e74953f725e7
