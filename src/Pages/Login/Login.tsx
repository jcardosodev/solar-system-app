import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { ImageBack } from "../../components/ImageBackground/ImageBack";
import { Button } from "../../components/Button/Button";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import { EmailInput } from "../../components/EmailInput/EmailInput";
import { Rocket } from "../../components/Rocket/Rocket"
import { useUserContext } from "../../context/UserContext";
import { User } from "../../types/types";
import { userApi } from "../../services/UserApi/UserApi";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootTabParamList } from "../../Routes/types";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const { setUsuarioLogado } = useUserContext();
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();
  
  const getAllUsers = async () => {
    try {
      const response = await userApi.get('users');
      setUsers(response.data);
    } catch (error) {
      console.log("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleEntrarClicked = () => {
    const foundUser = users.find(
      user => user.email === email &&
      user.senha === password
    )

    if (!foundUser) {
      Alert.alert("Error", "E-mail ou senha incorretos.");
      return;
    }

    setUsuarioLogado(foundUser);
    Alert.alert("Sucesso", `Login efetuado com sucesso. Bem vindo(a) ${foundUser.nome}!`);
    setEmail('');
    setPassword('');
    navigation.navigate('Home');
  }

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
        <PasswordInput 
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonContainer}> 
        <Button
          title="Entrar"
          onPress={handleEntrarClicked}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate('Cadastrar')}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </ImageBack>
  );
}