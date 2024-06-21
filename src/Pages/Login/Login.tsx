import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ImageBack } from "../../components/ImageBackground/ImageBack";
import { Button } from "../../components/Button/Button";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import { EmailInput } from "../../components/EmailInput/EmailInput";
import { Rocket } from "../../components/Rocket/Rocket"

export const Login = () => {
  const [email, setEmail] = useState('');

  return (
    <ImageBack 
      source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCn02tKW0Mt85bJfTL0hJcYSNWlknpLoaxMPs_3f7w6Nl3FTKlq2EGZ1fyH3g1eFq_HD-JgOLpjSxsth_A3z1cas33LDbwP5x5NBxnyjydpTqA8uoHh_DmMSWtYnIUK5Uzywg8bxXZv_OiKaFm6aINa1YLrRq2pwVvE_jhCunY7FBMpb8byjtcXcdeoQ/s1600/james-webb-wallpaper-4k-thb.webp' }}
    >
      <Rocket />

      <View style={styles.overlay} />
      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <EmailInput
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Senha</Text>
        <PasswordInput style={styles.input}/>
      </View>
      <View style={styles.buttonContainer}> 
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