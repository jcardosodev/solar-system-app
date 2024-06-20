import React, { useEffect, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";

type EmailInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export const EmailInput: React.FC<EmailInputProps> = ({
  value,
  onChangeText,
}) => {
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    if (value === '') {
      setEmailError('');
    } else if (validateEmail(value)) {
      setEmailError('');
    } else {
      setEmailError('E-mail inválido');
    }
  }, [value]);


  const handleEmailChange = (email: string) => {
    onChangeText(email);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleEmailChange}
          value={value}
        />
      </View>
    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
  </View>
  );
};