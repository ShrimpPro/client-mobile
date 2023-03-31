import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, HelperText, Button } from "react-native-paper";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const hasErrors = () => {
    return false;
  };

  const handleLogin = () => {
    console.log("login api");
    setError(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn.discordapp.com/attachments/1089065643346776075/1090570170487025754/20230329_163617_0000.png",
        }}
      />
      <TextInput
        label="Username"
        value={username}
        mode="outlined"
        onChangeText={(value) => setUsername(value)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Password"
        value={password}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
      />
      <HelperText style={{ marginBottom: 15 }} type="error" visible={error}>
        Error on API response
      </HelperText>
      <Button
        mode="contained"
        uppercase={true}
        onPress={handleLogin}
        style={styles.button}
      >
        Login
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    fontWeight: "bold",
  },
});
