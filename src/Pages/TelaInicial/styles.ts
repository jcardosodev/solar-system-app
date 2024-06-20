import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: 400,
        height: 900,
    },
    text: {
        position: 'absolute',
        borderRadius: 25,
        color: 'whitesmoke' ,
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'left',
        width: 400, // Match the image width
    },
});
