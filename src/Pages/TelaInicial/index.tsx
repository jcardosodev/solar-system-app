import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { RootStackParamList } from '../../Routes/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useTabBarVisibility } from '../../context/TabBarVisibilityContext';
import withLoading from '../../hoc/withLoading';

const backgroundImage = require('../../assets/images/telainit.jpg');

const TelaInicial = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();
  const { setTabBarVisible } = useTabBarVisibility();

  useEffect(() => {
    if (isFocused) {
      setTabBarVisible(false);
    } else {
      setTabBarVisible(true);
    }
  }, [isFocused, setTabBarVisible]);

  const handlePress = () => {
    navigation.navigate('HomePage');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.content}>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.text}>EXPLORE</Text>
          <Text style={styles.textBold}>O SISTEMA SOLAR</Text>
          <Ionicons name="arrow-forward" size={40} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default withLoading(TelaInicial, [backgroundImage]);
