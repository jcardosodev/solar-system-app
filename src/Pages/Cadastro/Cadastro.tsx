import { View, Text, TextInput } from "react-native"
import { styles } from './styles';
import { ImageBack } from "../../components/ImageBackground/ImageBack"
import { Button } from "../../components/Button/Button"
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";

export const Cadastrar = () => {
  return (
    <ImageBack 
      source={{ uri: 'https://img.freepik.com/fotos-gratis/papel-de-parede-abstrato-ultra-detalhado-da-nebulosa-4_1562-749.jpg?t=st=1718827600~exp=1718831200~hmac=f81152d8cb7f9c37a9610ad7c6efc9228a5319ce0e71d2f4dfa1b50676046d79&w=740' }}
    >
    <View style={styles.overlay} />
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        
        <View style={styles.inputContainer} >
          <TextInput 
            style={styles.input}
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <Text style={styles.label}>E-mail</Text>

        <View style={styles.inputContainer} >
          <TextInput 
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <Text style={styles.label}>Senha</Text>
        <PasswordInput
          style={styles.input}
        />

        <Text style={styles.label}>Confirme a senha</Text>
        <PasswordInput
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar"
          onPress={() => alert('Clicou em cadastrar')}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </ImageBack>
  );
};