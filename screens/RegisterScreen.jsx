import { StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Switch, Button, Text } from "react-native-paper";
import * as Font from "expo-font";
import { postRegister } from "../store/actions/actionCreator";
import { useDispatch } from "react-redux";

export default function RegisterScreen() {
  const dispatch = useDispatch();
  const [inputRegister, setInputRegister] = useState({
    username: "",
    password: "",
    phoneNumber: "",
    address: "",
    devices: 0,
    subscribed: false,
  });

  const changeInput = (key, value) => {
    let newInput = {
      ...inputRegister,
    };
    newInput[key] = value;
    setInputRegister(newInput);
  };

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.logo}
        source={{
          uri: "https://cdn.discordapp.com/attachments/1089065643346776075/1090570170487025754/20230329_163617_0000.png",
        }}
      /> */}
      {/* <HelperText
        style={{ marginBottom: 15, alignSelf: "center" }}
        type="error"
        visible={error}
      >
        Error on API response
      </HelperText> */}
      <Text
        style={{
          fontFamily: Font["Poppins"],
        }}
      >
        Register
      </Text>
      <TextInput
        nativeID="username"
        label="Username"
        value={inputRegister.username}
        mode="outlined"
        onChangeText={(value) => changeInput("username", value)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Password"
        value={inputRegister.password}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={(value) => changeInput("password", value)}
        style={{ marginBottom: 15 }}
      />
      <TextInput
        label="Phone Numnber"
        value={inputRegister.phoneNumber}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={(value) => changeInput("phoneNumber", value)}
        style={{ marginBottom: 15 }}
      />
      <TextInput
        label="Address"
        value={inputRegister.address}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={(value) => changeInput("address", value)}
        style={{ marginBottom: 15 }}
      />

      <TextInput
        label="Jumlah device"
        value={inputRegister.devices}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={(value) => changeInput("devices", value)}
        style={{ marginBottom: 15 }}
      />

      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <View style={{ marginLeft: "auto" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ padding: 8 }}>Subscribed</Text>
            <Switch
              value={inputRegister.subscribed}
              onValueChange={(value) => changeInput("subscribed", value)}
            />
          </View>
        </View>
      </View>

      <Button
        mode="contained"
        uppercase={true}
        onPress={() => dispatch(postRegister(inputRegister))}
        style={styles.button}
      >
        Register
      </Button>
    </View>
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
