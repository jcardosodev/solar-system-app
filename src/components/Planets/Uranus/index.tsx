import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, Text } from 'react-native';
import uranusImage from '../../../assets/images/uranus.png';
import styles from '../Uranus/UranusStyles';

const Uranus: React.FC = () => {
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
        <Image source={uranusImage} style={styles.image} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Urano</Text>
            <Text style={styles.modalText}>
              Urano, o sétimo planeta do Sol, é um gigante gasoso conhecido por sua inclinação axial única e por ter a atmosfera mais fria do Sistema Solar.
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

export default Uranus;