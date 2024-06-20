import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
};


export const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}