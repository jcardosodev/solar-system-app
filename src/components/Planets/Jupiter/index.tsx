import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, Text } from 'react-native';
import jupiterImage from '../../../assets/images/jupiter.png';
import styles from '../Jupiter/JupiterStyles';

const Jupiter: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.3} onPress={handlePress}>
      <Image source={jupiterImage} style={styles.image} />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Jupiter</Text>
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