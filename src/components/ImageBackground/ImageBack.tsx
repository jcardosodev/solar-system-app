import React from 'react';
import { View, ImageBackground } from 'react-native';
import { styles } from './styles';

type ImageBackgroundProps = {
  source: {
    uri: string;
  };
  children: React.ReactNode;
}

export const ImageBack: React.FC<ImageBackgroundProps> = ({ source, children }) => {
  return (
    <ImageBackground source={source} style={styles.imageBackground}>
      <View style={styles.overlay}>
        {children}
      </View>
    </ImageBackground>
  );
};
