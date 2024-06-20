import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Modal, Text, Animated, Easing } from 'react-native';
import jupiterImage from '../../../assets/images/jupiter.png';
import styles from '../Jupiter/JupiterStyles';

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
            <Text style={styles.modalText}>
              Júpiter, o maior planeta do Sistema Solar, é um gigante gasoso conhecido por sua Grande Mancha Vermelha, uma tempestade anticiclônica colossal que dura há séculos, suas luas numerosas e seu poderoso campo magnético.
            </Text>
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