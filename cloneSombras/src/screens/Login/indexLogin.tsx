import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image,} from "react-native";
import styles from "./styleLogin";

export const IndexLogin = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Crunchyroll.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Entrar</Text>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#ccc"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#ccc"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Não possui uma conta? <Text style={styles.loginLink}>CADASTRAR</Text>
      </Text>
    </View>
  );
};
