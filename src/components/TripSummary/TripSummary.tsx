import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

const backgroundImage = require('../../assets/images/MarsBackground.png');

const TripSummary = () => {
  const [tripData, setTripData] = useState<any>(null);

  useEffect(() => {
    const loadTripData = async () => {
      const data = await AsyncStorage.getItem('@mars_trip');
      if (data) {
        setTripData(JSON.parse(data));
      }
    };
    loadTripData();
  }, []);

  if (!tripData) {
    return <Text>Loading...</Text>;
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Dados da viagem</Text>
        <Text style={styles.text}>Nome: {tripData.name}</Text>
        <Text style={styles.text}>Idade: {tripData.age}</Text>
        <Text style={styles.text}>Companheiro: {tripData.companion}</Text>
        <Text style={styles.text}>Data de partida: {tripData.departureDate}</Text>
        <Text style={styles.text}>Duração: {tripData.duration}</Text>
        <Text style={styles.text}>Distância: {tripData.distance}</Text>
        <Text style={styles.text}>Preço: {tripData.price}</Text>
      </View>
    </ImageBackground>
  );
};

export default TripSummary;
