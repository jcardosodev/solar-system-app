import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Routes/types';
import { styles } from '../MarsTrip/styles';

const backgroundImage = require('../../assets/images/MarsBackground.png');
const serjaoImg = require('../../assets/images/serjaoImg.png');
const elonImg = require('../../assets/images/elonImg.png');
const cachorroImg = require('../../assets/images/cachorroImg.png');

const MarsTrip = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [companion, setCompanion] = useState('');

  const tripDetails = {
    duration: '6 meses',
    distance: '225 Milhões de km',
    price: 'R$2.500,000',
  };

  const handleSave = async () => {
    try {
      const userData = {
        name,
        age,
        companion,
        ...tripDetails,
      };
      await AsyncStorage.setItem('@mars_trip', JSON.stringify(userData));
      navigation.navigate('TripSummary');
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Plan Your Trip to Mars</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Age"
          placeholderTextColor="#ccc"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <Text style={styles.subtitle}>Choose Your Companion</Text>
        <View style={styles.companionContainer}>
          <TouchableOpacity onPress={() => setCompanion('Serjao Foguetes')}>
            <Image source={serjaoImg} style={styles.companionImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCompanion('Elon Musk')}>
            <Image source={elonImg} style={styles.companionImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCompanion('Cachorro Caramelo')}>
            <Image source={cachorroImg} style={styles.companionImage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Trip Details</Text>
          <Ionicons name="arrow-forward" size={20} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default MarsTrip;
