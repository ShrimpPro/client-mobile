import { StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, HelperText, Button, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { postLogin } from "../store/actions/actionCreator";
import { useTheme } from "@react-navigation/native";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [inputLogin, setInputLogin] = useState({
    username: "",
    password: "",
  });

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      flex: 1,
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
      color: colors.primary,
      fontFamily: "Poppins-Bold",
    },
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
      <View style={{ fontFamily: "Poppins" }}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn.discordapp.com/attachments/1089065643346776075/1090570170487025754/20230329_163617_0000.png",
          }}
        />
        <TextInput
          label="Username"
          value={inputLogin.username}
          mode="outlined"
          onChangeText={(value) => changeInput("username", value)}
          style={{ marginBottom: 10, fontFamily: "Poppins" }}
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
          onPress={() => {
            dispatch(postLogin(inputLogin));
            navigation.navigate("Dashboard");
          }}
          style={styles.button}
          labelStyle={{ fontFamily: "Poppins-Bold" }}
        >
          Login
        </Button>
        <View style={styles.row}>
          <Text style={{ paddingRight: 5, fontFamily: "Poppins-Bold" }}>
            Dont have an account?
          </Text>
          <Text
            style={styles.register}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Register here
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
