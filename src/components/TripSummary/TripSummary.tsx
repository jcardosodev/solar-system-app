import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../TripSummary/styles';

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
    <View style={styles.container}>
      <Text style={styles.title}>Trip Summary</Text>
      <Text style={styles.text}>Name: {tripData.name}</Text>
      <Text style={styles.text}>Age: {tripData.age}</Text>
      <Text style={styles.text}>Companion: {tripData.companion}</Text>
      <Text style={styles.text}>Data de partida: {tripData.departureDate}</Text>
      <Text style={styles.text}>Duration: {tripData.duration}</Text>
      <Text style={styles.text}>Distance: {tripData.distance}</Text>
      <Text style={styles.text}>Price: {tripData.price}</Text>
    </View>
  );
};

export default TripSummary;