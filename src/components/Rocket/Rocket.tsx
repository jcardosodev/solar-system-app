import React, { useRef, useEffect } from 'react';
import { Animated, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles';


export const Rocket = () => {
  const translateY = useRef(new Animated.Value(800)).current;

  useEffect(() => {
    const loopAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -800,
          duration: 8000,
          useNativeDriver: true,
        }),

    Animated.timing(translateY, {
      toValue: 800,
      duration: 0,
      useNativeDriver: true,
    }),

    Animated.delay(3000),
      ])
    );

    loopAnimation.start();
  }, [translateY]);

  return (
    <View style={styles.rocketContainer}>
      <Animated.View 
        style={[
          styles.rocket, 
          {
            transform: [
              { translateY: translateY },
              { rotate: '-45deg'}
            ]
          }
        ]}
      >
        <FontAwesomeIcon 
          icon={faRocket}
          size={50}
          style={styles.rocketIcon}
        />
      </Animated.View>
    </View>
  );
}

