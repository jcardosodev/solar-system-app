import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import { ImageBack } from "../../components/ImageBackground/ImageBack";
import { Button } from "../../components/Button/Button";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import { EmailInput } from "../../components/EmailInput/EmailInput";
import { userApi } from "../../services/UserApi/UserApi";

export const Cadastrar = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await userApi.get('users');
      setUsers(response.data);
      console.log(response.data)
    } catch (error) {
      console.log("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleCadastrarClicked = async () => {
    if (
      userName.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      confirmPassword.length < 1
    ) {
      Alert.alert("Error", "")
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const userExists = users.some(user => user.email === email);

    if (userExists) {
      Alert.alert("Error", "Usuário já cadastrado. Faça login ou cadastre-se com outro e-mail.");
      return;
    }

    const newUser = {
      nome: userName,
      email: email,
      senha: password
    };

    try {
      await userApi.post('users', newUser);
      Alert.alert("Success", "Usuário cadastrado com sucesso.");
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      getAllUsers(); // Refresh the users list
    } catch (error) {
      console.log("Failed to add user:", error);
      Alert.alert("Error", "Falha ao cadastrar usuário.");
    }
  };

  return (
    <ImageBack
      source={{
        uri: "https://img.freepik.com/fotos-gratis/papel-de-parede-abstrato-ultra-detalhado-da-nebulosa-4_1562-749.jpg?t=st=1718827600~exp=1718831200~hmac=f81152d8cb7f9c37a9610ad7c6efc9228a5319ce0e71d2f4dfa1b50676046d79&w=740",
      }}
    >
      <View style={styles.overlay} />
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setUserName}
            
          />
        </View>
        <Text style={styles.label}>E-mail</Text>
        <EmailInput value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Senha</Text>
        <PasswordInput style={styles.input} value={password} onChangeText={setPassword} />
        <Text style={styles.label}>Confirme a senha</Text>
        <PasswordInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar"
          onPress={handleCadastrarClicked}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </ImageBack>
  );
};
