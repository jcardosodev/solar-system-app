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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;


