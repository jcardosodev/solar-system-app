import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export const PasswordInput = ({ style }: { style: any }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={style}
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={8}
        
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