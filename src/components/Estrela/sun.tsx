import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Modal, Text, Animated, Easing, ScrollView } from 'react-native';
import sunImage from '../../assets/images/sun.png';
import styles from '../../components/Estrela/styles';

const Sun: React.FC = () => {
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
        duration: 19500,
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
            <Image source={sunImage} style={styles.modalImage} />
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Massa: </Text> 
                1.989 × 10³⁰ kg
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Diâmetro: </Text> 
                1.392.700 km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Temperatura da Superfície: </Text> 
                5.500 °C
              </Text>
              {!showFullText && (
                <>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Temperatura do Núcleo: </Text> 
                    15.000.000 °C
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Distância da Terra: </Text> 
                    150.000.000 km
                  </Text>
                </>
              )}
              {showFullText && (
                <>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Temperatura do Núcleo: </Text> 
                    15.000.000 °C
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Distância da Terra: </Text> 
                    150.000.000 km
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Rotação: </Text> 
                    25-35 dias 
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Composição: </Text> 
                    74% hidrogênio, 24% hélio, 2% outros elementos
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Curiosidades: </Text> 
                    O Sol é tão grande que cerca de 1,3 milhão de Terras poderiam caber dentro dele. A energia produzida pelo Sol em um segundo poderia abastecer a Terra por 500.000 anos.
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
export default Sun;