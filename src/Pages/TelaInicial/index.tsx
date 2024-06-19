import { View, Button, Text, Image } from "react-native";
import TelaInicialImg from "../../assets/images/telainit.jpg"
import { styles } from "./styles";

interface TelaInicialProps {

}

export const TelaInicial = () => {
    return (
     <View>
        <Image style={styles.image} source={TelaInicialImg} />
        <Text style={styles.text}> 
          Explore o Sistema Solar
        </Text>
     </View>
    );
  };