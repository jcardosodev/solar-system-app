import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Modal, Text, Animated, Easing } from 'react-native';
import plutoImage from '../../../assets/images/pluto.png';
import styles from '../Pluto/PlutoStyles';

const Pluto: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    rotateAnimation.start();

    return () => {
      rotateAnimation.stop();
    };
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
        <Animated.Image source={plutoImage} style={[styles.image, { transform: [{ rotate }] }]} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Plutão</Text>
            <Text style={styles.modalText}>
              Plutão, o nono maior objeto orbitando o Sol e classificado como planeta anão no Cinturão de Kuiper, é um mundo gelado com cinco luas e uma órbita elíptica extrema.
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

export default Pluto;