import { StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Switch, Button, Text } from "react-native-paper";
import * as Font from "expo-font";
import { postRegister, putEditProfile } from "../store/actions/actionUser";
import { useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";

export default function EditProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const [inputEditProfile, setInputEditProfile] = useState({
    name: "",
    password: "",
    phoneNumber: "",
    address: ""
  });

  const { id } = useRoute().params;

  const changeInput = (key, value) => {
    let newInput = {
      ...inputEditProfile,
    };
    newInput[key] = value;
    setInputEditProfile(newInput);
  };

  const editProfileHandler = (id) => {
    dispatch(putEditProfile(id, inputEditProfile))
      .then(() => navigation.navigate('Profile'))
      .catch(err => console.log(err));
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Name"
        value={inputEditProfile.name}
        mode="outlined"
        onChangeText={(value) => changeInput("name", value)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Password"
        value={inputEditProfile.password}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={(value) => changeInput("password", value)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Phone Number"
        value={inputEditProfile.phoneNumber}
        mode="outlined"
        onChangeText={(value) => changeInput("phoneNumber", value)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Address"
        value={inputEditProfile.address}
        mode="outlined"
        onChangeText={(value) => changeInput("address", value)}
        style={{ marginBottom: 30 }}
      />

      <Button
        mode="contained"
        uppercase={true}
        onPress={() => editProfileHandler(id)}
        style={styles.button}
      >
        Edit Profile
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
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
  },
  register: {
    color: "purple",
  },
});
