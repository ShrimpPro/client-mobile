import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddHarvestScreen({ navigation }) {
  const [inputAddHarvest, setInputAddHarvest] = useState({
    modalAwal: "",
    hasilPendapatan: "",
    kualitasPanen: "",
    deskripsi: "",
  });

  const changeInput = (key, value) => {
    let newInput = {
      ...inputAddHarvest,
    };
    newInput[key] = value;
    setInputLogin(newInput);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Modal Awal"
        value={inputAddHarvest.modalAwal}
        mode="outlined"
        onChangeText={(value) => changeInput("modalAwal", value)}
        style={{ marginBottom: 10 }}
      />

      <TextInput
        label="Kualitas Panen"
        value={inputAddHarvest.kualitasPanen}
        mode="outlined"
        onChangeText={(value) => changeInput("kualitasPanen", value)}
        style={{ marginBottom: 10 }}
      />

      <TextInput
        label="Hasil Pendapatan"
        value={inputAddHarvest.hasilPendapatan}
        mode="outlined"
        onChangeText={(value) => changeInput("hasilPendapatan", value)}
        style={{ marginBottom: 10 }}
      />

      <TextInput
        label="Deskripsi"
        value={inputAddHarvest.deskripsi}
        mode="outlined"
        onChangeText={(value) => changeInput("deskripsi", value)}
        style={{ marginBottom: 10 }}
      />

      <Button
        mode="contained"
        uppercase={true}
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        Submit
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  button: {
    borderRadius: 5,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
