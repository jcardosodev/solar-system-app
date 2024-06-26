import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useUserContext } from '../../context/UserContext';
import { userApi } from '../../services/UserApi/UserApi';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootTabParamList } from '../../Routes/types';
import { TripData } from '../../types/types';

const backgroundImage = require('../../assets/images/MarsBackground.png');

const TripSummary = () => {
  const [tripData, setTripData] = useState<TripData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { usuarioLogado } = useUserContext();
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();

  const loadTripData = async () => {
    try {
      const data = await AsyncStorage.getItem('@mars_trip');
      if (data) {
        setTripData(JSON.parse(data));
      }
      const response = await userApi.get(`users/${usuarioLogado?.id}`);
    } catch (error) {
      console.error("Falha ao carregar dados de viagem:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmarClicked = async () => {
    if (!tripData) {
      Alert.alert("Erro", "Dados da viagem não encontrados.");
      return;
    }
    try {
      const response = await userApi.post(`viagens`, {
        idUser: usuarioLogado?.id,
        nome: tripData.name,
        idade: tripData.age,
        companhia: tripData.companion,
        duracao: tripData.duration,
        preco: tripData.price
      });
      
      Alert.alert("Faça suas malas!", "Informações de viagem registradas.");
      navigation.navigate('MarsTrip');
    } catch (error) {
      console.log("Falha ao registrar informações de viagem:", error);
      Alert.alert("Erro", 'Falha ao tentar registrar informações de viagem.');
    }
  };

  const handleCancelarClicked = async () => {
    try {
      await AsyncStorage.removeItem('@mars_trip');
      setTripData(null);
      navigation.navigate('MarsTrip');
    } catch (error) {
      console.error("Falha ao remover informações de viagem:", error)
    }
  };

  useEffect(() => {
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} activeOpacity={.8} onPress={handleConfirmarClicked}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={.8} onPress={handleCancelarClicked}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TripSummary;
