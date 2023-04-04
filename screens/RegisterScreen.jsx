import { StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Switch, Button, Text } from "react-native-paper";
import * as Font from "expo-font";
import { postRegister } from "../store/actions/actionUser";
import { useDispatch } from "react-redux";

export default function RegisterScreen({ navigation }) {
  const dispatch = useDispatch();
  const [inputRegister, setInputRegister] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    name: "",
  });

  const changeInput = (key, value) => {
    let newInput = {
      ...inputRegister,
    };
    newInput[key] = value;
    setInputRegister(newInput);
  };

  const registerHandler = () => {
    dispatch(postRegister(inputRegister))
      .then(() => navigation.navigate('Login'))
      .catch(err => console.log(err));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
          style={{
            alignSelf: "center",
            width: 300,
            height: 200,
            marginBottom: 50,
          }}
          source={{
            uri: "https://cdn.discordapp.com/attachments/1089065643346776075/1090570170487025754/20230329_163617_0000.png",
          }}
        />
      <TextInput
        label="Name"
        value={inputRegister.name}
        mode="outlined"
        autoCapitalize="none"
        onChangeText={(value) => changeInput("name", value)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        nativeID="email"
        label="Email"
        value={inputRegister.email}
        mode="outlined"
        autoCapitalize="none"
        onChangeText={(value) => changeInput("email", value)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Password"
        value={inputRegister.password}
        mode="outlined"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(value) => changeInput("password", value)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Phone Numnber"
        value={inputRegister.phoneNumber}
        mode="outlined"
        autoCapitalize="none"
        keyboardType="number-pad"
        onChangeText={(value) => changeInput("phoneNumber", value)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Address"
        value={inputRegister.address}
        mode="outlined"
        autoCapitalize="none"
        onChangeText={(value) => changeInput("address", value)}
        style={{ marginBottom: 30 }}
      />

      <Button
        mode="contained"
        uppercase={true}
        onPress={() => registerHandler()}
        style={styles.button}
      >
        Register
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
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
