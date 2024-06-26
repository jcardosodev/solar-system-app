import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Routes/types';
import { styles } from '../MarsTrip/styles';
import TripSummary from '../../components/TripSummary/TripSummary';
import { useUserContext } from '../../context/UserContext';
import withLoading from '../../hoc/withLoading';

const backgroundImage = require('../../assets/images/MarsBackground.png');
const serjaoImg = require('../../assets/images/serjaoImg.png');
const elonImg = require('../../assets/images/elonImg.png');
const cachorroImg = require('../../assets/images/cachorroImg.png');

const MarsTrip = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [companion, setCompanion] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const { usuarioLogado } = useUserContext();

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const tripDetails = {
    duration: '6 meses',
    distance: '225 Milhões de km',
    price: 'R$2.500,000',
    departureDate: formatDate(date),
  };

  const handleAgeChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setAge(numericText);
  }

  const handleSave = async () => {
    if (!usuarioLogado) {
      Alert.alert("Alerta", 'Necessário login para acessar esta página.');
      navigation.navigate('Login');
      return;
    }
    if (
      name.length < 1 ||
      age.length < 1 ||
      companion.length < 1
    ) {
      Alert.alert("Error", "Um ou mais campos não foram preenchidos.")
      return;
    }

    try {
      setLoading(true);
      const userData = {
        name,
        age,
        companion,
        ...tripDetails,
      };
      await AsyncStorage.setItem('@mars_trip', JSON.stringify(userData));
      setAge('');
      setName('');
      setDate(new Date());
      setCompanion('');
      setLoading(false);
      navigation.navigate('TripSummary');
    } catch (error) {
      console.error('Error saving data', error);
      setLoading(false);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    hideDatePicker();
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Ingresso para Marte</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          placeholderTextColor="#ccc"
          value={age}
          onChangeText={handleAgeChange}
          keyboardType="numeric"
          returnKeyType='done'
        />
        <Text style={styles.subtitle}>Data de partida</Text>
        <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>{formatDate(date)}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          isDarkModeEnabled={true}
        />
        <Text style={styles.subtitle}>Escolha seu companheiro</Text>
        <View style={styles.companionContainer}>
          <TouchableOpacity
            onPress={() => setCompanion('Serjao Foguetes')}
            style={[styles.companionImageContainer, companion === 'Serjao Foguetes' && styles.selectedCompanion]}>
            <Image source={serjaoImg} style={styles.companionImage} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCompanion('Elon Musk')}
            style={[styles.companionImageContainer, companion === 'Elon Musk' && styles.selectedCompanion]}>
            <Image source={elonImg} style={styles.companionImage} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCompanion('Cachorro Caramelo')}
            style={[styles.companionImageContainer, companion === 'Cachorro Caramelo' && styles.selectedCompanion]}>
            <Image source={cachorroImg} style={styles.companionImage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSave} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <>
              <Text style={styles.buttonText}>Salvar dados da viagem</Text>
              <Ionicons name="arrow-forward" size={20} color="white" style={styles.icon} />
            </>
          )}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const images = [
  backgroundImage,
  serjaoImg,
  elonImg,
  cachorroImg,
];

export default withLoading(MarsTrip, images);
