import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Modal, Text, Animated, Easing, ScrollView, Image } from 'react-native';
import plutoImage from '../../../assets/images/pluto.png';
import styles from '../Pluto/PlutoStyles';

const Pluto: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
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
    setShowFullText(false); 
  };

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleReadMore = () => {
    setShowFullText(true);
  };

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
            <Image source={plutoImage} style={styles.modalImage} />
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Diâmetro: </Text>
                2.377 km
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.topicTitle}>Massa: </Text>
                1,309 × 10²² kg
              </Text>
              {!showFullText && (
                <>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Rotação: </Text>
                    153,3 horas (6,39 dias terrestres)
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Translação: </Text>
                    248 anos terrestres
                  </Text>
                </>
              )}
              {showFullText && (
                <>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Rotação: </Text>
                    153,3 horas (6,39 dias terrestres)
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Período de Translação: </Text>
                    248 anos terrestres
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Temperatura Média: </Text>
                    -229 °C
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Distância do Sol: </Text>
                    5,9 bilhões de km
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={styles.topicTitle}>Curiosidades: </Text>
                    Plutão foi reclassificado como planeta anão em 2006. Ele tem cinco luas conhecidas, sendo Caronte a maior delas, quase metade do tamanho de Plutão.
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

export default Pluto;