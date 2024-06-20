import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, Text } from 'react-native';
import saturnImage from '../../../assets/images/saturn.png';
import styles from '../Saturn/SaturnStyles';

const Saturn: React.FC = () => {
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
        <Image source={saturnImage} style={styles.image} />
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