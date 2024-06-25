import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../Routes/types';
import withLoading from '../../hoc/withLoading';

const homePageMarsImage = require('../../assets/images/homePageMars.jpeg');
const moonHomePageImage = require('../../assets/images/MoonHomePage.jpg');
const backgroundImage = require('../../assets/images/backgroundHome.png');
const vortexImage = require('../../assets/images/vortex.jpg');

const HomePage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false); 

  const openModal = () => {
    setLoading(true);
    setModalVisible(true);
    setTimeout(() => setLoading(false), 1000); 
  };

  const closeModal = () => {
    setModalVisible(false);
    setExpanded(false); 
  };

  const toggleExpand = () => {
    setExpanded(!expanded); 
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Space is Now</Text>
        <View style={styles.line} />
        <View style={styles.cardPrincipal}>
          <TouchableOpacity style={styles.cardPrincipal} onPress={() => navigation.navigate('MarsTrip')}>
            <Image source={homePageMarsImage} style={styles.cardImage} />
            <Text style={styles.cardText}>- Passagem para Marte</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={openModal}>
            <Image source={moonHomePageImage} style={styles.cardImage} />
            <Text style={styles.cardText}>Lua 🌙</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ImageOfTheDay')}>
            <Image source={backgroundImage} style={styles.cardImage} />
            <Text style={styles.cardText}>Imagem do dia</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Visite nosso Sistema Solar</Text>
          <View style={styles.sectionLine} />
        </View>
        <TouchableOpacity style={styles.newsCard} onPress={() => navigation.navigate('SolarSystem')}>
          <Image source={vortexImage} style={styles.newsImage} />
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
                <Image source={moonHomePageImage} style={styles.modalImage} />
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalTitle}>A Lua</Text>
                  <Text style={styles.modalText}>{expanded ? (
                    `A Lua é o único satélite natural da Terra. É o quinto maior satélite do Sistema Solar e o maior entre os satélites planetários em relação ao tamanho do planeta que orbita.
          O Apollo 11 dos Estados Unidos foi a primeira missão tripulada a pousar na Lua, em 20 de julho de 1969.
          O primeiro objeto feito pelo homem a chegar na Lua foi o Luna 2 da União Soviética, em 13 de setembro de 1959.`
                  ) : (
                    `A Lua é o único satélite natural da Terra. É o quinto maior satélite do Sistema Solar e o maior entre os satélites planetários em relação ao tamanho do planeta que orbita.`
                  )}
                  </Text>
                  {!expanded && (
                    <TouchableOpacity style={styles.readMoreButton} onPress={toggleExpand}>
                      <Text style={styles.readMoreButtonText}>Ler mais</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default withLoading(HomePage, [homePageMarsImage, moonHomePageImage, backgroundImage, vortexImage]);
