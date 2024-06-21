import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Modal, Text, Animated, Easing, ScrollView } from 'react-native';
import saturnImage from '../../../assets/images/saturn.png';
import styles from '../../../components/Planets/Saturn/SaturnStyles';

const Saturn: React.FC = () => {
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
    outputRange: ['0deg', '360deg'],
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
        <Animated.Image source={saturnImage} style={[styles.image, { transform: [{ rotate: rotation }] }]} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Saturno</Text>
            <Image source={saturnImage} style={styles.modalImage} />
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Diâmetro: </Text>
                116.460 km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Massa: </Text>
                5.683 × 10²⁶ kg
              </Text>
              {!showFullText && (
                <>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Rotação: </Text>
                    10,7 horas
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Translação: </Text>
                    29,5 anos terrestres
                  </Text>
                </>
              )}
              {showFullText && (
                <>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Rotação: </Text>
                    10,7 horas
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Translação: </Text>
                    29,5 anos terrestres
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Temperatura Média: </Text>
                    -138 °C
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Distância do Sol: </Text>
                    1.429 milhões de km
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Curiosidades: </Text>
                    Saturno tem um total de 82 luas conhecidas, e a maior delas, Titã, é maior que o planeta Mercúrio.
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

export default Saturn;