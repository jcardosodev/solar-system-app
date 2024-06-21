import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Modal, Text, Animated, Easing, ScrollView } from 'react-native';
import jupiterImage from '../../../assets/images/jupiter.png';
import styles from '../../../components/Planets/Jupiter/JupiterStyles';

const Jupiter: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startImageRotation();
  }, []);

  const startImageRotation = () => {
    rotateValue.setValue(0);
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 10000, // Duração de 10 segundos para uma rotação completa
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
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.3} onPress={handlePress}>
        <Animated.Image source={jupiterImage} style={[styles.image, { transform: [{ rotate: rotation }] }]} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Júpiter</Text>
            <Image source={jupiterImage} style={styles.modalImage} />
            <ScrollView>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Diâmetro: </Text>
                139.820 km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Massa: </Text>
                1.898 × 10²⁷ kg
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Período de Rotação: </Text>
                9,93 horas
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Período de Translação: </Text>
                11,86 anos terrestres
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Temperatura Média: </Text>
                -108 °C
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Distância do Sol: </Text>
                778.5 milhões de km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Curiosidades: </Text>
                Júpiter tem a maior lua do sistema solar, Ganimedes, e possui mais de 75 luas conhecidas.
              </Text>
            </ScrollView>
            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Jupiter;