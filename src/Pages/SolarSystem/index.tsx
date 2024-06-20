import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import backgroundImage from '../../assets/images/backgroundHome.png';
import Sun from '../../components/Estrela/sun';
import Mercury from '../../components/Planets/Mercury';
import Venus from '../../components/Planets/Venus';
import Earth from '../../components/Planets/Earth';
import Mars from '../../components/Planets/Mars';
import Jupiter from '../../components/Planets/Jupiter';
import Saturn from '../../components/Planets/Saturn';
import Uranus from '../../components/Planets/Uranus';
import Neptune from '../../components/Planets/Neptun';
import Pluto from '../../components/Planets/Pluto';
import styles from '../SolarSystem/style';  // Certifique-se de ter o arquivo de estilos

const SolarSystemScreen: React.FC = () => {
  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
      <Sun />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
      <Pluto />
      
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={[styles.navigationButton, styles.leftButton]}>
          <Text style={styles.navigationButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navigationButton, styles.rightButton]}>
          <Text style={styles.navigationButtonText}>Viagem</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SolarSystemScreen;