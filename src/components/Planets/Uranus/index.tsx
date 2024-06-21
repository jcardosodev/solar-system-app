import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Modal, Text, Animated, Easing, ScrollView, Image } from 'react-native';
import uranusImage from '../../../assets/images/uranus.png';
import styles from '../Uranus/UranusStyles';

const Uranus: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startImageRotation();
  }, []);

  const startImageRotation = () => {
    rotateValue.setValue(0);
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'], 
  });

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setShowFullText(false); 
  };

  const handleReadMore = () => {
    setShowFullText(true);
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.3} onPress={handlePress}>
        <Animated.Image source={uranusImage} style={[styles.image, { transform: [{ rotate: rotation }] }]} />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Urano</Text>
            <Image source={uranusImage} style={styles.modalImage} />
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Diâmetro: </Text>
                50.724 km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Massa: </Text>
                8.681 × 10²⁵ kg
              </Text>
              {!showFullText && (
                <>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Rotação: </Text>
                    17,2 horas
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Translação: </Text>
                    84 anos terrestres
                  </Text>
                </>
              )}
              {showFullText && (
                <>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Rotação: </Text>
                    17,2 horas
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Translação: </Text>
                    84 anos terrestres
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Temperatura Média: </Text>
                    -195 °C
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Distância do Sol: </Text>
                    2.871 milhões de km
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Curiosidades: </Text>
                    Urano possui uma inclinação axial de 98 graus, o que significa que ele praticamente orbita de lado, e tem 27 luas conhecidas.
                  </Text>
                </>
              )}
            {!showFullText && (
              <TouchableOpacity onPress={handleReadMore} style={styles.readMoreButton}>
                <Text style={styles.readMoreButtonText}>Ler mais</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Uranus;