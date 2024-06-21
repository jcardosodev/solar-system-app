import React, { useRef, useEffect } from 'react';
import { Animated, View } from 'react-native';
import { styles } from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Rocket = () => {
  const translateY = useRef(new Animated.Value(800)).current; // Começa fora da tela (parte inferior)

  useEffect(() => {
    // Animação para mover o foguete para cima até sair da tela
    Animated.timing(translateY, {
      toValue: -100, // Mover o foguete para fora da tela na parte superior
      duration: 5000, // Duração da animação
      useNativeDriver: true, // Usa o driver nativo para animações suaves
    }).start();
  }, []);

  return (
    <View style={styles.rocketContainer}>
      <Animated.View 
        style={[
          styles.rocket, 
          {
            transform: [
              { translateY: translateY },
            ]
          }
        ]}
      >
        <FontAwesome 
          name="rocket"
          size={50}
        />
      </Animated.View>
    </View>
  );
}

