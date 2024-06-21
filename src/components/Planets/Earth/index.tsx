import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Modal, Text, Animated, Easing, ScrollView } from 'react-native';
import earthImage from '../../../assets/images/earth.png';
import styles from '../Earth/EarthStyles';

const Earth: React.FC = () => {
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
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.3} onPress={handlePress}>
        <Animated.Image source={earthImage} style={[styles.image, { transform: [{ rotate: rotation }] }]} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Terra</Text>
            <Image source={earthImage} style={styles.modalImage} />
            <ScrollView>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Massa: </Text> 
                5.972 × 10²⁴ kg
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Diâmetro: </Text> 
                12.742 km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Circunferência: </Text> 
                40.075 km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Distância do Sol: </Text> 
                149.6 milhões de km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Período de Rotação: </Text> 
                24 horas
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Período de Translação: </Text> 
                365.25 dias
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Composição Atmosférica: </Text> 
                78% nitrogênio, 21% oxigênio, 1% outros gases
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Curiosidades: </Text> 
                A Terra é o único planeta conhecido que possui água líquida em sua superfície e abriga uma biosfera diversificada.
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

export default Earth;