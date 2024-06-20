import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, Text } from 'react-native';
import mercuryImage from '../../../assets/images/mercury.png';
import styles from '../../../components/Planets/Mercury/MercuryStyles';

const Mercury: React.FC = () => {
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
        <Image source={mercuryImage} style={styles.image} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Mercúrio</Text>
            <Text style={styles.modalText}>
              Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol.
              Não tem satélites naturais e é conhecido por suas temperaturas extremas.
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

export default Mercury;