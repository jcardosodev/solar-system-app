import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Modal, Text, Animated, Easing } from 'react-native';
import sunImage from '../../assets/images/sun.png';
import styles from '../../components/Estrela/styles';

const Sun: React.FC = () => {
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
        <Animated.Image source={sunImage} style={[styles.image, { transform: [{ rotate: rotation }] }]} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sol</Text>
            <Text style={styles.modalText}>
              O Sol fica a cerca de 150 milhões de km da Terra, tem 333 mil vezes a massa da Terra,
              e suas dimensões são 110 vezes maiores do que as do nosso planeta. É composto essencialmente
              pelos gases hidrogênio e hélio.
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

export default Sun;