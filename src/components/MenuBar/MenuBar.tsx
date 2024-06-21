import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles';

type MenuBarProps = {
  onPress: () => void;
  color?: string;
  size?: number;
};

const MenuBar = ({ onPress, color = "#FFF", size = 24 }: MenuBarProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesomeIcon icon={faBars} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default MenuBar;
