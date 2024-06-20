import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Modal, Text, Animated, Easing } from 'react-native';
import saturnImage from '../../../assets/images/saturn.png';
import styles from '../Saturn/SaturnStyles';

const Saturn: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotation]);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <TouchableOpacity activeOpacity={0.3} onPress={handlePress}>
        <Animated.Image source={saturnImage} style={[styles.image, { transform: [{ rotate }] }]} />
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
            <Text style={styles.modalText}>
              Saturno, o sexto planeta do Sol, é famoso por seus anéis espetaculares feitos de bilhões de partículas de gelo e rochas.
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

export default Saturn;