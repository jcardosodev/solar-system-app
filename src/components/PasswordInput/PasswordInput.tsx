import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

interface PasswordInputProps {
  style: any,
  value: string,
  onChangeText: (text: string) => void,
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ style, value, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={style}
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={8}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setShowPassword(!showPassword)}
      >
        <FontAwesome 
            name={showPassword ? "eye-slash" : "eye"} 
            size={20} 
            color="#fff" 
        />
      </TouchableOpacity>
    </View>        
  );
}
