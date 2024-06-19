import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ImageBack } from "../../components/ImageBackground/ImageBack";
import { Button } from "../../components/Button/Button";

export const Login = () => {
  return (
    <ImageBack 
      source={{ uri: 'https://img.freepik.com/fotos-gratis/papel-de-parede-abstrato-ultra-detalhado-da-nebulosa-4_1562-749.jpg?t=st=1718827600~exp=1718831200~hmac=f81152d8cb7f9c37a9610ad7c6efc9228a5319ce0e71d2f4dfa1b50676046d79&w=740' }}
    >
      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput 
          style={styles.input}
          placeholder="Seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.input}
          placeholder="Sua senha"
          secureTextEntry={true}
        />

        <Button
          title="Entrar"
          onPress={() => alert('Clicou em entrar')}
          style={styles.button}
          textStyle={styles.buttonText}
        />

        <Button
          title="Cadastrar"
          onPress={() => alert('Clicou em cadastrar')}
          style={styles.button}
          textStyle={styles.buttonText}
        />

      </View>
    </ImageBack>
  );
}