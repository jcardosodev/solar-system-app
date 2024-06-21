import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Modal, Text, Animated, Easing, ScrollView } from 'react-native';
import venusImage from '../../../assets/images/venus.png';
import styles from '../../../components/Planets/Venus/VenusStyle';

const Venus: React.FC = () => {
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
    outputRange: ['0deg', '-360deg'], // Rotação ao contrário
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
        <Animated.Image source={venusImage} style={[styles.image, { transform: [{ rotate: rotation }] }]} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Vênus</Text>
            <Image source={venusImage} style={styles.modalImage} />
            <ScrollView>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Diâmetro: </Text> 
                12.104 km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Massa: </Text> 
                4.867 × 10²⁴ kg
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Período de Rotação: </Text> 
                243 dias
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Período de Translação: </Text> 
                225 dias
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Temperatura Média: </Text> 
                464 °C
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Distância do Sol: </Text> 
                108.2 milhões de km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Curiosidades: </Text> 
                Vênus tem a atmosfera mais densa entre os planetas terrestres, composta principalmente por dióxido de carbono.
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

export default Venus;