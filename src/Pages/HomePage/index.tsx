import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Page</Text>
    </View>
  );
}; 

export default HomePage;
