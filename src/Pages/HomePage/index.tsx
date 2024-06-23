import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../Routes/types';

const HomePage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [innerModalVisible, setInnerModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setLoading(true);
    setModalVisible(true);
    setTimeout(() => setLoading(false), 1000); // Simulate a loading delay
  };

  const closeModal = () => {
    setModalVisible(false);
    setInnerModalVisible(false);
  };

  const openInnerModal = () => {
    setInnerModalVisible(true);
  };

  const closeInnerModal = () => {
    setInnerModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Space is Now</Text>
        <View style={styles.line} />
        <View style={styles.cardPrincipal}>
          <TouchableOpacity style={styles.cardPrincipal} onPress={() => navigation.navigate('MarsTrip')}>
            <Image source={require('../../assets/images/homePageMars.jpeg')} style={styles.cardImage} />
            <Text style={styles.cardText}>- Passagem para Marte</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={openModal}>
            <Image source={require('../../assets/images/MoonHomePage.jpg')} style={styles.cardImage} />
            <Text style={styles.cardText}>Lua 🌙</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ImageOfTheDay')}>
            <Image source={require('../../assets/images/backgroundHome.png')} style={styles.cardImage} />
            <Text style={styles.cardText}>Imagem do dia</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Visite nosso Sistema Solar</Text>
          <View style={styles.sectionLine} />
        </View>
        <TouchableOpacity style={styles.newsCard} onPress={() => navigation.navigate('SolarSystem')}>
          <Image source={require('../../assets/images/vortex.jpg')} style={styles.newsImage} />
          <View style={styles.newsTextContainer}>
            <Text style={styles.newsTitle}>A galáxia te espera</Text>
            <Text style={styles.newsDate}>Jun 21, 2024</Text>
            <Ionicons name="arrow-forward" size={20} color="white" style={styles.arrowIcon} />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <>
                <Image source={require('../../assets/images/MoonHomePage.jpg')} style={styles.modalImage} />
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalTitle}>A Lua</Text>
                  <Text style={styles.modalText}>A Lua é o único satélite natural da Terra.</Text>
                  <Text style={styles.modalText}>
                    É o quinto maior satélite do Sistema Solar e 
                    o maior entre os satélites planetários em relação 
                    ao tamanho do planeta que orbita.
                  </Text>
                  <Text style={styles.modalText}>
                    O Apollo 11 dos Estados Unidos foi a primeira missão tripulada a pousar na Lua, em 20 de julho de 1969.
                  </Text>
                  <TouchableOpacity style={styles.readMoreButton} onPress={openInnerModal}>
                    <Text style={styles.readMoreButtonText}>Ler mais</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      <Modal visible={innerModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.innerModalContent}>
            <Text style={styles.modalTitle}>Descrição Detalhada</Text>
            <Text style={styles.modalText}>
              A Lua é o único satélite natural da Terra. É o quinto maior satélite do Sistema Solar e o maior entre os satélites planetários em relação ao tamanho do planeta que orbita.
            </Text>
            <Text style={styles.modalText}>
              O primeiro objeto feito pelo homem a chegar na Lua foi o Luna 2 da União Soviética, em 13 de setembro de 1959. O Apollo 11 dos Estados Unidos foi a primeira missão tripulada a pousar na Lua, em 20 de julho de 1969.
            </Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeInnerModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomePage;
