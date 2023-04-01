import { StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, HelperText, Button, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { postLogin } from "./store/actions/actionCreator";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [inputLogin, setInputLogin] = useState({
    username: "",
    password: "",
  });

  const changeInput = (key, value) => {
    let newInput = {
      ...inputLogin,
    };
    newInput[key] = value;
    setInputLogin(newInput);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn.discordapp.com/attachments/1089065643346776075/1090570170487025754/20230329_163617_0000.png",
        }}
      />
      <HelperText
        style={{ marginBottom: 15, alignSelf: "center" }}
        type="error"
        visible={error}
      >
        Error on API response
      </HelperText>
      <TextInput
        label="Username"
        value={inputLogin.username}
        mode="outlined"
        onChangeText={(value) => changeInput("username", value)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Password"
        value={inputLogin.password}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={(value) => changeInput("password", value)}
        style={{ marginBottom: 15 }}
      />

      <Button
        mode="contained"
        uppercase={true}
        onPress={() => dispatch(postLogin(inputLogin))}
        style={styles.button}
      >
        Login
      </Button>
      <View style={styles.row}>
        <Text style={{ paddingRight: 5 }}>Dont have an account?</Text>
        <Text style={styles.register}>Register here</Text>
      </View>
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
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
  },
  register: {
    color: "purple",
  },
});
