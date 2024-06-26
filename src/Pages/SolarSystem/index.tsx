import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
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
import styles from './style';
import withLoading from '../../hoc/withLoading'

const backgroundImage = require('../../assets/images/backgroundHome.png');

const SolarSystemScreen: React.FC = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
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
    </ImageBackground>
  );
};

export default withLoading(SolarSystemScreen, [backgroundImage]);
