import { StyleSheet, Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Switch, Button, Text } from "react-native-paper";
import * as Font from "expo-font";
import { fetchUserDetail, postRegister, putEditProfile } from "../store/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";

export default function EditProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const [inputEditProfile, setInputEditProfile] = useState({
    name: "",
    phoneNumber: "",
    address: ""
  });

  const { id } = useRoute().params;

  useEffect(() => {
    dispatch(fetchUserDetail(id))
      .then(user => {
        setInputEditProfile({
          name: user.name,
          phoneNumber: user.phoneNumber,
          address: user.address
        })
      })
      .catch((err) => console.log(err));
  }, []);

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
      <View style={{ alignItems: 'center', marginBottom: 30 }}>
        <Text variant="headlineMedium" style={styles.headers}>
          Edit Profile
        </Text>
      </View>
      <TextInput
        label="Name"
        value={inputEditProfile.name}
        mode="outlined"
        autoCapitalize="none"
        onChangeText={(value) => changeInput("name", value)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Phone Number"
        value={inputEditProfile.phoneNumber}
        mode="outlined"
        keyboardType="numeric"
        onChangeText={(value) => changeInput("phoneNumber", value)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Address"
        value={inputEditProfile.address}
        mode="outlined"
        autoCapitalize="none"
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
  headers: {
    fontWeight: "700"
  }
});
