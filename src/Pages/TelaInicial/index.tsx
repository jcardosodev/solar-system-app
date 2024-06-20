import React from 'react';
import { View, Text, Image } from 'react-native';
import TelaInicialImg from '../../assets/images/telainit.jpg';
import { styles } from './styles';

export const TelaInicial = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={TelaInicialImg} />
            <Text style={styles.text}>Explore o Sistema Solar</Text>
        </View>
    );
};
